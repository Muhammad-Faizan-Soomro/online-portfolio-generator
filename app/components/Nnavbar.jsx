"use client";
import React, { useState } from "react";
import logo from "../../public/logo.webp";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { FaBars } from "react-icons/fa";
import Loader from "./Loader";
import { FaMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { useTheme } from "next-themes";
import Link from "next/link";
import logo1 from "../../public/logodark.webp";
import { usePathname } from "next/navigation";
import { GiCancel } from "react-icons/gi";


function Navbar() {
  const pathName = usePathname();
  const [hide, sethide] = useState(true);
  const { data: session, status } = useSession();
  const { theme, setTheme } = useTheme();
  const user = localStorage.getItem("user");

  const signout = () => {
    const selectedTemplate = localStorage.getItem("template");
    selectedTemplate == null ? null : localStorage.removeItem("template");
    localStorage.removeItem("user");
    signOut();
  };

  if (status === "loading") {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (!session || !session.user) {
    return (
      <div>
        <p>Session not available. Please log in.</p>
      </div>
    );
  }

  return (
    <>
      <section className="  hidden  w-full h-16 lg:flex justify-evenly items-center border-b-2 dark:border-b-1 dark:bg-[#0b1120]">
        <div className="flex nav w-[350px] h-16  items-center justify-center ">
          {pathName == "/home" ? (
            <Link
              href="/my-portfolios"
              className="font-bold font-serif text-orange-400 hover:scale-110 text-xl dark:text-white hover:underline hover:decoration-red-400 hover:decoration-2"
            >
              My Portfolios
            </Link>
          ) : (
            <Link
              href="/home"
              className="font-bold font-serif text-orange-400 hover:scale-110 text-xl dark:text-white hover:underline hover:decoration-red-400 hover:decoration-2"
            >
              Create New Portfolio
            </Link>
          )}
        </div>

        <div className="img">
          {theme === "dark" ? (
            <Link href={"/home"}>
              <Image src={logo1} width={200} alt="logo.png" />
            </Link>
          ) : (
            <Link href={"/home"}>
              <Image src={logo} width={200} alt="logo.png" />
            </Link>
          )}
        </div>
        <div className="tags h-16 w-[750px] flex items-center justify-between">
          <p className="font-bold font-serif text-orange-400 text-xl dark:text-white">
            Welcome,{user}
          </p>
          {theme === "dark" ? (
            <LuSunMoon
              className="cursor-pointer"
              size={40}
              onClick={() => setTheme("light")}
            />
          ) : (
            <FaMoon
              className="cursor-pointer"
              size={30}
              onClick={() => {
                setTheme("dark");
              }}
            />
          )}
          <button
            className="w-[7rem] py-2 dark:hover:bg-orange-400 hover:bg-purple-400 bg-orange-500 dark:text-white dark:bg-[#0ea5e9] text-white font-bold rounded-full"
            onClick={() => signout()}
          >
            Logout
          </button>
        </div>
      </section>

      <div className="nav lg:hidden h-16 w-screen border-2 dark:border-b-1 dark:border-white dark:bg-[#0b1120] flex justify-center ">
        <div className="items flex items-center justify-evenly gap-10">
          {theme === "dark" ? (
            <Link href={"/home"}>
              <Image src={logo1} width={150} alt="logo.png" />
            </Link>
          ) : (
            <Link href={"/home"}>
              <Image src={logo} width={150} alt="logo.png" />
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
          <button aria-label="navbar" id="navbutton" onClick={() => sethide(!hide)}>
          {hide ? <FaBars /> : <GiCancel />}
          </button>
        </div>
      </div>
      <div
        id="navbar"
        className={`${
          hide ? "hidden" : "flex"
        } div w-screen z-50 absolute  bg-[#fef4ea] opacity-90 h-screen border-t-4 dark:bg-white  flex-col items-center justify-center gap-10`}
      >
        {pathName == "/home" ? (
          <Link
            href="/my-portfolios"
            className="font-bold text-orange-400 text-xl dark:text-black hover:scale-110 hover:underline hover:decoration-red-400 hover:decoration-2"
          >
            My Portfolios
          </Link>
        ) : (
          <Link
            href="/home"
            className="font-bold text-orange-400 text-xl dark:text-black hover:scale-110 hover:underline hover:decoration-red-400 hover:decoration-2"
          >
            Create New Portfolio
          </Link>
        )}
        <button
          className="bg-orange-400 text-white font-bold dark:bg-blue-400 w-[7rem] py-2 dark:hover:bg-orange-400 hover:bg-purple-400  dark:text-white rounded-full "
          onClick={() => signout()}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Navbar;
