import React from "react";
import './style.css'
import p1 from '../../public/template6/1385382.jpg'
import p2 from '../../public/template6/austin-poon-JO_S6ewBqAk-unsplash.jpg'
// import p3 from '../../public/template6/image3.jpg'
import p4 from '../../public/template6/jan-vlacuha-Rns_A8bJ_dQ-unsplash.jpg'
import p5 from '../../public/template6/kevin-canlas-QYHehJ9Iovs-unsplash.jpg'
import p6 from '../../public/template6/nubelson-fernandes--Xqckh_XVU4-unsplash.jpg'
import Image from "next/image";

function page() {
  return (
    <>
      <header class="header">
            <a href="#" class="logo">Portfolio</a>
            <i class='bx bx-menu' id="menu-icon"></i>
            <nav class="navbar">
                <a href="#home" class="active">Home</a>
                <a href="#about">ABOUT</a>
                <a href="#services">SERVICES</a>
                <a href="#portfolio">PORTFOLIO</a>
                <a href="#contact">CONTACT</a>
            </nav>
        </header>
        <section class="home" id="home">
            <div class="home-content">
                <h3>Hello,It's Me</h3>
                <h1>Shreya</h1>
                <h3>And I'm a <span class="multiple-text"></span></h3>
                <div class="social-media">
                    <a href="#"><i class='bx bxl-github'></i></a>
                    <a href="#"><i class='bx bxs-envelope'></i></a>
                    <a href="#"><i class='bx bxl-instagram' ></i></a>
                    <a href="#"><i class='bx bxl-linkedin-square' ></i></a>
                </div>
                <a href="C:\Users\shrey\Downloads\B.-Software-Engineer.docx" class="btn">Download CV</a>
            </div>
            <div class="home-img">
                <Image src={p4} alt=""/>
            </div> 
        </section>
        <section class="about" id="about">
            <div class="about-img">
           
            <Image src={p1} alt=""/>

            </div>
            <div class="about-content">
                <h2 class="heading">About<span>Me</span></h2>
                <h3>Frontend Developer</h3>
                <p>Frontend developer with experience building singlre-page web application and a knack for creating attractive user interfaces.
                    skilled experience in javascript,HTML,CSS,PHP,BOOTSTRAP. </p>
                 <a href="#"class="btn">Read More</a>   
            </div>
        </section>
        <section class="services"id="services">
            <h2 class="heading">Our<span>Services</span></h2>

            <div class="services-container">
                <div class="services-box">
                    <i class='bx bx-code-alt'></i>
                    <h3>Web Development</h3>
                    <p>Motivated designer and developer
                         with experience creating custom websites through PHP and CSS. 
                         Strong collaboration skills and proven history of application development. DHTML and JavaScript. MS Access and MySQL.</p>
                    <a href="#"class="btn">Read More</a>
                </div>
        
                <div class="services-box">
                    <i class='bx bx-crop' ></i>
                    <h3>UI/UX Design</h3>
                    <p>You cannot make a good design if you do not understand people; design is made for people.</p>
                    <a href="#"class="btn">Read More</a>
                </div>
            
                <div class="services-box">
                    <i class='bx bxl-instagram-alt' ></i>
                    <h3>App Design</h3>
                    <p>I'm UI/UX Designer with a great passion to my work. The main goal is to create modern, attractive and user-friendly interfaces and find creative and simple solutions for your business.
                        </p>
                    <a href="#"class="btn">Read More</a>
                </div>
            </div>
        </section>
        <section class="portfolio"id="portfolio">
            <h2 class="heading">Latest<span>Project</span></h2>
            <div class="portfolio-container">
                <div class="portfolio-box">
                   
                <Image src={p4} alt="p3.png"/>

                    <div class="portfolio-layer">
                        <h4>Perssonal Portfolio</h4>
                        <p>In this project I try making my own portfolio website for myself. Showcase my projects, my social media handles, my experience on the website.</p>
                        <a href="#"><i class='bx bx-link-external' ></i></a>
                    </div>
                </div>
                <div class="portfolio-box">
               
                <Image src={p2} alt="p3.png"/>

                    <div class="portfolio-layer">
                        <h4>dynamics website Deployment in AWS</h4>
                        <p>In this project I try deployed dynamics website in AWS.so that we can add deleted the data by connecting to databases.</p>
                        <a href="#"><i class='bx bx-link-external' ></i></a>
                    </div>
                </div>
                <div class="portfolio-box">
             

                <Image src={p4} alt="p3.png"/>

                    <div class="portfolio-layer">
                        <h4>Iris flower detection</h4>
                        <p>In this project I try detect the iris flower type by using machine learning predication model.And deployed in streamlit python</p>
                        <a href="#"><i class='bx bx-link-external' ></i></a>
                    </div>
                </div>
                <div class="portfolio-box">
                
                <Image src={p5} alt="p3.png"/>

                   
                    <div class="portfolio-layer">
                        <h4>Cab Booking </h4>
                        <p>In this project we can book a cab by using java.</p>
                        <a href="#"><i class='bx bx-link-external' ></i></a>
                    </div>
                </div>
            </div>
        </section>
        <section class="contact"id="contact">
            <h2 class="heading">Contact<span>ME!</span></h2>

            <form action="#" name="submit-to-google-sheet">
                <div class="input-box">
                    <input type="text" name="Name" placeholder="Full Name"/>
                    <input type="email" name="Email Address" placeholder="Email Address"/>
                </div>
                <div class="input-box">
                    <input type="number" name="Mobile Number"placeholder="Mobile Number"/>
                    <input type="text"name="Email Subject" placeholder="Email Subject"/>
                </div>
                <textarea name="Your Message" id="" cols="30" rows="10"placeholder="Your Message"></textarea>
                <input type="submit" value="Send Message"class="btn"/>
            </form>
            <span id="msg"></span>
        </section>

        <footer class="footer">
            <div class="footer-text">
                <p>Copyright &copy; 2023 by Shreya | All Rights Reserved.</p>
            </div>
            <div class="footer-iconTop">
                <a href="#home"><i class='bx bx-up-arrow-alt' ></i></a>
            </div>
        </footer>
           
    </>
  );
}

export default page;
