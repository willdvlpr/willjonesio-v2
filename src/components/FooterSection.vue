<script setup>
import SvgLink from './SvgLink.vue';
import { footerItems } from '../constants/links';
</script>

<template>
  <footer>
    <section>
      <SvgLink v-for="footerItem in footerItems" :key="footerItem.label" v-bind="footerItem" />
    </section>
    <p>Copyright © {{ new Date().getFullYear() }} Will Jones. All rights reserved.</p>
  </footer>
</template>

<style scoped>
footer {
  padding-top: 100px;
  height: 150px;
  display: grid;
}

section {
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  margin-top: 40px;
  font-size: 12px;
  text-align: center;
}
</style>
