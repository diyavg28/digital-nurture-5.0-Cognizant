function CourseCard({ name, code, credits, grade }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px"
      }}
    >
      <h3>{name}</h3>
      <p>Code: {code}</p>
      <p>Credits: {credits}</p>
      <p>Grade: {grade}</p>
    </div>
  );
}

export default CourseCard;