import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../redux/projectSlice";
import { useForm } from "react-hook-form";

export default function ProjectForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [liveLink, setLiveLink] = useState("");


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

    dispatch(
      addProject({ image: uploadedImageData.secure_url, githubLink, liveLink })
    );

    setImage("")
    setGithubLink("")
    setLiveLink("")
  };
  return (
    <div>
      <form  className='w-full h-full flex flex-col gap-4  items-center justify-center' onSubmit={handleSubmit(onSubmit)}>
        <label
          className="font-bold text-orange-400 text-xl"
          htmlFor="file_input"
        >
          Upload Project Screenshot
        </label>
        <input
          {...register("profile")}
          className="text-orange-400 font-bold"
          aria-describedby="file_input_help"
          id="file_input"
          type="file"
        />

        <input
          type="text"
          value={githubLink}
          className='w-64 h-14  mt-2 rounded-lg md:w-80 lg:w-[900px] border-2 border-orange-400'
          placeholder="Input Github Repo Link"
          onChange={(e) => setGithubLink(e.target.value)}
        />
        <input
          type="text"
          value={liveLink}
          placeholder="Input Live Link"
          onChange={(e) => setLiveLink(e.target.value)}
          className='w-64 h-14 mt-2 rounded-lg  md:w-80 lg:w-[900px] border-2 border-orange-400'
        />
        <button
          type="submit"
          className="px-6 py-4 mt-2 text-white font-bold  rounded-lg  bg-orange-400"
          >
          
          Add Project
        </button>
        {/* <button onClick={submitProject}>Done</button> */}
        {/* <button onClick={removeExp}>Remove</button> */}
      </form>
    </div>
  );
}
