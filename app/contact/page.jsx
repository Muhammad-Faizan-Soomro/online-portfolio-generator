import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../../public/contact.webp";
import Image from "next/image";

function page() {
  return (
    <>
      <Navbar />
      <section className="lg:hidden">
        <form
          method="POST"
          action="https://getform.io/f/14cd207a-2163-4af1-9ea2-9d6f1febcf16"
          className="w-screen h-screen bg-[#fef4ea] flex flex-col items-center justify-center gap-4"
        >
          <input
            type="text"
            className="rounded-lg w-[300px] h-12 border-2 border-orange-400"
            placeholder="Enter Your First Name"
          />
          <input
            type="text"
            className="rounded-lg w-[300px] h-12 border-2 border-orange-400"
            placeholder="Enter Your Last Name"
          />
          <input
            type="email"
            className="rounded-lg w-[300px] h-12 border-2 border-orange-400"
            placeholder="Enter Your Email"
          />
          <textarea
            name="message"
            id="2"
            cols="30"
            rows="10"
            className="rounded-lg w-[300px]  border-2 border-orange-400"
            placeholder="Enter Your Message"
          ></textarea>
          <button className="px-3 py-3 bg-orange-400 text-white font-bold rounded-md">
            Submit
          </button>
        </form>
      </section>

      <section className="hidden lg:flex justify-center w-full h-full">
        
        <div className=" mt-4 img w-[50%] p-[100px] ">
          <Image src={Contact} />
        </div>
        <div className="  form w-[50%] flex flex-col items-center justify-center ">
          <form
            method="POST"
            action="https://getform.io/f/14cd207a-2163-4af1-9ea2-9d6f1febcf16"
            className=" flex flex-col items-center justify-center gap-4"
          >
            <input
              type="text"
              className="rounded-lg w-[300px] h-12 border-2 border-orange-400"
              placeholder="Enter Your First Name"
            />
            <input
              type="text"
              className="rounded-lg w-[300px] h-12 border-2 border-orange-400"
              placeholder="Enter Your Last Name"
            />
            <input
              type="email"
              className="rounded-lg w-[300px] h-12 border-2 border-orange-400"
              placeholder="Enter Your Email"
            />
            <textarea
              name="message"
              id="2"
              cols="30"
              rows="10"
              className="rounded-lg w-[300px]  border-2 border-orange-400"
              placeholder="Enter Your Message"
            ></textarea>
            <button className="px-3 py-3 bg-orange-400 text-white font-bold rounded-md">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default page;
