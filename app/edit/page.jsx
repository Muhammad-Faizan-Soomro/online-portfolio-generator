"use client";

// // import React from 'react'
// // import Home from './components/Home'
// // import Form from './components/Form'

// // const getDetails = async () => {
// //   let data = await fetch("http://localhost:3000/api/detail")
// //   data = await data.json()
// //   return data.result;
// // }

// // export default async function Page() {
// //   const detail = await getDetails();
// //   return (
// //     <div>
// //       <Form/>
// //       <Home Fullname={detail[0].fullname} One_Liner={detail[0].oneliner} About={detail[0].about}/>
// //     </div>
// //   )
// // }

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
    if(codeActive == "hidden"){
      setCodeActive("show")
    } else {
      setCodeActive("hidden")
    }

    if(formActive == "show"){
      setFormActive("hidden")
    } else {
      setFormActive("show")
    }
  }

  useEffect(() => {
    setUser_id(localStorage.getItem('user'))
    setTemplate(localStorage.getItem('template'))
  }, [])

  // const submitDataToDB = async () => {
  //   let result = await fetch("http://localhost:3000/api/detail", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       user_id,
  //       template,
  //       fullName,
  //       workDesc,
  //       selfDesc,
  //       cvLink,
  //       aboutMe,
  //       numOfProjects,
  //       yearsOfExperience,
  //       numOfHappyClients,
  //       totalCustomerReviews,
  //       skills,
  //       experience,
  //       projects,
  //       location,
  //       email,
  //       mobileNumber,
  //       facebookLink,
  //       githubLink,
  //       linkedinLink,
  //       twitterLink,
  //       profilePicUrl,
  //     }),
  //   });
  // };

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

    if(codeActive == "hidden"){
      setCodeActive("show")
    } else {
      setCodeActive("hidden")
    }

    if(formActive == "show"){
      setFormActive("hidden")
    } else {
      setFormActive("show")
    }
  };

  return (
    <div>
      <div className={formActive}>
        <ExpForm />
        <br/>
        <SkillForm />
        <br/>
        <ProjectForm />
        <br/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="file_input">Upload Profile Picture</label>
          <input
            {...register("profile")}
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
          />
          <br/>
          <label htmlFor="file_input">Upload CV</label>
          <input
            {...register("cv")}
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
          />
          <br/>
          <input
            type="text"
            value={user_id}
            placeholder="User ID"
            onChange={(e) => setUser_id(e.target.value)}
            disabled
          />
          <br/>
          <input
            type="text"
            value={fullName}
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
          <br/>
          <input
            type="text"
            value={template}
            placeholder="Template Name"
            onChange={(e) => setTemplate(e.target.value)}
            disabled
          />
          <br/>
          <input
            type="text"
            value={workDesc}
            placeholder="Work Description"
            onChange={(e) => setWorkDesc(e.target.value)}
          />
          <br/>
          <input
            type="text"
            value={selfDesc}
            placeholder="Self Description"
            onChange={(e) => setSelfDesc(e.target.value)}
          />
          <br/>
          <input
            type="text"
            value={aboutMe}
            placeholder="About Yourself"
            onChange={(e) => setAboutMe(e.target.value)}
          />
          <br/>
          <input
            type="text"
            value={numOfProjects}
            placeholder="Number of projects you have completed"
            onChange={(e) => setNumOfProjects(e.target.value)}
          />
          <br/>
          <input
            type="text"
            value={yearsOfExperience}
            placeholder="Years of experience"
            onChange={(e) => setYearsOfExperience(e.target.value)}
          />
          <br/>
          <input
            type="text"
            value={numOfHappyClients}
            placeholder="Number of satisfied clients"
            onChange={(e) => setNumOfHappyClients(e.target.value)}
          />
          <br/>
          <input
            type="text"
            value={totalCustomerReviews}
            placeholder="Number of Customer Reviews"
            onChange={(e) => setTotalCustomerReviews(e.target.value)}
          />
          <br/>
          <input
            type="text"
            value={facebookLink}
            placeholder="Facebook link"
            onChange={(e) => setFacebookLink(e.target.value)}
          />
          <br/>
          <input
            type="text"
            value={githubLink}
            placeholder="Github Link"
            onChange={(e) => setGithubLink(e.target.value)}
          />
          <br/>
          <input
            type="text"
            value={twitterLink}
            placeholder="Twitter Link"
            onChange={(e) => setTwitterLink(e.target.value)}
          />
          <br/>
          <input
            type="text"
            value={linkedinLink}
            placeholder="LinkedIn Link"
            onChange={(e) => setLinkedinLink(e.target.value)}
          />
          <br/>
          <input
            type="text"
            value={location}
            placeholder="Enter your location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <br/>
          <input
            type="text"
            value={email}
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/>
          <input
            type="text"
            value={mobileNumber}
            placeholder="Give your contact number"
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <br/>
          <button type="submit">Next Step</button>
        </form>
  
        {/* <button onClick={submitDataToDB}>Send to DB</button> */}
  
        <div>
          <h1>Experience Added</h1>
          {experience.map((item) => (
            <div key={item.startDate}>
              <p>{item.companyName}</p>
              <p>{item.jobTitle}</p>
              <p>{item.jobDescription}</p>
              <p>{item.startDate}</p>
              <p>{item.endDate}</p>
              <button onClick={() => dispatch(removeExp(item.id))}>Remove</button>
            </div>
          ))}
        </div>
  
        <div>
          <h1>Projects Added</h1>
          {projects.map((item) => (
            <div key={item.liveLink}>
              <p>{item.image}</p>
              <p>{item.githubLink}</p>
              <p>{item.liveLink}</p>
              <button onClick={() => dispatch(removeProject(item.id))}>
                Remove
              </button>
            </div>
          ))}
        </div>
  
        <div>
          <h1>Skills Added</h1>
          {skills.map((item) => (
            <div key={item.name}>
              <p>{item.name}</p>
              <p>{item.percentage}</p>
              <button onClick={() => dispatch(removeSkill(item.id))}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => toggleTabs()} className={codeActive}>Hide Code</button>
      <div className={codeActive}>
        <Form {...props} />
      </div>
    </div>
  );
}
