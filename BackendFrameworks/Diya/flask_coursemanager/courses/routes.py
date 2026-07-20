from flask import Blueprint, jsonify, request
from courses.models import Course, Student
from app import db

courses_bp = Blueprint("courses", __name__, url_prefix="/api/courses")


def make_response_json(data, status_code):
    return jsonify({
        "status": "success",
        "data": data
    }), status_code


# GET all courses
@courses_bp.route("/", methods=["GET"])
def get_courses():
    courses = Course.query.all()
    return make_response_json([course.to_dict() for course in courses], 200)


# POST a new course
@courses_bp.route("/", methods=["POST"])
def add_course():
    data = request.get_json()

    if not data:
        return jsonify({"error": "No JSON data received"}), 400

    if "name" not in data or "code" not in data or "credits" not in data:
        return jsonify({"error": "name, code and credits are required"}), 400

    new_course = Course(
        name=data["name"],
        code=data["code"],
        credits=data["credits"],
        department_id=data.get("department_id")
    )

    db.session.add(new_course)
    db.session.commit()

    return make_response_json(new_course.to_dict(), 201)


# GET course by ID
@courses_bp.route("/<int:course_id>", methods=["GET"])
def get_course(course_id):
    course = Course.query.get_or_404(course_id)
    return make_response_json(course.to_dict(), 200)


# UPDATE course
@courses_bp.route("/<int:course_id>", methods=["PUT"])
def update_course(course_id):
    course = Course.query.get_or_404(course_id)
    data = request.get_json()

    if "name" in data:
        course.name = data["name"]

    if "code" in data:
        course.code = data["code"]

    if "credits" in data:
        course.credits = data["credits"]

    if "department_id" in data:
        course.department_id = data["department_id"]

    db.session.commit()

    return make_response_json(course.to_dict(), 200)


# DELETE course
@courses_bp.route("/<int:course_id>", methods=["DELETE"])
def delete_course(course_id):
    course = Course.query.get_or_404(course_id)

    db.session.delete(course)
    db.session.commit()

    return jsonify({"message": "Course deleted successfully"}), 200


# GET students enrolled in a course
@courses_bp.route("/<int:course_id>/students", methods=["GET"])
def get_course_students(course_id):
    course = Course.query.get_or_404(course_id)

    students = (
        Student.query.join(Student.enrollments)
        .filter_by(course_id=course.id)
        .all()
    )

    return make_response_json(
        [student.to_dict() for student in students],
        200
    )