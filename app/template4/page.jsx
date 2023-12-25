"use client";
import Link from "next/link";
import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import pic from "../../public/template4/pic.svg";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import pic12 from "../../public/template4/pic1.svg";
import pic2 from "../../public/template4/pic2.svg";
import pic3 from "../../public/template4/pic3.png";
import pic4 from "../../public/template4/pic4.png";
import pic5 from "../../public/template4/pic5.png";
import pic1 from "../../public/template9/projects/login.png";
import { CiLocationArrow1 } from "react-icons/ci";
import { ImCross } from "react-icons/im";

export default function Page() {
  const [hide, sethide] = useState(true);
  return (
    <>
      <section>
        <div className="nav  w-full h-14 flex items-center justify-evenly border-b-2">
          <h1 className="text-[#551a8b] font-serif flex items-center text-xl md:text-3xl">
            SHEHRYAR NASIR <FaCode />{" "}
          </h1>

          <button
            className="md:hidden"
            onClick={() => {
              sethide(!hide);
            }}
          >
           {hide?<FaBars/>:<ImCross/>}
          </button>

          <div className="links hidden text-xl  md:flex items-center  gap-20">
            <Link
              href={"#about"}
              className="hover:text-[#551a8b] hover:border-b-2  hover:border-[#551a8b]"
            >
              About Me
            </Link>

            <Link
              href={"#skills"}
              className="hover:text-[#551a8b] hover:border-b-2  hover:border-[#551a8b]"
            >
              Skills
            </Link>

            <Link
              href={"#proj"}
              className="hover:text-[#551a8b] hover:border-b-2  hover:border-[#551a8b]"
            >
              Projects
            </Link>

            <Link
              href={"#contact"}
              className="hover:text-[#551a8b] hover:border-b-2  hover:border-[#551a8b]"
            >
              Contact
            </Link>

            <Link
              href={"#exp"}
              className="hover:text-[#551a8b] hover:border-b-2  hover:border-[#551a8b]"
            >
              Experience
            </Link>
          </div>
        </div>
        <div
          className={` absolute bg-gray-400 ${
            hide
              ? "hidden"
              : "block"
          }  m-links w-screen text-xl flex flex-col items-center justify-evenly  h-[400px] `}
        >
          <Link
            href={"#about"}
            className="hover:text-[#551a8b] hover:border-b-2  hover:border-[#551a8b]"
          >
            About Me
          </Link>

          <Link
            href={"#skills"}
            className="hover:text-[#551a8b] hover:border-b-2  hover:border-[#551a8b]"
          >
            Skills
          </Link>

          <Link
            href={"#proj"}
            className="hover:text-[#551a8b] hover:border-b-2  hover:border-[#551a8b]"
          >
            Projects
          </Link>

          <Link
            href={"#contact"}
            className="hover:text-[#551a8b] hover:border-b-2  hover:border-[#551a8b]"
          >
            Contact
          </Link>

          <Link
            href={"#exp"}
            className="hover:text-[#551a8b] hover:border-b-2  hover:border-[#551a8b]"
          >
            Experience
          </Link>
        </div>
      </section>

      <section>
        <div className="main w-full h-full flex flex-col lg:flex-row">
          <div className="r lg:w-[50%] w-full h-full flex items-center justify-center">
            <div className="content flex flex-col items-center gap-10 mt-10">
              <h1 className="text-4xl font-bold  lg:text-7xl">
                Hi all,Im Shehryar ✌️
              </h1>
              <p className="text-lg text-gray-400 lg:text-3xl">
                A passionate Full Stack Software Developer 🚀 <br />
                having an experience of building Web and <br /> Mobile /React
                Native and some other cool <br />
                libraries and frameworks
              </p>

              <div className="links flex  gap-4">
                <FaFacebook
                  size={30}
                  className="bg-blue-600 rounded-sm text-white"
                />
                <FaGithub
                  size={30}
                  className="bg-gray-600 rounded-sm text-white"
                />
                <FaLinkedin
                  size={30}
                  className="bg-blue-300 rounded-sm text-white"
                />
                <IoMdMail
                  size={30}
                  className="bg-red-600 rounded-sm text-white"
                />
              </div>

              <div className="btn flex gap-3">
                <button className="bg-[#551a8b] text-white font-bold px-8 py-3 rounded-sm">
                  Contact Me
                </button>
                <button className="bg-[#551a8b] text-white font-bold px-8 py-3 rounded-sm">
                  See My Resume
                </button>
              </div>
            </div>
          </div>
          <div className="r lg:w-[50%]  w-full h-full flex items-center justify-center">
            <Image src={pic} alt="pic.png" />
          </div>
        </div>
      </section>

      <section id="about">
        <div className="main flex flex-col lg:flex-row h-full">
          <div className="l flex-1 flex flex-col gap-10 overflow-hidden">
            <h1 className="text-center text-3xl ">What I do</h1>
            <p className="text-center text-gray-400 text-xl">
              CRAZY FULL STACK DEVELOPER WHO <br />
              WANTS TO EXPLORE EVERY TECH STACK
            </p>
            <div className="div grid grid-cols-3 gap-10 place-items-center">
              <div className="div flex flex-col">
                <FaHtml5 size={30} className="text-gray-400" />
                <p className="text-gray-400">HTML</p>
              </div>
              <div className="div flex flex-col">
                <FaCss3 size={30} className="text-gray-400" />
                <p className="text-gray-400">CSS</p>
              </div>
              <div className="div flex flex-col">
                <IoLogoJavascript size={30} className="text-gray-400" />
                <p className="text-gray-400">JAVASCRIPT</p>
              </div>
              <div className="div flex flex-col">
                <FaReact size={30} className="text-gray-400" />
                <p className="text-gray-400">REACT</p>
              </div>
              <div className="div flex flex-col">
                <FaPython size={30} className="text-gray-400" />
                <p className="text-gray-400">Python</p>
              </div>
              <div className="div flex flex-col">
                <TbBrandNextjs size={30} className="text-gray-400" />
                <p className="text-gray-400">NEXT</p>
              </div>
              <div className="div flex flex-col">
                <DiDjango size={30} className="text-gray-400" />
                <p className="text-gray-400">DJANGO</p>
              </div>
              <div className="div flex flex-col">
                <FaDatabase size={30} className="text-gray-400" />
                <p className="text-gray-400">SQL</p>
              </div>
            </div>
            <p className="px-6 text-xl text-gray-400">
              ⚡Develop highly interactive Front end / <br /> User Interfaces
              for your web and mobile <br /> applications
            </p>
            <p className="px-6 text-xl text-gray-400">
              ⚡Progressive Web Applications (PWA) <br />
              in normal and SPA Stacks
            </p>
            <p className="px-6 text-xl text-gray-400">
              ⚡Integration of third party services such <br />
              as Firebase / AWS / Digital Ocean{" "}
            </p>
          </div>
          <div className="r flex-1 flex items-center justify-center ">
            <Image src={pic12} alt="pic.png" className="w-full" />
          </div>
        </div>
      </section>

      <section id="skills" className="mt-4">
        <h1 className="text-center text-3xl lg:text-4xl">Proficiency</h1>
        <div className="skills w-full h-full lg:flex lg:justify-center lg:items-center ">
          <div className="l lg:w-[50%]">
            <div className="div flex flex-col gap-4  items-center pt-10 justify-center">
              <p className="text-xl">Frontend /Desgin</p>
              <div className="div relative w-[360px]  lg:w-[500px] h-[20px] bg-[#f3efef] border-1 rounded ">
                <div className="inner absolute h-[20px] w-[340px] lg:w-[450px] bg-[#AAA5ff]"></div>
              </div>
              <p className="text-xl">Backend</p>
              <div className="div relative w-[360px] lg:w-[500px] h-[20px] bg-[#f3efef] border-1 rounded ">
                <div className="inner absolute h-[20px] w-[280px] lg:w-[380px] bg-[#AAA5ff]"></div>
              </div>

              <p className="text-xl">Programming</p>
              <div className="div relative w-[360px] lg:w-[500px] h-[20px] bg-[#f3efef] border-1 rounded ">
                <div className="inner absolute h-[20px] w-[200px] lg:w-[300px] bg-[#AAA5ff]"></div>
              </div>
            </div>
          </div>
          <div className="r lg:w-[50%] lg:block hidden ">
            <Image src={pic2} alt="pic2.png" />
          </div>
        </div>
      </section>

      <section id="exp">
        <h1 className="text-center text-3xl mt-4">Experiences</h1>
        <div className="exp grid grid-cols-1 lg:grid-cols-3 place-items-center pt-10 w-full h-full gap-4">
          <div className="div w-[380px] h-[450px] bg-white shadow-md shadow-black rounded-lg ">
            <div className="div w-[380px] h-[120px] flex flex-col items-center justify-evenly  bg-blue-700">
              <p className="text-center text-white pt-8 text-xl font-bold">
                Facebook
              </p>
              <Image
                src={pic3}
                alt="pic3.png"
                width={80}
                className="relative top-10"
              />
            </div>
            <div className="div flex flex-col pt-16 gap-8 text-center  text-xl">
              <h1 className="font-bold">Software Enginner</h1>
              <p>June 2018 - Present</p>
              <p className="text-gray-400">
                Working as a Front-End Developer <br />
                using React as a Tech Stack
              </p>
            </div>
          </div>
          <div className="div w-[380px] h-[450px] bg-white shadow-md shadow-black rounded-lg ">
            <div className="div w-[380px] h-[120px] flex flex-col items-center justify-evenly  bg-red-700">
              <p className="text-center text-white pt-8 text-xl font-bold">
                Quora
              </p>
              <Image
                src={pic4}
                alt="pic3.png"
                width={80}
                className="relative top-10 rounded-full"
              />
            </div>
            <div className="div flex flex-col pt-16 gap-8 text-center  text-xl">
              <h1 className="font-bold">Front-End Developer</h1>
              <p>June 2019 - July 2020</p>
              <p className="text-gray-400">
                Working as a Front-End Developer <br />
                using React as a Tech Stack
              </p>
            </div>
          </div>

          <div className="div w-[380px] h-[450px] bg-white shadow-md shadow-black rounded-lg ">
            <div className="div w-[380px] h-[120px] flex flex-col items-center justify-evenly  bg-red-400">
              <p className="text-center text-white pt-8 text-xl font-bold">
                AinBnB
              </p>
              <Image
                src={pic5}
                alt="pic3.png"
                width={80}
                className="relative top-10 rounded-full"
              />
            </div>
            <div className="div flex flex-col pt-16 gap-8 text-center  text-xl">
              <h1 className="font-bold">Software Engineering Intern</h1>
              <p>June 2017 - July 2018</p>
              <p className="text-gray-400">
                Working as a Front-End Developer <br />
                using React as a Tech Stack
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="proj">
        <div className="projects dark:bg-[#1e293b] w-full h-full mt-4">
          <h1 className="text-[#14b8a6] text-center font-bold text-2xl mt-2 lg:text-4xl">
            Portfolio
          </h1>
          <h1 className="text-[#0f172a]  dark:text-white font-extrabold text-4xl text-center mt-2">
            Recent Projects
          </h1>
          <p className="text-gray-400 text-lg text-center">
            Check Out Some Of My Work 😊
          </p>
          <div className="w-full h-full mt-4 grid gap-4  grid-cols-1 md:grid-cols-3  place-items-center">
            <div className="card  flex flex-col gap-4 w-[360px] h-[350px]  bg-white shadow-md shadow-black">
              <Image src={pic1} alt="pic1.png" />
              <h1 className="text-3xl font-bold text-center">Login Page</h1>
              <p>Login Page Using Html Css</p>
              <div className="btn flex gap-4">
                <Link href={"#"}>
                  <CiLocationArrow1
                    size={30}
                    className="border-2 border-gray-500 rounded-full"
                  />
                </Link>
                <Link href={"#"}>
                  <FaGithub
                    size={30}
                    className="border-2 border-gray-500 rounded-full"
                  />
                </Link>
              </div>
            </div>
            <div className="card  flex flex-col gap-4 w-[360px] h-[350px]  bg-white shadow-md shadow-black">
              <Image src={pic1} alt="pic1.png" />
              <h1 className="text-3xl font-bold text-center">Login Page</h1>
              <p>Login Page Using Html Css</p>
              <div className="btn flex gap-4">
                <Link href={"#"}>
                  <CiLocationArrow1
                    size={30}
                    className="border-2 border-gray-500 rounded-full"
                  />
                </Link>
                <Link href={"#"}>
                  <FaGithub
                    size={30}
                    className="border-2 border-gray-500 rounded-full"
                  />
                </Link>
              </div>
            </div>
            <div className="card  flex flex-col gap-4 w-[360px] h-[350px]  bg-white shadow-md shadow-black">
              <Image src={pic1} alt="pic1.png" />
              <h1 className="text-3xl font-bold text-center">Login Page</h1>
              <p>Login Page Using Html Css</p>
              <div className="btn flex gap-4">
                <Link href={"#"}>
                  <CiLocationArrow1
                    size={30}
                    className="border-2 border-gray-500 rounded-full"
                  />
                </Link>
                <Link href={"#"}>
                  <FaGithub
                    size={30}
                    className="border-2 border-gray-500 rounded-full"
                  />
                </Link>
              </div>
            </div>
            <div className="card  flex flex-col gap-4 w-[360px] h-[350px]  bg-white shadow-md shadow-black">
              <Image src={pic1} alt="pic1.png" />
              <h1 className="text-3xl font-bold text-center">Login Page</h1>
              <p>Login Page Using Html Css</p>
              <div className="btn flex gap-4">
                <Link href={"#"}>
                  <CiLocationArrow1
                    size={30}
                    className="border-2 border-gray-500 rounded-full"
                  />
                </Link>
                <Link href={"#"}>
                  <FaGithub
                    size={30}
                    className="border-2 border-gray-500 rounded-full"
                  />
                </Link>
              </div>
            </div>
            <div className="card  flex flex-col gap-4 w-[360px] h-[350px]  bg-white shadow-md shadow-black">
              <Image src={pic1} alt="pic1.png" />
              <h1 className="text-3xl font-bold text-center">Login Page</h1>
              <p>Login Page Using Html Css</p>
              <div className="btn flex gap-4">
                <Link href={"#"}>
                  <CiLocationArrow1
                    size={30}
                    className="border-2 border-gray-500 rounded-full"
                  />
                </Link>
                <Link href={"#"}>
                  <FaGithub
                    size={30}
                    className="border-2 border-gray-500 rounded-full"
                  />
                </Link>
              </div>
            </div>
            <div className="card  flex flex-col gap-4 w-[360px] h-[350px]  bg-white shadow-md shadow-black">
              <Image src={pic1} alt="pic1.png" />
              <h1 className="text-3xl font-bold text-center">Login Page</h1>
              <p>Login Page Using Html Css</p>
              <div className="btn flex gap-4">
                <Link href={"#"}>
                  <CiLocationArrow1
                    size={30}
                    className="border-2 border-gray-500 rounded-full"
                  />
                </Link>
                <Link href={"#"}>
                  <FaGithub
                    size={30}
                    className="border-2 border-gray-500 rounded-full"
                  />
                </Link>
              </div>
            </div>
            
         
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contact w-full h-full  mt-4">
          <p className="text-center font-bold text-xl  text-[#551a8b] lg:text-3xl mt-4">
            Contact
          </p>
          <h1 className="text-center text-4xl font-extrabold dark:text-white">
            Get In Touch
          </h1>
          <p className="text-center text-2xl font-bold">
            Talk to us ? Send Us Feedback? ❤️
          </p>
          <div className="form flex flex-col items-center justify-center gap-10">
            <div className="in">
              <p className="text-[#551a8b] text-lg font-bold">Name</p>
              <input
                type="text"
                className="bg-[#e2e8f0] w-[300px] md:w-[600px] h-12 rounded dark:bg-white"
              />
            </div>
            <div className="in">
              <p className="text-[#551a8b] text-lg font-bold">Email</p>
              <input
                type="email"
                className="bg-[#e2e8f0] w-[300px]  md:w-[600px]  h-12 rounded dark:bg-white"
              />
            </div>
            <div className="in">
              <p className="text-[#551a8b] text-lg font-bold">Message</p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="bg-[#e2e8f0]  md:w-[550px]  rounded mr-16 dark:bg-white"
              ></textarea>
            </div>
            <button className="px-14 lg:px-24 py-3 rounded-full  text-white font-bold bg-[#551a8b]">
              Send
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
