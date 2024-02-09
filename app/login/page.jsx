"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
  const [user, setuser] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();

  async function HandleSignIn(e) {
    e.preventDefault();
    if (!user.username || !user.password) {
      toast.error("All fields are required");
    } else {
      try {
        const res = await signIn("credentials", {
          username: user.username,
          password: user.password,
          redirect: false,
        });
        if (res.ok) {
          toast.success("Login Successfully");
          router.replace("/home");
          localStorage.setItem("user", user.username);
        } else {
          toast.warn("Invalid Credentials");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <>
      <Navbar />
      <section>
        <div className="sm:hidden container h-[100vh] w-[100vw] flex justify-center items-center">
          <form
            onSubmit={HandleSignIn}
            className="form h-[100%] w-[100%] bg-gray-700 flex flex-col gap-8 items-center justify-center"
          >
            <h1 className="font-bold text-orange-400 text-2xl text-center">
              WELCOME TO
              <br />
              PORTFOLIO GENERATOR
            </h1>
            <Input
              labelText="Username :"
              labelClassName="text-white"
              type="text"
              className="w-[80vw] max-w-[20rem]"
              placeholder="Enter Your Username"
              onChange={(e) => {
                setuser({
                  ...user,
                  username: e.target.value,
                });
              }}
              value={user.username}
            />
            <Input
              labelText="Password :"
              labelClassName="text-white"
              type="password"
              className="w-[80vw] max-w-[20rem] "
              placeholder="Enter Your Password"
              value={user.password}
              onChange={(e) => {
                setuser({
                  ...user,
                  password: e.target.value,
                });
              }}
            />

            <Button
              className="w-[70vw] max-w-xs bg-blue-500"
              text="LOGIN"
              type="submit"
            />
            <p className="text-white font-bold">
              Don't Have An Account ?{" "}
              <a
                href="/register"
                className="text-orange-400 hover:text-red-400 hover:underline"
              >
                Register
              </a>
            </p>
          </form>
        </div>

        <div className="container1 h-full w-full hidden sm:flex">
          <div className="div1 h-screen w-[50vw]">
            <div className="bubble w-full h-full bg-gray-600 rounded-br-full flex justify-center items-center dark:bg-blue-400">
              <h1 className="text-orange-400 pb-52 px-4 text-center text-5xl font-bold dark:text-white">
                Welcome To Portfolio Generator
              </h1>
            </div>
          </div>
          <div className="div2 h-screen w-[50vw] flex items-center justify-center">
            <form
              onSubmit={HandleSignIn}
              className="form flex flex-col justify-center items-center gap-4 w-max h-[400px] bg-white rounded-2xl shadow-gray-900 shadow-lg"
            >
              <Input
                labelText="Username :"
                name="username"
                placeholder="Enter Your Username"
                className="w-[40vw] lg:w-[30vw]"
                onChange={(e) => {
                  setuser({
                    ...user,
                    username: e.target.value,
                  });
                }}
                value={user.username}
              />
              <Input
                labelText="Password :"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="w-[40vw] lg:w-[30vw]"
                value={user.password}
                onChange={(e) => {
                  setuser({
                    ...user,
                    password: e.target.value,
                  });
                }}
              />
              <Button text="LOGIN" type="submit" className="w-[40vw] lg:w-[30vw]"/>
              <p className="dark:text-black">
                Don't Have An Account ?
                <a
                  href="/register"
                  className="text-orange-400 hover:text-red-800 hover:underline"
                >
                  {" "}
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
