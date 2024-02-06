"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.webp";
import logo1 from "../../public/logodark.webp";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { useTheme } from "next-themes";
import Button from "./Button";
import { usePathname } from "next/navigation";

function Navbar() {
  const [hide, sethide] = useState(true);
  const { theme, setTheme } = useTheme();
  const path = usePathname();

  return (
    <>
      <section className="sm:hidden">
        <div className="nav pt-2 pb-2 flex items-center justify-evenly">
          {theme === "dark" ? (
            <Link href={"/"}>
              <Image
                src={logo1}
                alt="logo.webp"
                priority
                style={{ width: "150px", height: "auto" }}
              />
            </Link>
          ) : (
            <Link href={"/"}>
              <Image
                src={logo}
                alt="logo.webp"
                priority
                style={{ width: "150px", height: "auto" }}
              />
            </Link>
          )}

          {path == "/login" ? (
            <Link href={"/register"}>
              <Button
                className="w-20 mx-0 dark:hover:bg-orange-400 hover:bg-orange-400 bg-red-500 dark:text-white dark:bg-[#0ea5e9]"
                text="Register"
              />
            </Link>
          ) : (
            <Link href={"/login"}>
              <Button
                className="w-20 mx-0 dark:hover:bg-orange-400 hover:bg-orange-400 bg-red-500 dark:text-white dark:bg-[#0ea5e9]"
                text="Sign In"
              />
            </Link>
          )}
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
          } links w-screen h-screen bg-gray-100 absolute dark:bg-blue-950  gap-8 opacity-90 flex flex-col items-center justify-center`}
        >
          <Link
            href={"/about"}
            className="text-xl font-bold text-orange-400 dark:text-white hover:underline hover:decoration-red-400 hover:decoration-2"
          >
            About Us
          </Link>
          <Link
            href={"/contact"}
            className="text-xl font-bold text-orange-400 dark:text-white hover:underline hover:decoration-red-400 hover:decoration-2"
          >
            Contact Us
          </Link>{" "}
          <Link
            href={"/features"}
            className="text-xl font-bold text-orange-400 dark:text-white hover:underline hover:decoration-red-400 hover:decoration-2"
          >
            Features
          </Link>
        </div>
      </section>

      <section className="hidden sm:block">
        <div className="nav py-2 flex items-center justify-center gap-5 md:gap-8 lg:gap-20">
          {theme === "dark" ? (
            <Link href={"/"}>
              <Image
                src={logo1}
                alt="logo.webp"
                style={{ width: "200px", height: "auto" }}
              />
            </Link>
          ) : (
            <Link href={"/"}>
              <Image
                src={logo}
                alt="logo.webp"
                style={{ width: "200px", height: "auto" }}
              />
            </Link>
          )}

          <Link
            href={"/about"}
            className="text-orange-400 font-bold hover:scale-110  dark:text-white hover:underline hover:decoration-red-400 hover:decoration-2"
          >
            About Us
          </Link>
          <Link
            href={"/contact"}
            className="text-orange-400 font-bold hover:scale-110 dark:text-white hover:underline hover:decoration-red-400 hover:decoration-2"
          >
            Contact Us
          </Link>

          <Link
            href={"/features"}
            className="text-orange-400 font-bold hover:scale-110 dark:text-white hover:underline hover:decoration-red-400 hover:decoration-2"
          >
            Features
          </Link>

          {path == "/login" ? (
            <Link href={"/register"}>
              <Button
                className="w-36 mx-0 dark:hover:bg-orange-400 hover:bg-orange-400 bg-red-500 dark:text-white dark:bg-[#0ea5e9]"
                text="Register"
              />
            </Link>
          ) : (
            <Link href={"/login"}>
              <Button
                className="w-36 mx-0 dark:hover:bg-orange-400 hover:bg-orange-400 bg-red-500 dark:text-white dark:bg-[#0ea5e9]"
                text="Sign In"
              />
            </Link>
          )}

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
