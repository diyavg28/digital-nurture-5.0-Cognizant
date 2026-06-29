import { courses } from "./data.js";

// Select the course grid
const courseGrid = document.querySelector(".course-grid");

// Render all course cards
courses.forEach(course => {

    const article = document.createElement("article");

    article.className = "course-card";

    article.innerHTML = `
        <h3>${course.name}</h3>
        <p>${course.code}</p>
        <p>Credits: ${course.credits}</p>
    `;

    courseGrid.appendChild(article);

});

// Calculate total credits
const totalCredits = courses.reduce(
    (sum, course) => sum + course.credits,
    0
);

// Display total credits
document.getElementById("total-credits").textContent =
    `Total Credits: ${totalCredits}`;