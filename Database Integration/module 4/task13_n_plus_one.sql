-- N+1 Problem Example

SELECT *
FROM enrollments;

SELECT first_name, last_name
FROM students
WHERE student_id = 1;

SELECT first_name, last_name
FROM students
WHERE student_id = 2;

SELECT first_name, last_name
FROM students
WHERE student_id = 3;

-- Imagine one query per enrollment record.
-- Total queries = 1 + N


-- Optimized Solution

SELECT
    e.enrollment_id,
    s.first_name,
    s.last_name,
    c.course_name
FROM enrollments e
JOIN students s
    ON e.student_id = s.student_id
JOIN courses c
    ON e.course_id = c.course_id;


-- Comparison:
-- N+1 version executes 1 + N queries.
-- JOIN version executes only 1 query.
-- Both return the same information.
-- JOIN approach scales much better for large datasets.

-- Example:
-- 12 enrollments:
-- N+1 approach = 13 queries
-- JOIN approach = 1 query