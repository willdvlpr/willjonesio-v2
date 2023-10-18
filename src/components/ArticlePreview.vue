<script setup>
import { computed } from 'vue';
import ArticleLinkBar from './ArticleLinkBar.vue';
const props = defineProps(['title', 'previewBody', 'link']);

const computeOverlay = computed(() => ({
  opacity: props.link ? '1' : '0.4',
  cursor: props.link ? 'pointer' : 'default'
}));
</script>

<template>
  <div :style="computeOverlay">
    <article>
      <div class="article-wrapper">
        <a :href="link" target="_blank">
          <h3>{{ title }}</h3>
          <p>
            {{ previewBody }}
          </p>
        </a>
      </div>
      <aside><ArticleLinkBar /></aside>
    </article>
  </div>
</template>

<style scoped>
article {
  display: flex;
  align-items: center;
  margin-top: 50px;
}

.overlay {
  opacity: 0.4;
}

.article-wrapper {
  width: 60%;
  margin-right: 50px;
}

a {
  color: #000;
  text-decoration: none;
  font-size: 16px;
}

h3 {
  font-size: 20px;
  font-weight: normal;
}

p {
  font-size: 16px;
}
</style>
