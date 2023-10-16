<script setup>
import NavLink from './components/NavLink.vue';

const navItems = [
  { label: 'SocioProphet', href: 'https://www.socioprophet.com/', isExternal: true },
  { label: 'YouTube', href: 'https://www.youtube.com/@willjones3521', isExternal: true },
  { label: 'GitHub', href: 'https://github.com/willdvlpr', isExternal: true },
  { label: 'Blog', href: 'https://willdvlpr.medium.com/', isExternal: true },
  { label: 'Twitter', href: 'https://twitter.com/willdvlpr', isExternal: true }
];
</script>

<template>
  <header>
    <div class="wrapper">
      <NavLink v-for="navItem in navItems" :key="navItem.label" v-bind="navItem" />
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
