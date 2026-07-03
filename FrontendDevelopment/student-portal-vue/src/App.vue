<script setup lang="ts">
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/courses">Courses</RouterLink> |
    <RouterLink to="/profile">Profile</RouterLink>
  </nav>

  <hr>

  <RouterView />
</template>

<style scoped>
nav {
  padding: 15px;
}

nav a {
  margin-right: 15px;
  text-decoration: none;
  color: blue;
}

nav a.router-link-active {
  font-weight: bold;
}
</style>