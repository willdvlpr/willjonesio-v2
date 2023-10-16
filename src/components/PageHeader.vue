<script setup>
import NavLink from './ItemLink.vue';
import ProfileAvatar from './ProfileAvatar.vue';
import { navItems } from '../constants/links';
</script>

<template>
  <header>
    <nav>
      <NavLink v-for="navItem in navItems" :key="navItem.label" v-bind="navItem" />
      <div class="avatar-wrapper"><ProfileAvatar /></div>
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
}

nav > * {
  margin-left: 30px;
}

.avatar-wrapper {
  display: flex;
  margin-left: auto;
  align-items: center;
}
</style>
