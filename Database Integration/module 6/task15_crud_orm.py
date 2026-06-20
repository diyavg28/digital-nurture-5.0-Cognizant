from task14_sqlalchemy_models import Department, Student
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine(
    "mysql+mysqlconnector://root:Root%40123@localhost/college_db",
    echo=True
)

Session = sessionmaker(bind=engine)
session = Session()

# READ
students = (
    session.query(Student)
    .join(Department)
    .filter(Department.dept_name == "Computer Science")
    .all()
)

for s in students:
    print(s.first_name, s.last_name)

# UPDATE
student = session.query(Student).filter(
    Student.email == "diya1@gmail.com"
).first()

if student:
    student.enrollment_year = 2023
    session.commit()
    print("Updated successfully")

# DELETE
student = session.query(Student).filter(
    Student.email == "kiran@gmail.com"
).first()

if student:
    session.delete(student)
    session.commit()
    print("Deleted successfully")

print("Task 15 completed")