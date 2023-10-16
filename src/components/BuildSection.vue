<script setup>
import { projectItems } from '../constants/links';
import NavLink from './ItemLink.vue';
</script>

<template>
  <h2>WHAT I WORK ON</h2>
  <div class="links-wrapper">
    <NavLink v-for="projectItem in projectItems" :key="projectItem.label" v-bind="projectItem" />
  </div>
</template>

<style scoped>
h2 {
  font-size: 24px;
  font-weight: bold;
}

.links-wrapper {
  margin-top: 40px;
}

.links-wrapper > * {
  margin-left: 40px;
}

.links-wrapper > *:first-child {
  margin-left: 0;
}
</style>
