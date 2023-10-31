<script setup>
import PageHeader from '../components/PageHeader.vue';
import TitleSection from '../components/TitleSection.vue';
import BuildSection from '../components/BuildSection.vue';
import WriteSection from '../components/WriteSection.vue';
import FooterSection from '../components/FooterSection.vue';
</script>

<template>
  <PageHeader />
  <main>
    <section class="title-section">
      <TitleSection />
    </section>
    <section class="build-section">
      <BuildSection />
    </section>
    <section class="write-section">
      <WriteSection />
    </section>
  </main>
</template>

<style>
main {
  display: grid;
}

.title-section {
  justify-content: center;
  height: auto;
  margin-top: 80px;
  margin-bottom: 40px;
}

.build-section {
  padding-left: 30px;
  padding-top: 40px;
  height: 150px;
}

@media (max-width: 1000px) {
  .build-section {
    padding-left: 30px;
  }
}

@media (max-width: 600px) {
  .build-section {
    padding-left: 0;
  }
}

.write-section {
  padding-left: 30px;
  padding-right: 150px;
  padding-top: 80px;
  height: auto;
}

@media (max-width: 1000px) {
  .write-section {
    padding-left: 30px;
    padding-right: 30px;
  }
}

@media (max-width: 600px) {
  .write-section {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
