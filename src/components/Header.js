import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      {/* Logo */}
      <div className="nav-logo">Lokendra Portfolio</div>

      {/* Hamburger Button */}
      <div className="nav-hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  );
}
