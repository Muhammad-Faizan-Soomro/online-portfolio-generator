import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import f1 from "../../public/feature1.png";
import f2 from "../../public/feature2.png";
import f3 from "../../public/feature3.png";

function page() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl  lg:text-5xl text-center font-bold text-orange-400 mt-4 dark:text-white ">
        WHAT WE WILL OFFER?
      </h1>
      <div className="features   w-full h-full  flex flex-col lg:flex-row lg:justify-evenly items-center gap-10 mt-20 ">
        <div className="features w-[300px] h-full  flex flex-col ">
          <Image src={f1}  alt="f1.png"/>
        <h1 className="text-center text-2xl font-bold">Easy To Use</h1>
          <p className="text-justify font-bold text-blue-900 mt-2 dark:text-gray-300">
            Creating your portfolio is a breeze with our user-friendly website
            for portfolio generation. Effortlessly showcase your work, customize
            designs with intuitive tools, and launch a professional portfolio in
            minutes. Stand out and let your achievements shine with our
            hassle-free platform.
          </p>
        </div>
        <div className="features w-[300px] h-full  flex flex-col  ">
          <Image src={f3} alt="f3.png" />
          <h1 className="text-center text-2xl font-bold">Predefined Templates</h1>
          <p className="text-justify font-bold text-blue-900 mt-2 dark:text-gray-300 ">
            Crafting your professional portfolio is a snap with our platform's
            predefined templates. Choose from a variety of stylish designs,
            easily personalize content, and launch your customized portfolio in
            no time. Showcase your achievements in a polished and impressive way
            without the hassle of starting from scratch.
          </p>
        </div>
        <div className="features w-[350px] h-full  flex flex-col ">
          <Image src={f2} alt="f2.png"/>
          <h1 className="text-center text-2xl font-bold">Responsive Design</h1>
          <p className="text-justify font-bold text-blue-900 mt-2 dark:text-gray-300">
            Our portfolio generator ensures a seamless and responsive design
            experience. Effortlessly create a stunning portfolio that adapts to
            any device  be it a desktop, tablet, or smartphone. Showcase your
            work beautifully while providing a consistently engaging experience
            for your audience, regardless of the screen size.
          </p>
        </div>
      </div>
    </>
  );
}

export default page;
