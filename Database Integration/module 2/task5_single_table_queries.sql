
SELECT *
FROM students
ORDER BY last_name ASC;

SELECT *
FROM courses
WHERE credits > 3
ORDER BY credits DESC;

SELECT *
FROM professors
WHERE salary BETWEEN 80000 AND 95000;


SELECT *
FROM students
WHERE email LIKE '%@college.edu';

SELECT YEAR(date_of_birth) AS year,
COUNT(*) AS total_students
FROM students
GROUP BY YEAR(date_of_birth);