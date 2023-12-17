'use client'
import React from "react";
import './styles.css'
import dynamic from "next/dynamic";


const MyPage = () => {
  return (
    <>
    <body className="light" id="top">
        <header className="header center">
          <h3>
            <a
              href="https://rajshekhar26.github.io/cleanfolio-minimal"
              className="link"
            >
              RS.
            </a>
          </h3>

          <nav className="nav center">
            <ul className="nav__list center">
              <li className="nav__list-item">
                <a className="link link--nav" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav__list-item">
                <a className="link link--nav" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav__list-item">
                <a className="link link--nav" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            <button
              type="button"
              aria-label="toggle theme"
              className="btn btn--icon"
            >
              <i aria-hidden="true" id="btn-theme" className="fas fa-moon"></i>
            </button>

            <button
              type="button"
              aria-label="toggle navigation"
              className="btn btn--icon nav__hamburger"
            >
              <i aria-hidden="true" className="fas fa-bars"></i>
            </button>
          </nav>
        </header>

        <main>
        <div className="about center">
          <h1 className="font-bold text-6xl">
            Hi, I am <span className="about__name">Raj Shekhar.</span>
          </h1>
          <h2 className="about__role font-semibold">A Front end Developer.</h2>
          <p className="about__desc font-bold">
            Consectetur neque sed quam molestiae consectetur nesciunt sit alias
            Vitae libero perferendis reprehenderit optio veritatis Accusantium
            at voluptatum cumque temporibus et Explicabo iste porro quis numquam
            distinctio Repellendus adipisci nam perferendis amet eaque hic
            Voluptates
          </p>

          <div className="about__contact center">
            <a href="https://example.com">
              <span className="btn btn--outline">Resume</span>
            </a>

            <a
              href="https://github.com/rajshekhar26"
              aria-label="github"
              className="link link--icon"
            >
              <i aria-hidden="true" className="fab fa-github"></i>
            </a>

            <a
              href="https://linkedin.com/in/rajshekhar26"
              aria-label="linkedin"
              className="link link--icon"
            >
              <i aria-hidden="true" className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <section id="projects" className="section projects">
          <h2 className="section__title">Projects</h2>

          <div className="projects__grid">
            <div className="project">
              <h3>Project 1</h3>
              <p className="project__description">
                Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
                sapiente debitis labore sed ipsam Mollitia repellat illum quod
                unde beatae Quis
              </p>
              <ul className="project__stack">
                <li className="project__stack-item">SASS</li>
                <li className="project__stack-item">TypeScript</li>
                <li className="project__stack-item">React</li>
              </ul>

              <a
                href="https://github.com"
                aria-label="source code"
                className="link link--icon"
              >
                <i aria-hidden="true" className="fab fa-github"></i>
              </a>
              <a
                href="https://example.com"
                aria-label="live preview"
                className="link link--icon"
              >
                <i aria-hidden="true" className="fas fa-external-link-alt"></i>
              </a>
            </div>

            <div className="project">
              <h3>Project 2</h3>
              <p className="project__description">
                Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
                sapiente debitis labore sed ipsam Mollitia repellat illum quod
                unde beatae Quis
              </p>
              <ul className="project__stack">
                <li className="project__stack-item">SASS</li>
                <li className="project__stack-item">TypeScript</li>
                <li className="project__stack-item">React</li>
              </ul>

              <a
                href="https://github.com"
                aria-label="source code"
                className="link link--icon"
              >
                <i aria-hidden="true" className="fab fa-github"></i>
              </a>
              <a
                href="https://example.com"
                aria-label="live preview"
                className="link link--icon"
              >
                <i aria-hidden="true" className="fas fa-external-link-alt"></i>
              </a>
            </div>

            <div className="project">
              <h3>Project 3</h3>
              <p className="project__description">
                Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
                sapiente debitis labore sed ipsam Mollitia repellat illum quod
                unde beatae Quis
              </p>
              <ul className="project__stack">
                <li className="project__stack-item">SASS</li>
                <li className="project__stack-item">TypeScript</li>
                <li className="project__stack-item">React</li>
              </ul>

              <a
                href="https://github.com"
                aria-label="source code"
                className="link link--icon"
              >
                <i aria-hidden="true" className="fab fa-github"></i>
              </a>
              <a
                href="https://example.com"
                aria-label="live preview"
                className="link link--icon"
              >
                <i aria-hidden="true" className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </section>

        <section className="section skills" id="skills">
          <h2 className="section__title">Skills</h2>
          <ul className="skills__list">
            <li className="skills__list-item btn btn--plain">HTML</li>
            <li className="skills__list-item btn btn--plain">CSS</li>
            <li className="skills__list-item btn btn--plain">SCSS</li>
            <li className="skills__list-item btn btn--plain">JavaScript</li>
            <li className="skills__list-item btn btn--plain">TypeScript</li>
            <li className="skills__list-item btn btn--plain">React</li>
            <li className="skills__list-item btn btn--plain">Redux</li>
            <li className="skills__list-item btn btn--plain">Git</li>
            <li className="skills__list-item btn btn--plain">Material UI</li>
            <li className="skills__list-item btn btn--plain">Jest</li>
            <li className="skills__list-item btn btn--plain">Enzyme</li>
            <li className="skills__list-item btn btn--plain">CI/CD</li>
          </ul>
        </section>

        <section className="section contact center" id="contact">
          <h2 className="section__title">Contact</h2>
          <a href="mailto:rjshekhar.official@gmail.com">
            <span className="btn btn--outline">Email me</span>
          </a>
        </section>
      </main>
        <footer className="footer">
          <a
            href="https://github.com/rajshekhar26/cleanfolio-minimal"
            className="link footer__link"
          >
            Created By Raj Shekhar
          </a>
        </footer>

        <div className="scroll-container">
          <div className="scroll-top">
            <a aria-label="Scroll up" href="#top">
              <i aria-hidden="true" className="fas fa-arrow-up"></i>
            </a>
          </div>
        </div>

        <script src="/script.js"></script>
      </body>
    </>
  );
};

export default dynamic (() => Promise.resolve(MyPage), {ssr: false})


