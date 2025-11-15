import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          Lokendra<span style={{ color: "#38bdf8" }}>.in</span>
          <p>Creative Web Developer & Designer</p>
        </div>

        <div className="footer-nav">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#About">About</a>
          <a href="#Contact">Contact</a>
        </div>

        <div className="footer-social">
          <a href="https://github.com/Lokendraa12"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/lokendra-kushwah-b828a5307"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <p className="footer-bottom">© 2025 Lokendraportfolio.com || All rights reserved.</p>
    </footer>
  );
}
