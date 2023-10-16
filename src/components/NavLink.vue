<script setup>
import { computed } from 'vue';

const props = defineProps(['label', 'href', 'isExternal', 'underline']);

const linkStyle = computed(() => ({
  textDecoration: props.underline ? 'underline' : 'none'
}));

const linkTarget = props.isExternal ? '_blank' : '_self';
</script>

<template>
  <a :style="linkStyle" :href="props.href" :target="linkTarget">
    {{ label }}
  </a>
</template>

<style scoped>
a {
  border: none;
  background: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  cursor: pointer;
  color: #000;
}
</style>
