import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getCourseById } from '../api/courseApi'

export const useEnrollmentStore = defineStore('enrollment', () => {
  const enrolledCourses = ref<any[]>([])

  const totalCredits = computed(() => {
    return enrolledCourses.value.reduce(
      (total, course) => total + course.credits,
      0
    )
  })

  const enroll = (course: any) => {
    const exists = enrolledCourses.value.find(c => c.id === course.id)

    if (!exists) {
      enrolledCourses.value.push(course)
    }
  }

  const unenroll = (course: any) => {
    enrolledCourses.value = enrolledCourses.value.filter(
      c => c.id !== course.id
    )
  }

  // Task 149 - Async Pinia Action
  const fetchAndEnroll = async (courseId: number) => {
    try {
      const course = await getCourseById(courseId)
      enroll(course)
    } catch (error) {
      console.error(error)
    }
  }

  // Task 149 - Reset Store
  const $reset = () => {
    enrolledCourses.value = []
  }

  return {
    enrolledCourses,
    totalCredits,
    enroll,
    unenroll,
    fetchAndEnroll,
    $reset
  }
})