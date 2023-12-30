import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    project: []
}

const Slice = createSlice({
    name: 'projectList',
    initialState,
    reducers:{
        addProject: (state,action)=>{
            const data = {
                id: nanoid(),
                image: action.payload.image,
                githubLink: action.payload.githubLink,
                liveLink: action.payload.liveLink
            }

            state.project.push(data)
        },

        removeProject: (state,action) => {
            state.project = state.project.filter((item) => item.id !== action.payload)
        }
    }
    
})



export const {addProject, removeProject} = Slice.actions
export default Slice.reducer