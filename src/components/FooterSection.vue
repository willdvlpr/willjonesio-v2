<script setup></script>

<template>
  <footer>
    <section>
      <a href="https://www.linkedin.com/in/willdvlpr/" target="_blank">
        <img src="../assets/icons/linkedin-icon.svg" alt="linkedin" width="30" height="30" />
      </a>
      <a href="https://twitter.com/willdvlpr" target="_blank">
        <img src="../assets/icons/x-twitter-icon.svg" alt="twitter" width="30" height="30" />
      </a>
      <a href="https://github.com/willdvlpr" target="_blank">
        <img src="../assets/icons/github-icon.svg" alt="github" width="30" height="30" />
      </a>
      <a href="https://willdvlpr.medium.com/" target="_blank">
        <img src="../assets/icons/medium-icon.svg" alt="medium" width="30" height="30" />
      </a>
      <a href="https://www.youtube.com/@willjones3521" target="_blank">
        <img src="../assets/icons/youtube-icon.svg" alt="youtube" width="30" height="30" />
      </a>
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
