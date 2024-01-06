import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExp } from '../redux/slice'

export default function ExpForm() {
    const dispatch = useDispatch()

    const [jobTitle,setJobTitle] = useState("")
    const [companyName,setCompanyName] = useState("")
    const [startDate,setStartDate] = useState("")
    const [endDate,setEndDate] = useState("")
    const [jobDescription, setJobDescription] = useState("")
    
    const submitExp = () => {
        dispatch(addExp({jobTitle, companyName, jobDescription, startDate, endDate}))
    }
  return (
    <div className='w-full h-full flex flex-col gap-4  items-center justify-center'>
        <input
        className='w-60 md:w-80 lg:w-[900px] h-14 rounded-lg  border-2 border-orange-400'
            type='text'
            value={jobTitle}
            placeholder='Job Title'
            onChange={(e)=>setJobTitle(e.target.value)}
        />
        <input
         className='w-60 h-14 rounded-lg md:w-80 lg:w-[900px]  border-2 border-orange-400'
            type='text'
            value={companyName}
            placeholder='Company Name'
            onChange={(e)=>setCompanyName(e.target.value)}
        />
        <input
         className='w-60 h-14 rounded-lg md:w-80 lg:w-[900px]  border-2 border-orange-400'
            type='text'
            value={jobDescription}
            placeholder='Job Description'
            onChange={(e)=>setJobDescription(e.target.value)}
        />
        <input
            type='text'
            value={startDate}
            className='w-60 h-14 rounded-lg md:w-80 lg:w-[900px]  border-2 border-orange-400'
            placeholder='Start Date'
            onChange={(e)=>setStartDate(e.target.value)}
        />
        <input
            type='text'
            value={endDate}
            placeholder='End Date'
            className='w-60 h-14 rounded-lg  lg:w-[900px] md:w-80 border-2 border-orange-400'
            onChange={(e)=>setEndDate(e.target.value)}
        />
        <button
        onClick={submitExp}
        className='px-6 py-4 text-white font-bold rounded-lg  bg-orange-400'
        >Add Work Experience</button>
        {/* <button onClick={removeExp}>Remove</button> */}
    </div>
  )
}