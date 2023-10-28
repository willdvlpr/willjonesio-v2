<script setup>
const props = defineProps(['assetPath', 'description']);
</script>

<template>
  <img :src="props.assetPath" :alt="props.description" width="60" height="60" />
</template>

<style scoped>
@media (max-width: 600px) {
  img {
    width: 45px;
    height: 45px;
  }
}
</style>
