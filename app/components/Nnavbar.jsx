"use client";
import React, { useState } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { FaBars } from "react-icons/fa";
import Loader from "./Loader";
import { FaMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { useTheme } from "next-themes";
import Link from "next/link";
import logo1 from "../../public/logodark.png";




function Navbar() {
  const [hide, sethide] = useState(true);
  const { data: session, status } = useSession();
  const { theme, setTheme } = useTheme();

  if (status === "loading") {
    return (
      <div>
       <Loader/>
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

  const { email } = session.user;

  return (
    <>
      <section className="  hidden  w-screen h-16 lg:flex justify-between items-center border-b-2 dark:border-b-0 dark:bg-[#0b1120]">
      
        <div className="flex nav w-[350px] h-16  items-center justify-center ">
     
         <Link
            href="#"
            className="font-bold font-serif text-orange-400 hover:scale-110 text-xl dark:text-white"
          >
            My Portfolios
          </Link>
        </div>

        <div className="img">
        {theme === "dark" ? (
            <Link href={"/"}>
              <Image src={logo1} width={200} alt="logo.png" />
            </Link>
          ) : (
            <Link href={"/"}>
              <Image src={logo} width={200} alt="logo.png" />
            </Link>
          )}
        </div>
        <div className="tags h-16 w-[750px] flex items-center justify-between">
   
          <p className="font-bold font-serif text-orange-400 text-xl dark:text-white">
            Welcome,{email}
          </p>
          {theme === "dark" ? (
            <LuSunMoon size={40} onClick={() => setTheme("light")} />
          ) : (
            <FaMoon size={30}
              onClick={() => {
                setTheme("dark");
              }}
            />
          )}
          <button
            className="px-3 mr-20 h-10 rounded-sm bg-orange-400 text-white font-bold dark:bg-blue-400 "
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      </section>

      <div className="nav lg:hidden h-16 w-screen border-2 dark:border-0 dark:bg-[#0b1120] ">
        <div className="items flex items-center justify-evenly">
        {theme === "dark" ? (
            <Link href={"/"}>
              <Image src={logo1} width={150} alt="logo.png" />
            </Link>
          ) : (
            <Link href={"/"}>
              <Image src={logo} width={150} alt="logo.png" />
            </Link>
          )}
         {theme === "dark" ? (
            <LuSunMoon  onClick={() => setTheme("light")} />
          ) : (
            <FaMoon 
              onClick={() => {
                setTheme("dark");
              }}
            />
          )}
          <button onClick={() => sethide(!hide)}>
            <FaBars />
          </button>
        </div>

        <div
          className={`${
            hide ? "hidden" : "flex"
          } div w-screen z-50 relative  bg-[#fef4ea] opacity-90 h-screen border-t-4 dark:bg-white  flex-col items-center justify-center gap-10`}
        >
        
         <Link href="#" className="text-orange-400 font-bold text-xl dark:text-black">
            My Portfolio
          </Link>
          <button
            className="w-[100px] h-[50px] bg-orange-400 text-white font-bold rounded-sm dark:bg-blue-400"
            onClick={() => signOut()}
          >
            LOGOUT
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
