"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../redux/projectSlice";
import { useForm } from "react-hook-form";
import Input from "./Input";

export default function ProjectForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [template, setTemplate] = useState("");

  useEffect(() => {
    setTemplate(localStorage.getItem("template"));
  }, []);

  const onSubmit = async (data) => {
    const imageData = data.project[0];
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

    dispatch(
      addProject({ image: uploadedImageData.secure_url, githubLink, liveLink })
    );

    setImage("");
    setGithubLink("");
    setLiveLink("");
  };
  return (
    <div>
      <form
        className="w-full h-full flex flex-col gap-4  items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          className="font-bold text-black text-lg dark:text-white"
          htmlFor="file_input"
        >
          Upload Project Screenshot
        </label>
        <input
          {...register("project")}
          className="text-orange-400 font-bold"
          aria-describedby="file_input_help"
          id="file_input"
          type="file"
          required
        />

        <Input
          value={githubLink}
          labelText="Github Link "
          labelClassName="dark:text-white"
          className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
          placeholder="Input Github Repo Link"
          onChange={(e) => setGithubLink(e.target.value)}
        />
        {template == "mini" ? null : (
          <Input
            value={liveLink}
            placeholder="Input Live Link"
            onChange={(e) => setLiveLink(e.target.value)}
            labelText="Live Link: "
            labelClassName="dark:text-white"
            className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
            required={true}
          />
        )}
        <button
          type="submit"
          disabled={githubLink ? false : true}
          className="w-[16rem] py-4 dark:hover:bg-orange-400 hover:bg-purple-400 bg-orange-500 dark:text-white dark:bg-[#0ea5e9] text-white font-bold rounded-full disabled:bg-[#FDA172] disabled:font-normal disabled:px-3 disabled:w-[8rem] disabled:py-2 disabled:dark:bg-blue-300"
        >
          Add Project
        </button>
        {/* <button onClick={submitProject}>Done</button> */}
        {/* <button onClick={removeExp}>Remove</button> */}
      </form>
    </div>
  );
}
