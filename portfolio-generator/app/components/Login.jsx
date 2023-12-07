'use client'
import React, { useState } from "react";
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


function Login() {
  const [user, setuser] = useState({
    username: "",
    password: "",
  });

  const router = useRouter()

  async function HandleSignIn(e){
    e.preventDefault();
    if(!user.username||!user.password){
      toast.error('All fields are required')
    }
    else{
      try{
       const  res = await signIn("credentials",{
          username:user.username,
          password:user.password,
          redirect:false
        })
        if(res.ok){
          toast.success("Login Successfully")
          router.push('/home')
        }
        else{
          toast.warn("Invalid Credentials")
        }
      }
      catch(error){
        console.log(error);
      }
    }
    
   

  }
  return (
    <section>
      <div className="lg:hidden container w-screen h-screen flex justify-center items-center">
        <form onSubmit={HandleSignIn} className="form h-[580px] w-[350px] bg-gray-700 flex flex-col gap-8 items-center justify-center">
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
          <label htmlFor="password" className="text-xl font-bold text-white">
            Password
          </label>
          <input
            type="password"
            className="w-[300px] rounded-sm h-8"
            placeholder="YOUR PASSOWORD"
            value={user.password}
            onChange={(e) => {
              setuser({
                ...user,
                password: e.target.value,
              });
            }}
          />

          <button className="px-8 mt-2  py-4 font-bold text-white bg-blue-500 rounded-full font-serif">
            LOGIN
          </button>
          <p className="text-white font-bold">
            DON'T HAVE AN ACCOUNT ?{" "}
            <a href="/register" className="text-orange-400 ">
              REGISTER
            </a>
          </p>
        </form>
      </div>
      <div className="  container1 hidden md:flex">
        <div className="div1 h-screen w-[50%]">
          <div className="bubble w-[700px] h-[700px] bg-gray-600 rounded-br-full">
            <h1 className="text-orange-400 text-5xl pt-52 font-bold text-center font-serif">
              Welcome To Portfolio Generator
            </h1>
          </div>
        </div>
        <div className="div2 h-screen w-[50%] flex items-center justify-center">
          <form  onSubmit={HandleSignIn}  className="form flex flex-col justify-center items-center gap-4 w-[500px] h-[400px] bg-white rounded-2xl shadow-gray-900 shadow-lg">
            <input
              type="text"
              name="username"
              id="user"
              placeholder="Username"
              className="w-[480px] rounded-md bg-gray-200 h-10"
              onChange={(e) => {
                setuser({
                  ...user,
                  username: e.target.value,
                });
              }}
              value={user.username}
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
            <button className="w-[400px] m-10 py-4 text-white font-bold bg-blue-400">
              LOGIN
            </button>
            <p>
              Don't Have An Account ?{" "}
              <a href="/register" className="text-orange-400">
                {" "}
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
