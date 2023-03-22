<template>
  <div>
    <ModelView :data="isOpen" :post="props.post" />
    <div class="postWraper">
      <div class="postImage">
        <img v-bind:src="props.post.image" alt="" />
      </div>

      <div class="postHeader">
        <postHeader />
      </div>

      <div class="post-details">
        <h3 class="postTitle">{{ post.title }}</h3>
        <div class="icons-wraper mt-3">
          <div class="icon">
            <v-icon
              v-if="isLike"
              large
              color="secondary darken-2"
              @click="isLike = !isLike"
            >
              mdi-heart
            </v-icon>
            <v-icon v-else large color="darken-2" @click="isLike = !isLike">
              mdi-heart-outline
            </v-icon>
            <!-- comment -->
            <v-icon large color="darken-2" @click="openCommentModel()">
              mdi-message-settings
            </v-icon>

            <v-icon large color="darken-2"> mdi-send </v-icon>
          </div>
          <div class="icon">
            <v-icon
              v-if="isSave"
              large
              color="green darken-2"
              @click="isSave = !isSave"
            >
              mdi-heart-remove
            </v-icon>
            <v-icon v-else large color="darken-2" @click="isSave = !isSave">
              mdi-heart-plus-outline
            </v-icon>
          </div>
        </div>

        <div class="post-info mt-4">
          <v-avatar color="indigo" size="30">
            <v-icon dark> mdi-account-circle </v-icon>
          </v-avatar>
          <p>Liked by adam1212._117 and 867,398 others</p>
        </div>
        <p class="viewAllComment mt-4">View all 6,259 comments</p>
        <p class="time mt-2">7 HOURS AGO</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import postHeader from "./PostHeader.vue";
import ModelView from "./ModelView.vue";

import { reactive, ref, watch } from "vue";

let isLike = ref(false);
let isSave = ref(false);
let isOpen = ref(false);
const props = defineProps(["post"]);
// console.log("post", props.post.image);
let commentPost = reactive([]);

const openCommentModel = () => {
 isOpen.value = !isOpen.value;


};

</script>

<style scoped>
.postWraper {
  width: 100%;
  background: #000;
  height: 600px;
  position: relative;
  margin: 20px 0;
  z-index: 99;
}
.postHeader {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
}
.postWraper .postImage {
  width: 100%;
  height: 400px;
  overflow: hidden;
}
.postWraper .postImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-details {
  padding: 10px;
}
.icons-wraper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon {
  display: flex;
  gap: 18px;
  align-items: center;
}
.post-info {
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
  font-size: 12px;
}
.viewAllComment {
  color: #ccc;
}
.time {
  font-size: 12px;
  color: #ccc;
}
.postTitle {
  text-transform: capitalize;
  letter-spacing: 0.3px;
  font-weight: bold;
}
</style>
