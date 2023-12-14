"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import logo1 from "../../public/logodark.png";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { useTheme } from "next-themes";

function Navbar() {
  const [hide, sethide] = useState(true);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <section className="md:hidden">
        <div className="nav w-full h-14   flex items-center justify-evenly">
          {theme === "dark" ? (
            <Link href={"/"}>
              <Image src={logo1} width={150} alt="logo.png" />
            </Link>
          ) : (
            <Link href={"/"}>
              <Image src={logo} width={150} alt="logo.png" />
            </Link>
          )}

          <Link href={"/login"}>
            <button className="px-3 py-2 bg-red-500 dark:bg-blue-400 text-white font-bold  rounded-full">
              Sign In
            </button>
          </Link>
          {theme === "dark" ? (
            <LuSunMoon onClick={() => setTheme("light")} />
          ) : (
            <FaMoon
              onClick={() => {
                setTheme("dark");
              }}
            />
          )}
          <button onClick={() => sethide(!hide)}>
            {hide ? <FaBars /> : <GiCancel />}
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
          <Link
            href={"/features"}
            className="text-xl font-bold text-orange-400"
          >
            Features
          </Link>
        </div>
      </section>

      <section className="hidden lg:block">
        <div className="nav w-full h-16 border-2 flex items-center justify-center gap-20  dark:border-0">
          {theme === "dark" ? (
            <Link href={"/"}>
              <Image src={logo1} width={200} alt="logo.png" />
            </Link>
          ) : (
            <Link href={"/"}>
              <Image src={logo} width={200} alt="logo.png" />
            </Link>
          )}

          <Link
            href={"/about"}
            className="text-orange-400 font-bold hover:scale-110  dark:text-white"
          >
            About Us
          </Link>
          <Link
            href={"/contact"}
            className="text-orange-400 font-bold hover:scale-110 dark:text-white"
          >
            Contact Us
          </Link>

          <Link
            href={"/features"}
            className="text-orange-400 font-bold hover:scale-110 dark:text-white"
          >
            Features
          </Link>

          <Link href={"/login"}>
            <button className="px-4 py-3 text-white font-bold rounded-full bg-red-500 dark:text-white dark:bg-[#0ea5e9]">
              Sign In
            </button>
          </Link>

          {theme === "dark" ? (
            <LuSunMoon onClick={() => setTheme("light")} />
          ) : (
            <FaMoon
              onClick={() => {
                setTheme("dark");
              }}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default Navbar;
