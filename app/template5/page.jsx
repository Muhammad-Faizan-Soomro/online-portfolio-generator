"use client";
import React, { useEffect } from "react";
import Script from "next/script";
import "./style.css";
import Head from "next/head";
import Image from "next/image";

export default function Page() {
  useEffect(() => {
    const portfolio = document.getElementById("portfolio");
    const portfolioBtn = document.getElementById("portfolio-btn");
    const skills = document.getElementById("skills");
    const skillsBtn = document.getElementById("skills-btn");

    portfolioBtn.addEventListener("click", (event) => {
      skills.style.display = "none";
      portfolio.style.display = "flex";
      skillsBtn.classList.remove("active-btn");
      portfolioBtn.classList.add("active-btn");
    });

    skillsBtn.addEventListener("click", (event) => {
      skills.style.display = "flex";
      portfolio.style.display = "none";
      portfolioBtn.classList.remove("active-btn");
      skillsBtn.classList.add("active-btn");
    });

    // Light & Dark Theme

    const toggleThemeButton = document.getElementById("toggleTheme");
    const themeIcon = document.querySelector('img[alt="theme icon"]');
    const githubLogo = document.querySelector('img[alt="github logo"]');
    const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
    const emailLogo = document.querySelector('img[alt="twitter logo"]');

    const lightLogos = {
      github: "assets/github_light.png",
      linkedin: "assets/linkedin_light.png",
      email: "assets/email_light.png",
      theme: "assets/theme_light.png",
    };

    const darkLogos = {
      github: "assets/github_dark.png",
      linkedin: "assets/linkedin_dark.png",
      email: "assets/email_dark.png",
      theme: "assets/theme_dark.png",
    };

    function setTheme(isDark) {
      githubLogo.src = isDark ? darkLogos.github : lightLogos.github;
      linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
      emailLogo.src = isDark ? darkLogos.email : lightLogos.email;
      themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
    }

    toggleThemeButton.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-theme");
      localStorage.setItem("isDark", isDark);

      setTheme(isDark);
    });

    const loadTheme = () => {
      const isDark = localStorage.getItem("isDark") === "true";
      document.body.classList.toggle("dark-theme", isDark);

      setTheme(isDark);
    };

    // Load saved theme from local storage or default to light theme
    loadTheme();
  }, []);

  return (
    <>
      <section className="temp5-hero">
        <img
          id="toggleTheme"
          className="temp5-theme-btn"
          src="assets/theme_light.png"
          alt="theme icon"
        />
        <div className="temp5-hero-pic">
          <div className="temp5-inner-circle"></div>
          <img
            src="assets/mason-wilkes-TMgQMXoglsM-unsplash.jpg"
            className="temp5-heropicimg"
            alt="Mason Wilkes"
          />
        </div>
        <div className="temp5-hero-info">
          <h1 className="temp5-h1 temp5-heroinfoh1">Mason Wilkes</h1>
          <h2 className="temp5-h2 temp5-heroinfoh2">Frontend Developer</h2>
          <div className="temp5-logo-container">
            <a href="https://github.com/" className="temp5-logo-containera">
              <img src="assets/github_light.png" alt="github logo" className="temp5-img5 temp5-logo-containerimg5" />
            </a>
            <a href="https://linkedin.com/" className="temp5-logo-containera">
              <img src="assets/linkedin_light.png" alt="linkedin logo" className="temp5-img5 temp5-logo-containerimg5"/>
            </a>
            <a href="https://twitter.com/" className="temp5-logo-containera">
              <img src="assets/email_light.png" alt="twitter logo" className="temp5-img5 temp5-logo-containerimg5"/>
            </a>
          </div>
        </div>
      </section>
      <section className="temp5-experience">
        <h2 className="temp5-h2 temp5-experienceh2">
          <b className="temp5-experienceb">3</b>
          <br />
          Years
          <br />
          Frontend
        </h2>
        <h2 className="temp5-h2 temp5-experienceh2">
          <b className="temp5-experienceb">10</b>
          <br />
          Projects
          <br />
          Completed
        </h2>
        <h2 className="temp5-h2 temp5-experienceh2">
          <b className="temp5-experienceb">7</b>
          <br />
          Satisfied
          <br />
          Clients
        </h2>
      </section>
      <section className="temp5-cta">
        <a href="assets/example-cv.pdf" download>
          <button className="temp5-btn temp5-download-btn">Download CV</button>
        </a>
        <a href="mailto:abc@gmail.com">
          <button className="temp5-btn temp5-contact-btn">Contact Me</button>
        </a>
      </section>
      <section className="temp5-portfolio-skills">
        <div className="temp5-btn-bg">
          <button className="temp5-btn-2 temp5-active-btn text-black" id="portfolio-btn">
            Portfolio
          </button>
          <button className="temp5-btn-2 text-black" id="skills-btn">
            Skills
          </button>
        </div>
      </section>
      <section className="temp5-portfolio" id="portfolio">
        <div className="temp5-wrapper temp5-project-wrapper">
          <a href="https://github.com/">
            <img src="assets/project-1.webp" alt="Project 1" className="temp5-wrapperimg" />
          </a>
        </div>
        <div className="temp5-wrapper temp5-project-wrapper">
          <a href="https://github.com/">
            <img src="assets/project-2.webp" alt="Project 2"  className="temp5-wrapperimg"/>
          </a>
        </div>
        <div className="temp5-wrapper temp5-project-wrapper">
          <a href="https://github.com/">
            <img src="assets/project-3.webp" alt="Project 3" className="temp5-wrapperimg" />
          </a>
        </div>
        <div className="temp5-wrapper temp5-project-wrapper">
          <a href="https://github.com/">
            <img src="assets/project-4.webp" alt="Project 4" className="temp5-wrapperimg" />
          </a>
        </div>
      </section>
      <section className="temp5-skills" id="skills">
        <div className="temp5-wrapper">
          <article className="temp5-frontend-skills temp5-article">
            <p className="temp5-p temp5-articlep">HTML</p>
            <p className="temp5-p temp5-articlep">CSS</p>
            <p className="temp5-p temp5-articlep">SASS</p>
            <p className="temp5-p temp5-articlep">LESS</p>
            <p className="temp5-p temp5-articlep">JavaScript</p>
            <p className="temp5-p temp5-articlep">TypeScript</p>
            <p className="temp5-p temp5-articlep">React</p>
            <p className="temp5-p temp5-articlep">Angular</p>
            <p className="temp5-p temp5-articlep">Material UI</p>
          </article>
        </div>
        <div className="temp5-wrapper">
          <article className="temp5-backend-skills temp5-article">
            <p className="temp5-p temp5-articlep">Node.js</p>
            <p className="temp5-p temp5-articlep">Express.js</p>
            <p className="temp5-p temp5-articlep">APIs</p>
            <p className="temp5-p temp5-articlep">Database CRUD</p>
            <p className="temp5-p temp5-articlep">Git</p>
            <p className="temp5-p temp5-articlep">GraphQL</p>
            <p className="temp5-p temp5-articlep">Web Servers</p>
          </article>
        </div>
      </section>
      <footer className="temp5-footer">
        <p className="temp5-p">&copy Mason Wilkes 2023</p>
      </footer>
      {/* </body> */}
    </>
  );
}
