import React from "react";
import Navbar from "../components/Navbar";
import about from "../../public/about.webp";
import Image from "next/image";

function page() {
  return (
    <>
      <Navbar />
      <section className="lg:hidden">
        <div className="m-about w-screen h-screen flex flex-col items-center gap-4">
          <div className="pt-10">
            <Image
              src={about}
              alt="about.png"
              priority
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="heading">
            <h1 className="font-bold text-3xl text-orange-400 mt-2 underline  dark:text-white">
              About Us
            </h1>
          </div>
          <div className="info">
            <p className="px-6 text-left font-bold text-blue-900 dark:text-gray-300 ">
              Welcome To Portfolio Generator Where We Empower You To Showcase Your
              Talents & Achievements Through Beautifully Crafted Portfolios.
            </p>
          </div>
          <div className="info2">
            <h1 className="text-orange-400 font-bold ml-6 text-2xl underline mb-2 dark:text-white">
              OUR MISSION
            </h1>
            <p className="px-6 text-left font-bold   text-blue-900 dark:text-gray-300 ">
              At Portfolio Generator Our Mission Is To Provide a User-friendly &
              Innovative Platform That Enables Individuals To Create Stunning
              Portfolios Effortlessly.
            </p>
          </div>
        </div>
      </section>

      <section className="hidden lg:block">
        <div className="l-about flex  justify-around w-full h-full ">
          <div className="pt-36">
            <Image
              src={about}
              alt="about.png"
              priority
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="info w-[40%] flex flex-col justify-center gap-10 items-start">
            <h1 className="text-[#ff5c35] font-bold  text-4xl underline dark:text-white">
              About Us
            </h1>
            <p className=" text-left   px-4 u text-xl text-[#192733] dark:text-[#94a3b8]">
              Welcome To Portfolio Generator Where We Empower You To Showcase Your
              Talents & Achievements Through Beautifully Crafted Portfolios.
            </p>
            <h1 className="text-[#ff5c35] font-bold  text-4xl underline dark:text-white">
              OUR MISSION
            </h1>
            <p className="px-4 text-left text-xl   text-[#192733] dark:text-[#94a3b8]">
              At Portfolio Generator Our Mission Is To Provide a User-friendly &
              Innovative Platform That Enables Individuals To Create Stunning
              Portfolios Effortlessly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
