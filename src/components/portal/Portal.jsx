import React from "react";
import { createPortal } from "react-dom";

export default function Portal({ onSetShowMobileNav, type, children }) {
  let elementPlace;
  if (type === "overlay") {
    elementPlace = document.getElementById("overlay");
  } else if (type === "modal") {
    elementPlace = document.getElementById("modal");
  } else {
    console.log("none matched!");
  }

  console.log(elementPlace);
  console.log(type);

  return (
    <div className="portal" onClick={() => onSetShowMobileNav(false)}>
      {createPortal(
        <div className={`${type == "overlay" ? "overlay" : "modal"}`}>
          {" "}
          {children}{" "}
        </div>,
        elementPlace
      )}
    </div>
  );
}
