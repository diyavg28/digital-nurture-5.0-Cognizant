import CourseDetailPage from "./CourseDetailPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import ProfilePage from "./ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/:courseId" element={<CourseDetailPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;