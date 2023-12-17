"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { TypeAnimation } from "react-type-animation";
import { BiSolidRightArrow } from "react-icons/bi";
import imgh from "../../public/template9/hero.jpeg";
import img from "../../public/template9/skills/icons8-html-96.png";
import img1 from "../../public/template9/skills/TailwindCSS.png";
import img2 from "../../public/template9/skills/bootstrap.png";
import img3 from "../../public/template9/skills/css.png";
import img4 from "../../public/template9/skills/github.png";
import img5 from "../../public/template9/skills/javascript.png";
import img6 from "../../public/template9/skills/python.png";
import img7 from "../../public/template9/skills/sql.png";
import img8 from "../../public/template9/skills/th.jpg";
import img9 from "../../public/template9/skills/react.png";
import ig from "../../public/template9/projects/Usability.png";
import ig1 from "../../public/template9/projects/microsoft.png.png";
import ig2 from "../../public/template9/projects/movie app.png";
import ig4 from "../../public/template9/projects/Ecommerce.png";
import ig5 from "../../public/template9/projects/portfolio.png";
import ig6 from "../../public/template9/projects/psl.png";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const proj = [
  {
    src: ig1,
    demo: "https://sherry699.github.io/html-tailwind-microsoft-clone/",
    code: "https://github.com/SHERRY699/html-tailwind-microsoft-clone",
  },
  {
    src: ig,
    demo: "https://sherry699.github.io/Usability-hub-clone/",
    code: "https://github.com/SHERRY699/Usability-hub-clone",
  },
  {
    src: ig2,
    demo: "https://sherry690.netlify.app/",
    code: "https://github.com/SHERRY699/Movie-App-Using-React-Js",
  },
  {
    src: ig6,
    demo: "https://github.com/SHERRY699/Psl-Management-System",
    code: "https://github.com/SHERRY699/Psl-Management-System",
  },
  {
    src: ig4,
    demo: "https://sherryecom.netlify.app/",
    code: "https://github.com/SHERRY699/React-Js-E-Commerce-App",
  },
  {
    src: ig5,
    demo: "https://sherry699.github.io/Porfolio-Tailwind/",
    code: "https://github.com/SHERRY699/Porfolio-Tailwind",
  },
];

const skills = [
  {
    name: "HTML",
    src: img,
    color: "shadow-orange-600",
  },
  {
    name: "BOOTSTRAP",
    src: img2,
    color: "shadow-purple-600",
  },
  {
    name: "CSS",
    src: img3,
    color: "shadow-blue-600",
  },
  {
    name: "React",
    src: img9,
    color: "shadow-blue-600",
  },
  {
    name: "DJANGO",
    src: img8,
    color: "shadow-green-600",
  },
  {
    name: "TAILWINDCSS",
    src: img1,
    color: "shadow-blue-600",
  },
  {
    name: "SQL",
    src: img7,
    color: "shadow-blue-400",
  },
  {
    name: "JAVASCRIPT",
    src: img5,
    color: "shadow-yellow-600",
  },
  {
    name: "GITHUB",
    src: img4,
    color: "shadow-white",
  },
  {
    name: "PYTHON",
    src: img6,
    color: "shadow-blue-400",
  },
];

import Image from "next/image";

function page() {
  
  const [hidden, sethidden] = useState(true);

  return (
    <>
      <section>
        <div className="nav bg-black w-full h-20 flex items-center justify-between px-4 md:fixed">
          <a href="#hero">
            <div className="name">
              <h1 className="font-signature text-white">SHERRY</h1>
            </div>
          </a>

          <div className="bars text-white md:hidden">
            <button
              onClick={() => {
                sethidden(!hidden);
              }}
            >
              {hidden ? <FaBars /> : <ImCross />}
            </button>
          </div>
          <div className="links hidden md:flex mr-6 ">
            <ul className="flex gap-10">
              <a
                href="#hero"
                className="text-gray-500 hover:scale-125 duration-200 cursor-pointer"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-500  hover:scale-125 duration-200 cursor-pointer"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-500  hover:scale-125 duration-200 cursor-pointer"
              >
                Skills
              </a>
              <a
                href="#Projects"
                className="text-gray-500  hover:scale-125 duration-200 cursor-pointer"
              >
                Projects
              </a>
              <a
                href="#Contact"
                className="text-gray-500  hover:scale-125 duration-200 cursor-pointer"
              >
                Contacts
              </a>
            </ul>
          </div>
        </div>
        <div
          className={`${
            hidden ? "hidden" : ""
          } mnav w-screen h-screen bg-gray-200`}
        >
          <ul className="  flex flex-col gap-10 items-center justify-center pt-10 text-xl  text-gray-900">
            <button
              onClick={() => {
                sethidden(!hidden);
              }}
            >
              {" "}
              <a
                href="#hero"
                className="text-gray-500 hover:scale-125 duration-200 cursor-pointer"
              >
                Home
              </a>{" "}
            </button>

            <button
              onClick={() => {
                sethidden(!hidden);
              }}
            >
              {" "}
              <a
                href="#about"
                className="text-gray-500  hover:scale-125 duration-200 cursor-pointer"
              >
                About
              </a>{" "}
            </button>

            <button
              onClick={() => {
                sethidden(!hidden);
              }}
            >
              {" "}
              <a
                href="#skills"
                className="text-gray-500  hover:scale-125 duration-200 cursor-pointer"
              >
                Skills
              </a>{" "}
            </button>
            <button
              onClick={() => {
                sethidden(!hidden);
              }}
            >
              {" "}
              <a
                href="#Projects"
                className="text-gray-500  hover:scale-125 duration-200 cursor-pointer"
              >
                Projects
              </a>{" "}
            </button>
            <button
              onClick={() => {
                sethidden(!hidden);
              }}
            >
              {" "}
              <a
                href="#Contact"
                className="text-gray-500  hover:scale-125 duration-200 cursor-pointer"
              >
                Contacts
              </a>{" "}
            </button>
          </ul>
        </div>
      </section>
      <section id="hero">
        <div className="hero  w-full  h-screen bg-gradient-to-b from-black via-black to-gray-800 lg:pt-[50px] ">
          <div className="di  lg:max-w-screen-lg w-screen h-screen  mx-auto px-6 md:py-6 flex flex-col md:flex-row md:items-center md:justify-center ">
            <div className="content  flex flex-col max-w-screen-lg items-center  gap-4">
              <h1 className="text-white font-bold text-2xl mt-6 md:text-7xl">
                I Am A{" "}
                <TypeAnimation
                  sequence={[
                    "FrontEnd Developer",
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    "BackEnd Developer",
                    2000,
                    "React Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={1}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </h1>
              <p className="text-gray-500 mt-2 font-bold">
                I am a Full-Stack developer based in Karachi,Pakistan. I am very
                passionate about improving my coding skills & developing
                applications & websites. Working for myself to improve my
                skills. Love to build Full-Stack clones.
              </p>
              <a
                href="#"
                download="Resume"
                className="group text-white px-6 py-3 flex items-center lg:mr-[430px]  bg-gradient-to-r from-cyan-500 to to-blue-500"
              >
                Resume{" "}
                <span className="text-white ml-2 group-hover:rotate-90 duration-200">
                  <BiSolidRightArrow />
                </span>{" "}
              </a>
            </div>
            <div className="img ml-10 mt-2 lg:w-full">
              <Image
                src={imgh}
                alt=""
                className="w-[300px]  h-[400px] lg:h-[500px]   lg:rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="w-full h-screen  flex flex-col items-center bg-gradient-to-b from-gray-800 to-black pt-20 lg:pt-0">
          <div className="about ">
            <h1 className="text-white text-5xl border-b-4 border-gray-500 font-bold">
              About Me
            </h1>
          </div>
          <div className="d mt-6 text-gray-500 lg:px-28 ">
            <h1 className="text-white text-3xl border-b-4 border-gray-500 font-bold inline-block hover:scale-105 duration-200 ml-4">
              Hi I Am Shehryar Nasir
            </h1>
            <p className="pt-20 lg:text-xl px-4">
              I am a budding web developer residing in Karachi, Pakistan.
              Currently, I'm pursuing my 5th semester of Computer Science at NED
              University. My journey in the world of web development began with
              a deep passion for creating websites that can captivate users.
              I've been eagerly learning the fundamentals of web development,
              including HTML, CSS, and JavaScript. My ultimate goal is to excel
              in this field and contribute to the digital landscape with
              innovative and user-friendly websites. NED University is providing
              me with a strong foundation, and I am determined to realize my
              dream of becoming a skilled web developer.
            </p>
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="d bg-gradient-to-b from-gray-800 to-black w-full h-full">
          <div className="  max-w-screen-lg  pt-10 lg:mt-0">
            <h1 className="text-white text-4xl inline-block  border-b-4 border-gray-500  lg:mt-4 lg:ml-[650px]  ml-4">
              Skills
            </h1>
            <p className="text-gray-500 text-2xl mt-1 lg:ml-[500px] px-4 lg:px-0">
              Technologies I Have Worked With
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 sm:px-2 gap-8  lg:ml-[350px] mt-20 ">
              {skills.map((items) => (
                <div
                  className={`card w-full h-full flex flex-col bg-black hover:scale-105 duration-200 mt-2  shadow-md ${items.color} rounded-lg items-center`}
                >
                  <div className="im ">
                    <Image
                      src={items.src}
                      alt="img"
                      className="rounded-md mt-2 w-[100px] "
                    />
                  </div>
                  <div>
                    <h3 className="text-white text-center font-bold">
                      {items.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="Projects">
        <div className="v  w-full bg-gradient-to-b from-black via-black to-gray-800 ">
          <div className="main lg:max-w-screen-lg ">
            <h1 className="text-white text-4xl inline-block  border-b-4 border-gray-500  lg:ml-[650px] ml-4">
              Portfolio
            </h1>
            <p className="text-gray-500 text-2xl mt-1 lg:ml-[570px] px-4">
              Check Some Of My Work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 sm:px-2 gap-8 max-w-screen-lg lg:ml-56">
            {proj.map((item) => (
              <div className="card w-full h-full flex flex-col bg-black hover:scale-105 duration-200 mt-2 shadow-md shadow-gray-600 rounded-lg ">
                <div className="im ">
                  <Image
                    src={item.src}
                    alt="img"
                    className="rounded-md mt-2 "
                    width={300}
                  />
                </div>
                <div className="but flex justify-evenly">
                  <a
                    href={`${item.demo}`}
                    className="text-yellow-100 px-4 py-2 border-2  hover:scale-105 duration-200 lg:mt-2"
                  >
                    Demo
                  </a>
                  <a
                    href={`${item.code}`}
                    className="text-yellow-100 px-4 py-2  border-2  hover:scale-105 duration-200 lg:mt-2"
                  >
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="Contact"
        className="w-full h-full bg-gradient-to-b from-black via black to-gray-800 pt-10 md:mt-0 md:pt-20"
      >
        <div className="main flex flex-col max-w-screen-lg ">
          <div className="p">
            <h1 className="text-white text-4xl inline-block  border-b-4 border-gray-500  lg:ml-[650px] ml-4">
              Contact
            </h1>
            <p className="text-gray-500 text-xl mt-1 lg:ml-[570px] px-4 lg:px-0 ">
              Submit The Form To Get in Touch with me
            </p>
          </div>
          <div className="f  flex flex-col items-center justify-center w-full">
            <form
              action="https://getform.io/f/a4b27860-4a31-4213-beec-6bba38a57b37"
              method="POST"
              className="flex flex-col   lg:ml-[480px]"
            >
              <input
                type="text"
                className="p-2 my-4 bg-transparent border-2 rounded-md
                text-white focus:outline-none"
                placeholder="Enter Your Name"
                name="name"
              />
              <input
                type="email"
                className="p-2 my-4 bg-transparent border-2 rounded-md
                text-white focus:outline-none"
                placeholder="Enter Your Email"
                name="email"
              />
              <textarea
                name="text"
                id=""
                cols="30"
                rows="10"
                className="p-2 my-4 bg-transparent border-2 rounded-md
                text-white focus:outline-none"
                placeholder="Enter Your Message"
              />
              <div className="b">
                <button className="group text-white px-6 py-3 flex items-center   bg-gradient-to-r from-cyan-500 to to-blue-500">
                  Let's Talk
                  <span className="text-white ml-2 group-hover:rotate-90 duration-200">
                    <BiSolidRightArrow />
                  </span>{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mlinks w-full bg-gradient-to-b from-gray-800 to-black sm:hidden flex items-center justify-center gap-10 pt-6 ">
          <a
            href="https://www.linkedin.com/in/shehryar123/"
            className="text-white"
          >
            {" "}
            <AiFillLinkedin size={30} />
          </a>
          <a href="https://github.com/SHERRY699" className="text-white">
            {" "}
            <AiFillGithub size={30} />
          </a>
          <a href="https://www.facebook.com/Sherry031/" className="text-white">
            <AiFillFacebook size={30} />
          </a>
        </div>
      </section>
    </>
  );
}

export default page;
