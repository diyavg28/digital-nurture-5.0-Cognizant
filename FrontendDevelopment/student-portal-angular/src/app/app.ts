import { Component } from '@angular/core';
import { Header } from './header/header';
import { CourseList } from './course-list/course-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, CourseList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}