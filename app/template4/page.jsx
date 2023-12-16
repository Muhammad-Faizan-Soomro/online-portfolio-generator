import React from 'react'
import './main.css'
import pic1 from '../../public/template4/hero.jpg'
import pic2 from '../../public/template4/hero1.jpeg'
import pic3 from '../../public/template4/images.jpeg'
import pr1 from '../../public/template4/project1.jpg'
import pr2 from '../../public/template4/project2.jpg'
import pr3 from '../../public/template4/project3.jpg'
import t1 from '../../public/template4/testimonial1.jpg'
import t2 from '../../public/template4/testimonial2.jpg'
import t3 from '../../public/template4/testimonial3.jpg'
import Image from 'next/image'

import Script from 'next/script';

function page() {
  return (
 <>
 {/* <Script>
  {`
  const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");

// open and close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav__menu--open")) {
      navMenu.classList.remove("nav__menu--open");
    }
    changeIcon();
  });
});

// Change nav toggle icon
function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}

// Testimonial Slide

const testimonialSlide = new Swiper(".testimonial__wrapper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    520: {
      slidesPerView: "auto",
    },
  },
});

// header scroll animation
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// ScrollReveal animations
const sr = ScrollReveal({
  duration: 2000,
  distance: "100px",
  delay: 400,
  reset: false,
});

sr.reveal(".hero__content, .about__content");
sr.reveal(".hero__img", { origin: "top" });

sr.reveal(
  ".hero__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .service__card, .project__content, .testimonial__wrapper, .footer__content",
  {
    delay: 500,
    interval: 100,
  }
);

sr.reveal(".qualification__footer-text, .contact__content", {
  origin: "left",
});

sr.reveal(".qualification__footer .btn, .contact__btn", { origin: "right" });

  
  
  `}
 </Script> */}

    <header id="header" class="header">
        <div class="container">
            <nav class="nav">
                <a href="index.html" class="nav__brand">
                    <i class="ri-code-s-slash-line"></i>Developer
                </a>
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="#hero" class="nav__link">Home</a>
                        </li>
                        <li class="nav__item">
                            <a href="#about" class="nav__link">About</a>
                        </li>
                        <li class="nav__item">
                            <a href="#qualification" class="nav__link">Qualification</a>
                        </li>
                        <li class="nav__item">
                            <a href="#service" class="nav__link">Services</a>
                        </li>
                        <li class="nav__item">
                            <a href="#project" class="nav__link">Projects</a>
                        </li>
                        <li class="nav__item">
                            <a href="#contact" class="nav__link">Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="nav__toggle">
                    <i id="nav-toggle" class="ri-menu-3-line"></i>
                </div>
            </nav>
        </div>
    </header>
   
    <main class="main">
     
        <section id="hero" class="hero">
            <div class="container">
                <div class="d-grid hero__wrapper">
                    <div class="hero__content">
                        <h1 class="hero__title">Hi, I am Shri,<br/>Web Developer.</h1>
                        <p class="hero__description">A portfolio website is a unique way to showcase your work and let
                            others know about yourself. It’s like an evergreen platform for your projects, case studies,
                            and information about you. In addition, it’s one of the best ways to express your
                            personality, experience, and capabilities .</p>
                        <div class="hero__info">
                            <div class="hero__info-wrapper">
                                <p class="hero__info-number">01</p>
                                <h2 class="hero__info-title">Years<br/>Experience</h2>
                            </div>
                            <div class="hero__info-wrapper">
                                <p class="hero__info-number">10+</p>
                                <h2 class="hero__info-title">Projects<br/>Completed</h2>
                            </div>
                            <div class="hero__info-wrapper">
                                <p class="hero__info-number">02+</p>
                                <h2 class="hero__info-title">Companies<br/> Worked</h2>
                            </div>
                        </div>
                    </div>
                   <Image src={pic2} alt='pic2.jpeg'/>
                </div>
            </div>
        </section>

       
        <section id="about" class="section about">
            <div class="container">
                <div class="section__header">
                    <h2 class="section__title">About Me</h2>
                    <span class="section__subtitle">Who am I</span>
                </div>
                <div class="d-grid about__wrapper">
                    <div class="about__content">
                        <h3 class="about__title">I'm a Professional and Experienced Frontend Developer.</h3>
                        <p class="about__description">A portfolio website is a unique way to showcase your work and let
                            others know about yourself. It’s like an evergreen platform for your projects, case studies,
                            and information about you. In addition, it’s one of the best ways to express your
                            personality, experience, and capabilities .</p>
                        <a href="#" class="btn btn--primary">Know More</a>
                    </div>
                    <div class="skills">
                        <h3 class="skills__title">Technologies I've been working with:</h3>
                        <div class="skills__wrapper">
                            <div class="skills__content">
                                <h4 class="skills__subtitle">Backend</h4>
                                <ul class="skills__list">
                                    <li class="skills__item"><i class="ri-arrow-right-s-fill"></i>
                                        Python</li>
                                    <li class="skills__item"><i class="ri-arrow-right-s-fill"></i>
                                        PHP</li>
                                    <li class="skills__item"><i class="ri-arrow-right-s-fill"></i>
                                        Node.js</li>
                                    <li class="skills__item"><i class="ri-arrow-right-s-fill"></i>
                                        Firebase</li>
                                    <li class="skills__item"><i class="ri-arrow-right-s-fill"></i>
                                        MongoDB</li>
                                    <li class="skills__item"><i class="ri-arrow-right-s-fill"></i>
                                        MySQL</li>
                                </ul>
                            </div>
                            <div class="skills__content">
                                <h4 class="skills__subtitle">Frontend</h4>
                                <ul class="skills__list">
                                    <li class="skills__item"><i class="ri-arrow-right-s-fill"></i>
                                        HTML</li>
                                    <li class="skills__item"><i class="ri-arrow-right-s-fill"></i>
                                        CSS/Sass</li>
                                    <li class="skills__item"><i class="ri-arrow-right-s-fill"></i>
                                        JavaScript</li>
                                    <li class="skills__item"><i class="ri-arrow-right-s-fill"></i>
                                        Bootstrap</li>
                                    <li class="skills__item"><i class="ri-arrow-right-s-fill"></i>
                                        React</li>
                                    <li class="skills__item"><i class="ri-arrow-right-s-fill"></i>
                                        Vue.js</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       
        <section id="qualification" class="section qualification">
            <div class="container">
                <div class="section__header">
                    <h2 class="section__title">Qualification</h2>
                    <span class="section__subtitle">Experience & Education</span>
                </div>
              
                <div class="qualification__wrapper">
                    <h3 class="qualification__name">
                        <i class="ri-briefcase-fill"></i>
                        Professional Experience
                    </h3>
                    <div class="d-grid qualification__content">
                       
                        <div class="qualification__item">
                            <h3 class="qualification__title">Web Developer at Oracle</h3>
                            <p class="qualification__description"> It provides a convenient way for potential clients to
                                view your work while also allowing you to expand on your skills and services.</p>
                            <span class="qualification__date">Jan 2022 - Present</span>
                        </div>
                       
                        <div class="qualification__item">
                            <h3 class="qualification__title">Frontend Lead at Google</h3>
                            <p class="qualification__description"> It provides a convenient way for potential clients to
                                view your work while also allowing you to expand on your skills and services.</p>
                            <span class="qualification__date">2020 - 2022</span>
                        </div>
                       
                        <div class="qualification__item">
                            <h3 class="qualification__title">UI/UX Designer at Facebook</h3>
                            <p class="qualification__description"> It provides a convenient way for potential clients to
                                view your work while also allowing you to expand on your skills and services.</p>
                            <span class="qualification__date">2018 - 2020</span>
                        </div>
                    </div>
                </div>
                
                <div class="qualification__wrapper">
                    <h3 class="qualification__name">
                        <i class="ri-booklet-fill"></i>
                        Education
                    </h3>
                    <div class="d-grid qualification__content">
                    
                        <div class="qualification__item">
                            <h3 class="qualification__title">UI/UX Designer</h3>
                            <p class="qualification__description"> It provides a convenient way for potential clients to
                                view your work while also allowing you to expand on your skills and services.</p>
                            <span class="qualification__date">2018 - 2019</span>
                        </div>
                       
                        <div class="qualification__item">
                            <h3 class="qualification__title">Master In Web Development</h3>
                            <p class="qualification__description"> It provides a convenient way for potential clients to
                                view your work while also allowing you to expand on your skills and services.</p>
                            <span class="qualification__date">2015 - 2017</span>
                        </div>
                   
                        <div class="qualification__item">
                            <h3 class="qualification__title">Software Engineer</h3>
                            <p class="qualification__description"> It provides a convenient way for potential clients to
                                view your work while also allowing you to expand on your skills and services.</p>
                            <span class="qualification__date">2011 - 2015</span>
                        </div>
                    </div>
                </div>
                <div class="qualification__footer">
                    <p class="qualification__footer-text">See my full resume</p>
                    <a href="#" class="btn btn--primary">Resume</a>
                </div>
            </div>
        </section>

      
        <section id="service" class="section service">
            <div class="container">
                <div class="section__header">
                    <h2 class="section__title">Services</h2>
                    <span class="section__subtitle">What I do</span>
                </div>
                <div class="d-grid service__wrapper">
                   
                    <div class="service__card">
                        <div class="service__icon">
                            <i class="ri-layout-4-fill"></i>
                        </div>
                        <h3 class="service__title">Frontend<br/>Development</h3>
                        <a href="#" class="service__link">Know More</a>
                    </div>
                
                    <div class="service__card">
                        <div class="service__icon">
                            <i class="ri-code-s-slash-line"></i>
                        </div>
                        <h3 class="service__title">Backend<br/> Development</h3>
                        <a href="#" class="service__link">Know More</a>
                    </div>
                 
                    <div class="service__card">
                        <div class="service__icon">
                            <i class="ri-pen-nib-fill"></i>
                        </div>
                        <h3 class="service__title">UI/UX<br/> Design</h3>
                        <a href="#" class="service__link">Know More</a>
                    </div>
                </div>
            </div>
        </section>

        
        <section id="project" class="section project">
            <div class="container">
                <div class="section__header">
                    <h2 class="section__title">Projects</h2>
                    <span class="section__subtitle">My recent work</span>
                </div>
                <div class="d-grid project__wrapper">
                
                    <div class="project__content">
                   <Image src={pr1} alt='pic2.jpeg'/>
                      
                        <h3 class="project__title">Agency Website</h3>
                        <p class="project__description"> It provides a convenient way for potential clients to view your
                            work while also allowing you to expand on your skills and services.</p>
                        <a href="#" class="project__link">View Project
                            <i class="ri-arrow-right-line"></i></a>
                    </div>
                 
                    <div class="project__content">
                   <Image src={pr2} alt='pic2.jpeg'/>
                       
                        <h3 class="project__title">Crypto Application</h3>
                        <p class="project__description"> It provides a convenient way for potential clients to view your
                            work while also allowing you to expand on your skills and services.</p>
                        <a href="#" class="project__link">View Project
                            <i class="ri-arrow-right-line"></i></a>
                    </div>
                
                    <div class="project__content">
                   <Image src={pr3} alt='pic2.jpeg'/>
                       
                        <h3 class="project__title">Ecommerce Website</h3>
                        <p class="project__description"> It provides a convenient way for potential clients to view your
                            work while also allowing you to expand on your skills and services.</p>
                        <a href="#" class="project__link">View Project
                            <i class="ri-arrow-right-line"></i></a>
                    </div>
                </div>
            </div>
        </section>

       
        <section id="testimonial" class="section testimonial">
            <div class="container">
                <div class="section__header">
                    <h2 class="section__title">Testimonials</h2>
                    <span class="section__subtitle">What my clients say</span>
                </div>
                <div class="testimonial__wrapper swiper">

                    <div class="swiper-wrapper">
                      
                        <div class="testimonial__card swiper-slide">
                   <Image src={t1} alt='pic2.jpeg'/>
                           
                            <div class="testimonial__content">
                                <p class="testimonial__description"> It provides a convenient way for potential clients
                                    to view your work while also allowing you to expand on your skills and services.</p>
                                <h3 class="testimonial__name">Natasha Smith</h3>
                                <span class="testimonial__occupation">UI/UX Designer at Dribbble</span>
                            </div>
                        </div>
                       
                        <div class="testimonial__card swiper-slide">
                   <Image src={t2} alt='pic2.jpeg'/>
                           
                            <div class="testimonial__content">
                                <p class="testimonial__description"> It provides a convenient way for potential clients
                                    to view your work while also allowing you to expand on your skills and services.</p>
                                <h3 class="testimonial__name">John Clarke</h3>
                                <span class="testimonial__occupation">Web Developer at Facebook</span>
                            </div>
                        </div>
                       
                        <div class="testimonial__card swiper-slide">
                   <Image src={t3} alt='pic2.jpeg'/>
                           
                            <div class="testimonial__content">
                                <p class="testimonial__description"> It provides a convenient way for potential clients
                                    to view your work while also allowing you to expand on your skills and services.</p>
                                <h3 class="testimonial__name">Emily Walker</h3>
                                <span class="testimonial__occupation">Backend Developer at Google
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </section>

       
        <section id="contact" class="section contact">
            <div class="container">
                <div class="d-grid contact__wrapper">
                    <div class="contact__content">
                        <h2 class="contact__title">Interested in working together? Let's talk</h2>
                        <p class="contact__description">
                            It provides a convenient way for potential clients to view your work while also allowing you
                            to expand on your skills and services.
                        </p>
                    </div>
                    <div class="contact__btn">
                        <a href="#" class="btn btn--secondary">Get in touch</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
   
    <footer id="footer" class="footer">
        <div class="container">
            <div class="d-grid footer__wrapper">
                <div class="footer__content">
                    <h4 class="footer__title">Follow Me</h4>
                    <ul class="footer__social-list">
                        <li class="footer__social-item">
                            <a href="#" class="footer__social-link">
                                <i class="ri-facebook-fill"></i>
                            </a>
                        </li>
                        <li class="footer__social-item">
                            <a href="#" class="footer__social-link">
                                <i class="ri-instagram-fill"></i>
                            </a>
                        </li>
                        <li class="footer__social-item">
                            <a href="#" class="footer__social-link">
                                <i class="ri-twitter-fill"></i>
                            </a>
                        </li>
                        <li class="footer__social-item">
                            <a href="#" class="footer__social-link">
                                <i class="ri-github-fill"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer__content">
                    <h4 class="footer__title">Email Me</h4>
                    <a href="#" class="footer__contact">contact@shri.com</a>
                </div>
                <div class="footer__content">
                    <h4 class="footer__title">Call Me</h4>
                    <a href="#" class="footer__contact">(123) 456 - 789</a>
                </div>
            </div>
            <p class="footer__copyright">&copy; 2023 Copyright. All Rights Reserved</p>
        </div>
    </footer>
 </>
  )
}

export default page;