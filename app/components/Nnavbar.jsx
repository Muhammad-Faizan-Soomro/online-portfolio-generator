"use client";
import React, { useState } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import { FaBars } from "react-icons/fa";
import Loader from "./Loader";


function Navbar() {
  const [hide, sethide] = useState(true);
  const { data: session, status } = useSession();

  if (status === "loading") {
    // While the session is loading, show a loading message or spinner
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
      <section className="  hidden  w-screen h-16 lg:flex justify-between items-center border-2">
        <div className="lg-nav"></div>
        <div className="flex nav w-[350px] h-16  items-center justify-between  ">
          <a
            href="#"
            className="font-bold font-serif text-orange-400 hover:scale-110 text-xl"
          >
            Create Portfolios
          </a>
          <a
            href="#"
            className="font-bold font-serif text-orange-400 hover:scale-110 text-xl"
          >
            My Portfolios
          </a>
        </div>

        <div className="img">
          <a href="/home">
          <Image src={logo} width={180} height={200} alt="Logo.png" />
          </a>
        </div>
        <div className="tags h-16 w-[750px] flex items-center justify-between">
   
          <p className="font-bold font-serif text-orange-400 text-xl">
            Welcome,{email}
          </p>
          <button
            className="px-3 mr-20 h-10 rounded-sm bg-orange-400 text-white font-bold "
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      </section>

      <div className="nav lg:hidden h-16 w-screen border-2 ">
        <div className="items flex items-center justify-evenly">
          <a href="/">
          <Image src={logo} width={200} height={200} alt="logo.png" />
          </a>
      
          <button onClick={() => sethide(!hide)}>
            <FaBars />
          </button>
        </div>

        <div
          className={`${
            hide ? "hidden" : "flex"
          } div w-screen z-50 relative  bg-[#fef4ea] opacity-90 h-screen border-t-4  flex-col items-center justify-evenly`}
        >
          <a href="#" className="text-orange-400 font-bold text-xl">
            Create Portfolios
          </a>
          <a href="#" className="text-orange-400 font-bold text-xl">
            My Portfolio
          </a>
          <button
            className="w-[100px] h-[50px] bg-orange-400 text-white font-bold rounded-sm"
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
