<script setup>
import NavLink from '../components/NavLink.vue';
import { navItems } from '../constants/navItems';
</script>

<template>
  <header>
    <div class="wrapper">
      <NavLink v-for="navItem in navItems" :key="navItem.label" v-bind="navItem" />
    </div>
  </header>
</template>

<style scoped>
header {
  height: 80px;
  width: 100%;
}

.wrapper {
  padding-right: 40px;
  line-height: 80px;
}

.wrapper > * {
  margin-left: 30px;
}
</style>
