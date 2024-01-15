"use client";
import React, { useEffect } from "react";
import Script from "next/script";
import "./style.css";

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
    const emailLogo = document.querySelector('img[alt="email logo"]');

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
      {/* <Script>{``}</Script> */}
      {/* <body className="bodyy" suppressHydrationWarning={true}> */}
        <section className="hero">
          <img
            id="toggleTheme"
            className="theme-btn"
            src="assets/theme_light.png"
            alt="theme icon"
          />
          <div className="hero-pic">
            <div className="inner-circle"></div>
            <img
              src="assets/mason-wilkes-TMgQMXoglsM-unsplash.jpg"
              alt="Mason Wilkes"
            />
          </div>
          <div className="hero-info">
            <h1 className="h1">Mason Wilkes</h1>
            <h2 className="h2">Frontend Developer</h2>
            <div className="logo-container">
              <a href="https://github.com/">
                <img src="assets/github_light.png" alt="github logo" />
              </a>
              <a href="https://linkedin.com/">
                <img src="assets/linkedin_light.png" alt="linkedin logo" />
              </a>
              <a href="mailto:abc@gmail.com">
                <img src="assets/email_light.png" alt="email logo" />
              </a>
            </div>
          </div>
        </section>
        <section className="experience">
          <h2 className="h2">
            <b>3</b>
            <br />
            Years
            <br />
            Frontend
          </h2>
          <h2 className="h2">
            <b>10</b>
            <br />
            Projects
            <br />
            Completed
          </h2>
          <h2 className="h2">
            <b>7</b>
            <br />
            Satisfied
            <br />
            Clients
          </h2>
        </section>
        <section className="cta">
          <a href="assets/example-cv.pdf" download>
            <button className="btn download-btn">Download CV</button>
          </a>
          <a href="mailto:abc@gmail.com">
            <button className="btn contact-btn">Contact Me</button>
          </a>
        </section>
        <section className="portfolio-skills">
          <div className="btn-bg">
            <button className="btn-2 active-btn text-black" id="portfolio-btn">
              Portfolio
            </button>
            <button className="btn-2 text-black" id="skills-btn">
              Skills
            </button>
          </div>
        </section>
        <section className="portfolio" id="portfolio">
          <div className="wrapper project-wrapper">
            <a href="https://github.com/">
              <img src="assets/project-1.png" alt="Project 1" />
            </a>
          </div>
          <div className="wrapper project-wrapper">
            <a href="https://github.com/">
              <img src="assets/project-2.png" alt="Project 2" />
            </a>
          </div>
          <div className="wrapper project-wrapper">
            <a href="https://github.com/">
              <img src="assets/project-3.png" alt="Project 3" />
            </a>
          </div>
          <div className="wrapper project-wrapper">
            <a href="https://github.com/">
              <img src="assets/project-4.png" alt="Project 4" />
            </a>
          </div>
        </section>
        <section className="skills" id="skills">
          <div className="wrapper">
            <article className="frontend-skills article">
              <p className="p">HTML</p>
              <p className="p">CSS</p>
              <p className="p">SASS</p>
              <p className="p">LESS</p>
              <p className="p">JavaScript</p>
              <p className="p">TypeScript</p>
              <p className="p">React</p>
              <p className="p">Angular</p>
              <p className="p">Material UI</p>
            </article>
          </div>
          <div className="wrapper">
            <article className="backend-skills article">
              <p className="p">Node.js</p>
              <p className="p">Express.js</p>
              <p className="p">APIs</p>
              <p className="p">Database CRUD</p>
              <p className="p">Git</p>
              <p className="p">GraphQL</p>
              <p className="p">Web Servers</p>
            </article>
          </div>
        </section>
        <footer className="footer">
          <p className="p">&copy Mason Wilkes 2023</p>
        </footer>
      {/* </body> */}
    </>
  );
}
