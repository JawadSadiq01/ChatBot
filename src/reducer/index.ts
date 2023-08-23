import { createSlice } from '@reduxjs/toolkit';

export const studentInfoSlice = createSlice({
  name: 'info',
  
  initialState: {
    name: '',
    age: 0,
  },

  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
  },
})

export const { setName, setAge } = studentInfoSlice.actions;

export const selectName = (state: any) => state.student.name;
export const selectAge = (state: any) => state.student.age;

export default studentInfoSlice.reducer;