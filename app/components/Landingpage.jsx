import React from "react";
import lp2 from "../../public/lp2.png";
import Image from "next/image";
import Link from "next/link";
import landing from "../../public/landingpage2.png";
import Navbar from "./Navbar";

function Landingpage() {
  return (
    <>
      <section>
        <div className="m-landing md:hidden">
          <Navbar />
          <div className="content w-screen h-screen flex  pt-20  bg-orange-100 dark:bg-[#0b1120]">
            <div className="content1 w-[50%] h-[screen] gap-4 pt-20 flex flex-col">
              <h1 className="font-bold text-orange-400 text-3xl px-2 dark:text-white">
                PORTFOLIO GENERATOR
              </h1>
              <p className="text-blue-900 font-bold px-2 dark:text-gray-300">
                Show Off Your Skills With Just One CLick
              </p>
              <p className="font-bold text-xl px-2 text-blue-900 dark:text-gray-300">
                Join Us Now....
              </p>
              <Link href={"/register"}>
                <button className="w-[180px] py-3 bg-red-500 dark:bg-blue-400 text-white font-bold rounded-md ml-2">
                  Create An Account
                </button>
              </Link>
            </div>
            <div className="content2 w-[50%] h-[screen] px-6 pt-20 rounded-lg">
              <Image src={lp2} alt="lp2.png" />
            </div>
          </div>
        </div>

        <div className="l-landing hidden md:block ">
          <Navbar />
          <div className="content w-screen h-[600px] flex">
            <div className="content1 w-[50%] h-full gap-4 flex flex-col items-center justify-center">
              <h1 className="text-6xl text-orange-400 font-bold dark:text-white">
                PORTFOLIO GENERATOR
              </h1>
              <p className="text-blue-900 font-bold text-xl dark:text-[#94a3b8]">
                SHOW OFF YOUR SKILLS WITH JUST ONE CLICK
              </p>
              <Link href={"/register"}>
                <button className="px-6 py-4 text-white font-bold rounded-full bg-red-500 dark:bg-[#0ea5e9]">
                  Create An Account
                </button>
              </Link>
            </div>
            <div className="content1 w-[50%] h-full px-2 ">
              <Image src={landing} alt="landing.png" width={600} className="pt-10 rounded-lg"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landingpage;
