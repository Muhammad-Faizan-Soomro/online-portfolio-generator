"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpForm from "../components/ExpForm";
import SkillForm from "../components/SkillForm";
import ProjectForm from "../components/ProjectForm";
import { removeExp } from "../redux/slice";
import { removeProject } from "../redux/projectSlice";
import { removeSkill } from "../redux/skillSlice";
import Form from "../components/Form";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

export default function Page() {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const experience = useSelector((data) => data.expData.experience);
  const projects = useSelector((data) => data.projectData.project);
  const skills = useSelector((data) => data.skillData.skill);

  const [codeActive, setCodeActive] = useState("hidden");
  const [formActive, setFormActive] = useState("show");

  const [user_id, setUser_id] = useState("");
  const [fullName, setFullName] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [template, setTemplate] = useState("");
  const [workDesc, setWorkDesc] = useState("");
  const [selfDesc, setSelfDesc] = useState("");
  const [cvLink, setCvLink] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [numOfProjects, setNumOfProjects] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [numOfHappyClients, setNumOfHappyClients] = useState("");
  const [totalCustomerReviews, setTotalCustomerReviews] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [location, setLocation] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");

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
            disabled= {fullName && workDesc && aboutMe && selfDesc && facebookLink && githubLink && email ? false : true}
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
              className="w-max   lg:p-10  mt-4 gap-10  text-xl relative mx-auto shadow-md  border-2 font-bold flex flex-col items-center justify-center "
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
              className="w-max text-xl  lg:p-10  mt-4 gap-10  relative mx-auto shadow-md  border-2 font-bold flex flex-col items-center justify-center"
            >
              <p>
                {" "}
                <span className="font-bold underline text-orange-400">
                  IMAGE URL:
                </span>
                {item.image.slice(0,27)}
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
              className="w-max text-xl   lg:p-10  mt-4 gap-10  relative mx-auto shadow-md  border-2 font-bold flex flex-col items-center justify-center "
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
      <div className={codeActive}>
        <Form {...props} />
      </div>
    </div>
  );
}
