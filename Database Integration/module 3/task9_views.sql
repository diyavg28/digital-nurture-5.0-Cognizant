CREATE VIEW vw_student_enrollment_summary AS
SELECT
    s.student_id,
    CONCAT(s.first_name,' ',s.last_name) AS student_name,
    d.dept_name,
    COUNT(e.course_id) AS number_of_courses,
    AVG(
        CASE
            WHEN e.grade='A' THEN 4
            WHEN e.grade='B' THEN 3
            WHEN e.grade='C' THEN 2
            WHEN e.grade='D' THEN 1
            ELSE 0
        END
    ) AS gpa
FROM students s
JOIN departments d
ON s.department_id = d.department_id
LEFT JOIN enrollments e
ON s.student_id = e.student_id
GROUP BY s.student_id,s.first_name,s.last_name,d.dept_name;

CREATE VIEW vw_course_stats AS
SELECT
    c.course_name,
    c.course_code,
    COUNT(e.enrollment_id) AS total_enrollments,
    AVG(
        CASE
            WHEN e.grade='A' THEN 4
            WHEN e.grade='B' THEN 3
            WHEN e.grade='C' THEN 2
            WHEN e.grade='D' THEN 1
            ELSE 0
        END
    ) AS avg_gpa
FROM courses c
LEFT JOIN enrollments e
ON c.course_id = e.course_id
GROUP BY c.course_id,c.course_name,c.course_code;

SELECT *
FROM vw_student_enrollment_summary
WHERE gpa > 3.0;

DROP VIEW IF EXISTS vw_student_enrollment_summary;

CREATE VIEW vw_student_enrollment_summary AS
SELECT
    student_id,
    first_name,
    last_name,
    email
FROM students
WITH CHECK OPTION;