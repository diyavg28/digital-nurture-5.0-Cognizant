CREATE INDEX idx_student_enrollment_year
ON enrollments(student_id, enrollment_year);

CREATE UNIQUE INDEX idx_unique_enrollment
ON enrollments(student_id, course_id);

CREATE INDEX idx_course_code
ON courses(course_code);

EXPLAIN
SELECT
    s.first_name,
    s.last_name,
    c.course_name
FROM enrollments e
JOIN students s
ON s.student_id = e.student_id
JOIN courses c
ON c.course_id = e.course_id
WHERE e.enrollment_year = 2022;

-- Comparison:
-- Before indexes: Sequential Scan / Full Table Scan.
-- After indexes: Index Scan is used.
-- Query cost is reduced.
-- Composite unique index prevents duplicate enrollments.
-- Course code searches become faster.

CREATE INDEX idx_ungraded_enrollments
ON enrollments(student_id)
WHERE grade IS NULL;

-- Partial index helps queries that search only for ungraded enrollments.