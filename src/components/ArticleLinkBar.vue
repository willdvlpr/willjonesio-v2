<script setup></script>
<template>
  <div class="mobile-alignment">
    <p>willjones.io</p>
    <p>Medium</p>
    <p>Substack</p>
  </div>
</template>
<style scoped>
div {
  display: flex;
}

p {
  margin-left: 4px;
  margin-right: 4px;
  font-size: 16px;
  text-decoration: underline;
}

@media (max-width: 800px) {
  p {
    font-size: 12px;
  }
}

@media (max-width: 600px) {
  .mobile-alignment {
    display: none;
  }
}
</style>
