import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../../public/contact.webp";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";


function page() {
  return (
    <>
    <Navbar/>
      <section className="lg:hidden">
        <form
          method="POST"
          action="https://getform.io/f/14cd207a-2163-4af1-9ea2-9d6f1febcf16"
          className="w-screen h-screen bg-[#fef4ea] dark:bg-[#0b1120]  flex flex-col items-center justify-center gap-4"
        >
          <input
            type="text"
            className="rounded-lg w-[300px] h-12 border-2 border-orange-400 dark:border-white"
            placeholder="Enter Your First Name"
            required='required'
          />
          <input
            type="text"
            className="rounded-lg w-[300px] h-12 border-2 border-orange-400 dark:border-white"
            placeholder="Enter Your Last Name"
            required='required'

          />
          <input
            type="email"
            className="rounded-lg w-[300px] h-12 border-2 border-orange-400 dark:border-white"
            placeholder="Enter Your Email"
            required='required'

          />
          <textarea
            name="message"
            id="2"
            cols="30"
            rows="10"
            className="rounded-lg w-[300px]  border-2 border-orange-400 dark:border-white"
            placeholder="Enter Your Message"
            required='required'

          ></textarea>
          <button className="px-3 py-3 bg-orange-400 dark:bg-blue-400 text-white font-bold rounded-md">
            Submit
          </button>
        </form>
      </section>

      <section className="hidden lg:flex  w-full h-full">
        <div className="img w-[50%]  h-full flex flex-col" >
          <div className="image w-[100%] h-full">
            <Image src={Contact} width={400}  className='ml-60' alt="contact.png"/>
          </div>
          <div className="links w-[100%] h-full flex flex-col items-center ">
            <h1 className="text-3xl font-bold  text-orange-400 underline dark:text-white">TEAM MEMBERS:</h1>
            <div className="names">
          <ol className="text-xl font-bold flex  flex-col gap-4 mt-2 ml-4 dark:text-gray-300">
            <li className="flex">Muhammad Faizan Soomro <Link href='#' className="p-1 text-blue-400"><FaLinkedin/></Link></li>
            <li className="flex">Shehryar Nasir <Link href='#'  className="p-1 text-blue-400"><FaLinkedin/></Link></li>
            <li className="flex">Subhan Sohair <Link href='#'  className="p-1 text-blue-400"><FaLinkedin/></Link></li>
            <li className="flex">Sohaib Saleem <Link href='#'  className="p-1 text-blue-400"><FaLinkedin/></Link></li>
            </ol>    
            </div>
           
          </div>
        </div>
       <div className="form w-[50%]  h-full flex flex-col gap-3 items-center justify-center pt-32">
        <h1 className="text-3xl font-bold pb-10">HAVE SOME QUESTIONS?</h1>
        
          <form
            method="POST"
            action="https://getform.io/f/14cd207a-2163-4af1-9ea2-9d6f1febcf16"
            className="flex flex-col gap-3"
          >
            <input type="text" className="w-[400px] h-10    border-2 border-orange-400 dark:border-white" placeholder="Enter Your First Name" />   
            <input type="text" className="w-[400px] h-10    border-2 border-orange-400 dark:border-white" placeholder="Enter Your Last Name" />          
            <input type="email" className="w-[400px] h-10    border-2 border-orange-400 dark:border-white" placeholder="Enter Your  Email" />          
            <textarea name="message" id="2" cols="50" rows="50"  className="w-[400px] h-10  dark:border-white  border-2 border-orange-400" placeholder="Enter Your Message"></textarea>
         <button className="py-3 w-[400px] rounded-lg text-white font-bold bg-orange-400 dark:bg-blue-400">Submit</button>
          </form>
        </div>

       
       
      </section>
    </>
  );
}

export default page;
