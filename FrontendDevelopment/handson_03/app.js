import { courses } from "./data.js";

// Step 30 - Destructuring
courses.forEach(({ name, credits }) => {
    console.log(name, credits);
});

// Step 31 - map()
const formattedCourses = courses.map(({ code, name, credits }) =>
    `${code} - ${name} (${credits} credits)`
);

console.log(formattedCourses);

// Step 32 - filter()
const filteredCourses = courses.filter(course => course.credits >= 4);

console.log(filteredCourses);

// Step 33 - reduce()
const totalCredits = courses.reduce(
    (total, course) => total + course.credits,
    0
);

console.log(totalCredits);

// Step 34 - Arrow Function
const displayCourse = ({ name, credits }) =>
    `${name} - ${credits} credits`;

console.log(displayCourse(courses[0]));