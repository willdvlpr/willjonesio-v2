<script setup>
import ArticlePreview from './ArticlePreview.vue';
</script>

<template>
  <h2>WHAT I WRITE</h2>
  <ArticlePreview />
  <ArticlePreview />
  <div class="overlay"><ArticlePreview /></div>
  <div class="read-more">read more</div>
</template>

<style scoped>
h2 {
  font-size: 24px;
  font-weight: bold;
}

.overlay {
  opacity: 0.4;
}

.read-more {
  font-size: 16px;
  margin-left: 330px;
}
</style>
