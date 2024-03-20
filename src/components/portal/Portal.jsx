import React from "react";
import { createPortal } from "react-dom";

export default function Portal({ onSetShowMobileNav }) {
  return (
    <div className="portal" onClick={() => onSetShowMobileNav(false)}>
      {createPortal(
        <div className="overlay" />,
        document.getElementById("overlay")
      )}
    </div>
  );
}
