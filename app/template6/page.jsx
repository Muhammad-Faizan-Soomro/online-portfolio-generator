import React from 'react'
import './style.css'

function page() {
  return (
   <>
 
 
  <header class="header" role="banner" id="top">
    <div class="row">
     
      <nav class="nav" role="navigation">
        <ul class="nav__items">
         
          <li class="nav__item"><a href="#top" class="nav__link">Home</a></li>
          <li class="nav__item"><a href="#work" class="nav__link">Resume</a></li>
          <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
          <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="header__text-box row">
      <div class="header__text">
     
        <h1 class="heading-primary">
          <span>Prathamesh Gujjeti Goverdhan</span>
        </h1>
        
        <p>A Full Stack web developer</p>
       
        <a href="#contact" class="btn btn--pink">Get in touch</a>
      </div>
    </div>
  </header>

  
  <main role="main">
   
    <section class="work" id="work">
      <div class="row">
        <h2>My Resume</h2>
        <div class="work__boxes">
          <h3>Prathamesh Gujjeti</h3>
        
          <p>
            To learn, achieve, and serve has been my motto in life. Thus, I look forward
            to utilizing my skills and abilities in a challenging and
            creative environment and thereby effectively
            contribute towards the goals of the organization.
          </p>
          <div class="work__box">
            <div class="work__text">
              <h3>Technical Skills :</h3>
              <div class="tech__list">
              
                <div class="tech">
                  <h3 class="tech-name">LANGUAGES:</h3>
                  <p class="tech-description">Python, Java.</p>
                </div>
                <br/>
                <div class="tech">
                  <h3 class="tech-name">WEB TECHNOLOGIES: </h3>
                  <p class="tech-description">HTML, CSS, JavaScript, AngularJS, NodeJS.</p>
                </div>
                <br/>
                <div class="tech">
                  <h3 class="tech-name">DATABASE: </h3>
                  <p class="tech-description">MongoDB, MySQL.</p>
                  <h3 class="tech-name">OTHERS: </h3>
                  <p class="tech-description">Android Studio (Basic).</p>
                </div>
              </div>
              
              <div class="work__links">
                <a id="download-btn"
                  href="https://docs.google.com/document/d/1Ovyir2KbfEkUL66FjWP4RYFd2hkl92pr2akb8zzj-lY/edit?usp=sharing"
                  class="link__text">Download Resume <span>&rarr;</span>
                </a>
              
                <a
                  href="https://docs.google.com/document/d/1Ovyir2KbfEkUL66FjWP4RYFd2hkl92pr2akb8zzj-lY/edit?usp=sharing">
                  <img src="./images/download.png" class="work__code" title="Download" alt="Resume"/>
                </a>
              </div>
            </div>
            <div class="work__image-box">
              <h3 class="job-experience">Education</h3>
             
              <div class="experience">
                <div class="experience-item">
                  <hr/>
                  <div class="college"><br/>
                    <h1>Bachelor of Science in Computer Science </h1>
                    <span class="duration">Year of Passing : 2023</span>
                  </div>
                  <span class="college-name"><a class="institution-link" href="https://sncollege.com/">Shankar Narayan
                      College of Arts, Commerce & Science</a></span>
                </div>
                <br/>
                <div class="experience-item">
                  <hr/>
                  <div class="college"><br/>
                    <h1>Higher Secondary School Certificate</h1>
                    <span class="duration">Year of Passing : 2020</span>
                  </div>
                  <span class="college-name">Vedant Jr. college
                    of Science & Commerce
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section class="about" id="about">
      <div class="row">
        <h2>About Me</h2>
        <div class="about__text">
       
          <p>
            Hii, I am <b>Prathamesh Gujjeti</b>. Currently, let me present myself with a short depiction - a talented
            person
            with a
            <b>BSc degree in Computer Science</b>, mirroring serious areas of strength for me for innovation to complete
            education that serves as the reason for my journey through various aspects of the tech world. I not only
            have
            a strong understanding of the fundamentals of computer science and am proficient in languages like <b>HTML,
              CSS,
              and JavaScript</b>, but I also create captivating and easy-to-use web designs that ensure a smooth user
            experience. Also, my skills extend to dynamic web development tools like <b>AngularJS</b>, enabling me to
            create
            interactive and responsive web applications. I'm also knowledgeable in <b>Java</b>, using its
            strength for
            backend development, constructing comprehensive web solutions that are both functional and visually
            appealing by combining skills from the front-end and back-end.
          </p>
        
          <a href="#work" class="btn">My Resume</a>
        </div>
      </div>
    </section>
  </main>

 
  <section class="contact" id="contact">
    <div class="row">
      <h2>Get in Touch</h2>
      <div class="contact__info">
    
        <p>
          Are you searching for a quick performing and easy-to-use site to
          represent your product or business? Or looking for any sort of
          meeting? Or need to seek clarification on some pressing issues? Or have some
          advice for me
          or just want to say "Hello 👋"? Regardless, go ahead and let me know. I
          will do my best to respond back. 😊 The quickest way of reaching
          me is through an email.
        </p>
      
        <a href="mailto:prathameshgujjeti9321@gmail.com" class="btn">prathameshgujjeti9321@gmail.com</a>
      </div>
    </div>
  </section>


  <footer role="contentinfo" class="footer">
    <div class="row">
      <ul class="footer__social-links">
        
        <li class="footer__social-link-item">
          <a href="https://instagram.com/_prathamesh_gujjeti_03?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            title="Link to Instagram Profile">
            <img src="./images/instagram-svgrepo-com.svg" class="footer__social-image" alt="Instagram"/>
          </a>
        </li>
        <li class="footer__social-link-item">
          <a href="https://github.com/Prathameshgujjeti" title="Link to Github Profile">
            <img src="./images/github.svg" class="footer__social-image" alt="Github"/>
          </a>
        </li>
        <li class="footer__social-link-item">
          <a href="https://www.facebook.com/prathamesh.gujjeti.5" title="Link to Facebook Profile">
            <img src="./images/facebook-svgrepo-com.svg" class="footer__social-image" alt="Facebook"/>
          </a>
        </li>
        <li class="footer__social-link-item">
          <a href="https://www.linkedin.com/in/prathamesh-gujjeti-3763861bb" title="Link to Linkedin Profile">
            <img src="./images/linkedin.svg" class="footer__social-image" alt="Linkedin"/>
          </a>
        </li>
      </ul>
      <p>
        &copy; Copyright 2023 by Prathamesh Gujjeti
      </p>
    </div>
  </footer>


  <a href="#top" class="back-to-top" title="Back to Top">
    <img src="./images/arrow-up.svg" alt="Back to Top" class="back-to-top__image" />
  </a>

   </>
  )
}

export default page; 