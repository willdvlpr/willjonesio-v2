<script setup>
import { computed } from 'vue';

const props = defineProps(['label', 'href', 'isExternal', 'underline', 'isRounded']);

const linkStyle = computed(() => ({
  textDecoration: props.underline ? 'underline' : 'none'
}));

const isRoundStyle = computed(() => {
  if (props.isRounded) {
    return {
      border: '1px solid black',
      borderRadius: '50px',
      padding: '18px 32px 18px 32px',
      boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)'
    };
  } else {
    return {};
  }
});

const linkTarget = props.isExternal ? '_blank' : '_self';
</script>

<template>
  <a :style="[linkStyle, isRoundStyle]" :href="props.href" :target="linkTarget">
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
