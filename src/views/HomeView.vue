<script setup>
import PageHeader from '../components/PageHeader.vue';
import BuildSection from '../components/BuildSection.vue';
import WriteSection from '../components/WriteSection.vue';
</script>

<template>
  <PageHeader />
  <main>
    <section class="first-section">
      <h1>WILL JONES</h1>
      <h2>engineer / creator</h2>
    </section>
    <section class="second-section">
      <BuildSection />
    </section>
    <section class="third-section">
      <WriteSection />
    </section>
  </main>
</template>

<style scoped>
main {
  display: grid;
}

.first-section {
  justify-content: center;
}

.second-section {
  padding-left: 100px;
  margin-top: 40px;
  height: auto;
}

.third-section {
  padding-left: 100px;
  margin-top: 80px;
  height: auto;
}

h1 {
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
  font-weight: normal;
}

h2 {
  margin-top: 20px;
  font-size: 18px;
  text-align: center;
  font-weight: normal;
}
</style>
