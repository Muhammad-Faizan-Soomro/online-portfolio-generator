"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdjust,
  faBriefcase,
  faDownload,
  faEnvelope,
  faEnvelopeOpen,
  faGlobeAfrica,
  faHome,
  faMapMarkerAlt,
  faUser,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBehance,
  faFacebookF,
  faGithub,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Page() {
  const [darkMode, setDarkMode] = useState("");

  useEffect(() => {}, [darkMode]);
  return (
    <>
      <Script id="show-banner">
        {`(function () {
    [...document.querySelectorAll(".temp1-controlscontrol")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".temp1-controlsactive-btn").classList.remove("temp1-controlsactive-btn");
            this.classList.add("temp1-controlsactive-btn");
            document.querySelector(".temp1-active").classList.remove("temp1-active");
            document.getElementById(button.dataset.id).classList.add("temp1-active");
        })
    });
    document.querySelector(".temp1-theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        document.querySelectorAll(".temp1-controlscontrol").forEach(button => {
          button.classList.toggle("text-white")
        })
        document.querySelectorAll(".temp1-theme-btn").forEach(button => {
          button.classList.toggle("text-white")
        })
        document.querySelectorAll(".btn-icon").forEach(button => {
          button.classList.toggle("text-white")
        })
        document.querySelectorAll(".work").forEach(button => {
          button.classList.toggle("text-white")
        })
    })
})();`}
      </Script>
      <header className="temp1-container temp1-header temp1-active temp1-header" id="home">
        <div className="header-content">
          <div className="left-header">
            <div className="h-shape"></div>
            <div className="image">
              <Image className="temp1-image" src="/template3/hero.webp" alt="" height={500} width={500} priority/>
            </div>
          </div>
          <div className="right-header">
            <h1 className="name">
              Hi, I'm <span className="namespan">Solano Milan Diaz.</span>A Web Developer.
            </h1>
            <p className="right-headerp">
              I'm a Web Developer, I love to create beautiful and functional
              websites. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officia, libero? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Neque blanditiis sed aut!
            </p>
            <div className="btn-con">
              <a href="" className="main-btn temp1-a">
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="fas fa-download"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="temp1-container about temp1-section" id="about">
          <div className="main-title">
            <h2 className="main-titleh2">
              About <span className="main-titleh2span">me</span>
              <span className="bg-text">my stats</span>
            </h2>
          </div>
          <div className="about-container">
            <div className="left-about">
              <h4 className="left-abouth4">Information About me</h4>
              <p className="left-aboutp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                labore nihil obcaecati consequatur. Debitis error doloremque,
                vero eos vel nemo eius voluptatem dicta tenetur modi. <br />{" "}
                <br /> La musica delectus dolore fugiat exercitationem a, ipsum
                quidem quo enim natus accusamus labore dolores nam. Unde. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Harum non
                necessitatibus deleniti eum soluta.
              </p>
              <div className="btn-con">
                <a href="#" className="main-btn temp1-a">
                  <span className="btn-text">Download CV</span>
                  <span className="btn-icon">
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="fas fa-download"
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="right-about">
              <div className="about-item">
                <div className="abt-text">
                  <p className="large-text">650+</p>
                  <p className="small-text">
                    Projects <br /> Completed
                  </p>
                </div>
              </div>
              <div className="about-item">
                <div className="abt-text">
                  <p className="large-text">10+</p>
                  <p className="small-text">
                    Years of <br /> experience
                  </p>
                </div>
              </div>
              <div className="about-item">
                <div className="abt-text">
                  <p className="large-text">300+</p>
                  <p className="small-text">
                    Happy <br /> Clients
                  </p>
                </div>
              </div>
              <div className="about-item">
                <div className="abt-text">
                  <p className="large-text">400+</p>
                  <p className="small-text">
                    Customer <br /> reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <h4 className="stat-title">My Skills</h4>
            <div className="progress-bars">
              <div className="progress-bar">
                <p className="prog-title">html5</p>
                <div className="progress-con">
                  <p className="prog-text">65%</p>
                  <div className="progress">
                    <span className="progressspan" style={{ width: "60%" }}></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">css3</p>
                <div className="progress-con">
                  <p className="prog-text">95%</p>
                  <div className="progress">
                    <span className="progressspan css"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">javascript</p>
                <div className="progress-con">
                  <p className="prog-text">75%</p>
                  <div className="progress">
                    <span className="js progressspan"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">ReactJS</p>
                <div className="progress-con">
                  <p className="prog-text">65%</p>
                  <div className="progress">
                    <span className="react progressspan"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">NodeJS</p>
                <div className="progress-con">
                  <p className="prog-text">87%</p>
                  <div className="progress">
                    <span className="node progressspan"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="prog-title">Python</p>
                <div className="progress-con">
                  <p className="prog-text">70%</p>
                  <div className="progress">
                    <span className="python progressspan"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 className="stat-title">My Timeline</h4>
          <div className="timeline">
            <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon icon={faBriefcase} className="fas fa-briefcase work" />
              </div>
              <p className="tl-duration timeline-itemp">2010 - present</p>
              <h5 className="timeline-itemh5">
                Web Developer<span className="timeline-itemh5span"> - Vircrosoft</span>
              </h5>
              <p className="timeline-itemp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quasi vero fugit.
              </p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="fas fa-briefcase work"
                />
              </div>
              <p className="tl-duration timeline-itemp">2008 - 2011</p>
              <h5 className="timeline-itemh5">
                Software Engineer<span className="timeline-itemh5span"> - Boogle, Inc.</span>
              </h5>
              <p className="timeline-itemp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quasi vero fugit.
              </p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="fas fa-briefcase work"
                />
              </div>
              <p className="tl-duration timeline-itemp">2016 - 2017</p>
              <h5 className="timeline-itemh5">
                C++ Programmer<span className="timeline-itemh5span"> - Slime Tech</span>
              </h5>
              <p className="timeline-itemp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quasi vero fugit.
              </p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="fas fa-briefcase work"
                />
              </div>
              <p className="tl-duration timeline-itemp">2009 - 2013</p>
              <h5 className="timeline-itemh5">
                Business Degree<span className="timeline-itemh5span"> - Sussex University</span>
              </h5>
              <p className="timeline-itemp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quasi vero fugit.
              </p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="fas fa-briefcase work"
                />
              </div>
              <p className="tl-duration timeline-itemp">2013 - 2016</p>
              <h5 className="timeline-itemh5">
                Computer Science Degree<span className="timeline-itemh5span"> - Brookes University</span>
              </h5>
              <p className="timeline-itemp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quasi vero fugit.
              </p>
            </div>
            <div className="timeline-item">
              <div className="tl-icon">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="fas fa-briefcase work"
                />
              </div>
              <p className="tl-duration timeline-itemp">2017 - present</p>
              <h5 className="timeline-itemh5">
                3d Animation<span className="timeline-itemh5span"> - Brighton University</span>
              </h5>
              <p className="timeline-itemp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                quasi vero fugit.
              </p>
            </div>
          </div>
        </section>
        <section className="temp1-container temp1-section" id="portfolio">
          <div className="main-title">
            <h2 className="main-titleh2">
              My <span className="main-titleh2span">Portfolio</span>
              <span className="bg-text">My Work</span>
            </h2>
          </div>
          <p className="port-text">
            Here is some of my work that I've done in various programming
            languages.
          </p>
          <div className="portfolios">
            <div className="portfolio-item">
              <div className="image">
                <img src="template1/project.webp" alt="" className="imageimg portfolio-itemimg" />
              </div>
              <div className="hover-items">
                <h3 className="hover-itemsh3">Project Source</h3>
                <div className="icons">
                  <a href="#" className="icon temp1-a">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="fab fa-github"
                    />
                  </a>
                  <a href="#" className="icon temp1-a">
                    <FontAwesomeIcon
                      icon={faBehance}
                      className="fab fa-behance"
                    />
                  </a>
                  <a href="#" className="icon temp1-a">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="fab fa-youtube"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src="template1/project.webp" alt="" className="imageimg portfolio-itemimg"/>
              </div>
              <div className="hover-items">
                <h3 className="hover-itemsh3">Project Source</h3>
                <div className="icons">
                  <a href="#" className="icon temp1-a">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="fab fa-github"
                    />
                  </a>
                  <a href="#" className="icon temp1-a">
                    <FontAwesomeIcon
                      icon={faBehance}
                      className="fab fa-behance"
                    />
                  </a>
                  <a href="#" className="icon temp1-a">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="fab fa-youtube"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src="template1/project.webp" alt="" className="imageimg portfolio-itemimg"/>
              </div>
              <div className="hover-items">
                <h3 className="hover-itemsh3">Project Source</h3>
                <div className="icons">
                  <a href="#" className="icon temp1-a">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="fab fa-github"
                    />
                  </a>
                  <a href="#" className="icon temp1-a">
                    <FontAwesomeIcon
                      icon={faBehance}
                      className="fab fa-behance"
                    />
                  </a>
                  <a href="#" className="icon temp1-a">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="fab fa-youtube"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="temp1-container contact temp1-section" id="contact">
          <div className="contact-container">
            <div className="main-title">
              <h2 className="main-titleh2">
                Contact <span className="main-titleh2span">Me</span>
                <span className="bg-text">Contact</span>
              </h2>
            </div>
            <div className="contact-content-con">
              <div className="left-contact">
                <h4 className="left-contacth4">Contact me here</h4>
                <p className="left-contactp">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                  laborum numquam? Quam excepturi perspiciatis quas quasi.
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="fas fa-map-marker-alt"
                      />
                      <span>Location</span>
                    </div>
                    <p className="contact-itemp">: London, united Kingdom</p>
                  </div>
                  <div className="contact-item">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="fas fa-envelope"
                      />
                      <span>Email</span>
                    </div>
                    <p className="contact-itemp">
                      <span>: maclinzuniversal@gmail.com</span>
                    </p>
                  </div>
                  <div className="contact-item">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faUserGraduate}
                        className="fas fa-user-graduate"
                      />
                      <span>Education</span>
                    </div>
                    <p className="contact-itemp">
                      <span>: Sussex University, East Sussex</span>
                    </p>
                  </div>
                  <div className="contact-item">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faUserGraduate}
                        className="fas fa-user-graduate"
                      />
                      <span>Mobile Number</span>
                    </div>
                    <p className="contact-itemp">
                      <span>: 07522670617</span>
                    </p>
                  </div>
                  <div className="contact-item">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faGlobeAfrica}
                        className="fas fa-globe-africa"
                      />
                      <span>Languages</span>
                    </div>
                    <p className="contact-itemp">
                      <span>: Afrikaans, English, Spanish</span>
                    </p>
                  </div>
                </div>
                <div className="contact-icons">
                  <div className="contact-icon">
                    <a href="www.facebook.com" target="_blank" className="temp1-a contact-icona">
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className="fab fa-facebook-f"
                      />
                    </a>
                    <a href="#" target="_blank" className="temp1-a contact-icona">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="fab fa-twitter"
                      />
                    </a>
                    <a href="#" target="_blank" className="temp1-a contact-icona">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="fab fa-github"
                      />
                    </a>
                    <a href="#" target="_blank" className="temp1-a contact-icona">
                      <FontAwesomeIcon
                        icon={faYoutube}
                        className="fab fa-youtube"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="right-contact">
                <form action="" className="contact-form">
                  <div className="input-control i-c-2">
                    <input className="input-controlinput" type="text" required placeholder="YOUR NAME" />
                    <input className="input-controlinput" type="email" required placeholder="YOUR EMAIL" />
                  </div>
                  <div className="input-control">
                    <input className="input-controlinput" type="text" required placeholder="ENTER SUBJECT" />
                  </div>
                  <div className="input-control">
                    <textarea
                      name=""
                      className="input-controltextarea"
                      id=""
                      cols="15"
                      rows="8"
                      placeholder="Message Here..."
                    ></textarea>
                  </div>
                  <div className="submit-btn">
                    <a href="#" className="main-btn temp1-a">
                      <span className="btn-text">Download CV</span>
                      <span className="btn-icon">
                        <FontAwesomeIcon
                          icon={faDownload}
                          className="fas fa-download"
                        />
                      </span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="temp1-controls">
        <div className="temp1-controlscontrol temp1-controlsactive-btn" data-id="home">
          <FontAwesomeIcon icon={faHome} className="fas fa-home" />
        </div>
        <div className="temp1-controlscontrol" data-id="about">
          <FontAwesomeIcon icon={faUser} className="fas fa-user" />
        </div>
        <div className="temp1-controlscontrol" data-id="portfolio">
          <FontAwesomeIcon icon={faBriefcase} className="fas fa-briefcase" />
        </div>
        <div className="temp1-controlscontrol" data-id="contact">
          <FontAwesomeIcon
            icon={faEnvelopeOpen}
            className="fas fa-envelope-open "
          />
        </div>
      </div>
      <div className="temp1-theme-btn">
        <FontAwesomeIcon icon={faAdjust} className="fas fa-adjust" />
      </div>
    </>
  );
}
