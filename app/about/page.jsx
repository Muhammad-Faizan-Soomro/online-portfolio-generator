import React from "react";
import Navbar from "../components/Navbar";
import about from '../../public/about.webp'
import Image from "next/image";

function page() {
  return (
    <>
      <Navbar />
      <section className="lg:hidden">
        <div className="m-about w-screen h-screen bg-gray-600 flex flex-col items-center gap-4">
          <div className="heading">
            <h1 className="font-bold text-3xl text-orange-400 mt-2">
              About Us
            </h1>
          </div>
          <div className="info">
            <p className="px-4 text-justify font-bold text-gray-300">
              WELCOME TO PORTFOLIO GENERATOR WHERE WE EMPOWER TO SHOWCASE THEIR
              TALENTS AND ACHIEVEMENTS THRPUGH BEAUTIFUL CRAFTED PORTFOLIOS.
              LEARN MORE ABOUT THE TEAM DRIVING THIS PLATFORM
            </p>
          </div>
          <div className="info2">
            <h1 className="text-gray-50 font-bold  text-2xl underline mb-2">
              OUR MISSION
            </h1>
            <p className="px-4 text-justify font-bold text-gray-300">
              AT PORTFOLIO GENERATOR OUR MISSION IS TO PROVIDE A USER-FRIENDLY
              AND INNOVATIVE PLATFORM THAT ENAVLES INDIVIDUALS TO CREATE
              STUNNING PORTFOLIOS EFFORTLESSLY . WE BELIEVE IN THE POWER OF
              SHOWCASING ONE'S UNIQUE SKILSS AND EXPERIENCES TO MAKE A LASTING
              IMPRESSION IN THE PROFESSIONAL WORLD
            </p>
          </div>
        </div>
      </section>
      <section   className="hidden lg:block">
       <div className="l-about flex  justify-around w-full h-screen ">
        <div className="img w-[40%] h-[100%] pt-40">
     <Image src={about} />
        </div>
        <div className="info w-[40%] flex flex-col justify-center gap-10">
        <p className=" text-justify px-4 font-bold text-xl text-[#192733]">
              WELCOME TO PORTFOLIO GENERATOR WHERE WE EMPOWER TO SHOWCASE THEIR
              TALENTS AND ACHIEVEMENTS THRPUGH BEAUTIFUL CRAFTED PORTFOLIOS.
              LEARN MORE ABOUT THE TEAM DRIVING THIS PLATFORM
            </p>
            <h1 className="text-[#ff5c35] font-bold  text-4xl underline ">
              OUR MISSION
            </h1>
            <p className="px-4 text-justify font-bold text-xl text-[#192733]">
              AT PORTFOLIO GENERATOR OUR MISSION IS TO PROVIDE A USER-FRIENDLY
              AND INNOVATIVE PLATFORM THAT ENAVLES INDIVIDUALS TO CREATE
              STUNNING PORTFOLIOS EFFORTLESSLY . WE BELIEVE IN THE POWER OF
              SHOWCASING ONE'S UNIQUE SKILSS AND EXPERIENCES TO MAKE A LASTING
              IMPRESSION IN THE PROFESSIONAL WORLD
            </p>
        </div>
       </div>
      </section>
    </>
  );
}

export default page;
