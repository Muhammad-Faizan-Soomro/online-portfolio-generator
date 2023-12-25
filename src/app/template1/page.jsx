"use client"
import React from "react";
import './style.css';
import Image from "next/image";
import pic1 from '../../../public/template1/bithi.jpg'
import pic2 from '../../../public/template1/course (1).jpg'
import pic3 from '../../../public/template1/course (2).jpg'
import pic4 from '../../../public/template1/course (3).jpg'


function page() {
    return (
        <>


            <nav>
                <div className="container nav_container">
                    <a href="#">
                        <h4><span>Bi</span>thi</h4>
                    </a>
                    <ul className="nav_menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#service">Service</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <button id="open-menu-btn"><i className="fa-solid fa-bars"></i></button>
                    <button id="close-menu-btn"><i className="fa-solid fa-xmark"></i></button>
                </div>
            </nav>


            <header>
                <div className="container header_container" id="home">
                    <div className="header_left">
                        <div className="header_left_img">
                            <Image  src={pic1} alt="pic1.png" />
                        </div>
                    </div>
                    <div className="header_right">
                        <div className="text-1">Hello, this is</div>
                        <div className="text-2">Hosne Ara Bithi</div>
                        <div className="text-3">And I'm a Web developer <span className="typing"></span></div>
                        <a target="_blank" href="
                https://www.facebook.com/hosnearabithi.bithi?mibextid=ZbWKwL" className="btn">Hire Me</a>
                    </div>
                </div>
            </header>
            <section className="about" id="about">
                <h2 className="border_bottom">About Me</h2>
                <div className="container about_container">
                    <div className="about-text">
                        <div className="text">
                            I am Bithi and I'm a Web developer <span className="typing-2"></span>
                        </div>
                        <p>At present, I am studying at Daffodil International University department of CSE. As an engineering student I have many ideas to make people's life easy and comfortable. So, I have decided to work in networking site. In this generation, face to face communication is very rear. So social networking is very important to communicate each other. In future, I want to do job in IT sector.</p>
                        <a href="https://drive.google.com/file/d/1LIoBRlbU1McXZ8SkAa3glFsIvvzwWLHd/view?usp=sharing" className="btn">Download CV</a>
                    </div>
                </div>
            </section>



            <div className="services" id="service">
                <h2 className="border_bottom">My Services</h2>
                <div className="container services_container">
                    <div className="cards">
                        <div className="card">
                            <div className="sbox">
                                <i className="fa-solid fa-code"></i>
                                <h3>Web Design</h3>
                                <p>
                                    Web design is a crucial skill in today's digital age. A well-designed website can make all the difference in attracting and retaining customers, as well as conveying a professional image for your brand.</p>
                                <a href="#">Learn More</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="sbox">
                                <i className="fa-solid fa-file-code"></i>
                                <h3>PSD to HTML</h3>
                                <p>HTML is a coding language used for creating and designing websites. Having HTML skills can demonstrate proficiency in web development and design which is very helpful for us. </p>
                                <a href="#">Learn More</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="sbox">
                                <i className="fa-solid fa-laptop-code"></i>
                                <h3>Web Development</h3>
                                <p>Web development is a highly sought-after skill in today's job market. With the increasing demand for online presence, having expertise in web development can be a valuable asset to any organization.</p>
                                <a href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="skills" id="skills">
                <div className="new">
                    <h2 className="border_bottom">My Skills</h2>
                </div>
                <div className="container skills_container">
                    <div className="bar">
                        <div className="info">
                            <span>HTML</span>
                        </div>
                        <div className="progress-line html">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>CSS</span>
                        </div>
                        <div className="progress-line css">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>JQuery</span>
                        </div>
                        <div className="progress-line jquery">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>Python</span>
                        </div>
                        <div className="progress-line python">
                            <span></span>
                        </div>
                    </div>
                    <div className="bar">
                        <div className="info">
                            <span>MySQL</span>
                        </div>
                        <div className="progress-line mysql">
                            <span></span>
                        </div>
                    </div>

                </div>
            </div>



            <section className="qualification" id="qualification">
                <div className="qualification-content">
                    <div className="qualification-div">
                        <h2 id="education"  >My Education</h2>
                        <div className="qualification-item">
                            <h4 className="qualification-title">Secondary School Certificate</h4>
                            <h5 className="qualification-sub-title">Bindubashini Govt. Girl's High School / 2014-2016</h5>
                            <p className="qualification-description">
                                Here I have experienced basic knowledge of computer from my school computer training center and I have got first position from that training center in Lab exam
                            </p>
                        </div>
                        <hr />
                        <div className="qualification-item">
                            <h4 className="qualification-title">Higher Secondary School Certificate</h4>
                            <h5 className="qualification-sub-title">Kumyudini Govt. College / 2016-2018</h5>
                            <p className="qualification-description">
                                Here I have experienced basic knowledge of programming language from academic course which was ICT and I have got first division in that course
                            </p>
                        </div>
                        <hr />
                        <div className="qualification-item">
                            <h4 className="qualification-title">B.Sc. in Computer Science & Engineering</h4>
                            <h5 className="qualification-sub-title">Daffodil International University / 2020-2024</h5>
                            <p className="qualification-description">
                                I have gathered knowledge in differnt skill area like programming knowledge(C,C++,Java,Python,PHP,C#,Assembly language), OS(linux,Windows), technologies(Android App Development,Unity 3D AR App development,web development)
                            </p>
                        </div>
                    </div>
                </div>

            </section>


            <div className="courses" id="courses">
                <h2 className="border_bottom">
                    My Pupular Courses
                </h2>
                <div className="container courses_container">
                    <article className="course">
                        <div className="course_image">
                            <Image src={pic2} alt="Course1" />
                        </div>
                        <div className="course_info">
                            <h4>Responsive Ecommerce Website Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iure eius placeat?</p>
                            <a href="#" className="btn">Learn More</a>
                        </div>
                    </article>

                    <article className="course">
                        <div className="course_image">
                            <Image src={pic3} alt="Course 2" />
                        </div>
                        <div className="course_info">
                            <h4>Responsive Business Website Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iure eius placeat?</p>
                            <a href="#" className="btn">Learn More</a>
                        </div>
                    </article>

                    <article className="course">
                        <div className="course_image">
                            <Image src={pic4} alt="Course 3" />
                        </div>
                        <div className="course_info">
                            <h4>Responsive Landing Page Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iure eius placeat?</p>
                            <a href="#" className="btn">Learn More</a>
                        </div>
                    </article>

                </div>
            </div>



            <footer>
                <div className="container footer_container">
                    <div className="footer_1">
                        <a href="index.html" className="footer_logo">
                            <h4>BITHI</h4>
                        </a>
                        <p>I am from Tangail. At present, I am styding at Daffodil International University department of CSE</p>
                    </div>

                    <div className="footer_2">
                        <h4>Permalinks</h4>
                        <ul className="permalinks">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#courses">Courses</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer_3">
                        <h4>Privacy</h4>
                        <ul className="privacy">
                            <li><a href="#">Privacy & Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Refund Ploicy</a></li>
                        </ul>
                    </div>

                    <div className="footer_4">
                        <h4 id="contact">Contact Me</h4>
                        <div>
                            <p>+92 1234567890</p>
                            <p classNameName="mail">GOOGLE@google.com</p>
                        </div>
                    </div>
                    <ul classNameName="footer_social">
                        <li><a target="_blank" href="https://www.facebook.com/"><i classNameName="fa-brands fa-facebook-f"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/"><i classNameName="fa-brands fa-linkedin"></i></a></li>
                        <li><a target="_blank" href=""><i classNameName="fa-brands fa-youtube"></i></a></li>
                    </ul>

                    <div classNameName="footer_copyright">
                        <small>Copyright &copy; DEVELOPER BITHI</small>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default page;