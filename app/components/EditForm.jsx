"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpForm from "../components/ExpForm";
import SkillForm from "../components/SkillForm";
import ProjectForm from "../components/ProjectForm";
import { removeExp, addExp, removeAllExp } from "../redux/slice";
import {
  removeProject,
  addProject,
  removeAllProject,
} from "../redux/projectSlice";
import { removeSkill, addSkill, removeAllSkill } from "../redux/skillSlice";
import Form from "../components/Form";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function EditForm({ postData }) {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();

  const experience = useSelector((data) => data.expData.experience);
  const projects = useSelector((data) => data.projectData.project);
  const skills = useSelector((data) => data.skillData.skill);

  const [codeActive, setCodeActive] = useState("hidden");
  const [formActive, setFormActive] = useState("show");

  const [user_id, setUser_id] = useState(postData ? postData[0].user_id : "");
  const [fullName, setFullName] = useState(
    postData ? postData[0].fullName : ""
  );
  const [profilePicUrl, setProfilePicUrl] = useState(
    postData ? postData[0].profilePicUrl : ""
  );
  const [template, setTemplate] = useState(
    postData ? postData[0].template : ""
  );
  const [workDesc, setWorkDesc] = useState(
    postData ? postData[0].workDesc : ""
  );
  const [selfDesc, setSelfDesc] = useState(
    postData ? postData[0].selfDesc : ""
  );
  const [cvLink, setCvLink] = useState(postData ? postData[0].cvLink : "");
  const [aboutMe, setAboutMe] = useState(postData ? postData[0].aboutMe : "");
  const [numOfProjects, setNumOfProjects] = useState(
    postData ? postData[0].numOfProjects : ""
  );
  const [yearsOfExperience, setYearsOfExperience] = useState(
    postData ? postData[0].yearsOfExperience : ""
  );
  const [numOfHappyClients, setNumOfHappyClients] = useState(
    postData ? postData[0].numOfHappyClients : ""
  );
  const [totalCustomerReviews, setTotalCustomerReviews] = useState(
    postData ? postData[0].totalCustomerReviews : ""
  );
  const [facebookLink, setFacebookLink] = useState(
    postData ? postData[0].facebookLink : ""
  );
  const [githubLink, setGithubLink] = useState(
    postData ? postData[0].githubLink : ""
  );
  const [twitterLink, setTwitterLink] = useState(
    postData ? postData[0].twitterLink : ""
  );
  const [linkedinLink, setLinkedinLink] = useState(
    postData ? postData[0].linkedinLink : ""
  );
  const [location, setLocation] = useState(
    postData ? postData[0].location : ""
  );
  const [mobileNumber, setMobileNumber] = useState(
    postData ? postData[0].mobileNumber : ""
  );
  const [email, setEmail] = useState(postData ? postData[0].email : "");

  useEffect(() => {
    if (postData && postData[0].experience.length != 0) {
      dispatch(removeAllExp());
      postData[0].experience.map((exp) => dispatch(addExp(exp)));
    }
  }, [postData]);

  useEffect(() => {
    if (postData && postData[0].skills.length != 0) {
      dispatch(removeAllSkill());
      postData[0].skills.map((skill) => dispatch(addSkill(skill)));
    }
  }, [postData]);

  useEffect(() => {
    if (postData && postData[0].projects.length != 0) {
      dispatch(removeAllProject());
      postData[0].projects.map((proj) => dispatch(addProject(proj)));
    }
  }, [postData]);

  const toggleTabs = () => {
    if (codeActive == "hidden") {
      setCodeActive("show");
    } else {
      setCodeActive("hidden");
    }

    if (formActive == "show") {
      setFormActive("hidden");
    } else {
      setFormActive("show");
    }
  };

  useEffect(() => {
    setUser_id(localStorage.getItem("user"));
    setTemplate(localStorage.getItem("template"));
  }, []);

  const backToTop = () => {
    useNavv;
  };

  let props = {
    fullName,
    profilePicUrl,
    workDesc,
    selfDesc,
    cvLink,
    aboutMe,
    numOfProjects,
    yearsOfExperience,
    numOfHappyClients,
    totalCustomerReviews,
    facebookLink,
    githubLink,
    twitterLink,
    linkedinLink,
    location,
    mobileNumber,
    email,
    experience,
    skills,
    projects,
  };

  const onSubmit = async (data) => {
    const imageData = data.profile[0];
    const formData = new FormData();
    formData.append("file", imageData);
    formData.append("upload_preset", "portfolio");

    const uploadResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const uploadedImageData = await uploadResponse.json();

    setProfilePicUrl(uploadedImageData.secure_url);

    const cvData = data.cv[0];
    const CVFormData = new FormData();
    CVFormData.append("file", cvData);
    CVFormData.append("upload_preset", "portfolio");

    const CVUploadResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: CVFormData,
      }
    );

    const uploadedCvData = await CVUploadResponse.json();

    setCvLink(uploadedCvData.secure_url);

    if (postData) {
      let result = await fetch("/api/detail", {
        method: "PUT",
        body: JSON.stringify({
          _id: searchParams.get("id"),
          user_id,
          template,
          fullName,
          workDesc,
          selfDesc,
          cvLink: uploadedCvData.secure_url,
          aboutMe,
          numOfProjects,
          yearsOfExperience,
          numOfHappyClients,
          totalCustomerReviews,
          skills,
          experience,
          projects,
          location,
          email,
          mobileNumber,
          facebookLink,
          githubLink,
          linkedinLink,
          twitterLink,
          profilePicUrl: uploadedImageData.secure_url,
        }),
      });
    } else {
      let result = await fetch("/api/detail", {
        method: "POST",
        body: JSON.stringify({
          user_id,
          template,
          fullName,
          workDesc,
          selfDesc,
          cvLink: uploadedCvData.secure_url,
          aboutMe,
          numOfProjects,
          yearsOfExperience,
          numOfHappyClients,
          totalCustomerReviews,
          skills,
          experience,
          projects,
          location,
          email,
          mobileNumber,
          facebookLink,
          githubLink,
          linkedinLink,
          twitterLink,
          profilePicUrl: uploadedImageData.secure_url,
        }),
      });
    }

    if (codeActive == "hidden") {
      setCodeActive("show");
    } else {
      setCodeActive("hidden");
    }

    if (formActive == "show") {
      setFormActive("hidden");
    } else {
      setFormActive("show");
    }
  };

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    console.log("exe")
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      {formActive == "show" ? (
        <h1 className="font-extrabold text-center text-2xl lg:text-5xl text-orange-400 mb-4">
          PLEASE FILL THE FORM{" "}
        </h1>
      ) : (
        <h1 className="font-extrabold text-center text-2xl lg:text-5xl text-orange-400 mb-4">
          DOWNLOAD CODE
        </h1>
      )}
      <div className={formActive}>
        <ExpForm />
        <br />
        <SkillForm />
        <br />
        <ProjectForm />
        <br />
        <form
          className="w-full h-full flex flex-col   items-center justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label
            htmlFor="file_input"
            className="text-orange-400 font-bold text-xl mb-2"
          >
            Upload Profile Picture
          </label>
          <input
            {...register("profile")}
            className="text-orange-400 font-bold"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
          />
          <br />
          <label
            htmlFor="file_input"
            className="font-bold mb-2 mt-2 text-orange-400 text-xl"
          >
            Upload CV
          </label>
          <input
            {...register("cv")}
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
            className="text-orange-400 font-bold"
          />
          <br />
          <input
            type="text"
            value={user_id}
            placeholder="User ID"
            onChange={(e) => setUser_id(e.target.value)}
            className="w-64 h-14  mt-2 rounded-lg  md:w-80 lg:w-[900px] border-2 border-orange-400"
            disabled
          />
          <br />
          <input
            className="w-64 h-14  mt-2 rounded-lg  md:w-80 lg:w-[900px]  border-2 border-orange-400"
            type="text"
            value={fullName}
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={template}
            placeholder="Template Name"
            onChange={(e) => setTemplate(e.target.value)}
            className="w-64 h-14  mt-2 rounded-lg  border-2  md:w-80 lg:w-[900px] border-orange-400"
            disabled
          />
          <br />
          <input
            type="text"
            value={workDesc}
            placeholder="Work Description"
            onChange={(e) => setWorkDesc(e.target.value)}
            className="w-64 h-14  mt-2 rounded-lg  border-2 border-orange-400  md:w-80 lg:w-[900px]"
            required
          />
          <br />
          <input
            type="text"
            value={selfDesc}
            placeholder="Self Description"
            onChange={(e) => setSelfDesc(e.target.value)}
            className="w-64 h-14  mt-2 rounded-lg  border-2 border-orange-400  md:w-80 lg:w-[900px]"
            required
          />
          <br />
          <input
            type="text"
            value={aboutMe}
            placeholder="About Yourself"
            onChange={(e) => setAboutMe(e.target.value)}
            className="w-64 h-14  mt-2 rounded-lg  border-2 border-orange-400  md:w-80 lg:w-[900px]"
            required
          />
          <br />
          <input
            type="text"
            value={numOfProjects}
            placeholder="Number of projects you have completed"
            onChange={(e) => setNumOfProjects(e.target.value)}
            className="w-64 h-14  mt-2 rounded-lg  border-2 border-orange-400  md:w-80 lg:w-[900px]"
            required
          />
          <br />
          <input
            type="text"
            value={yearsOfExperience}
            placeholder="Years of experience"
            onChange={(e) => setYearsOfExperience(e.target.value)}
            className="w-64 h-14  mt-2 rounded-lg  border-2 border-orange-400  md:w-80 lg:w-[900px]"
          />
          <br />
          <input
            type="text"
            value={numOfHappyClients}
            placeholder="Number of satisfied clients"
            onChange={(e) => setNumOfHappyClients(e.target.value)}
            className="w-64 h-14  mt-2 rounded-lg  border-2 border-orange-400  md:w-80 lg:w-[900px]"
          />
          <br />
          <input
            type="text"
            value={totalCustomerReviews}
            placeholder="Number of Customer Reviews"
            onChange={(e) => setTotalCustomerReviews(e.target.value)}
            className="w-64 h-14  mt-2 rounded-lg  border-2 border-orange-400  md:w-80 lg:w-[900px]"
          />
          <br />
          <input
            type="text"
            value={facebookLink}
            placeholder="Facebook link"
            onChange={(e) => setFacebookLink(e.target.value)}
            className="w-64 h-14  mt-2 rounded-lg  border-2 border-orange-400  md:w-80 lg:w-[900px]"
            required
          />
          <br />
          <input
            type="text"
            value={githubLink}
            placeholder="Github Link"
            onChange={(e) => setGithubLink(e.target.value)}
            className="w-64 h-14  mt-2 rounded-lg  border-2 border-orange-400  md:w-80 lg:w-[900px]"
            required
          />
          <br />
          <input
            type="text"
            value={twitterLink}
            placeholder="Twitter Link"
            onChange={(e) => setTwitterLink(e.target.value)}
            className="w-64 h-14  mt-2 rounded-lg  border-2 border-orange-400  md:w-80 lg:w-[900px]"
          />
          <br />
          <input
            type="text"
            value={linkedinLink}
            placeholder="LinkedIn Link"
            onChange={(e) => setLinkedinLink(e.target.value)}
            className="w-64 h-14  mt-2 rounded-lg  border-2 border-orange-400  md:w-80 lg:w-[900px]"
          />
          <br />
          <input
            type="text"
            value={location}
            placeholder="Enter your location"
            className="w-64 h-14  mt-2 rounded-lg  border-2 border-orange-400  md:w-80 lg:w-[900px]"
            onChange={(e) => setLocation(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={email}
            className="w-64 h-14  mt-2 rounded-lg   md:w-80 lg:w-[900px] border-2 border-orange-400"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="text"
            value={mobileNumber}
            placeholder="Give your contact number"
            className="w-64 h-14  mt-2 rounded-lg  border-2  md:w-80 lg:w-[900px] border-orange-400"
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <br />
          <button
            type="submit"
            className="px-6 py-4 text-white font-bold rounded-lg  bg-orange-400 flex items-center justify-center gap-2 mb-4 disabled:bg-[#FDA172] disabled:font-normal disabled:px-3 disabled:py-2"
            disabled={
              fullName &&
              workDesc &&
              aboutMe &&
              selfDesc &&
              facebookLink &&
              githubLink &&
              email
                ? false
                : true
            }
            onClick={scrollToTop}
          >
            Proceed To Next Step <FaArrowRight />
          </button>
        </form>

        {/* <button onClick={submitDataToDB}>Send to DB</button> */}

        <div>
          <h1 className="text-xl lg:text-4xl font-extrabold text-center text-orange-400">
            Experience Added
          </h1>
          {experience.map((item) => (
            <div
              key={item.startDate}
              className="w-max text-xl relative mx-auto shadow-md  border-2 font-bold flex flex-col items-center justify-center"
            >
              <p>
                {" "}
                <span className="font-bold underline text-orange-400">
                  COMPANY NAME:
                </span>
                {item.companyName}
              </p>
              <p>
                {" "}
                <span className="font-bold underline text-orange-400">
                  JOB TITLE:
                </span>
                {item.jobTitle}
              </p>
              <p>
                {" "}
                <span className="font-bold underline text-orange-400">
                  JOB DESCRIPTION:
                </span>
                {item.jobDescription}
              </p>
              <p>
                {" "}
                <span className="font-bold underline text-orange-400">
                  START DATE:
                </span>
                {item.startDate}
              </p>
              <p>
                {" "}
                <span className="font-bold underline text-orange-400">
                  END DATE:
                </span>
                {item.endDate}
              </p>
              <button
                className="px-6 py-4 gap-2  text-white font-bold bg-orange-400 flex items-center justify-center mt-2 mb-2 "
                onClick={() => dispatch(removeExp(item.id))}
              >
                Remove
                <ImCross />
              </button>
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-xl lg:text-4xl font-extrabold text-center text-orange-400">
            Projects Added
          </h1>
          {projects.map((item) => (
            <div
              key={item.liveLink}
              className="w-max text-xl relative mx-auto shadow-md  border-2 font-bold flex flex-col items-center justify-center"
            >
              <p>
                {" "}
                <span className="font-bold underline text-orange-400">
                  IMAGE URL:
                </span>
                {item.image.slice(0, 27)}
              </p>
              <p>
                {" "}
                <span className="font-bold underline text-orange-400">
                  GITHUB LINK:
                </span>
                {item.githubLink}
              </p>
              <p>
                {" "}
                <span className="font-bold underline text-orange-400">
                  LIVE:
                </span>
                {item.liveLink}
              </p>
              <button
                className="px-6 py-4 gap-2  text-white font-bold bg-orange-400 flex items-center justify-center mt-2 mb-2"
                onClick={() => dispatch(removeProject(item.id))}
              >
                Remove <ImCross />
              </button>
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-xl lg:text-4xl font-extrabold text-center text-orange-400">
            Skills Added
          </h1>
          {skills.map((item) => (
            <div
              key={item.name}
              className="w-max text-xl relative mx-auto shadow-md  border-2 font-bold flex flex-col items-center justify-center "
            >
              <p>
                {" "}
                <span className="font-bold underline text-orange-400">
                  SKILL:
                </span>
                {item.name}
              </p>
              <p>
                {item.percentage}{" "}
                <span className="font-bold underline text-orange-400">%</span>
              </p>
              <button
                className="px-6 py-4 gap-2  text-white font-bold bg-orange-400 flex items-center justify-center mt-2 mb-2 "
                onClick={() => dispatch(removeSkill(item.id))}
              >
                Remove <ImCross />
              </button>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => toggleTabs()} className={codeActive}>
        <span className="px-6 py-4 text-white font-bold rounded-lg  bg-orange-400 mt-8">
          Back To Form
        </span>
      </button>
      <div className={codeActive} id="move">
        <Form {...props} />
      </div>
    </div>
  );
}
