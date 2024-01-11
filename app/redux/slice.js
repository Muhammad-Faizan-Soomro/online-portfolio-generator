import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    experience: []
}

const Slice = createSlice({
    name: 'experienceList',
    initialState,
    reducers:{
        addExp: (state,action)=>{
            const data = {
                id: nanoid(),
                companyName: action.payload.companyName,
                jobTitle: action.payload.jobTitle,
                jobDescription: action.payload.jobDescription,
                startDate: action.payload.startDate,
                endDate: action.payload.endDate
            }

            state.experience.push(data)
        },

        removeExp: (state,action) => {
            state.experience = state.experience.filter((item) => item.id !== action.payload)
        },
        removeAllExp: (state,action) => {
            state.experience = []
        }
    }
})


export const {addExp, removeExp, removeAllExp} = Slice.actions
export default Slice.reducer