<script setup>
import { computed } from 'vue';
import ArticleLinkBar from './ArticleLinkBar.vue';
const props = defineProps(['title', 'previewBody', 'link', 'substack', 'willjonesio']);

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
      <aside>
        <ArticleLinkBar :willjonesio="willjonesio" :link="link" :substack="substack" />
      </aside>
    </article>
  </div>
</template>

<style scoped>
article {
  display: flex;
  align-items: center;
  margin-top: 40px;
}

@media (max-width: 1280px) {
  article {
    display: grid;
    justify-content: center;
  }
}

@media (max-width: 600px) {
  article {
    display: flex;
  }
}

.overlay {
  opacity: 0.4;
}

.article-wrapper {
  width: 70%;
  margin-right: 50px;
}

@media (max-width: 1280px) {
  .article-wrapper {
    width: 90%;
  }
}

@media (max-width: 800px) {
  .article-wrapper {
    width: 95%;
  }
}

@media (max-width: 600px) {
  .article-wrapper {
    margin-right: 0;
  }
}

a {
  color: #000;
  text-decoration: none;
}

h3 {
  font-size: 20px;
  font-weight: normal;
}

@media (max-width: 800px) {
  h3 {
    font-size: 15px;
  }
}

p {
  font-size: 16px;
}

@media (max-width: 800px) {
  p {
    font-size: 12px;
  }
}
</style>
