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
  };
  return (
    <div>
      <form className="mt-60 mx-16" onSubmit={handleSubmit(onSubmit)}>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="file_input"
        >
          Upload Project Screenshot
        </label>
        <input
          {...register("profile")}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="file_input_help"
          id="file_input"
          type="file"
        />

        <input
          type="text"
          value={githubLink}
          placeholder="Input Github Repo Link"
          onChange={(e) => setGithubLink(e.target.value)}
        />
        <input
          type="text"
          value={liveLink}
          placeholder="Input Live Link"
          onChange={(e) => setLiveLink(e.target.value)}
        />
        <button
          type="submit"
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-4"
        >
          Add Project
        </button>
        {/* <button onClick={submitProject}>Done</button> */}
        {/* <button onClick={removeExp}>Remove</button> */}
      </form>
    </div>
  );
}
