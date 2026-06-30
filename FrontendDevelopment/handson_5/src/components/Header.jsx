import { Link } from "react-router-dom";
import { useContext } from "react";
import { EnrollmentContext } from "../EnrollmentContext";
function Header({ siteName}) {
  const { enrolledCourses } = useContext(EnrollmentContext);
  return (
    <header>
      <h1>{siteName}</h1>

      <nav>
  <Link to="/">Home</Link> {" "}
  <Link to="/courses">Courses</Link> {" "}
  <Link to="/profile">Profile</Link>
</nav>

      <h3>Enrolled Courses: {enrolledCourses.length}</h3>
    </header>
  );
}

export default Header;