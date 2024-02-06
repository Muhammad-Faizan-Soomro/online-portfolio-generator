import React from "react";
import "./template2.css";

function page() {
  return (
    <>
      <header className="temp2-header">
        <h2 className="visually-hidden temp2-h2">Header</h2>
        <div className="wrappertemp2">
          <nav className="header__nav">
            <h2 className="visually-hidden temp2-h2">Navigation</h2>
            <a href="/" className="header__home temp2-a">
              <span className="visually-hidden span">(to home page)</span>
            </a>
            <a href="" className="header__social temp2-a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="temp2-svg"
                width="25"
                height="24"
                aria-labelledby="socialGitHub"
                role="img"
              >
                <title id="socialGitHub">GitHub</title>
                <path
                  fill="#FFF"
                  className="path"
                  fillRule="evenodd"
                  d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"
                />
              </svg>
            </a>
            <a href="" className="header__social temp2-a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="temp2-svg"
                width="25"
                height="24"
                aria-labelledby="socialLinkedIn"
                role="img"
              >
                <title id="socialLinkedIn">LinkedIn</title>
                <path
                  fill="#FFF"
                  className="path"
                  fillRule="evenodd"
                  d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z"
                />
              </svg>
            </a>
            <a href="" className="header__social temp2-a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="temp2-svg"
                width="24"
                height="20"
                aria-labelledby="socialTwitter"
                role="img"
              >
                <title id="socialTwitter">Twitter</title>
                <path
                  fill="#FFF"
                  className="path"
                  d="M23.492 2.705a9.563 9.563 0 0 1-2.742.751 4.788 4.788 0 0 0 2.1-2.643 9.536 9.536 0 0 1-3.033 1.159 4.778 4.778 0 0 0-8.14 4.357 13.564 13.564 0 0 1-9.844-4.99 4.774 4.774 0 0 0-.646 2.4 4.778 4.778 0 0 0 2.124 3.977 4.765 4.765 0 0 1-2.163-.598v.061a4.778 4.778 0 0 0 3.832 4.684 4.812 4.812 0 0 1-2.158.082 4.78 4.78 0 0 0 4.462 3.316 9.584 9.584 0 0 1-5.932 2.045c-.38 0-.762-.022-1.14-.067a13.508 13.508 0 0 0 7.32 2.146c8.787 0 13.59-7.277 13.59-13.589 0-.205-.004-.412-.013-.617a9.71 9.71 0 0 0 2.381-2.471l.002-.003Z"
                />
              </svg>
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="wrappertemp2 hero__wrapper bottom-border">
            <div className="hero__content">
              <picture className="picture hero__contentpicture">
                <source
                  media="(min-width: 62.5em)"
                  srcSet="/template2/image-profile-desktop.webp"
                />
                <source
                  media="(min-width: 37.5em)"
                  srcSet="/template2/image-profile-tablet.webp"
                />
                <img
                  className="hero__image temp2-img"
                  src="/template2/image-profile-mobile.webp"
                  alt="picture of Adam Keyes"
                  width-="174"
                  height="383"
                />
              </picture>
              <img
                className="hero__rings temp2-img"
                src="/template2/pattern-rings.svg"
                alt=""
                width="530"
                height="129"
              />
              <img
                className="hero__circle temp2-img"
                src="/template2/pattern-circle.svg"
                alt=""
                width="129"
                height="129"
              />
              <div className="hero__text">
                <h1 className="hero__headline header-xl temp2-h1">
                  Nice to meet you! I'm <span className="temp2-span">Adam Keyes</span>
                  .
                </h1>
                <p className="hero__description temp2-p">
                  Based in the UK, I'm a front-end developer passionate about
                  building accessible web apps that users love.
                </p>
                <a href="#contact" className="hero__contact underline temp2-a">
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="skills">
          <div className="wrappertemp2 skills__wrapper bottom-border">
            <h2 className="visually-hidden temp2-h2">Skills</h2>
            <div className="skills__item">
              <h3 className="skills__title temp2-h3">HTML</h3>
            </div>
            <div className="skills__item">
              <h3 className="skills__title temp2-h3">CSS</h3>
            </div>
            <div className="skills__item">
              <h3 className="skills__title temp2-h3">JavaScript</h3>
            </div>
            <div className="skills__item">
              <h3 className="skills__title temp2-h3">Accessibility</h3>
            </div>
            <div className="skills__item">
              <h3 className="skills__title temp2-h3">React</h3>
            </div>
            <div className="skills__item">
              <h3 className="skills__title temp2-h3">Sass</h3>
            </div>
          </div>
          <img
            className="skills__rings temp2-img"
            src="/template2/pattern-rings.svg"
            alt=""
            width="530"
            height="129"
          />
        </section>

        <section className="projects">
          <div className="wrappertemp2 projects__wrapper">
            <div className="projects__grid">
              <h2 className="projects__headline header-xl temp2-h2">Projects</h2>
              <a href="#contact" className="projects__contact underline temp2-a">
                Contact me
              </a>

              <div className="projects__item">
                <picture className="projects__picture picture">
                  <source
                    media="(min-width: 62.5em)"
                    srcSet="/template2/thumbnail-project-1-large.webp"
                  />
                  <img
                    className="projects__image temp2-img"
                    src="/template2/thumbnail-project-1-small.webp"
                    alt="screenshot of design portfolio website"
                    width-="343"
                    height="253"
                  />
                </picture>
                <div className="projects__links">
                  <a href="" className="underline temp2-a">
                    View Project
                  </a>
                  <a href="" className="underline temp2-a">
                    View Code
                  </a>
                </div>
              </div>

              <div className="projects__item">
                <picture className="projects__picture picture">
                  <source
                    media="(min-width: 62.5em)"
                    srcSet="/template2/thumbnail-project-2-large.webp"
                  />
                  <img
                    className="projects__image temp2-img"
                    src="/template2/thumbnail-project-2-small.webp"
                    alt="screenshot of learning platform website with different courses"
                    width-="343"
                    height="253"
                  />
                </picture>
                <div className="projects__links">
                  <a href="" className="underline temp2-a">
                    View Project
                  </a>
                  <a href="" className="underline temp2-a">
                    View Code
                  </a>
                </div>
              </div>

              <div className="projects__item">
                <picture className="projects__picture picture">
                  <source
                    media="(min-width: 62.5em)"
                    srcSet="/template2/thumbnail-project-3-large.webp"
                  />
                  <img
                    className="projects__image temp2-img"
                    src="/template2/thumbnail-project-3-small.webp"
                    alt="screenshot of To Do App showing a list of active and complete tasks"
                    width-="343"
                    height="253"
                  />
                </picture>
                <div className="projects__links">
                  <a href="" className="underline temp2-a">
                    View Project
                  </a>
                  <a href="" className="underline temp2-a">
                    View Code
                  </a>
                </div>
              </div>

              <div className="projects__item">
                <picture className="projects__picture picture">
                  <source
                    media="(min-width: 62.5em)"
                    srcSet="/template2/thumbnail-project-4-large.webp"
                  />
                  <img
                    className="projects__image temp2-img"
                    src="/template2/thumbnail-project-4-small.webp"
                    alt="screenshot of video player app with grid of thumbnails of movies and TV shows"
                    width-="343"
                    height="253"
                  />
                </picture>
                <div className="projects__links">
                  <a href="" className="underline temp2-a">
                    View Project
                  </a>
                  <a href="" className="underline temp2-a">
                    View Code
                  </a>
                </div>
              </div>

              <div className="projects__item">
                <picture className="projects__picture picture">
                  <source
                    media="(min-width: 62.5em)"
                    srcSet="/template2/thumbnail-project-5-large.webp"
                  />
                  <img
                    className="projects__image temp2-img"
                    src="/template2/thumbnail-project-5-small.webp"
                    alt="screenshot of 4-player memory game with circular tiles that have symbols"
                    width-="343"
                    height="253"
                  />
                </picture>
                <div className="projects__links">
                  <a href="" className="underline temp2-a">
                    View Project
                  </a>
                  <a href="" className="underline temp2-a">
                    View Code
                  </a>
                </div>
              </div>

              <div className="projects__item">
                <picture className="projects__picture picture">
                  <source
                    media="(min-width: 62.5em)"
                    srcSet="/template2/thumbnail-project-6-large.webp"
                  />
                  <img
                    className="projects__image temp2-img"
                    src="/template2/thumbnail-project-6-small.webp"
                    alt="grid of thumbnails of famous works of art"
                    width-="343"
                    height="253"
                  />
                </picture>
                <div className="projects__links">
                  <a href="" className="underline temp2-a">
                    View Project
                  </a>
                  <a href="" className="underline temp2-a">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact bg-less-dark">
          <div className="wrappertemp2 contact__wrapper bottom-border">
            <div className="contact__text">
              <h2 className="contact__headline header-xl temp2-h2">Contact</h2>
              <p className="contact__description temp2-p">
                I would love to hear about your project and how I could help.
                Please fill in the form, and I'll get back to you as soon as
                possible.
              </p>
            </div>
            <form action="" className="contact__form">
              <div className="contact__control">
                <label htmlFor="name" className="visually-hidden">
                  Name
                </label>
                <input
                  type="text"
                  className="temp2-input contact__controlinput contactinput"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
                <img
                  src="/template2/icon-invalid.svg"
                  alt=""
                  className="contact__invalid-icon temp2-img"
                  width="24"
                  height="24"
                />
              </div>
              <div className="contact__control">
                <label htmlFor="email" className="visually-hidden">
                  Email
                </label>
                <input
                  type="email"
                  className="temp2-input contact__controlinput contactinput"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <img
                  src="/template2/icon-invalid.svg"
                  alt=""
                  className="contact__invalid-icon temp2-img"
                  width="24"
                  height="24"
                />
              </div>
              <div className="contact__control">
                <label htmlFor="message" className="visually-hidden">
                  Message
                </label>
                <textarea
                  name="message"
                  className="temp2-textarea contact__controltextarea contacttextarea"
                  id="message"
                  cols="30"
                  rows="3"
                  placeholder="Message"
                  required
                ></textarea>
                <img
                  src="/template2/icon-invalid.svg"
                  alt=""
                  className="contact__invalid-icon temp2-img"
                  width="24"
                  height="24"
                />
              </div>
              <div className="contact__control align-right">
                <button className="temp2-button contact__controlbutton" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <img
            className="contact__rings"
            src="/template2/pattern-rings.svg temp2-img"
            alt=""
            width="530"
            height="129"
          />
        </section>
      </main>

      <footer className="temp2-footer bg-less-dark">
        <h2 className="visually-hidden temp2-h2">Footer</h2>
        <div className="wrappertemp2">
          <nav className="header__nav">
            <h2 className="visually-hidden temp2-h2">Navigation</h2>
            <a href="/" className="header__home temp2-a">
              <span className="visually-hidden span">(to home page)</span>
            </a>
            <a href="" className="header__social temp2-a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="temp2-svg"
                width="25"
                height="24"
                aria-labelledby="socialGitHub"
                role="img"
              >
                <title id="socialGitHub">GitHub</title>
                <path
                  fill="#FFF"
                  className="path"
                  fillRule="evenodd"
                  d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"
                />
              </svg>
            </a>
            <a href="" className="header__social temp2-a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="temp2-svg"
                width="25"
                height="24"
                aria-labelledby="socialLinkedIn"
                role="img"
              >
                <title id="socialLinkedIn">LinkedIn</title>
                <path
                  fill="#FFF"
                  className="path"
                  fillRule="evenodd"
                  d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z"
                />
              </svg>
            </a>
            <a href="" className="header__social temp2-a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="temp2-svg"
                width="24"
                height="20"
                aria-labelledby="socialTwitter"
                role="img"
              >
                <title id="socialTwitter">Twitter</title>
                <path
                  fill="#FFF"
                  className="path"
                  d="M23.492 2.705a9.563 9.563 0 0 1-2.742.751 4.788 4.788 0 0 0 2.1-2.643 9.536 9.536 0 0 1-3.033 1.159 4.778 4.778 0 0 0-8.14 4.357 13.564 13.564 0 0 1-9.844-4.99 4.774 4.774 0 0 0-.646 2.4 4.778 4.778 0 0 0 2.124 3.977 4.765 4.765 0 0 1-2.163-.598v.061a4.778 4.778 0 0 0 3.832 4.684 4.812 4.812 0 0 1-2.158.082 4.78 4.78 0 0 0 4.462 3.316 9.584 9.584 0 0 1-5.932 2.045c-.38 0-.762-.022-1.14-.067a13.508 13.508 0 0 0 7.32 2.146c8.787 0 13.59-7.277 13.59-13.589 0-.205-.004-.412-.013-.617a9.71 9.71 0 0 0 2.381-2.471l.002-.003Z"
                />
              </svg>
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default page;
