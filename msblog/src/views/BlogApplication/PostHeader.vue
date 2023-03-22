<template>
  <div class="postHeader">
    <div class="header">
      <div class="post-author icon">
        <v-avatar color="indigo">
          <v-icon dark> mdi-account-circle </v-icon>
        </v-avatar>
      </div>
      <div class="post-info">
        <h4 class="post-author-name">success_mentor</h4>
        <p>India</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style  scoped>
.postHeader {
  padding: 10px 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  width: 100%;
}
.post-autho {
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
}
.header {
  display: flex;
  gap: 20px;
}
</style>