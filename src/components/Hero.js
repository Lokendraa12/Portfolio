import React, { useEffect } from "react";
import Typed from "typed.js";
import profile from "../assets/profile.jpg";

export default function Hero() {
  useEffect(() => {
    const typed = new Typed("#element", {
      strings: [
        "HTML developer..",
        "Full stack developer..",
        "React developer..",
        "Nextjs developer..",
        "Frontend developer..",
        "Web developer..",
        "Web designer..",
        "Node js developer..",
      ],
      typeSpeed: 40,
      backSpeed: 25,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="firstsection" id="home">
      <div className="leftsection">
        Hy, My name is <span className="purple">Lokendra</span>
        <div>and I am a passionate </div>
        <span id="element"></span>
        <div className="button">
          {/* ✅ Download Resume */}
          <a href="Resume.pdf" download="Resume.pdf">
            <button className="btn">Download Resume</button>
          </a>

          {/* ✅ Visit Github */}
          <a
            href="https://github.com/Lokendraa12"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">Visit Github</button>
          </a>
        </div>
      </div>

      <div className="rightsection">
        <img src={profile} alt="Lokendra" className="profile-img" />
      </div>
    </section>
  );
}
