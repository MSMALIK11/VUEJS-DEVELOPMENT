<template>
  <div class="storyWraper">
    <div class="story" v-for="item in arr" :key="item">
      <div class="storyImage"></div>
    </div>
  </div>
</template>

<script  setup>
const arr = [1, 2, 3, 4, 5, 6, 7];
</script>

<style  scoped>
.storyWraper {
  height: 110px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  overflow: hidden;
}

.story {
  color: #ddd;
}

.storyImage {
  width: 60px;
  height: 60px;
  border: 3px solid mediumseagreen;
  border-radius: 50%;
}
</style>