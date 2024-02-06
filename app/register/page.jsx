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

  const router = useRouter();

  async function UserAdd(e) {
    e.preventDefault();
    if (!user.username || !user.password || !user.email || !user.password1) {
      toast.error("All Fields Are Required");
    }
    if (user.password && user.password.length < 8) {
      toast.info("Password is Too Small");
    }
    if (user.password != user.password1) {
      toast.error("Enter Same Password");
    } else {
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
          toast.warn("Already Created");
        }
        if (res1.status === 200) {
          toast.success("Account Created");
          router.push("/home");
        }
        if (res1.status === 500) {
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
              className="w-72 bg-blue-500"
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

        <div className=" hidden sm:flex w-full h-full container1 ">
          <div className="div1 h-screen md:lg:w-[50%] sm:w-[100%] flex items-center justify-center">
            <form
              onSubmit={UserAdd}
              className="form flex flex-col dark:text-black  justify-center items-center gap-4 sm:w-[20rem] md:w-[31.25rem] h-max bg-white rounded-2xl shadow-gray-900 shadow-lg"
            >
              <Input
                labelText="Username: "
                labelClassName="mt-5"
                className="sm:w-72 md:w-96"
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
                className="sm:w-72 md:w-96"
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
                className="sm:w-72 md:w-96"
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
                className="sm:w-72 md:w-96"
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

              <Button type="submit" text="Register" className="sm:w-72 md:w-[25rem]"  />
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
          <div className="div1 h-screen w-[50%] -z-10">
            <div className="bubble w-full h-full dark:bg-blue-400 bg-gray-600 flex justify-center items-center rounded-tl-full">
              <h1 className="text-orange-400 px-12 pt-52 text-5xl text-center font-bold dark:text-white lg:block">
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
