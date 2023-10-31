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
  position: fixed;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

.avatar-wrapper {
  display: flex;
  margin-left: auto;
  align-items: center;
  margin-right: 40px;
}

@media (max-width: 600px) {
  .avatar-wrapper {
    display: none;
  }
}
</style>
