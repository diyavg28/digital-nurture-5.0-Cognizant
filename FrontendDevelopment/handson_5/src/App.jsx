import { useState, useEffect } from "react";
import { fetchCourses } from "./api";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";


function App() {
  const [courses, setCourses] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [enrolledCourses, setEnrolledCourses] = useState([]);
  useEffect(() => {
  const loadCourses = async () => {
    setLoading(true);

    try {
      const coursesData = await fetchCourses();
      setCourses(coursesData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  loadCourses();
}, []);

  const handleEnroll = (course) => {
    if (!enrolledCourses.find((c) => c.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
  return <h2>Loading...</h2>;
}

if (error) {
  return <h2>{error}</h2>;
}

  return (
    <>
      <Header
        siteName="Student Portal"
        enrolledCount={enrolledCourses.length}
      />

      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredCourses.map((course) => (
        <CourseCard
          key={course.id}
          name={course.name}
          code={course.code}
          credits={course.credits}
          grade={course.grade}
          onEnroll={() => handleEnroll(course)}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;