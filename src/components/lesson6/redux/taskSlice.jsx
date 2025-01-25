import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        description: action.payload,
        isCompleted: false,
      };
      state.push(newTask);
    },
    removeTask: (state, action) => {
        return state.filter(task => task.id === action.payload);
    },
  },
});

export const {addTask, removeTask} = tasksSlice.actions;
export default tasksSlice.reducer;
