import { useParams } from "react-router-dom";

export default function CourseDetailPage() {
  const { courseId } = useParams();

  return (
    <div>
      <h2>Course Detail Page</h2>
      <p>Course ID: {courseId}</p>
    </div>
  );
}