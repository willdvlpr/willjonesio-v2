<script setup>
import PageHeader from '../components/PageHeader.vue';
import TitleSection from '../components/TitleSection.vue';
import BuildSection from '../components/BuildSection.vue';
import WriteSection from '../components/WriteSection.vue';
import WorkWithSection from '../components/WorkWithSection.vue';
</script>

<template>
  <PageHeader />
  <main>
    <section class="first-section">
      <TitleSection />
    </section>
    <section class="second-section">
      <BuildSection />
    </section>
    <section class="third-section">
      <WriteSection />
    </section>
    <section class="fourth-section">
      <WorkWithSection />
    </section>
  </main>
</template>

<style>
main {
  display: grid;
}

.first-section {
  justify-content: center;
}

.second-section {
  padding-left: 150px;
  margin-top: 40px;
  height: auto;
}

@media (max-width: 1000px) {
  .second-section {
    padding-left: 30px;
  }
}

@media (max-width: 600px) {
  .second-section {
    padding: 0;
  }
}

.third-section {
  padding-left: 150px;
  padding-right: 150px;
  margin-top: 80px;
  height: auto;
}

@media (max-width: 1000px) {
  .third-section {
    padding-left: 30px;
    padding-right: 30px;
  }
}

@media (max-width: 600px) {
  .third-section {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
