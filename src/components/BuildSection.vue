<script setup>
import { projectItems } from '../constants/links';
import ItemLink from './ItemLink.vue';
</script>

<template>
  <div class="mobile-alignment">
    <h2>WHAT I WORK ON</h2>
    <div class="links-wrapper">
      <ItemLink v-for="projectItem in projectItems" :key="projectItem.label" v-bind="projectItem" />
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 24px;
  font-weight: bold;
}

@media (max-width: 800px) {
  h2 {
    font-size: 18px;
  }
}

@media (max-width: 600px) {
  .mobile-alignment {
    text-align: center;
  }
}

.links-wrapper {
  margin-top: 60px;
}

.links-wrapper > * {
  margin-left: 40px;
}

.links-wrapper > *:first-child {
  margin-left: 0;
}

@media (max-width: 500px) {
  .links-wrapper > * {
    margin-left: 10px;
  }

  .links-wrapper > *:first-child {
    margin-left: 0;
  }
}
</style>
