import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import ProfilePage from "./ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;