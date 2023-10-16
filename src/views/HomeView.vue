<script setup>
import PageHeader from '../components/PageHeader.vue';
</script>

<template>
  <PageHeader />
  <main>
    <div class="main-title">WILL JONES</div>
    <div class="main-subtitle">engineer / creator</div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  justify-content: center;
}

.main-title {
  margin-top: 40px;
  font-size: 36px;
  text-align: center;
}

.main-subtitle {
  margin-top: 20px;
  font-size: 16px;
  text-align: center;
}
</style>
