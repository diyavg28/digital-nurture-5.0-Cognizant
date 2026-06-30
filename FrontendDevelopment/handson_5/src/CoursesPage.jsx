
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { enroll } from "./redux/enrollmentSlice";
import courses from "./courses";
import CourseCard from "./components/CourseCard";
import Header from "./components/Header";

export default function CoursesPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
  <Header
    siteName="Student Portal"
    enrolledCount={0}
  />

  <h2>Courses Page</h2>

      <button onClick={() => navigate("/profile")}>
        Go to Profile
      </button>

      <br />
      <br />

      {courses.map((course) => (
        <CourseCard
          key={course.id}
          name={course.name}
          code={course.code}
          credits={course.credits}
          grade={course.grade}
          onEnroll={() => dispatch(enroll(course))}
        />
      ))}
    </div>
  );
}