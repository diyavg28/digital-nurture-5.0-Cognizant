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

-- Observation:
-- Query plan shows a table scan on enrollments.
-- Students and courses are joined using primary keys.
-- No additional indexes are used.