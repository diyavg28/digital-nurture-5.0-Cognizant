<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const courses = [
  { id: 1, name: 'Mathematics', code: 'MAT101', credits: 4, grade: 'A' },
  { id: 2, name: 'Physics', code: 'PHY102', credits: 3, grade: 'B+' },
  { id: 3, name: 'Chemistry', code: 'CH103', credits: 3, grade: 'A+' },
  { id: 4, name: 'English', code: 'ENG104', credits: 2, grade: 'A' },
  { id: 5, name: 'Programming', code: 'CS105', credits: 4, grade: 'O' }
]

const course = courses.find(
  c => c.id === Number(route.params.id)
)
function enroll(){
  router.push('/profile')
}
</script>

<template>
  <div v-if="course">
    <h2>Course Details</h2>

    <p><b>Name:</b> {{ course.name }}</p>
    <p><b>Code:</b> {{ course.code }}</p>
    <p><b>Credits:</b> {{ course.credits }}</p>
    <p><b>Grade:</b> {{ course.grade }}</p>
    <button @click="enroll">Enroll</button>
  </div>

  <div v-else>
    <h2>Course Not Found</h2>
  </div>
</template>