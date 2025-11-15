import React from "react";

export default function Contact() {
  return (
    <div className="container" id="Contact" style={{ marginTop: "100px" }}>
      <h2>Contact Me</h2>

      <div className="container-1">
        
        {/* -------- FORM USING FORMSPREE -------- */}
        <form
          action="https://formspree.io/f/xkgkrdpy"  
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button className="new-btn" type="submit">Send Message</button>
        </form>

        {/* -------- RIGHT SIDE INFO -------- */}
        <div className="info">
          <strong>Phone:</strong>
          <p>+91 9171429790</p>

          <strong>Address:</strong>
          <p>Indore (M.P)</p>

          <strong>Email:</strong>
          <p>arunkushwah949@gmail.com</p>

          <div className="social">
            <a
              href="https://www.linkedin.com/in/lokendra-kushwah-b828a5307"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            |
            <a
              href="https://github.com/Lokendraa12"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
