"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [hide, sethide] = useState(true);
  return (
    <>
      <section className="md:hidden">
        <div className="nav w-screen h-14  border-2 flex items-center justify-evenly">
        <Link href={'/'}>
        <Image src={logo} width={150} />
        </Link>
          <Link href={"/login"}>
            <button className="px-3 py-2 bg-red-500 text-white font-bold  rounded-full">
              Sign In
            </button>
          </Link>
          <button onClick={() => sethide(!hide)}>
            <FaBars />
          </button>
        </div>
        <div
          className={`${
            hide ? "hidden" : "block"
          } links w-screen h-screen bg-gray-100 absolute  gap-8 opacity-90 flex flex-col items-center justify-center`}
        >
          <Link href={"/about"} className="text-xl font-bold text-orange-400">
            About Us
          </Link>
          <Link href={"/contact"} className="text-xl font-bold text-orange-400">
            Contact Us
          </Link>{" "}
          <Link href="#" className="text-xl font-bold text-orange-400">
            Features
          </Link>
        </div>
      </section>

      <section className="hidden lg:block">
        <div className="nav w-screen h-16 border-2 flex items-center justify-center gap-20">
          <Link href={'/'}>
          <Image src={logo} width={200} />
          
          </Link>
         

          <Link
            href={"/about"}
            className="text-orange-400 font-bold hover:scale-110 "
          >
            About Us
          </Link>
          <Link
            href={"/contact"}
            className="text-orange-400 font-bold hover:scale-110 "
          >
            Contact Us
          </Link>

          <Link href="#" className="text-orange-400 font-bold hover:scale-110 ">
            Features
          </Link>

          <Link href={"/login"}>
            <button className="px-4 py-3 text-white font-bold rounded-full bg-red-500">
              Sign In
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Navbar;
