import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    skill: []
}

const Slice = createSlice({
    name: 'skillList',
    initialState,
    reducers:{
        addSkill: (state,action)=>{
            const data = {
                id: nanoid(),
                name: action.payload.name,
                percentage: action.payload.percentage
            }

            state.skill.push(data)
        },
        removeSkill: (state,action) => {
            state.skill = state.skill.filter((item) => item.id !== action.payload)
        }
    }
})


export const {addSkill, removeSkill} = Slice.actions
export default Slice.reducer