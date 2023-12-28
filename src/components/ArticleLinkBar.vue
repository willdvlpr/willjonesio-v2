<script setup>
const props = defineProps(['willjonesio', 'link', 'substack']);
</script>
<template>
  <div class="mobile-alignment">
    <a :href="props.willjonesio">willjones.io</a>
    <a :href="props.link" target="_blank">Medium</a>
    <a :href="props.substack" target="_blank">Substack</a>
  </div>
</template>
<style scoped>
div {
  display: flex;
}

a {
  margin-left: 4px;
  margin-right: 4px;
  font-size: 16px;
  text-decoration: underline;
  color: #000;
}

@media (max-width: 800px) {
  a {
    font-size: 12px;
  }
}

@media (max-width: 600px) {
  .mobile-alignment {
    display: none;
  }
}
</style>
