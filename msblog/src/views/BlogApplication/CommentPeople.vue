<template>
  <div class="comentpeople">
    <div class="avatar">
      <v-avatar class="av" color="indigo">
        <v-icon dark> mdi-account-circle </v-icon>
      </v-avatar>
      <div class="info">
        <h3 class="name">ceo_shoaib11</h3>
        <div class="messages">
          <span> Thanks for sharing✌️✌️</span>
          <p class="mint-ago">20m Reply</p>
        </div>
      </div>

      <v-icon class="icon" dark> mdi-heart-outline </v-icon>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.avatar {
  display: flex;

  gap: 15px;
  position: relative;
  margin-bottom: 10px;
}
.name {
  font-weight: bold;
}

.info {
  display: inline;

  height: auto;
  overflow-x: hidden;
}
.messages {
  width: 80%;
}
.icon {
  position: absolute;
  right: 0;
  top: 0;
}

.mint-ago {
  color: #ccc;
  font-weight: bold;
  letter-spacing: 0.4px;
  font-size: 12px;
}
</style>