"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

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
   if ( user.password && user.password.length < 8){
    toast.info("Password is Too Small")
   }
   if ( user.password != user.password1){
    toast.error("Enter Same Password")
   }
   else{
    try {
      let res = await fetch("https://portfolio-generator-delta.vercel.app/api/register", {
          method: "POST",
          body: JSON.stringify({
            username: user.username,
            email: user.email,
            password: user.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }),
        res1 = await res.json();
      if (res1.status === 401) {
        toast.warn("Already Created");
      }
      if (res1.status === 200) {
        toast.success("Account Created");
        router.push('/')
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
    <section>
      <div className=" lg:hidden container w-screen h-screen flex justify-center items-center">
        <form   onSubmit={UserAdd} className="form h-[580px] w-[350px] bg-gray-700 flex flex-col gap-4  items-center justify-center">
          <h1 className="font-bold text-orange-400 text-2xl">
            {" "}
            PORTFOLIO GENERATOR
          </h1>
          <label htmlFor="username" className="text-xl font-bold text-white">
            Username
          </label>
          <input
            type="text"
            className="w-[300px] rounded-sm h-8"
            placeholder="YOUR USERNAME"
            onChange={(e) => {
              setuser({
                ...user,
                username: e.target.value,
              });
            }}
            value={user.username}
          />

          <label htmlFor="email" className="text-xl font-bold text-white">
            Email
          </label>
          <input
            type="email"
            className="w-[300px] rounded-sm h-8"
            placeholder="YOUR EMAIL"
            value={user.email}
            onChange={(e) => {
              setuser({
                ...user,
                email: e.target.value,
              });
            }}
          />

          <label htmlFor="password" className="text-xl font-bold text-white">
            Password
          </label>
          <input
            type="password"
            className="w-[300px] rounded-sm h-8"
            placeholder="YOUR PASSWORD"
            value={user.password}
            onChange={(e) => {
              setuser({
                ...user,
                password: e.target.value,
              });
            }}
          />

          <label htmlFor="password" className="text-xl font-bold text-white">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-[300px] rounded-sm h-8"
            placeholder="YOUR PASSWORD"
            value={user.password1}
            onChange={(e) => {
              setuser({
                ...user,
                password1: e.target.value,
              });
            }}
          />
          <button className="px-8 mt-2  py-4 font-bold text-white bg-blue-500 rounded-full">
            REGISTER
          </button>
          <p className="text-white font-bold">
            ALREADY HAVE AN ACCOUNT ?{" "}
            <a href="/" className="text-orange-400">
              Sign In
            </a>
          </p>
        </form>
      </div>

      <div className=" hidden lg:flex container1 ">
        <div className="div1 h-screen w-[50%] flex items-center justify-center">
          <form
            onSubmit={UserAdd}
            className="form flex flex-col justify-center items-center gap-4 w-[500px] h-[450px] bg-white rounded-2xl shadow-gray-900 shadow-lg"
          >
            <input
              type="text"
              name="username"
              id="user"
              placeholder="Username"
              className="w-[480px] rounded-md bg-gray-200 h-10"
              value={user.username}
              onChange={(e) => {
                setuser({
                  ...user,
                  username: e.target.value,
                });
              }}
            />
            <input
              type="email"
              name="email"
              id="pass"
              placeholder="email"
              className="w-[480px] rounded-md bg-gray-200 h-10"
              value={user.email}
              onChange={(e) => {
                setuser({
                  ...user,
                  email: e.target.value,
                });
              }}
            />
            <input
              type="password"
              name="password"
              id="pass"
              placeholder="Password"
              className="w-[480px] rounded-md bg-gray-200 h-10"
              value={user.password}
              onChange={(e) => {
                setuser({
                  ...user,
                  password: e.target.value,
                });
              }}
            />
            <input
              type="password"
              name="password"
              id="pass"
              placeholder="Confirm Password"
              className="w-[480px] rounded-md bg-gray-200 h-10"
              value={user.password1}
              onChange={(e) => {
                setuser({
                  ...user,
                  password1: e.target.value,
                });
              }}
            />

            <button
              className="w-[400px] m-10 py-4 text-white font-bold bg-blue-400 font-serif"
              type="submit"
            >
              Register
            </button>
            <p>
              Already Have An Account ?{" "}
              <a href="/" className="text-orange-400 ">
                {" "}
                Sign In
              </a>
            </p>
          </form>
        </div>
        <div className="div1 h-screen w-[50%]">
          <div className="bubble w-full h-[700px] bg-gray-600 rounded-tl-full">
            <h1 className="text-orange-400 text-5xl px-8 pt-[400px] pl-31 font-bold text-center font-serif ml-32 ">
              Welcome To Portfolio Generator
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
