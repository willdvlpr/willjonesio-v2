<script setup>
import { articleItems } from '../constants/links';
import ArticlePreview from './ArticlePreview.vue';
</script>

<template>
  <div class="mobile-alignment">
    <h2>WHAT I READ</h2>
    <ArticlePreview
      v-for="articleItem in articleItems"
      :key="articleItem.title"
      v-bind="articleItem"
    />
    <div class="read-more">
      <a href="https://willdvlpr.medium.com/" target="_blank">read more</a>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 24px;
  font-weight: bold;
}

@media (max-width: 800px) {
  h2 {
    font-size: 18px;
  }
}

@media (max-width: 600px) {
  .mobile-alignment {
    text-align: center;
  }
}

.read-more {
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 16px;
  text-align: center;
}

@media (max-width: 800px) {
  .read-more {
    font-size: 12px;
  }
}

a {
  color: #000;
  text-decoration: none;
}
</style>
