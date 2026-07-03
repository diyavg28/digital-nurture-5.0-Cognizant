import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

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

  return {
    enrolledCourses,
    totalCredits,
    enroll,
    unenroll,
  }
})