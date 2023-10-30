<script setup>
import DisplayIcon from './DisplayIcons.vue';
</script>

<template>
  <div class="underlay">
    <div class="overlay">
      <h2>WHAT I WORK WITH</h2>
      <div class="display-icons">
        <DisplayIcon />
      </div>
    </div>
  </div>
</template>

<style scoped>
.underlay {
  z-index: -1;
  background-color: #000;
  height: auto;
}

.overlay {
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  height: auto;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin: 0;
}

@media (max-width: 800px) {
  h2 {
    font-size: 18px;
  }
}

.display-icons {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  align-items: center;
}
</style>
