
INSERT INTO departments(dept_name, head_of_dept, budget)
VALUES
('Computer Science','Dr. Kumar',500000),
('Information Technology','Dr. Priya',400000),
('Electronics','Dr. Ravi',350000);


INSERT INTO students
(first_name,last_name,email,date_of_birth,department_id)
VALUES
('Diya','V','diya1@gmail.com','2004-01-15',1),
('Arun','Kumar','arun@gmail.com','2003-05-20',1),
('Priya','R','priya@gmail.com','2004-03-10',2),
('Karthik','S','karthik@gmail.com','2003-11-12',2),
('Meena','P','meena@gmail.com','2004-07-18',3);

INSERT INTO students
(first_name,last_name,email,date_of_birth,department_id)
VALUES
('Rahul','M','rahul@gmail.com','2004-02-14',1),
('Anitha','R','anitha@gmail.com','2004-08-21',2);


INSERT INTO courses
(course_name,course_code,credits,department_id,max_seats)
VALUES
('Database Systems','CS301',4,1,60),
('Operating Systems','CS302',4,1,60),
('Python Programming','IT201',3,2,60);

INSERT INTO professors
(prof_name,email,department_id,salary)
VALUES
('Dr. Sharma','sharma@gmail.com',1,75000),
('Dr. Devi','devi@gmail.com',2,70000),
('Dr. Kumar','kumar@gmail.com',3,68000);


INSERT INTO enrollments
(student_id,course_id,enrollment_date,grade)
VALUES
(1,1,'2026-01-10','A'),
(2,1,'2026-01-10','B'),
(3,2,'2026-01-10','C'),
(4,2,'2026-01-10','A'),
(5,3,'2026-01-10',NULL);


UPDATE enrollments
SET grade='B'
WHERE student_id=5 AND course_id=3;


SELECT *
FROM enrollments
WHERE grade IS NULL;


DELETE FROM enrollments
WHERE grade IS NULL;


SELECT COUNT(*) AS student_count
FROM students;

SELECT COUNT(*) AS enrollment_count
FROM enrollments;