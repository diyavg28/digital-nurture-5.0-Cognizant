<template>
  <div class="course-card">
    <h3>{{ name }}</h3>
    <p>Code: {{ code }}</p>
    <p>Credits: {{ credits }}</p>
    <p>Grade: {{ grade }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  code: String,
  credits: Number,
  grade: String
})
</script>

<style scoped>
.course-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
</style>