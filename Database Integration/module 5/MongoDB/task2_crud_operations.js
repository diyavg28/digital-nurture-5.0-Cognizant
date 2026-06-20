use("college_nosql")

// Step 65
db.feedback.find({ rating: 5 })

// Step 66
db.feedback.find({
    course_code: "CS101",
    tags: "challenging"
})

// Step 67
db.feedback.find(
    {},
    {
        student_id: 1,
        course_code: 1,
        rating: 1,
        _id: 0
    }
)

// Step 68
db.feedback.updateMany(
    { rating: { $lt: 3 } },
    { $set: { needs_review: true } }
)

// Step 69
db.feedback.updateMany(
    { needs_review: true },
    { $push: { tags: "reviewed" } }
)

// Step 70
db.feedback.deleteMany({
    semester: "2021-EVEN"
})