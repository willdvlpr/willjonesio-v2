<script setup></script>

<template>
  <footer>
    <section>
      <img src="../assets/icons/linkedin-icon.svg" alt="linkedin" width="30" height="30" />
      <img src="../assets/icons/twitter-icon.svg" alt="twitter" width="30" height="30" />
      <img src="../assets/icons/github-icon.svg" alt="github" width="30" height="30" />
      <img src="../assets/icons/medium-icon.svg" alt="medium" width="30" height="30" />
      <img src="../assets/icons/youtube-icon.svg" alt="youtube" width="30" height="30" />
    </section>
    <p>Copyright © {{ new Date().getFullYear() }} Will Jones. All rights reserved.</p>
  </footer>
</template>

<style scoped>
footer {
  padding-top: 100px;
  height: 150px;
  display: grid;
}

section {
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  margin-left: 45px;
  margin-right: 45px;
}

@media (max-width: 800px) {
  img {
    margin-left: 20px;
    margin-right: 20px;
    height: 20px;
    width: 20px;
  }
}

p {
  margin-top: 40px;
  font-size: 12px;
  text-align: center;
}
</style>
