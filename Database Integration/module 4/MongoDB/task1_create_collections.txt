use college_nosql

db.createCollection("feedback")

db.feedback.insertMany([
{
    student_id: 1,
    course_code: "CS101",
    semester: "2022-ODD",
    rating: 5,
    comments: "Excellent teaching",
    tags: ["well-structured", "good-examples"],
    submitted_at: new Date("2022-11-30"),
    attachments: [
        { filename: "notes.pdf", size_kb: 240 }
    ]
},
{
    student_id: 2,
    course_code: "CS101",
    semester: "2022-ODD",
    rating: 4,
    comments: "Very informative",
    tags: ["helpful", "clear"],
    submitted_at: new Date("2022-12-01"),
    attachments: [
        { filename: "assignment.pdf", size_kb: 180 }
    ]
},
{
    student_id: 3,
    course_code: "CS101",
    semester: "2022-ODD",
    rating: 3,
    comments: "Average course",
    tags: ["average"],
    submitted_at: new Date("2022-12-02"),
    attachments: [
        { filename: "lab.pdf", size_kb: 120 }
    ]
},
{
    student_id: 4,
    course_code: "CS102",
    semester: "2022-EVEN",
    rating: 5,
    comments: "Outstanding content",
    tags: ["excellent", "recommended"],
    submitted_at: new Date("2022-12-03"),
    attachments: [
        { filename: "project.pdf", size_kb: 300 }
    ]
},
{
    student_id: 5,
    course_code: "CS102",
    semester: "2022-EVEN",
    rating: 4,
    comments: "Good learning experience",
    tags: ["useful", "practical"],
    submitted_at: new Date("2022-12-04"),
    attachments: [
        { filename: "report.pdf", size_kb: 200 }
    ]
},
{
    student_id: 6,
    course_code: "IT201",
    semester: "2023-ODD",
    rating: 5,
    comments: "Loved the hands-on sessions",
    tags: ["hands-on", "interactive"],
    submitted_at: new Date("2023-01-10"),
    attachments: [
        { filename: "notes1.pdf", size_kb: 150 }
    ]
},
{
    student_id: 7,
    course_code: "IT201",
    semester: "2023-ODD",
    rating: 2,
    comments: "Needs improvement",
    tags: ["difficult"],
    submitted_at: new Date("2023-01-11"),
    attachments: [
        { filename: "feedback.docx", size_kb: 90 }
    ]
},
{
    student_id: 8,
    course_code: "EC301",
    semester: "2023-EVEN",
    rating: 4,
    comments: "Interesting concepts",
    tags: ["interesting"],
    submitted_at: new Date("2023-02-15"),
    attachments: [
        { filename: "slides.pdf", size_kb: 220 }
    ]
},
{
    student_id: 9,
    course_code: "EC301",
    semester: "2023-EVEN",
    rating: 3,
    comments: "Could be better",
    tags: ["moderate"],
    submitted_at: new Date("2023-02-16"),
    attachments: [
        { filename: "review.pdf", size_kb: 100 }
    ]
},
{
    student_id: 10,
    course_code: "CS103",
    semester: "2023-EVEN",
    rating: 5,
    comments: "Excellent overall",
    tags: ["best-course"],
    submitted_at: new Date("2023-02-20")
}
])

db.feedback.countDocuments()