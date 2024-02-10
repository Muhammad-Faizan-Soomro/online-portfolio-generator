"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import pic3 from "../../public/template3.png";
import Image from "next/image";
import Link from "next/link";
import pic8 from "../../public/template8.png";
import pic2 from "../../public/template2/preview.webp";
import pic4 from "../../public/template4.png";
import pic1 from "../../public/template1/template.webp";
import pic5 from "../../public/assets/preview.webp";
import { useRouter } from 'next/navigation';
import Loader from "./Loader";


function MyPortfolios({ data }) {
  let [userId, setUserId] = useState("");
  useEffect(() => {
    // Perform localStorage action
    setUserId(localStorage.getItem("user"));
  }, []);

  const router = useRouter();

  const [loading, setLoading] = useState("false");

  if(loading == 'true'){
    return(
      <div>
        <Loader/>
      </div>
    )
  }

  return (
    <div className="templates w-full h-full flex flex-col gap-10 lg:grid lg:grid-cols-3  items-center justify-start pt-10">
      {data.map((datas) =>
        datas.user_id == userId ? (
          <div
            key={datas._id}
            className="template8 group relative overflow-hidden border-2  dark:border-white  w-[90vw] h-fit  place-self-center flex flex-col lg:w-[18rem]"
          >
            <div className="img w-[100%] h-[100%] ">
              <Image
                src={
                  datas.template == "simple"
                    ? pic2
                    : datas.template == "react"
                    ? pic8
                    : datas.template == "beginner"
                    ? pic3
                    : datas.template == "developers"
                    ? pic4
                    : datas.template == "mini"
                    ? pic5
                    : pic1
                }
                alt="pic.png"
              />
            </div>
            <h1 className="font-bold text-3xl uppercase dark:text-white mt-4 font-sans text-orange-400 text-center">
              {datas.template}
            </h1>
            <div className="hide absolute flex items-center justify-evenly w-full h-full bg-black/20  translate-y-full group-hover:translate-y-0 transition-all duration-300">
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
                className="px-4 py-2 bg-gray-50 text-black font-bold rounded-md hover:scale-110"
                onClick={() => localStorage.setItem("template", datas.template)}
              >
                Edit
              </Link>
              <button
                className="p-2 bg-white font-bold rounded-md text-black hover:scale-110"
                onClick={async () => {
                  setLoading("true")
                  data = await fetch("http://localhost:3000/api/detail", {
                    cache:"no-cache",
                    method: "DELETE",
                    body: JSON.stringify({
                      _id: datas._id,
                    }),
                  });

                  router.refresh()
                  setLoading("false")
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default MyPortfolios;
