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
    <div>
        <input
            type='text'
            value={name}
            placeholder='Skill Name'
            onChange={(e)=>setName(e.target.value)}
        />
        <input
            type='text'
            value={percentage}
            placeholder='Input Percentage in Numbers Only'
            onChange={(e)=>setPercentage(e.target.value)}
        />
        <button
        onClick={submitSkill}
        >Add Skill</button>
        {/* <button onClick={removeExp}>Remove</button> */}
    </div>
  )
}