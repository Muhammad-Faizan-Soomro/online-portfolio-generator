import React from "react";
import lp2 from "../../public/lp2.png";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import landing from "../../public/landing page.png";
import Navbar from "./Navbar";

function Landingpage() {
  return (
    <>
      <section>
        <div className="m-landing md:hidden">
          <Navbar />
          <div className="content w-screen h-full flex">
            <div className="content1 w-[50%] h-[screen] gap-4 pt-40 flex flex-col">
              <h1 className="font-bold text-orange-400 text-3xl px-2">
                PORTFOLIO GENERATOR
              </h1>
              <p className="text-blue-900 font-bold px-2">
                Show Off Your With Just One CLick
              </p>
            </div>
            <div className="content2 w-[50%] h-[screen] px-2 pt-20">
              <Image src={lp2} alt="lp2.png" />
            </div>
          </div>

          <Link href={"/register"}>
            <button className="px-4 py-3 bg-red-500 text-white font-bold mt-8 rounded-full  ml-28">
              Create An Account
            </button>
          </Link>
        </div>

        <div className="l-landing hidden md:block">
          <Navbar />
          <div className="content w-screen h-[600px] flex">
            <div className="content1 w-[50%] h-full gap-4 flex flex-col items-center justify-center">
              <h1 className="text-6xl text-orange-400 font-bold">
                PORTFOLIO GENERATOR
              </h1>
              <p className="text-blue-900 font-bold text-xl">
                SHOW OFF YOUR SKILSS WITH JUST ONE CLICK
              </p>
              <Link href={"/register"}>
                <button className="px-6 py-4 text-white font-bold rounded-full bg-red-500">
                  Create An Account
                </button>
              </Link>
            </div>
            <div className="content1 w-[50%] h-full px-2 ">
              <Image src={landing} height={600} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landingpage;
