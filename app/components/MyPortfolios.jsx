"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import pic3 from "../../public/template3.png";
import Image from "next/image";
import Link from "next/link";
import pic8 from "../../public/template8.png";
import pic2 from "../../public/template2.png";
import pic4 from "../../public/template4.png";
import pic1 from "../../public/template1/template.png";

function MyPortfolios({ data }) {
  let [userId, setUserId] = useState("");
  useEffect(() => {
    // Perform localStorage action
    //setUserId(localStorage.getItem("user"));
    setUserId("faizan")
  }, []);
  return (
    <div className="templates w-full h-full   flex flex-col gap-10  lag:gap-4 lg:px-10  lg:grid grid-cols-3 lg:mb-2  items-center justify-start pt-4">
      {data.map((datas) =>
        datas.user_id == userId ? (
          <div
            key={datas._id}
            className="template8  group relative overflow-hidden border-2  dark:border-white  w-[350px] h-[230px]  flex flex-col"
          >
            <div className="img w-[100%] h-[100%] ">
              <Image
                src={
                  datas.template == "simple"
                    ? pic3
                    : datas.template == "react"
                    ? pic8
                    : datas.template == "beginner"
                    ? pic2
                    : datas.template == "developers"
                    ? pic4
                    : pic1
                }
                alt="pic.png"
              />
            </div>
            <h1 className="font-bold text-3xl  dark:text-white font-sans text-orange-400 text-center">
              {datas.template}
            </h1>
            <div className="hide absolute flex items-end justify-evenly pb-20 w-full h-full bg-black/20  translate-y-full group-hover:translate-y-0 transition-all duration-300">
              <Link
                href={{
                  pathname: "/edit",
                  query: {
                    id: datas._id,
                    // fullName: datas.fullName,
                    // profilePicUrl: datas.profilePicUrl,
                    // workDesc: datas.workDesc,
                    // selfDesc: datas.selfDesc,
                    // cvLink: datas.cvLink,
                    // aboutMe: datas.aboutMe,
                    // numOfProjects: datas.numOfProjects,
                    // yearsOfExperience: datas.yearsOfExperience,
                    // numOfHappyClients: datas.numOfHappyClients,
                    // totalCustomerReviews: datas.totalCustomerReviews,
                    // location: datas.location,
                    // mobileNumber: datas.mobileNumber,
                    // facebookLink: datas.facebookLink,
                    // githubLink: datas.githubLink,
                    // linkedinLink: datas.linkedinLink,
                    // twitterLink: datas.twitterLink,
                    // email: datas.email,
                    // skills: datas.skills,
                    // experience: datas.experience,
                    // projects:datas.projects
                  },
                }}
                className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md"
              >
                Edit
              </Link>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default MyPortfolios;
