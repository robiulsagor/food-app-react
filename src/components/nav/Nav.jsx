import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import logo from "../../assets/logo1.png";
import Portal from "../portal/Portal";
import "./nav.css";

export default function Nav() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  // hide or show mobile nav
  const handleMobileNav = () => {
    setShowMobileNav((prev) => !prev);
  };

  return (
    <div className="nav">
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>

      <ul className="nav-menu">
        <li>
          <a href="#" className="active">
            home
          </a>
        </li>
        <li>
          <a href="#"> menu</a>
        </li>
        <li>
          <a href="#"> mobile apps</a>
        </li>
        <li>
          <a href="#"> contact us</a>
        </li>
      </ul>

      <div className="search">
        <IoIosSearch />
      </div>

      <button className="btn">sign in</button>

      <FaBars onClick={handleMobileNav} className="bars" />

      <div
        className={`${
          showMobileNav
            ? "mobile-nav-container active"
            : "mobile-nav-container "
        }`}
      >
        <span className="mobile-nav-close" onClick={handleMobileNav}>
          <RxCross2 />
        </span>

        <ul className="mobile-nav">
          <li>
            <a href="#" className="active">
              home
            </a>
          </li>
          <li>
            <a href="#"> menu</a>
          </li>
          <li>
            <a href="#"> mobile apps</a>
          </li>
          <li>
            <a href="#"> contact us</a>
          </li>
          <li>
            <button className="btn">sign in</button>
          </li>
        </ul>
      </div>

      {/* overlay portal */}
      {showMobileNav && <Portal onSetShowMobileNav={setShowMobileNav} />}
    </div>
  );
}
