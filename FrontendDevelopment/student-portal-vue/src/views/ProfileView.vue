<template>
  <div>
    <h2>Student Profile</h2>

    <h3>Enrolled Courses</h3>

    <div v-if="store.enrolledCourses.length === 0">
      <p>No courses enrolled yet.</p>
    </div>

    <ul v-else>
      <li
        v-for="course in store.enrolledCourses"
        :key="course.id"
      >
        {{ course.name }} ({{ course.code }}) - {{ course.credits }} Credits
      </li>
    </ul>

    <h3>Total Credits: {{ store.totalCredits }}</h3>
  </div>
</template>

<script setup lang="ts">
import { useEnrollmentStore } from '../stores/enrollment'

const store = useEnrollmentStore()
</script>