<template>
  <v-card class="mybg" max-width="300" tile>
    <div class="card" v-for="(item, index) in dataList">
      <v-icon>
        {{ item.icon }}
      </v-icon>
      <p>{{ item.title }}</p>
    </div>
  </v-card>
</template>

<script setup>
import { reactive } from "vue";

const dataList = reactive([
  {
    title: "Home",
    icon: "mdi-home ",
  },
  {
    title: "Search",
    icon: "mdi-magnify ",
  },
  {
    title: "Explopte",
    icon: "mdi-compass ",
  },
  {
    title: "Messages",
    icon: "mdi-message-settings  ",
    isMessages: true,
  },
  {
    title: "Notifications",
    icon: "mdi-heart-outline ",
  },
  {
    title: "Create",
    icon: "mdi-plus-circle-outline  ",
  },
  {
    title: "Profile",
    icon: "mdi-account-circle  ",
  },
  {
    title: "Saved",
    icon: "mdi-content-save-plus",
  },
  {
    title: "Settings",
    icon: "mdi-cog ",
  },
]);
</script>

<style  scoped>
.list-item {
  display: flex;
}
.mybg {
  background: #000;
  color: #fff;
}
.card {
  display: flex;
  gap: 15px;
  font-size: 18px;
  margin-bottom: 10px;
  padding: 15px 20px;
}

.card:hover {
  background: #111;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
}
</style>