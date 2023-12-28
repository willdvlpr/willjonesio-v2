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

img {
  margin-left: 45px;
  margin-right: 45px;
}

@media (max-width: 800px) {
  img {
    margin-left: 20px;
    margin-right: 20px;
    height: 20px;
    width: 20px;
  }
}

p {
  margin-top: 40px;
  font-size: 12px;
  text-align: center;
}
</style>
