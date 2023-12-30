import { configureStore } from "@reduxjs/toolkit";
import expReducer from './slice'
import skillReducer from './skillSlice'
import projectReducer from './projectSlice'

export const store = configureStore({
    reducer: {
        expData: expReducer,
        skillData: skillReducer,
        projectData: projectReducer
    }
})