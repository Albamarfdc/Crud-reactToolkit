import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from "../features/tasks/taskSlice"



export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  }
});


//Asi se configura la store en redux toolkit