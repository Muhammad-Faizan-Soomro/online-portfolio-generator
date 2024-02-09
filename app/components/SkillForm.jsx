import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSkill } from "../redux/skillSlice";
import Input from "./Input";

export default function SkillForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [percentage, setPercentage] = useState("");

  const submitSkill = () => {
    dispatch(addSkill({ name, percentage }));
    setName("");
    setPercentage("");
  };
  return (
    <div className="w-full h-full flex flex-col gap-4  items-center justify-center">
      <Input
        labelText="Skill Name: "
        labelClassName="dark:text-white"
        className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
        value={name}
        placeholder="Enter Skill Name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        value={percentage}
        labelText="Skill Percentage: "
        labelClassName="dark:text-white"
        className="w-[90vw] md:w-[60vw] dark:border-orange-400 dark:border-2 dark:focus:border-green-500"
        placeholder="Enter The % Of Skill You Know"
        onChange={(e) => setPercentage(e.target.value)}
      />
      <button
        onClick={submitSkill}
        className="w-[16rem] py-4 dark:hover:bg-orange-400 hover:bg-purple-400 bg-orange-500 dark:text-white dark:bg-[#0ea5e9] text-white font-bold rounded-full disabled:bg-[#FDA172] disabled:font-normal disabled:px-3 disabled:w-[8rem] disabled:py-2 disabled:dark:bg-blue-300"
        disabled={name ? false : true}
      >
        Add Skill
      </button>
      {/* <button onClick={removeExp}>Remove</button> */}
    </div>
  );
}
