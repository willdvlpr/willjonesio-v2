<script setup>
import { computed } from 'vue';

const props = defineProps(['label', 'underline']);

const linkStyle = computed(() => ({
  textDecoration: props.underline ? 'underline' : 'none'
}));
</script>

<template>
  <button :style="linkStyle">
    {{ label }}
  </button>
</template>

<style scoped>
button {
  border: none;
  background: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  cursor: pointer;
  color: #000;
}
</style>
