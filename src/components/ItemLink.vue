<script setup>
const props = defineProps(['label', 'href', 'isExternal', 'isRounded']);
const linkTarget = props.isExternal ? '_blank' : '_self';
</script>

<template>
  <a
    v-bind:class="[props.isRounded ? 'rounded-anchor' : 'nav-anchor']"
    :href="props.href"
    :target="linkTarget"
  >
    {{ label }}
  </a>
</template>

<style scoped>
a {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  cursor: pointer;
  color: #000;
  text-decoration: none;
}

@media (max-width: 800px) {
  a {
    font-size: 12px;
  }
}

.nav-anchor {
  border: none;
}

.rounded-anchor {
  border: 1px solid black;
  border-radius: 50px;
  padding: 18px 32px 18px 32px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
}

@media (max-width: 800px) {
  .rounded-anchor {
    padding: 14px 24px 14px 24px;
  }
}

@media (max-width: 500px) {
  a {
    font-size: 10px;
  }

  .rounded-anchor {
    padding: 12px 20px 12px 20px;
  }
}
</style>
