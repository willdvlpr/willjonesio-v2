<script setup>
import { articleItems } from '../constants/links';
import ArticlePreview from './ArticlePreview.vue';
</script>

<template>
  <h2>WHAT I WRITE</h2>

  <ArticlePreview
    v-for="articleItem in articleItems"
    :key="articleItem.title"
    v-bind="articleItem"
  />

  <div class="read-more"><a href="https://willdvlpr.medium.com/" target="_blank">read more</a></div>
</template>

<style scoped>
h2 {
  font-size: 24px;
  font-weight: bold;
}

.read-more {
  margin-right: 150px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 16px;
  text-align: center;
}

a {
  color: #000;
  text-decoration: none;
}
</style>
