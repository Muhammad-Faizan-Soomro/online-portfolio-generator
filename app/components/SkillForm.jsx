import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSkill } from '../redux/skillSlice'

export default function SkillForm() {
    const dispatch = useDispatch()

    const [name,setName] = useState("")
    const [percentage,setPercentage] = useState("")
    
    const submitSkill = () => {
        dispatch(addSkill({name, percentage}))
    }
  return (
    <div className='w-full h-full flex flex-col gap-4  items-center justify-center'>
        <input
            type='text'
            className='w-60 h-14 rounded-lg   md:w-80 lg:w-[900px] border-2 border-orange-400'
            value={name}
            placeholder='Skill Name'
            onChange={(e)=>setName(e.target.value)}
        />
        <input
            type='text'
            value={percentage}
            className='w-64 h-14 rounded-lg   md:w-80 lg:w-[900px] border-2 border-orange-400'
            placeholder='Input Percentage in Numbers Only'
            onChange={(e)=>setPercentage(e.target.value)}
        />
        <button
        onClick={submitSkill}
        className='px-6 py-4 text-white font-bold rounded-lg  bg-orange-400'
        >Add Skill</button>
        {/* <button onClick={removeExp}>Remove</button> */}
    </div>
  )
}