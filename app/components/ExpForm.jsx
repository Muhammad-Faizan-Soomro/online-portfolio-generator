import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExp } from "../redux/slice";
import Input from "./Input";

export default function ExpForm() {
  const dispatch = useDispatch();

  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const submitExp = () => {
    dispatch(
      addExp({ jobTitle, companyName, jobDescription, startDate, endDate })
    );
    setJobTitle("");
    setCompanyName("");
    setStartDate("");
    setEndDate("");
    setJobDescription("");
  };
  return (
    <>
      <div className="w-full  h-full flex flex-col gap-4  items-center justify-center">
        <Input
          labelText="Job Title: "
          labelClassName="dark:text-white"
          className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
          value={jobTitle}
          placeholder="Enter Job Title"
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <Input
          labelText="Company Name: "
          labelClassName="dark:text-white"
          className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
          value={companyName}
          placeholder="Enter Company Name"
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <Input
          labelText="Job Description: "
          labelClassName="dark:text-white"
          className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
          value={jobDescription}
          placeholder="Enter Job Description"
          onChange={(e) => setJobDescription(e.target.value)}
        />
        <Input
          labelText="Start Year: "
          labelClassName="dark:text-white"
          className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
          value={startDate}
          placeholder="Enter Year Only"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <Input
          labelText="End Year: "
          labelClassName="dark:text-white"
          className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
          value={endDate}
          placeholder="Enter Year Only"
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button
          onClick={submitExp}
          className="w-[16rem] py-4 dark:hover:bg-orange-400 hover:bg-purple-400 bg-orange-500 dark:text-white dark:bg-[#0ea5e9] text-white font-bold rounded-full"
        >
          Add Work Experience
        </button>
        {/* <button onClick={removeExp}>Remove</button> */}
      </div>

    </>
  );
}
