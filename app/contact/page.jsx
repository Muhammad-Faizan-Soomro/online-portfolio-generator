import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../../public/contact.webp";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Input from "../components/Input";
import Button from "../components/Button";

function page() {
  return (
    <>
      <Navbar />
      <section className="md:hidden">
        <form
          method="POST"
          action="https://getform.io/f/14cd207a-2163-4af1-9ea2-9d6f1febcf16"
          className="w-screen h-screen  dark:bg-[#0b1120]  flex flex-col gap-4 items-center justify-center"
        >
          <h1 className="text-3xl font-bold py-5 text-center">
            HAVE SOME FEEDBACK?
          </h1>
          <Input
            labelText="First Name: "
            labelClassName="dark:text-white"
            type="text"
            className="w-[18rem]"
            placeholder="Enter Your First Name"
          />
          <Input
            labelText="Last Name: "
            labelClassName="dark:text-white"
            type="text"
            className="w-[18rem]"
            placeholder="Enter Your Last Name"
          />
          <Input
            labelText="Email: "
            labelClassName="dark:text-white"
            type="email"
            className="w-[18rem]"
            placeholder="Enter Your Email"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="rounded-lg bg-gray-200 w-[18rem] ml-1 p-2 resize-none dark:text-black  border-black border-2  dark:focus:border-orange-400 outline-none focus:bg-blue-100 focus:border-orange-400 focus:border-2 outline-0e"
            placeholder="Enter Your Message"
            required="required"
          ></textarea>
          <Button
            className="w-[16rem] bg-orange-400 dark:bg-blue-400"
            text="Submit"
          />
        </form>
        <div className="flex pt-10">
          <div className="links w-[100%] h-full flex flex-col items-center ">
            <h1 className="text-3xl font-bold  text-orange-400 underline dark:text-white">
              TEAM MEMBERS:
            </h1>
            <div className="names">
              <ol className="text-xl font-bold flex  flex-col gap-4 mt-2 ml-4 dark:text-gray-300">
                <li className="flex">
                  Muhammad Faizan Soomro{" "}
                  <Link
                    href="https://www.linkedin.com/in/faizansoomro"
                    className="p-1 text-blue-400"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
                <li className="flex">
                  Shehryar Nasir{" "}
                  <Link
                    href="https://www.linkedin.com/in/shehryar123"
                    className="p-1 text-blue-400"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
                <li className="flex">
                  Subhan Sohair{" "}
                  <Link
                    href="https://www.linkedin.com/in/subhan-sohair"
                    className="p-1 text-blue-400"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
                <li className="flex">
                  Sohaib Saleem{" "}
                  <Link
                    href="https://www.linkedin.com/in/muhammad-sohaib-saleem-335590254"
                    className="p-1 text-blue-400"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden md:flex  w-full h-full">
        <div className="img flex flex-col">
          <div className="image">
            <Image
              src={Contact}
              style={{
                width: "400px",
                height: "auto",
              }}
              className="md:ml-14 lg:ml-60"
              alt="contact.webp"
              priority
            />
          </div>
          <div className="links w-[100%] h-full flex flex-col items-center ">
            <h1 className="text-3xl font-bold  text-orange-400 underline dark:text-white">
              TEAM MEMBERS:
            </h1>
            <div className="names">
              <ol className="text-xl font-bold flex  flex-col gap-4 mt-2 ml-4 dark:text-gray-300">
                <li className="flex">
                  Muhammad Faizan Soomro{" "}
                  <Link
                    href="https://www.linkedin.com/in/faizansoomro"
                    className="p-1 text-blue-400"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
                <li className="flex">
                  Shehryar Nasir{" "}
                  <Link
                    href="https://www.linkedin.com/in/shehryar123"
                    className="p-1 text-blue-400"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
                <li className="flex">
                  Subhan Sohair{" "}
                  <Link
                    href="https://www.linkedin.com/in/subhan-sohair"
                    className="p-1 text-blue-400"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
                <li className="flex">
                  Sohaib Saleem{" "}
                  <Link
                    href="https://www.linkedin.com/in/muhammad-sohaib-saleem-335590254"
                    className="p-1 text-blue-400"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="form w-[50%]  h-full flex flex-col gap-3 items-center justify-center pt-10">
          <h1 className="text-3xl font-bold pb-10">HAVE SOME FEEDBACK?</h1>

          <form
            method="POST"
            action="https://getform.io/f/14cd207a-2163-4af1-9ea2-9d6f1febcf16"
            className="flex flex-col gap-3"
          >
            <Input
              labelText="First Name: "
              labelClassName="dark:text-white"
              type="text"
              className="w-[18rem]"
              placeholder="Enter Your First Name"
            />
            <Input
              labelText="Last Name: "
              labelClassName="dark:text-white"
              type="text"
              className="w-[18rem]"
              placeholder="Enter Your Last Name"
            />
            <Input
              labelText="Email: "
              labelClassName="dark:text-white"
              type="email"
              className="w-[18rem]"
              placeholder="Enter Your Email"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="rounded-lg bg-gray-200 w-[18rem] ml-1 p-2 resize-none dark:text-black  border-black border-2  dark:focus:border-orange-400 outline-none focus:bg-blue-100 focus:border-orange-400 focus:border-2 outline-0e"
              placeholder="Enter Your Message"
              required="required"
            ></textarea>
            <Button
              className="w-[16rem] bg-orange-400 dark:bg-blue-400 -ml-0.5"
              text="Submit"
            />
          </form>
        </div>
      </section>
    </>
  );
}

export default page;
