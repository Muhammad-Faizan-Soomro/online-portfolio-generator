"use client";
import React, { useState } from "react";
import Navbar from "../components/Nnavbar";
import Image from "next/image";
import pic2 from "../../public/template2/preview.webp";
import pic3 from "../../public/template3.png";
import pic4 from "../../public/template4.png";
import pic1 from "../../public/template1/template.webp";
import pic5 from "../../public/assets/preview.webp";
import { useSession } from "next-auth/react";
import Loader from "../components/Loader";

import Link from "next/link";

function Page() {
  const [loading, setLoading] = useState("false");
  const { data: session, status } = useSession();

  const changeTemplate = (temp) => {
    localStorage.setItem("template", temp);
    setLoading("true");
    
  };

  if (status === "loading" || loading == 'true') {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold text-orange-400 text-center mt-2 dark:text-white">
        {loading == "false"
          ? "Choose A Template"
          : "Please Wait, Redirecting..."}
      </h1>

      <div className="templates w-full h-full flex flex-col gap-10 lg:grid lg:grid-cols-3  items-center justify-start pt-10">
        {/* <div className="template3  group relative overflow-hidden border-2  dark:border-white  w-[350px] h-[230px]  flex flex-col">
          <div className="img w-[100%] h-[100%] ">
            <Image src={pic3} alt="pic.png" />
          </div>
          <h1 className="font-bold text-3xl  dark:text-white font-sans text-orange-400 text-center">
            SIMPLE
          </h1>
          <div className="hide absolute flex items-end justify-evenly pb-20 w-full h-full bg-black/20  translate-y-full group-hover:translate-y-0 transition-all duration-300">
            <Link
              href="/edit"
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
              onClick={() => localStorage.setItem("template", "simple")}
            >
              Select
            </Link>
            <Link
              href={"/template3"}
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
            >
              Preview
            </Link>
          </div>
        </div> */}

        <div className="template5 group relative overflow-hidden border-2  dark:border-white  w-[90vw] h-fit  place-self-center flex flex-col lg:w-[18rem]">
          <div className="img w-[100%] h-[100%] ">
            <Image src={pic5} alt="pic.png" priority />
          </div>
          <h1 className="font-bold text-3xl  dark:text-white mt-4 font-sans text-orange-400 text-center">
            MINI
          </h1>
          <div className="hide absolute flex items-center justify-evenly w-full h-full bg-black/20  translate-y-full group-hover:translate-y-0 transition-all duration-300">
            <Link
              onClick={() => changeTemplate("mini")}
              href="/edit"
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md hover:scale-110"
            >
              Select
            </Link>
            <Link
              onClick={() => setLoading("true")}
              href={"/template5"}
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md hover:scale-110"
            >
              Preview
            </Link>
          </div>
        </div>

        <div className="template2 group relative overflow-hidden border-2  dark:border-white  w-[90vw] h-fit  place-self-center flex flex-col lg:w-[18rem]">
          <div className="img w-[100%] h-[100%] ">
            <Image src={pic2} alt="pic.png" priority />
          </div>
          <h1 className="font-bold text-3xl  dark:text-white mt-4 font-sans text-orange-400 text-center">
            SIMPLE
          </h1>
          <div className="hide absolute flex items-center justify-evenly w-full h-full bg-black/20  translate-y-full group-hover:translate-y-0 transition-all duration-300">
            <Link
              onClick={() => changeTemplate("simple")}
              href="/edit"
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md hover:scale-110"
            >
              Select
            </Link>
            <Link
              onClick={() => setLoading("true")}
              href={"/template2"}
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md hover:scale-110"
            >
              Preview
            </Link>
          </div>
        </div>

        {/* <div className="template4  group relative overflow-hidden border-2  dark:border-white  w-[350px] h-[230px]  flex flex-col">
          <div className="img w-[100%] h-[100%] ">
            <Image src={pic4} alt="pic.png" />
          </div>
          <h1 className="font-bold text-3xl  dark:text-white font-sans text-orange-400 text-center">
            DEVELOPERS
          </h1>
          <div className="hide absolute flex items-end justify-evenly pb-20 w-full h-full bg-black/20  translate-y-full group-hover:translate-y-0 transition-all duration-300">
            <Link
              href="/edit"
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
              onClick={() => localStorage.setItem("template", "developers")}
            >
              Select
            </Link>
            <Link
              href={"/template4"}
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
            >
              Preview
            </Link>
          </div>
        </div> */}
        <div className="template1 group relative overflow-hidden border-2  dark:border-white  w-[90vw] h-fit  place-self-center flex flex-col lg:w-[18rem]">
          <div className="img w-[100%] h-[100%] ">
            <Image src={pic1} alt="pic.png" priority />
          </div>
          <h1 className="font-bold text-3xl  dark:text-white font-sans mt-4 text-orange-400 text-center">
            MODERN
          </h1>
          <div className="hide absolute flex items-center justify-evenly w-full h-full bg-black/20  translate-y-full group-hover:translate-y-0 transition-all duration-300">
            <Link
              onClick={() => changeTemplate("modern")}
              href={"/edit"}
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md hover:scale-110"
            >
              Select
            </Link>
            <Link
              onClick={() => setLoading("true")}
              href={"/template1"}
              className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md hover:scale-110"
            >
              Preview
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
