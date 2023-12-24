"use client";
import React from "react";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import pic from "../../public/template3/hero.png";
import { useTheme } from "next-themes";
import pic1 from "../../public/template9/projects/login.png";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import pic2 from "../../public/template3/Google.png";
import pic3 from "../../public/template3/Gojek.png";
import pic4 from "../../public/template3/Tokopedia.png";
import pic5 from "../../public/template3/traveloka.png";

function page() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <section>
        <div className="nav w-screen h-14 fixed top-0 dark:opacity-80 border-b-2 dark:border-0  mb-2   dark:bg-[#0f172a] flex items-center justify-evenly">
          <p className="text-[#14b8a6] text-xl font-bold">shehryarnasir</p>
          <div className="l-links hidden md:flex gap-10 ">
            <Link
              href={"#proj"}
              className="text-[#of172a] hover:text-[#14b8a6] font-bold"
            >
              Projects
            </Link>
            <Link
              href={"#exp"}
              className="text-[#of172a] hover:text-[#14b8a6] font-bold"
            >
              Experience
            </Link>
            <Link
              href={"#about"}
              className="text-[#of172a] hover:text-[#14b8a6] font-bold"
            >
              About Me
            </Link>
          </div>
          <div className="div bg-[#64778B] w-12 h-9 rounded-full">
            <button>
              {theme === "dark" ? (
                <MdWbSunny
                  size={30}
                  className="mt-1  rounded-full ml-2"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <FaMoon
                  size={30}
                  className="mt-1  rounded-full ml-2"
                  onClick={() => setTheme("dark")}
                />
              )}
            </button>
          </div>

          <div className="m-links md:hidden  fixed bottom-0 flex items-center justify-evenly w-screen h-14 border-t-2">
            <Link
              href={"#proj"}
              className="text-[#of172a] hover:text-[#14b8a6] font-bold"
            >
              Projects
            </Link>
            <Link
              href={"#exp"}
              className="text-[#of172a] hover:text-[#14b8a6] font-bold"
            >
              Experience
            </Link>
            <Link
              href={"#about"}
              className="text-[#of172a] hover:text-[#14b8a6] font-bold"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="hero flex w-full h-full flex-col  lg:flex-row  mt-14  dark:bg-[#0f172a]">
          <div className="r w-full  lg:w-[50%] flex flex-col items-start pl-10 lg:pl-20 gap-8 mt-2 justify-center">
            <p className="text-[#14b8a6] text-xl font-bold lg:text-4xl">
              Hello There 👌 , I'm
            </p>
            <h1 className="text-[#of172a] text-2xl lg:text-6xl  font-extrabold">
              Shehryar Nasir
            </h1>
            <p className="text-gray-400 lg:text-3xl">CIS Student</p>
            <p className="lg:text-lg">Learning web programming its easy and fun right?</p>
            <p className="text-[#of172a] text-lg lg:text-2xl font-bold">Nope.</p>
          </div>
          <div className="l w-full h-full lg:w-[50%] flex items-center justify-center ">
            <Image src={pic} />
          </div>
        </div>
      </section>

      <section id="proj">
        <div className="projects dark:bg-[#1e293b] w-full h-full ">
          <h1 className="text-[#14b8a6] text-center font-bold text-2xl mt-2">
            Portfolio
          </h1>
          <h1 className="text-[#0f172a]  dark:text-white font-extrabold text-4xl text-center mt-2">
            Recent Projects
          </h1>
          <p className="text-gray-400 text-lg text-center">
            Check Out Some Of My Work 😊
          </p>
          <div className="w-full h-full mt-4 grid grid-cols-1 md:grid-cols-3  place-items-center">
            <div className="card  flex flex-col gap-4 w-[300px] h-[300px] ">
              <Image src={pic1} alt="pic1.png" />
              <h1 className="text-xl font-bold">Login Page</h1>
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

            <div className="card  flex flex-col gap-4 w-[300px] h-[300px] ">
              <Image src={pic1} alt="pic1.png" />
              <h1 className="text-xl font-bold">Login Page</h1>
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

            <div className="card  flex flex-col gap-4 w-[300px] h-[300px] ">
              <Image src={pic1} alt="pic1.png" />
              <h1 className="text-xl font-bold">Login Page</h1>
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

            <div className="card  flex flex-col gap-4 w-[300px] h-[300px] ">
              <Image src={pic1} alt="pic1.png" />
              <h1 className="text-xl font-bold">Login Page</h1>
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

            <div className="card  flex flex-col gap-4 w-[300px] h-[300px] ">
              <Image src={pic1} alt="pic1.png" />
              <h1 className="text-xl font-bold">Login Page</h1>
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

            <div className="card  flex flex-col gap-4 w-[300px] h-[300px] ">
              <Image src={pic1} alt="pic1.png" />
              <h1 className="text-xl font-bold">Login Page</h1>
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

      <section id="exp">
        <div className="experience w-full flex flex-col gap-20 items-center justify-center h-full   lg:h-[500px] bg-[#1e293b] dark:bg-[#cbd5e1]">
          <h1 className="text-2xl text-center text-[#14b8a6] ">Clients</h1>
          <h1 className="text-6xl  text-center text-white  dark:text-black font-extrabold">
            Who Have Worked Together
          </h1>
          <p className="text-gray-400 text-center">Some Of Our Clients</p>
          <div className="companies flex flex-wrap items-center justify-center gap-4 mb-6">
            <Image src={pic2} width={100} alt="pic2.png" />
            <Image src={pic3} width={100} alt="pic2.png" />
            <Image src={pic4} width={100} alt="pic2.png" />
            <Image src={pic5} width={100} alt="pic2.png" />
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contact w-full h-full dark:bg-[#1e293b]">
          <p className="text-center font-bold text-xl  text-[#14b8a6]">
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
              <p className="text-[#14b8a6] text-lg font-bold">Name</p>
              <input
                type="text"
                className="bg-[#e2e8f0] w-[300px] md:w-[600px] h-12 rounded dark:bg-white"
              />
            </div>
            <div className="in">
              <p className="text-[#14b8a6] text-lg font-bold">Email</p>
              <input
                type="email"
                className="bg-[#e2e8f0] w-[300px]  md:w-[600px]  h-12 rounded dark:bg-white"
              />
            </div>
            <div className="in">
              <p className="text-[#14b8a6] text-lg font-bold">Message</p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="bg-[#e2e8f0]  md:w-[550px]  rounded mr-16 dark:bg-white"
              ></textarea>
            </div>
            <button className="px-14 py-3 rounded-full  text-white font-bold bg-[#14b8a6]">
              Send
            </button>
          </div>
        </div>
      </section>

      <footer className="w-full  h-16  bg-black mt-4 text-white flex items-center justify-center font-bold">
        Made By Sherry
      </footer>
    </>
  );
}

export default page;
