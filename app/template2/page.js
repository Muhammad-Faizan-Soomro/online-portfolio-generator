import React from "react";
import "./index.css";
import Script from "next/script";
import p1 from "../../public/template5/bullseye.png";
import p2 from "../../public/template5/chippy.png";
import p3 from "../../public/template5/fastlane.png";
import p6 from "../../public/template5/mighty-furnitures.png";
import pr1 from "../../public/template5/project-1.png";
import pr2 from "../../public/template5/project-2.png";
 import pr3 from "../../public/template5/project-2.png";
import p7 from "../../public/template5/fastlane.png";
import p8 from "../../public/template5/header.jpg";
import svg1 from "../../public/template5/github.svg";
import svg2 from "../../public/template5/github.svg";
import svg3 from "../../public/template5/fastlane.png";
import svg5 from "../../public/template5/linkedin.svg";
import svg6 from "../../public/template5/twitter.svg";

import Image from "next/image";
function page() {
  return (
    <>
      {/* <Script>
        {`      
      const handleFirstTab = (e) => {
        if(e.key === 'Tab') {
          document.body.classList.add('user-is-tabbing')
          window.removeEventListener('keydown', handleFirstTab)
          window.addEventListener('mousedown', handleMouseDownOnce)
        }
      }
      const handleMouseDownOnce = () => {
        document.body.classList.remove('user-is-tabbing')
      
        window.removeEventListener('mousedown', handleMouseDownOnce)
        window.addEventListener('keydown', handleFirstTab)
      }
      
      window.addEventListener('keydown', handleFirstTab)
      
      const backToTopButton = document.querySelector(".back-to-top");
      let isBackToTopRendered = false;
      
      let alterStyles = (isBackToTopRendered) => {
        backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
        backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
        backToTopButton.style.transform = isBackToTopRendered
          ? "scale(1)"
          : "scale(0)";
      };
      
      window.addEventListener("scroll", () => {
        if (window.scrollY > 700) {
          isBackToTopRendered = true;
          alterStyles(isBackToTopRendered);
        } else {
          isBackToTopRendered = false;
          alterStyles(isBackToTopRendered);
        }
      });
      
        `}
      </Script> */}
      <header className="header" role="banner" id="top">
        <div className="row">
          <nav className="nav" role="navigation">
            <ul className="nav__items">
              <li className="nav__item">
                <a href="#work" className="nav__link">
                  Work
                </a>
              </li>
              <li className="nav__item">
                <a href="#clients" className="nav__link">
                  Clients
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__text-box row">
          <div className="header__text">
            <h1 className="heading-primary">
              <span>Syed Ali Hussnain</span>
            </h1>

            <p>A Web Developer based in Lahore, Pakistan.</p>
            <a href="#contact" className="btn btn--pink">
              Get in touch
            </a>
          </div>
        </div>
      </header>

      <main role="main">
        <section className="work" id="work">
          <div className="row">
            <h2>My Work</h2>
            <div className="work__boxes">
              <div className="work__box">
                <div className="work__text">
                  <h3>Portfolio Template</h3>
                  <p>
                    A free Open Source Portfolio for anyone to use for free.
                  </p>
                  <ul className="work__list">
                    <li>HTML</li>
                    <li>SCSS</li>
                    <li>JavaScript</li>
                    <li>Parcel</li>
                  </ul>

                  <div className="work__links">
                    <a
                      href="https://nisar.surge.sh"
                      target="_blank"
                      className="link__text"
                    >
                      Visit Site <span>&rarr;</span>
                    </a>
                    <a
                      href="https://github.com/nisarhassan12/portfolio"
                      title="View Source Code"
                      target="_blank"
                    >
                      <Image src={svg3} alt="svg1.png" />
                    </a>
                  </div>
                </div>
                <div className="work__image-box">
                  <Image src={pr1} alt="svg1.png" />
                </div>
              </div>

              <div className="work__box">
                <div className="work__text">
                  <h3>Calculator</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, eius.
                  </p>
                  <ul className="work__list">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Node</li>
                    <li>MongoDB</li>
                  </ul>

                  <div className="work__links">
                    <a href="#" className="link__text">
                      Visit Site <span>&rarr;</span>
                    </a>
                    <a href="#">
                      <Image src={svg3} alt="svg1.png" />
                    </a>
                  </div>
                </div>
                <div className="work__image-box">
                  <Image src={pr2} alt="svg1.png" />
                </div>
              </div>

              <div className="work__box">
                <div className="work__text">
                  <h3>Notificator</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, eius.
                  </p>
                  <ul className="work__list">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Node</li>
                    <li>MongoDB</li>
                  </ul>

                  <div className="work__links">
                    <a href="#" className="link__text">
                      Visit Site <span>&rarr;</span>
                    </a>
                    <a href="#">
                      <Image src={svg3} width={100}  alt="svg1.png" />
                    </a>
                  </div>
                </div>
                <div className="work__image-box">
                  <Image src={pr3} alt="svg1.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="client" id="clients">
          <div className="row">
            <h2>Clients</h2>
            <div className="client__logos">
              <Image src={p7} alt="svg1.png" />

              <Image src={p1} alt="svg1.png" />

              <Image src={p6} alt="svg1.png" />

              <Image src={p3} alt="svg1.png" />

              <Image src={p2} alt="svg1.png" />
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="row">
            <h2>About Me</h2>
            <div className="about__content">
              <div className="about__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                  id nostrum illo harum blanditiis, tenetur eum suscipit
                  cupiditate in vel, ex quam quidem quos mollitia labore aut
                  sunt eius ratione molestiae fuga veniam facere similique
                  voluptate.
                </p>

                <a href="#" className="btn">
                  My Resume
                </a>
              </div>

              <div className="about__photo-container">
                <Image src={p8} alt="svg1.png" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="contact" id="contact">
        <div className="row">
          <h2>Get in Touch</h2>
          <div className="contact__info">
            <p>
              Are you looking for a fast-performing and user-friendly website to
              represent your product or business? or looking for any kind of
              consultation? or want to ask questions? or have some advice for me
              or just want to say "Hi 👋" in any case feel free to Let me know.
              I will do my best to respond back. 😊 The quickest way to reach
              out to me is via an email.
            </p>

            <a href="mailto:you@example.com" className="btn">
              you@example.com
            </a>
          </div>
        </div>
      </section>

      <footer role="contentinfo" className="footer">
        <div className="row">
          <ul className="footer__social-links">
            <li className="footer__social-link-item">
              <a
                href="https://twitter.com/nisarhassan12/"
                title="Link to Twitter Profile"
              >
                <Image src={svg6} alt="svg1.png" width={100} />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a
                href="https://github.com/nisarhassan12/"
                title="Link to Github Profile"
              >
                
              </a>
            </li>
            <li className="footer__social-link-item">
              <a
                href="https://codepen.io/nisar_hassan"
                title="Link to Codepen Profile"
              >
                <Image src={svg2} alt="svg1.png" width={100} />
              </a>
            </li>
            <li className="footer__social-link-item">
              <a href="https://www.linkedin.com/in/nisar-hassan-naqvi-413466199/">
                <Image src={svg5} alt="svg1.png" width={100} />
              </a>
            </li>
          </ul>

          <p>
            &copy; 2020 - Template designed & developed by{" "}
            <a href="https://nisar.dev" className="link">
              Nisar
            </a>
            .
          </p>
          <div className="footer__github-buttons">
           
          </div>
        </div>
      </footer>

      <a href="#top" className="back-to-top" title="Back to Top">
        <Image src={svg1} alt="svg1.png" />
      </a>
    </>
  );
}

export default page;
