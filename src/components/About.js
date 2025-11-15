import React from "react";
import html from "../assets/html.jpg";
import nodejs from "../assets/nodejs.jpg";
import frontend from "../assets/frontend.png";
import reactImg from "../assets/react.png";
import nextjs from "../assets/nextjs.png";

/**
 * @typedef {Object} Experience
 * @property {string} title
 * @property {string} duration
 * @property {string} description
 * @property {string} image
 */

/** @type {Experience[]} */
const experiences = [
  {
    title: "HTML Developer",
    description:
      "Created responsive web pages using HTML, CSS, and JavaScript with focus on performance and clean code.",
    image: html,
  },
  {
    title: "Node.js Developer",
    description:
      "Developed backend REST APIs using Node.js and Express, handling user authentication and database connectivity.",
    image: nodejs,
  },
  {
    title: "Frontend Developer",
    description:
      "Built dynamic and interactive interfaces using React, ensuring smooth UX and cross-browser compatibility.",
    image: frontend,
  },
  {
    title: "React Developer",
    description:
      "Working with React, Tailwind CSS, and TypeScript to build fast, scalable, and elegant web applications.",
    image: reactImg,
  },
  {
  title: "Next.js Developer",
  description:
    "Built modern, high-performance web applications using Next.js with a strong focus on responsive layouts, smooth navigation, and clean UI/UX. Implemented server-side rendering, optimized routing, and mobile-first designs to ensure fast loading, accessibility, and a seamless user experience across all screen sizes.",
  image: nextjs,
}

];

export default function About() {
  return (
    <section className="secondsection" id="About">
      <span className="text-gray">About Me</span>
      <h1 className="about-heading">My Journey & Experience</h1>
      <p className="about-para" style={{ color: "rgb(26 154 143)" }}>
        I’m <strong style={{ color: "rgb(46 60 138)" }}>Lokendra Kushwah</strong>, a dedicated web developer who enjoys creating clean,
        modern, and user-friendly digital experiences. I love turning ideas into real projects that look
        good and work smoothly. I focus on improving my creativity, design sense, and problem-solving
        skills every day. My goal is to keep learning, growing, and building meaningful projects that
        leave a positive impact.

      </p>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="line"></div>
            <div className="content">
              <img src={exp.image} alt={exp.title} className="icon" />
              <h3 className="title">
                {exp.title} <span className="year">({exp.duration})</span>
              </h3>
              <p className="desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
