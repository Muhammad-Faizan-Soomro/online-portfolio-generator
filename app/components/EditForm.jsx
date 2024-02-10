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
import Navbar from "./Nnavbar";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

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
    if (!postData) {
      dispatch(removeAllExp());
    }
    if (postData && postData[0].experience.length != 0) {
      dispatch(removeAllExp());
      postData[0].experience.map((exp) => dispatch(addExp(exp)));
    }
  }, [postData]);

  useEffect(() => {
    if (!postData) {
      dispatch(removeAllSkill());
    }
    if (postData && postData[0].skills.length != 0) {
      dispatch(removeAllSkill());
      postData[0].skills.map((skill) => dispatch(addSkill(skill)));
    }
  }, [postData]);

  useEffect(() => {
    if (!postData) {
      dispatch(removeAllProject());
    }
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

    setProfilePicUrl(
      uploadedImageData.secure_url
        ? uploadedImageData.secure_url
        : postData
        ? postData[0].profilePicUrl
        : ""
    );

    const cvData = data.cv ? data.cv[0] : "";
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

    setCvLink(
      uploadedCvData.secure_url
        ? uploadedCvData.secure_url
        : postData
        ? postData[0].cvLink
        : ""
    );

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
          cvLink: uploadedCvData.secure_url || postData[0].cvLink,
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
          profilePicUrl:
            uploadedImageData.secure_url || postData[0].profilePicUrl,
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
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <Navbar />

      {formActive == "show" ? (
        <h1 className="font-extrabold text-center text-2xl pt-4 lg:text-5xl text-orange-400 mb-4">
          PLEASE FILL THE FORM{" "}
        </h1>
      ) : (
        <h1 className="font-extrabold text-center text-2xl pt-4 lg:text-5xl text-orange-400 mb-4">
          PORTFOLIO CODE
        </h1>
      )}
      <div className={formActive}>
        {template != "modern" ? null : (
          <>
            <div className="flex items-center mb-2">
              <hr className="flex-grow border-t border-green-300" />
              <span className="px-3 text-green-500 text-lg">
                Experience Section
              </span>
              <hr className="flex-grow border-t border-green-300" />
            </div>
            <ExpForm />{" "}
            {experience.length != 0 ? (
              <div>
                <h1 className="text-xl lg:text-4xl font-extrabold text-center pt-6 pb-4 text-orange-400">
                  Experience Added
                </h1>
                {experience.map((item) => (
                  <div
                    key={item.startDate}
                    className="w-fit h-fit rounded-2xl text-lg relative mx-auto shadow-black shadow-lg mb-8 p-4 gap-y-3 border-2 font-bold flex flex-col"
                  >
                    <p>
                      {" "}
                      <span className="font-bold underline text-red-500">
                        Company Name:
                      </span>{" "}
                      {item.companyName}
                    </p>
                    <p>
                      {" "}
                      <span className="font-bold underline text-red-500">
                        Job Title:
                      </span>{" "}
                      {item.jobTitle}
                    </p>
                    <p>
                      {" "}
                      <span className="font-bold underline text-red-500">
                        Job Description:
                      </span>{" "}
                      {item.jobDescription}
                    </p>
                    <p>
                      {" "}
                      <span className="font-bold underline text-red-500">
                        Start Year:
                      </span>{" "}
                      {item.startDate}
                    </p>
                    <p>
                      {" "}
                      <span className="font-bold underline text-red-500">
                        End Year:
                      </span>{" "}
                      {item.endDate}
                    </p>
                    <button
                      className="w-[10rem] pt-2 py-2 dark:hover:bg-orange-400 hover:bg-purple-400 bg-orange-500 dark:text-white dark:bg-[#0ea5e9] text-white font-bold rounded-full flex items-center justify-center gap-3"
                      onClick={() => dispatch(removeExp(item.id))}
                    >
                      Remove
                      <ImCross />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
            <div className="flex items-center mt-4">
              <hr className="flex-grow border-t border-green-300" />
              <span className="px-3 text-green-500 text-lg">
                Experience Section
              </span>
              <hr className="flex-grow border-t border-green-300" />
            </div>
          </>
        )}
        <br />
        <div className="flex items-center">
          <hr className="flex-grow border-t border-blue-300" />
          <span className="px-3 text-blue-500 text-lg">Skills Section</span>
          <hr className="flex-grow border-t border-blue-300" />
        </div>
        <SkillForm />{" "}
        {skills.length != 0 ? (
          <div>
            <h1 className="text-xl lg:text-4xl font-extrabold text-center pt-6 pb-4 text-orange-400">
              Skill Added
            </h1>
            {skills.map((item) => (
              <div
                key={item.name}
                className="w-fit h-fit rounded-2xl text-lg relative mx-auto shadow-black shadow-lg mb-8 p-4 gap-y-3 border-2 font-bold flex flex-col"
              >
                <p>
                  {" "}
                  <span className="font-bold underline text-red-500">
                    Skill Name:
                  </span>{" "}
                  {item.name}
                </p>
                {item.percentage ? (
                  <p>
                    {" "}
                    <span className="font-bold underline text-red-500">
                      Skill Percentage:
                    </span>{" "}
                    {item.percentage} %
                  </p>
                ) : (
                  ""
                )}
                <button
                  className="w-[10rem] pt-2 py-2 dark:hover:bg-orange-400 hover:bg-purple-400 bg-orange-500 dark:text-white dark:bg-[#0ea5e9] text-white font-bold rounded-full flex items-center justify-center gap-3"
                  onClick={() => dispatch(removeSkill(item.id))}
                >
                  Remove <ImCross />
                </button>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        <div className="flex items-center mt-4">
          <hr className="flex-grow border-t border-blue-300" />
          <span className="px-3 text-blue-500 text-lg">Skills Section</span>
          <hr className="flex-grow border-t border-blue-300" />
        </div>
        <br />
        <div className="flex items-center mb-2">
          <hr className="flex-grow border-t border-red-300" />
          <span className="px-3 text-red-500 text-lg">Projects Section</span>
          <hr className="flex-grow border-t border-red-300" />
        </div>
        <ProjectForm />
        {projects.length != 0 ? (
          <div>
            <h1 className="text-xl lg:text-4xl font-extrabold text-center pt-6 pb-4 text-orange-400">
              Projects Added
            </h1>
            {projects.map((item) => (
              <div
                key={item.liveLink}
                className="w-fit h-fit rounded-2xl text-lg relative mx-auto shadow-black shadow-lg mb-8 p-4 gap-y-3 border-2 font-bold flex flex-col"
              >
                <p>
                  {" "}
                  <span className="font-bold underline text-red-500">
                    Image URL:
                  </span>{" "}
                  {item.image.slice(0, 27)}
                </p>
                <p>
                  {" "}
                  <span className="font-bold underline text-red-500">
                    Github Link:
                  </span>{" "}
                  {item.githubLink}
                </p>
                {item.liveLink ? (
                  <p>
                    {" "}
                    <span className="font-bold underline text-red-500">
                      Live Link:
                    </span>{" "}
                    {item.liveLink}
                  </p>
                ) : (
                  ""
                )}
                <button
                  className="w-[10rem] pt-2 py-2 dark:hover:bg-orange-400 hover:bg-purple-400 bg-orange-500 dark:text-white dark:bg-[#0ea5e9] text-white font-bold rounded-full flex items-center justify-center gap-3"
                  onClick={() => dispatch(removeProject(item.id))}
                >
                  Remove <ImCross />
                </button>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        <div className="flex items-center mt-4">
          <hr className="flex-grow border-t border-red-300" />
          <span className="px-3 text-red-500 text-lg">Projects Section</span>
          <hr className="flex-grow border-t border-red-300" />
        </div>
        <div className="flex items-center mt-4 mb-4">
          <hr className="flex-grow border-t border-black dark:border-white" />
          <span className="px-3 text-black text-lg dark:text-white">
            Personal Information Section
          </span>
          <hr className="flex-grow border-t border-black dark:border-white" />
        </div>
        <form
          className="w-full h-full flex flex-col gap-3 items-center justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label
            htmlFor="profile_input"
            className="font-bold text-black text-lg dark:text-white"
          >
            Upload Profile Picture
          </label>
          <input
            {...register("profile")}
            className="text-orange-400 font-bold"
            aria-describedby="file_input_help"
            id="profile_input"
            type="file"
            required
          />
          <br />
          {template == "simple" ? (
            ""
          ) : (
            <>
              <label
                htmlFor="cv_input"
                className="font-bold text-black text-lg dark:text-white"
              >
                Upload CV
              </label>
              <input
                {...register("cv")}
                aria-describedby="file_input_help"
                id="Cv_input"
                type="file"
                className="text-orange-400 font-bold"
                required
              />{" "}
            </>
          )}
          <Input
            labelText="Full Name: "
            labelClassName="dark:text-white"
            className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
            value={fullName}
            placeholder="Enter Your Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
          {template == "simple" ? (
            ""
          ) : (
            <Input
              value={workDesc}
              placeholder="Enter One Line About Your Work e.g Backend Developer"
              onChange={(e) => setWorkDesc(e.target.value)}
              labelText="Work Description: "
              labelClassName="dark:text-white"
              className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
            />
          )}
          {template == "modern" ? (
            <Input
              value={selfDesc}
              placeholder="Describle Yourself In 2-3 Lines"
              onChange={(e) => setSelfDesc(e.target.value)}
              labelText="Self Description: "
              labelClassName="dark:text-white"
              className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
            />
          ) : (
            ""
          )}
          {template == "mini" ? (
            ""
          ) : (
            <Input
              value={aboutMe}
              placeholder="Tell About Yourself In Detail"
              onChange={(e) => setAboutMe(e.target.value)}
              labelText="About Yourself: "
              labelClassName="dark:text-white"
              className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
            />
          )}
          {template == "simple" ? (
            ""
          ) : (
            <>
              <Input
                value={numOfProjects}
                placeholder="Enter Number of projects you have completed"
                onChange={(e) => setNumOfProjects(e.target.value)}
                labelText="Number Of Projects: "
                labelClassName="dark:text-white"
                className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
              />
              <Input
                value={yearsOfExperience}
                placeholder="Enter Your Years of experience"
                onChange={(e) => setYearsOfExperience(e.target.value)}
                labelText="Years Of Experience: "
                labelClassName="dark:text-white"
                className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
              />
              <Input
                value={numOfHappyClients}
                placeholder="Enter Your Number of satisfied clients"
                onChange={(e) => setNumOfHappyClients(e.target.value)}
                labelText="Number Of Satisfied Clients: "
                labelClassName="dark:text-white"
                className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
              />{" "}
            </>
          )}
          {template == "modern" ? (
            <>
              <Input
                value={totalCustomerReviews}
                placeholder="Enter Number of Customer Reviews You Have"
                onChange={(e) => setTotalCustomerReviews(e.target.value)}
                labelText="Number Of Reviews: "
                labelClassName="dark:text-white"
                className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
              />
              <Input
                value={facebookLink}
                placeholder="Enter Your Facebook Profile link"
                onChange={(e) => setFacebookLink(e.target.value)}
                labelText="Facebook Link: "
                labelClassName="dark:text-white"
                className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
              />
            </>
          ) : (
            ""
          )}
          <Input
            value={githubLink}
            placeholder="Enter Your Github Profile Link"
            onChange={(e) => setGithubLink(e.target.value)}
            labelText="Github Link: "
            labelClassName="dark:text-white"
            className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
          />
          <Input
            value={twitterLink}
            placeholder="Enter Your Twitter Profile Link"
            onChange={(e) => setTwitterLink(e.target.value)}
            labelText="Twitter Link: "
            labelClassName="dark:text-white"
            className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
          />
          <Input
            value={linkedinLink}
            placeholder="Enter Your LinkedIn Profile Link"
            onChange={(e) => setLinkedinLink(e.target.value)}
            labelText="Linkedin Link: "
            labelClassName="dark:text-white"
            className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
          />
          {template == "modern" ? (
            <>
              <Input
                value={location}
                placeholder="Enter your location e.g Karachi, Pakistan"
                labelText="Location: "
                labelClassName="dark:text-white"
                className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
                onChange={(e) => setLocation(e.target.value)}
              />
              <Input
                value={mobileNumber}
                placeholder="Enter Your Contact Number"
                labelText="Contact Number: "
                labelClassName="dark:text-white"
                className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
                onChange={(e) => setMobileNumber(e.target.value)}
              />{" "}
            </>
          ) : (
            ""
          )}
          <Input
            value={email}
            labelText="Email: "
            labelClassName="dark:text-white"
            className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-[16rem] py-4 dark:hover:bg-orange-400 hover:bg-purple-400 bg-orange-500 dark:text-white dark:bg-[#0ea5e9] text-white font-bold rounded-full disabled:bg-[#FDA172] disabled:font-normal disabled:px-3 disabled:w-[14rem] disabled:py-2 disabled:dark:bg-blue-300 flex items-center justify-center gap-2 mb-4"
            disabled={
              (template == "mini" &&
                fullName &&
                workDesc &&
                numOfProjects &&
                yearsOfExperience &&
                numOfHappyClients &&
                githubLink &&
                twitterLink &&
                linkedinLink &&
                email) ||
              (template == "simple" &&
                fullName &&
                aboutMe &&
                githubLink &&
                twitterLink &&
                linkedinLink &&
                email) ||
              (template == "modern" &&
                fullName &&
                aboutMe &&
                selfDesc &&
                workDesc &&
                numOfProjects &&
                yearsOfExperience &&
                numOfHappyClients &&
                totalCustomerReviews &&
                githubLink &&
                twitterLink &&
                linkedinLink &&
                email)
                ? false
                : true
            }
            onClick={scrollToTop}
          >
            Proceed To Next Step <FaArrowRight />
          </button>
        </form>
        <div className="flex items-center mb-2">
          <hr className="flex-grow border-t border-black dark:border-white" />
          <span className="px-3 text-black text-lg dark:text-white">
            Personal Information Section
          </span>
          <hr className="flex-grow border-t border-black dark:border-white" />
        </div>
        {/* <button onClick={submitDataToDB}>Send to DB</button> */}
      </div>
      <button onClick={() => toggleTabs()} className={codeActive}>
        <span className="p-4 dark:hover:bg-orange-400 hover:bg-purple-400 bg-orange-500 dark:text-white dark:bg-[#0ea5e9] text-white font-bold rounded-full m-4">
          <FontAwesomeIcon
            icon={faAngleDoubleLeft}
            className="fas fa-angle-double-left"
          />{" "}
          Back To Form
        </span>
      </button>
      <div className={codeActive} id="move">
        <Form {...props} />
      </div>
    </div>
  );
}
