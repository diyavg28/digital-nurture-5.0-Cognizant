import { createSlice } from "@reduxjs/toolkit";

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState: {
    enrolledCourses: [],
  },
  reducers: {
    enroll: (state, action) => {
      const course = action.payload;

      const exists = state.enrolledCourses.find(
        (c) => c.id === course.id
      );

      if (!exists) {
        state.enrolledCourses.push(course);
      }
    },

    unenroll: (state, action) => {
      state.enrolledCourses = state.enrolledCourses.filter(
        (course) => course.id !== action.payload
      );
    },
  },
});

export const { enroll, unenroll } = enrollmentSlice.actions;

export default enrollmentSlice.reducer;