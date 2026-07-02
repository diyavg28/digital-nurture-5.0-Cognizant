import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCard } from '../course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, FormsModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.scss',
})
export class CourseList {

  courses = [
    { name: 'Data Structures', code: 'CS101', credits: 4, grade: 'A' },
    { name: 'Operating Systems', code: 'CS102', credits: 3, grade: 'B+' },
    { name: 'Database Management', code: 'CS103', credits: 4, grade: 'A' },
    { name: 'Computer Networks', code: 'CS104', credits: 3, grade: 'A+' },
    { name: 'Web Development', code: 'CS105', credits: 2, grade: 'A' }
  ];
  searchTerm = '';
  get filteredCourses() {
  return this.courses.filter(course =>
    course.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}

}