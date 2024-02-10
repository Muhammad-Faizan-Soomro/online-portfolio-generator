"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";

function Register() {
  const [user, setuser] = useState({
    username: "",
    email: "",
    password: "",
    password1: "",
  });

  const [loading,setLoading] = useState("false")

  const router = useRouter();

  async function UserAdd(e) {
    setLoading("true")
    e.preventDefault();
    if (!user.username || !user.password || !user.email || !user.password1) {
      setLoading("false")
      toast.error("All Fields Are Required");
    }
    if (user.password && user.password.length < 8) {
      setLoading("false")
      toast.info("Password Length Should Be Greater Than 8");
    }
    if (user.password != user.password1) {
      setLoading("false")
      toast.error("Enter Same Password");
    } else {
      // https://online-portfolio-generator.vercel.app
      try {
        let res = await fetch(
            "https://online-portfolio-generator.vercel.app/api/register",
            {
              method: "POST",
              body: JSON.stringify({
                username: user.username,
                email: user.email,
                password: user.password,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          ),
          res1 = await res.json();
        if (res1.status === 401) {
          setLoading("false")
          toast.warn("Email / Username Already In Use");
        }
        if (res1.status === 200) {
          setLoading("true")
          toast.success("Account Created");
          router.push("/home");
        }
        if (res1.status === 500) {
          setLoading("false")
          toast.warn("Pls Try Again");
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
        <div className=" sm:hidden container h-[100vh] w-[100vw] flex justify-center items-center">
          <form
            onSubmit={UserAdd}
            className="form h-[100%] w-[100%] bg-gray-700 flex flex-col gap-4  items-center justify-center"
          >
            <h1 className="font-bold text-orange-400 text-2xl text-center">
              WELCOME TO
              <br />
              PORTFOLIO GENERATOR
            </h1>
            <Input
              labelText="Username: "
              labelClassName="text-white"
              type="text"
              placeholder="Enter Username"
              className="w-[80vw] max-w-[20rem]"
              onChange={(e) => {
                setuser({
                  ...user,
                  username: e.target.value,
                });
              }}
              value={user.username}
            />

            <Input
              labelText="Email: "
              labelClassName="text-white"
              type="email"
              placeholder="Enter Email"
              className="w-[80vw] max-w-[20rem]"
              value={user.email}
              onChange={(e) => {
                setuser({
                  ...user,
                  email: e.target.value,
                });
              }}
            />

            <Input
              labelText="Password: "
              labelClassName="text-white"
              type="password"
              className="w-[80vw] max-w-[20rem]"
              placeholder="Enter Password"
              value={user.password}
              onChange={(e) => {
                setuser({
                  ...user,
                  password: e.target.value,
                });
              }}
            />

            <Input
              labelText="Confirm Password: "
              labelClassName="text-white"
              type="password"
              placeholder="Confirm Password"
              className="w-[80vw] max-w-[20rem]"
              value={user.password1}
              onChange={(e) => {
                setuser({
                  ...user,
                  password1: e.target.value,
                });
              }}
            />
            <Button
              className="w-[80vw] max-w-[20rem] bg-blue-500 "
              type="submit"
              text="Register"
            />
            <p className="text-white font-bold">
              Already Have An Account ?{" "}
              <a
                href="/login"
                className="text-orange-400 hover:text-red-400 hover:underline"
              >
                Sign In
              </a>
            </p>
          </form>
        </div>

        <div className=" hidden h-full w-full sm:flex">
          <div className="div1 h-screen w-[50vw] flex items-center justify-center">
            <form
              onSubmit={UserAdd}
              className="form flex flex-col dark:text-black  justify-center items-center gap-4 w-max h-max bg-white rounded-2xl shadow-gray-900 shadow-lg"
            >
              <Input
                labelText="Username: "
                labelClassName="mt-5"
                className="w-[40vw] lg:w-[30vw]"
                name="username"
                placeholder="Enter Username"
                value={user.username}
                onChange={(e) => {
                  setuser({
                    ...user,
                    username: e.target.value,
                  });
                }}
              />
              <Input
                labelText="Email: "
                type="email"
                name="email"
                className="w-[40vw] lg:w-[30vw]"
                placeholder="Enter Email"
                value={user.email}
                onChange={(e) => {
                  setuser({
                    ...user,
                    email: e.target.value,
                  });
                }}
              />
              <Input
                labelText="Password: "
                type="password"
                name="password"
                className="w-[40vw] lg:w-[30vw]"
                placeholder="Enter Password"
                value={user.password}
                onChange={(e) => {
                  setuser({
                    ...user,
                    password: e.target.value,
                  });
                }}
              />
              <Input
                labelText="Confirm Password: "
                type="password"
                className="w-[40vw] lg:w-[30vw]"
                name="password"
                placeholder="Confirm Password"
                value={user.password1}
                onChange={(e) => {
                  setuser({
                    ...user,
                    password1: e.target.value,
                  });
                }}
              />

              <Button type="submit" text={loading == "true" ? "Please Wait..." : "Register"} className="w-[40vw] lg:w-[30vw] disabled:bg-[#FDA172] disabled:font-normal disabled:px-3 disabled:py-2 disabled:dark:bg-blue-300" disabled={loading == 'true' ? true : false}
 />
              <p className="dark:text-black mb-5">
                Already Have An Account ?{" "}
                <a
                  href="/login"
                  className="text-orange-400 hover:text-red-800 hover:underline "
                >
                  {" "}
                  Sign In
                </a>
              </p>
            </form>
          </div>
          <div className="div1 h-screen w-[50vw] -z-10">
            <div className="bubble w-full h-full dark:bg-blue-400 bg-gray-600 flex justify-center items-center rounded-tl-full">
              <h1 className="text-orange-400 px-12 pt-52 text-5xl text-center font-bold dark:text-white">
                Welcome To Portfolio Generator
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
