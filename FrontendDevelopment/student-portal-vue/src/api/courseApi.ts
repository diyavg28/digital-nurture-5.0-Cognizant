import apiClient from "./apiClient";

// Get all courses
export const getAllCourses = () => {
  return apiClient.get("/posts");
};

// Get one course by ID
export const getCourseById = (id: number) => {
  return apiClient.get(`/posts/${id}`);
};

// Mock enroll student
export const enrollStudent = (studentId: number, courseId: number) => {
  return apiClient.post("/posts", {
    studentId,
    courseId,
  });
};