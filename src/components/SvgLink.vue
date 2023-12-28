<script setup>
const props = defineProps(['label', 'href', 'icon']);
const iconPath = `src/assets/icons/${props.icon}.svg`;
</script>

<template>
  <a :href="props.href" target="_blank">
    <img :src="iconPath" :alt="props.label" width="30" height="30" />
  </a>
</template>

<style scoped>
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
</style>
