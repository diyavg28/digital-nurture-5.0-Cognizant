CREATE TABLE department_transfer_log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    old_department_id INT,
    new_department_id INT,
    transfer_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER $$

CREATE PROCEDURE sp_enroll_student(
    IN p_student_id INT,
    IN p_course_id INT,
    IN p_enrollment_date DATE
)
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM enrollments
        WHERE student_id = p_student_id
        AND course_id = p_course_id
    ) THEN

        INSERT INTO enrollments
        (student_id, course_id, enrollment_date, grade)
        VALUES
        (p_student_id, p_course_id, p_enrollment_date, NULL);

    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Student already enrolled';
    END IF;
END$$

DELIMITER ;

CALL sp_enroll_student(1,3,CURDATE());

START TRANSACTION;

UPDATE students
SET department_id = 2
WHERE student_id = 1;

INSERT INTO department_transfer_log
(student_id, old_department_id, new_department_id)
VALUES
(1,1,2);

COMMIT;

START TRANSACTION;

INSERT INTO enrollments
(student_id, course_id, enrollment_date, grade)
VALUES
(2,1,CURDATE(),'A');

SAVEPOINT first_insert;

INSERT INTO enrollments
(student_id, course_id, enrollment_date, grade)
VALUES
(2,1,CURDATE(),'A');

ROLLBACK TO first_insert;

COMMIT;