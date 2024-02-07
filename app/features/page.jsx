import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import f1 from "../../public/feature1.webp";
import f2 from "../../public/feature2.webp";
import f3 from "../../public/feature3.webp";

function page() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl  lg:text-5xl text-center font-bold text-orange-400 my-8 lg:my-16 dark:text-white ">
        WE PROVIDE
      </h1>
      <div className="features   w-full h-full  flex flex-col lg:flex-row lg:px-36 items-center gap-10 ">
        <div className="features flex flex-col items-center justify-center lg:w-[45%] ">
          <Image
            src={f1}
            alt="f1.webp"
            priority
            style={{ width: "200px", height: "auto" }}
          />
          <h1 className="text-center text-2xl font-bold my-3">
            User Friendly Interface
          </h1>
          <p className="text-left font-bold text-blue-900 lg:px-4 px-16 dark:text-gray-300 md:px-24">
            Creating your portfolio is a breeze with our user-friendly website
            for portfolio generation. Effortlessly showcase your work, customize
            designs with intuitive tools, and launch a professional portfolio in
            minutes. Stand out and let your achievements shine with our
            hassle-free platform.
          </p>
        </div>
        <div className="features flex flex-col items-center justify-center lg:w-[40%] ">
          <Image
            src={f3}
            alt="f3.webp"
            priority
            style={{ width: "300px", height: "auto" }}
          />
          <h1 className="text-center text-2xl font-bold my-3">
            Responsive Templates
          </h1>
          <p className="text-left font-bold text-blue-900 px-16 lg:px-4 dark:text-gray-300 md:px-24">
            Crafting your professional portfolio is a snap with our platform's
            pre-defined responsive templates. Choose from a variety of stylish
            designs, easily personalize content, and launch your customized
            portfolio in no time. Showcase your achievements in a polished and
            impressive way without the hassle of starting from scratch.
          </p>
        </div>
        <div className="features flex flex-col items-center justify-center lg:w-[30%]" >
          <Image
            src={f2}
            alt="f2.webp"
            priority
            style={{ width: "200px", height: "auto" }}
          />
          <h1 className="text-center text-2xl font-bold my-3">
            Saving Your Portfolio
          </h1>
          <p className="text-left font-bold text-blue-900 px-16 lg:px-4 dark:text-gray-300 mb-2 md:px-24">
            Enhance your experience by downloading your personalized portfolio,
            showcasing your best work in a convenient package.
          </p>
        </div>
      </div>
    </>
  );
}

export default page;
