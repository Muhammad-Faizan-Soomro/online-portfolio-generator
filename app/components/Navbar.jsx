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
  const [loading, setLoading] = useState('false')
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

          {theme === "dark" ? (
            <LuSunMoon className="cursor-pointer" onClick={() => setTheme("light")} />
          ) : (
            <FaMoon className="cursor-pointer"
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
          {/* {path == "/login" ? (
            <Link
              href={"/register"}
              className="text-xl font-bold text-orange-400 dark:text-white hover:underline hover:decoration-red-400 hover:decoration-2"
            >
              Register
            </Link>
          ) : (
            <Link
              href={"/login"}
              className="text-xl font-bold text-orange-400 dark:text-white hover:underline hover:decoration-red-400 hover:decoration-2"
            >
              Sign In
            </Link>
          )} */}
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

          {path == "/" ? (
            <Link href={"/login"} onClick={() => setLoading("true")}>
              <Button
                className="w-[7rem] mx-0 dark:hover:bg-orange-400 hover:bg-orange-400 bg-red-500 dark:text-white dark:bg-[#0ea5e9] disabled:bg-[#FDA172] disabled:font-normal disabled:px-3 disabled:py-2 disabled:dark:bg-blue-300"
                text={ loading == 'false' ? "Sign In" : "Please Wait"}
                disabled={loading == 'false' ? false : true}
              />
            </Link>
          ) : (
            ""
          )}
          {/* ) : (
            <Link href={"/login"}>
              <Button
                className="w-24 mx-0 dark:hover:bg-orange-400 hover:bg-orange-400 bg-red-500 dark:text-white dark:bg-[#0ea5e9]"
                text="Sign In"
              />
            </Link>
          )} */}

          {theme === "dark" ? (
            <LuSunMoon className="cursor-pointer" onClick={() => setTheme("light")} />
          ) : (
            <FaMoon className="cursor-pointer"
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
