export async function fetchCourses() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }

  const data = await response.json();

  return data.slice(0, 5).map((post) => ({
    id: post.id,
    name: post.title,
    code: "CS10" + post.id,
    credits: 3,
    grade: "A"
  }));
}