import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCard } from '../course-card/course-card';
import { CourseService } from '../services/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.scss',
})
export class CourseList implements OnInit {

  courses: any[] = [];
  loading = false;
  searchTerm = '';

  constructor(private courseService: CourseService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
  console.log("ngOnInit called");

  this.loading = true;

  this.courseService.getCourses().subscribe({
    next: (data) => {
      console.log("SUCCESS", data);
      this.courses = data;
      
      this.loading = false;
      this.cdr.detectChanges();
      
      
    },
    error: (err) => {
      console.log("ERROR", err);
      this.loading = false;
      console.log(this.loading);
      console.log(this.courses.length);
    }
  });
}

  get filteredCourses() {
    return this.courses.filter(course =>
      course.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}