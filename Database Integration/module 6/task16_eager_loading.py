from task14_sqlalchemy_models import Enrollment
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, joinedload

engine = create_engine(
    "mysql+mysqlconnector://root:Root%40123@localhost/college_db",
    echo=True
)

Session = sessionmaker(bind=engine)
session = Session()

enrollments = (
    session.query(Enrollment)
    .options(
        joinedload(Enrollment.student),
        joinedload(Enrollment.course)
    )
    .all()
)

for e in enrollments:
    print(
        e.student.first_name,
        e.course.course_name,
        e.grade
    )

print("Task 16 completed")