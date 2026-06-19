SELECT student_id, first_name, last_name
FROM students
WHERE student_id IN (
    SELECT student_id
    FROM enrollments
    GROUP BY student_id
    HAVING COUNT(*) >
    (
        SELECT AVG(enrollment_count)
        FROM (
            SELECT COUNT(*) AS enrollment_count
            FROM enrollments
            GROUP BY student_id
        ) avg_table
    )
);

SELECT p.professor_id, p.prof_name, p.salary
FROM professors p
WHERE p.salary =
(
    SELECT MAX(p2.salary)
    FROM professors p2
    WHERE p2.department_id = p.department_id
);

SELECT *
FROM (
    SELECT department_id, AVG(salary) AS avg_salary
    FROM professors
    GROUP BY department_id
) dept_avg
WHERE avg_salary > 85000;

SELECT course_id, course_name
FROM courses c
WHERE NOT EXISTS
(
    SELECT 1
    FROM enrollments e
    WHERE e.course_id = c.course_id
      AND e.grade <> 'A'
);