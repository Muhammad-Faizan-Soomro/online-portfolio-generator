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
    <div>
        <input
            type='text'
            value={jobTitle}
            placeholder='Job Title'
            onChange={(e)=>setJobTitle(e.target.value)}
        />
        <input
            type='text'
            value={companyName}
            placeholder='Company Name'
            onChange={(e)=>setCompanyName(e.target.value)}
        />
        <input
            type='text'
            value={jobDescription}
            placeholder='Job Description'
            onChange={(e)=>setJobDescription(e.target.value)}
        />
        <input
            type='text'
            value={startDate}
            placeholder='Start Date'
            onChange={(e)=>setStartDate(e.target.value)}
        />
        <input
            type='text'
            value={endDate}
            placeholder='End Date'
            onChange={(e)=>setEndDate(e.target.value)}
        />
        <button
        onClick={submitExp}
        >Add Work Experience</button>
        {/* <button onClick={removeExp}>Remove</button> */}
    </div>
  )
}