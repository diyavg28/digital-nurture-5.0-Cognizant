import { courses } from "./data.js";

// Select Elements
const courseGrid = document.querySelector(".course-grid");
const totalCredits = document.getElementById("total-credits");
const searchInput = document.getElementById("search-courses");
const sortBtn = document.getElementById("sort-btn");
const selectedCourse = document.getElementById("selected-course");

// Render Function
function renderCourses(courseList) {

    courseGrid.innerHTML = "";

    courseList.forEach(course => {

        const article = document.createElement("article");
        article.className = "course-card";

        article.innerHTML = `
            <h3>${course.name}</h3>
            <p>${course.code}</p>
            <p>Credits: ${course.credits}</p>
        `;

        courseGrid.appendChild(article);
    });

    const total = courseList.reduce(
        (sum, course) => sum + course.credits,
        0
    );

    totalCredits.textContent = `Total Credits: ${total}`;
}

// Initial Render
renderCourses(courses);

// Step 41 - Search
searchInput.addEventListener("input", () => {

    const text = searchInput.value.toLowerCase();

    const filtered = courses.filter(course =>
        course.name.toLowerCase().includes(text)
    );

    renderCourses(filtered);

});

// Step 42 - Sort
sortBtn.addEventListener("click", () => {

    const sorted = [...courses].sort(
        (a, b) => b.credits - a.credits
    );

    renderCourses(sorted);

});

// Step 43 & 44 - Event Delegation
courseGrid.addEventListener("click", (event) => {

    const card = event.target.closest(".course-card");

    if (!card) return;

    const courseName = card.querySelector("h3").textContent;

    selectedCourse.textContent =
        `Selected Course: ${courseName}`;

});