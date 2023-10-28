<script setup>
import { displayIcons } from '../constants/icons';
import DisplayIcon from './DisplayIcon.vue';
</script>

<template>
  <div class="underlay">
    <div class="overlay">
      <h2>WHAT I WORK WITH</h2>
      <div class="display-icons">
        <DisplayIcon v-for="icon in displayIcons" :key="icon.assetPath" v-bind="icon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.underlay {
  z-index: -1;
  background-color: #000;
  height: auto;
  padding-bottom: 30px;
}

.overlay {
  padding-top: 40px;
  margin-top: 40px;
  text-align: center;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}

@media (max-width: 800px) {
  h2 {
    font-size: 18px;
  }
}

.display-icons {
  display: flex;
  justify-content: space-around;
  height: 110px;
  align-items: center;
}
</style>
