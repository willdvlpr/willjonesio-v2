<script setup>
import NavLink from './components/NavLink.vue';

const navLabels = ['Projects', 'Blog', 'SocioProphet', 'YouTube', 'GitHub', 'Contacts'];
</script>

<template>
  <header>
    <div class="wrapper">
      <NavLink v-for="label in navLabels" :key="label" :label="label" />
    </div>
  </header>

  <RouterView />
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
