"use client";
import React, { useState } from "react";
import lp2 from "../../public/lp2.webp";
import Image from "next/image";
import Link from "next/link";
import landing from "../../public/landingpage2.webp";
import Navbar from "./Navbar";
import pic from "../../public/landing page.webp";
import { useTheme } from "next-themes";
import Button from "./Button";

function Landingpage() {
  const { theme, setTheme } = useTheme();
  const [loading, setLoading] = useState("false");

  return (
    <>
      <section>
        <div className="m-landing sm:hidden">
          <Navbar />
          <div className="content w-screen h-screen  grid grid-cols-2 gap-5  bg-orange-100 dark:bg-[#0b1120]">
            <div className="content1 pt-28">
              <h1 className="font-bold text-orange-400 text-3xl dark:text-white text-center">
                PORTFOLIO GENERATOR
              </h1>
              <p className="text-blue-900 font-bold px-2 pt-2 dark:text-gray-300 text-center">
                Show Off Your Skills With Just One CLick
              </p>
            </div>
            <div className="content2 px-2 pt-14 rounded-lg">
              <Image
                src={lp2}
                alt="lp2.png"
                priority
                width={200}
                height={180}
              />
            </div>
            <Link href={"/register"} onClick={() => setLoading("true")}>
              <Button
                className="w-[50vw] max-w-[18rem] -mr-1 dark:hover:bg-orange-400 bg-red-500 dark:bg-blue-400 disabled:bg-[#FDA172] disabled:font-normal disabled:px-3 disabled:py-2 disabled:dark:bg-blue-300"
                text={loading == "false" ? "Create An Account" : "Please Wait"}
                disabled={loading == "false" ? false : true}
              />
            </Link>
          </div>
        </div>

        <div className="l-landing hidden sm:block ">
          <Navbar />
          <div className="content w-screen h-[600px] flex">
            <div className="content1 w-[50%] h-full gap-4 flex flex-col items-center justify-center">
              <h1 className="text-6xl text-orange-400 font-bold dark:text-white text-center">
                PORTFOLIO GENERATOR
              </h1>
              <p className="text-blue-900 font-bold text-xl dark:text-[#94a3b8] text-center">
                SHOW OFF YOUR SKILLS WITH JUST ONE CLICK
              </p>
              <Link href={"/register"} onClick={() => setLoading("true")}>
                <Button
                  className="w-[25vw] max-w-sm dark:hover:bg-orange-400 bg-red-500 dark:bg-[#0ea5e9] disabled:bg-[#FDA172] disabled:font-normal disabled:px-3 disabled:py-2 disabled:dark:bg-blue-300"
                  text={
                    loading == "false" ? "Create An Account" : "Please Wait"
                  }
                  disabled={loading == "false" ? false : true}
                />
              </Link>
            </div>
            <div className="content1 w-[50%] h-full px-2 ">
              {theme === "dark" ? (
                <Image
                  src={landing}
                  alt="landing.png"
                  width={600}
                  className="pt-10 rounded-lg"
                  priority
                />
              ) : (
                <Image
                  src={pic}
                  alt="landing.png"
                  width={600}
                  className="pt-10 rounded-lg"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landingpage;
