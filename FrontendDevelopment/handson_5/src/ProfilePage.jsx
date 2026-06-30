import { useSelector } from "react-redux";

export default function ProfilePage() {
  const enrolledCourses = useSelector(
    (state) => state.enrollment.enrolledCourses
  );

  return (
    <div>
      <h2>Profile Page</h2>

      <h3>Enrolled Courses</h3>

      {enrolledCourses.length === 0 ? (
        <p>No courses enrolled.</p>
      ) : (
        <ul>
          {enrolledCourses.map((course) => (
            <li key={course.id}>
              {course.name} ({course.code})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}