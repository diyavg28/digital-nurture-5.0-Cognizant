<template>
  <div>
    <Header />

    <h2>Course List</h2>

    <input
      type="text"
      v-model="searchTerm"
      placeholder="Search courses"
    />

    <CourseCard
      v-for="course in filteredCourses"
      :key="course.id"
      :name="course.name"
      :code="course.code"
      :credits="course.credits"
      :grade="course.grade"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Header from '../components/Header.vue'
import CourseCard from '../components/CourseCard.vue'

const searchTerm = ref('')

const courses = ref<any[]>([])

onMounted(() => {
  courses.value = [
    { id: 1, name: 'Mathematics', code: 'MA101', credits: 4, grade: 'A' },
    { id: 2, name: 'Physics', code: 'PH102', credits: 3, grade: 'B+' },
    { id: 3, name: 'Chemistry', code: 'CH103', credits: 3, grade: 'A+' },
    { id: 4, name: 'Programming', code: 'CS104', credits: 4, grade: 'O' },
    { id: 5, name: 'English', code: 'EN105', credits: 2, grade: 'A' }
  ]
})

const filteredCourses = computed(() =>
  courses.value.filter(course =>
    course.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
)
</script>