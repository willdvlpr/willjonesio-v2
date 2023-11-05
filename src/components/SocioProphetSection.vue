<script setup>
import ItemLink from './ItemLink.vue';
import { socioprophetItems } from '../constants/links';
</script>

<template>
  <h2>SocioProphet</h2>
  <p>
    <i
      >“SocioProphet is a community for distributed infrastructure, data, analytics, and ai built as
      a web 2.0 social networking platform. For geeks, by geeks.”</i
    >
  </p>
  <div class="img-wrapper">
    <img src="../assets/images/socioprophet.png" alt="socioprophet" width="959" height="500" />
  </div>
  <p>Please checkout the links below to learn more as we grow the SocioProphet community.</p>
  <div class="socioprophet-links">
    <ItemLink
      v-for="socioprophetItem in socioprophetItems"
      :key="socioprophetItem.label"
      v-bind="socioprophetItem"
    />
  </div>
</template>

<style scoped>
h2 {
  margin-top: 40px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-align: center;
}

@media (max-width: 800px) {
  h2 {
    font-size: 18px;
  }
}

p {
  margin-top: 40px;
  font-size: 14px;
  color: #fff;
  text-align: center;
}

@media (max-width: 800px) {
  p {
    font-size: 12px;
  }
}

.img-wrapper {
  display: flex;
  justify-content: center;
}

img {
  margin-top: 40px;
  margin-bottom: 40px;
}

@media (max-width: 1200px) {
  img {
    width: 700px;
    height: 365px;
  }
}

@media (max-width: 800px) {
  img {
    width: 400px;
    height: 209px;
  }
}

@media (max-width: 600px) {
  img {
    width: 300px;
    height: 157px;
  }
}

.socioprophet-links {
  margin-top: 40px;
  text-align: center;
}

.socioprophet-links > * {
  color: #fff !important;
  font-size: 12px;
  margin-left: 50px;
  margin-right: 50px;
  text-decoration: underline;
}

@media (max-width: 800px) {
  .socioprophet-links > * {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
