import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.scss'
})
export class StudentProfile {

  profileForm;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      semester: [
        '',
        [
          Validators.required,
          Validators.min(1),
          Validators.max(8)
        ]
      ]
    });
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}