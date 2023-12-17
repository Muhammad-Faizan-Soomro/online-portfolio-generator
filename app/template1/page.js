'use client'
import React, { useEffect ,useState} from "react";
import Script from "next/script";
import './style.css'
import dynamic from "next/dynamic";
import pic1 from '../../public/template1/hero1.png'
import pic3 from '../../public/template1/port1.jpg'
import  Image  from "next/image";

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


 function Page() {

  // const [parentElement, setParentElement] = useState(null);
  // const [childElement, setChildElement] = useState(null);

  // useEffect(() => {
  //   setParentElement(document.getElementById("parent"));
  //   setChildElement(document.getElementById("child"));
  // }, []);

  // useEffect(() => {
  //   [...document.querySelectorAll(".control")].forEach((button) => {
  //     button.addEventListener("click", function () {
  //       document
  //         .querySelector(".active-btn")
  //         .classList.remove("active-btn");
  //       this.classList.add("active-btn");
  //       document.querySelector(".active").classList.remove("active");
  //       document.getElementById(button.dataset.id).classList.add("active");
  //     });
  //   });
  //   document.querySelector(".theme-btn").addEventListener("click", () => {
  //     document.body.classList.toggle("light-mode");
  //   });

  //   var parentElement = document.getElementById("parent");
  //   var childElement = document.getElementById("child");

  //   if (parentElement && childElement) {
  //     if (parentElement.contains(childElement)) {
  //       parentElement.removeChild(childElement);
  //     } else {
  //       console.error("Child element not found in the parent node.");
  //     }
  //   }
  // }, []);

  return (
    <>
      <Script id="show-banner">
        {`(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
var parentElement = document.getElementById("parent");
var childElement = document.getElementById("child");

if (parentElement && childElement) {
  if (parentElement.contains(childElement)) {
    parentElement.removeChild(childElement);
  } else {
    console.error("Child element not found in the parent node.");
  }
}


`}
      </Script>

      <body className="main-content ">
        <header className="container header active" id="home">
          <div className="header-content">
            <div className="left-header">
              <div className="h-shape"></div>
              <div className="image">
                <Image src={pic1} alt='pic1.png'/>
              </div>
            </div>
            <div className="right-header">
              <h1 className="name">
                Hi, I'm <span>Solano Milan Diaz.</span>A Web Developer.
              </h1>
              <p>
                I'm a Web Developer, I love to create beautiful and functional
                websites. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Officia, libero? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Neque blanditiis sed aut!
              </p>
              <div className="btn-con">
                <a href="" className="main-btn">
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
          <section className="container about" id="about">
            <div className="main-title">
              <h2>
                About <span>me</span>
                <span className="bg-text">my stats</span>
              </h2>
            </div>
            <div className="about-container">
              <div className="left-about">
                <h4>Information About me</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet labore nihil obcaecati consequatur. Debitis error
                  doloremque, vero eos vel nemo eius voluptatem dicta tenetur
                  modi. <br /> <br /> La musica delectus dolore fugiat
                  exercitationem a, ipsum quidem quo enim natus accusamus labore
                  dolores nam. Unde. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Harum non necessitatibus deleniti eum
                  soluta.
                </p>
                <div className="btn-con">
                  <a href="#" className="main-btn">
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
                    <p className="prog-text">80%</p>
                    <div className="progress">
                      <span className="html"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">css3</p>
                  <div className="progress-con">
                    <p className="prog-text">95%</p>
                    <div className="progress">
                      <span className="css"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">javascript</p>
                  <div className="progress-con">
                    <p className="prog-text">75%</p>
                    <div className="progress">
                      <span className="js"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">ReactJS</p>
                  <div className="progress-con">
                    <p className="prog-text">75%</p>
                    <div className="progress">
                      <span className="react"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">NodeJS</p>
                  <div className="progress-con">
                    <p className="prog-text">87%</p>
                    <div className="progress">
                      <span className="node"></span>
                    </div>
                  </div>
                </div>
                <div className="progress-bar">
                  <p className="prog-title">Python</p>
                  <div className="progress-con">
                    <p className="prog-text">70%</p>
                    <div className="progress">
                      <span className="python"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="stat-title">My Timeline</h4>
            <div className="timeline">
              <div className="timeline-item">
                <div className="tl-icon">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="fas fa-briefcase"
                  />
                </div>
                <p className="tl-duration">2010 - present</p>
                <h5>
                  Web Developer<span> - Vircrosoft</span>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  quasi vero fugit.
                </p>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="fas fa-briefcase"
                  />
                </div>
                <p className="tl-duration">2008 - 2011</p>
                <h5>
                  Software Engineer<span> - Boogle, Inc.</span>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  quasi vero fugit.
                </p>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="fas fa-briefcase"
                  />
                </div>
                <p className="tl-duration">2016 - 2017</p>
                <h5>
                  C++ Programmer<span> - Slime Tech</span>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  quasi vero fugit.
                </p>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="fas fa-briefcase"
                  />
                </div>
                <p className="tl-duration">2009 - 2013</p>
                <h5>
                  Business Degree<span> - Sussex University</span>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  quasi vero fugit.
                </p>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="fas fa-briefcase"
                  />
                </div>
                <p className="tl-duration">2013 - 2016</p>
                <h5>
                  Computer Science Degree<span> - Brookes University</span>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  quasi vero fugit.
                </p>
              </div>
              <div className="timeline-item">
                <div className="tl-icon">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="fas fa-briefcase"
                  />
                </div>
                <p className="tl-duration">2017 - present</p>
                <h5>
                  3d Animation<span> - Brighton University</span>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  quasi vero fugit.
                </p>
              </div>
            </div>
          </section>
          <section className="container" id="portfolio">
            <div className="main-title">
              <h2>
                My <span>Portfolio</span>
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
                <Image src={pic3} alt='pic3.png'/>
            
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="#" className="icon">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="fab fa-github"
                      />
                    </a>
                    <a href="#" className="icon">
                      <FontAwesomeIcon
                        icon={faBehance}
                        className="fab fa-behance"
                      />
                    </a>
                    <a href="#" className="icon">
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
                <Image src={pic3} alt="pic3.png" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="#" className="icon">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="fab fa-github"
                      />
                    </a>
                    <a href="#" className="icon">
                      <FontAwesomeIcon
                        icon={faBehance}
                        className="fab fa-behance"
                      />
                    </a>
                    <a href="#" className="icon">
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
                <Image src={pic3} alt="pic3.png" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="#" className="icon">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="fab fa-github"
                      />
                    </a>
                    <a href="#" className="icon">
                      <FontAwesomeIcon
                        icon={faBehance}
                        className="fab fa-behance"
                      />
                    </a>
                    <a href="#" className="icon">
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
                <Image src={pic3} alt="pic3.png" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="#" className="icon">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="fab fa-github"
                      />
                    </a>
                    <a href="#" className="icon">
                      <FontAwesomeIcon
                        icon={faBehance}
                        className="fab fa-behance"
                      />
                    </a>
                    <a href="#" className="icon">
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
                <Image src={pic3} alt="pic3.png" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="#" className="icon">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="fab fa-github"
                      />
                    </a>
                    <a href="#" className="icon">
                      <FontAwesomeIcon
                        icon={faBehance}
                        className="fab fa-behance"
                      />
                    </a>
                    <a href="#" className="icon">
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
                <Image src={pic3} alt="pic3.png" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="#" className="icon">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="fab fa-github"
                      />
                    </a>
                    <a href="#" className="icon">
                      <FontAwesomeIcon
                        icon={faBehance}
                        className="fab fa-behance"
                      />
                    </a>
                    <a href="#" className="icon">
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
                <Image src={pic3} alt="pic3.png" />
                </div>
                <div className="hover-items">
                  <h3>Project Source</h3>
                  <div className="icons">
                    <a href="#" className="icon">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="fab fa-github"
                      />
                    </a>
                    <a href="#" className="icon">
                      <FontAwesomeIcon
                        icon={faBehance}
                        className="fab fa-behance"
                      />
                    </a>
                    <a href="#" className="icon">
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
          <section className="container contact" id="contact">
            <div className="contact-container">
              <div className="main-title">
                <h2>
                  Contact <span>Me</span>
                  <span className="bg-text">Contact</span>
                </h2>
              </div>
              <div className="contact-content-con">
                <div className="left-contact">
                  <h4>Contact me here</h4>
                  <p>
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
                      <p>: London, united Kingdom</p>
                    </div>
                    <div className="contact-item">
                      <div className="icon">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="fas fa-envelope"
                        />
                        <span>Email</span>
                      </div>
                      <p>
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
                      <p>
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
                      <p>
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
                      <p>
                        <span>: Afrikaans, English, Spanish</span>
                      </p>
                    </div>
                  </div>
                  <div className="contact-icons">
                    <div className="contact-icon">
                      <a href="www.facebook.com" target="_blank">
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          className="fab fa-facebook-f"
                        />
                      </a>
                      <a href="#" target="_blank">
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="fab fa-twitter"
                        />
                      </a>
                      <a href="#" target="_blank">
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="fab fa-github"
                        />
                      </a>
                      <a href="#" target="_blank">
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
                      <input type="text" required placeholder="YOUR NAME" />
                      <input type="email" required placeholder="YOUR EMAIL" />
                    </div>
                    <div className="input-control">
                      <input type="text" required placeholder="ENTER SUBJECT" />
                    </div>
                    <div className="input-control">
                      <textarea
                        name=""
                        id=""
                        cols="15"
                        rows="8"
                        placeholder="Message Here..."
                      ></textarea>
                    </div>
                    <div className="submit-btn">
                      <a href="#" className="main-btn">
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
        <div className="controls">
          <div className="control active-btn" data-id="home">
            <FontAwesomeIcon icon={faHome} className="fas fa-home" />
          </div>
          <div className="control" data-id="about">
            <FontAwesomeIcon icon={faUser} className="fas fa-user" />
          </div>
          <div className="control" data-id="portfolio">
            <FontAwesomeIcon icon={faBriefcase} className="fas fa-briefcase" />
          </div>
          <div className="control" data-id="contact">
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              className="fas fa-envelope-open"
            />
          </div>
        </div>
        <div className="theme-btn">
          <FontAwesomeIcon icon={faAdjust} className="fas fa-adjust" />
        </div>
      </body>
    </>
  );
}


export default dynamic (() => Promise.resolve(Page), {ssr: false})
