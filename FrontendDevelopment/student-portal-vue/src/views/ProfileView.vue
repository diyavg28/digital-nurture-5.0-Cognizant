<template>
  <div>
    <h2>Student Profile</h2>

    <h3>Enrolled Courses</h3>

    <div v-if="enrolledCourses.length === 0">
      <p>No courses enrolled yet.</p>
    </div>

    <ul v-else>
      <li
        v-for="course in enrolledCourses"
        :key="course.id"
      >
        {{ course.name }} ({{ course.code }}) - {{ course.credits }} Credits
      </li>
    </ul>

    <h3>Total Credits: {{ totalCredits }}</h3>
  </div>
</template>

<script setup lang="ts">
import { useEnrollmentStore } from '../stores/enrollment'
import { storeToRefs } from 'pinia'

const store = useEnrollmentStore()

const {
  enrolledCourses,
  totalCredits
} = storeToRefs(store)
</script>