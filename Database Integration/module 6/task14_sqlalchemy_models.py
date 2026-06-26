from sqlalchemy import Column, Integer, String, Date, Numeric, ForeignKey, Boolean, create_engine
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()

class Department(Base):
    __tablename__ = "departments"

    department_id = Column(Integer, primary_key=True)
    dept_name = Column(String(100))
    hod_name = Column(String(100))
    budget = Column(Numeric(12, 2))


class Student(Base):
    __tablename__ = "students"

    student_id = Column(Integer, primary_key=True)
    first_name = Column(String(50))
    last_name = Column(String(50))
    email = Column(String(100))
    date_of_birth = Column(Date)
    department_id = Column(Integer, ForeignKey("departments.department_id"))
    enrollment_year = Column(Integer)
    is_active = Column(Boolean, default=True)

    department = relationship("Department")


class Course(Base):
    __tablename__ = "courses"

    course_id = Column(Integer, primary_key=True)
    course_name = Column(String(150))
    course_code = Column(String(20))
    credits = Column(Integer)
    department_id = Column(Integer, ForeignKey("departments.department_id"))

    department = relationship("Department")


class Professor(Base):
    __tablename__ = "professors"

    professor_id = Column(Integer, primary_key=True)
    first_name = Column(String(100))
    email = Column(String(100))
    department_id = Column(Integer, ForeignKey("departments.department_id"))
    salary = Column(Numeric(10, 2))

    department = relationship("Department")


class Enrollment(Base):
    __tablename__ = "enrollments"

    enrollment_id = Column(Integer, primary_key=True)
    student_id = Column(Integer, ForeignKey("students.student_id"))
    course_id = Column(Integer, ForeignKey("courses.course_id"))
    enrollment_date = Column(Date)
    grade = Column(String(2))

    student = relationship("Student")
    course = relationship("Course")

class CourseSchedule(Base):
    __tablename__ = "course_schedules"

    schedule_id = Column(Integer, primary_key=True)
    course_id = Column(Integer, ForeignKey("courses.course_id"))
    day_of_week = Column(String(20))
    start_time = Column(String(20))
    end_time = Column(String(20))

    course = relationship("Course")


engine = create_engine(
    "mysql+mysqlconnector://root:Root%40123@localhost/college_db"
)

Base.metadata.create_all(engine)

print("All ORM tables mapped successfully!")