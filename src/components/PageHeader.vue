<script setup>
import ItemLink from './ItemLink.vue';
import { navItems } from '../constants/links';
</script>

<template>
  <header>
    <nav>
      <ItemLink v-for="navItem in navItems" :key="navItem.label" v-bind="navItem" />
    </nav>
  </header>
</template>

<style scoped>
header {
  height: 80px;
  width: 100%;
}

nav {
  display: flex;
  padding-right: 40px;
  line-height: 80px;
  position: fixed;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

nav > * {
  margin-left: 30px;
}

@media (max-width: 600px) {
  nav {
    justify-content: center;
    padding: 0;
  }

  nav > * {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
