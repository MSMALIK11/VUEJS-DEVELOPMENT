<template>
  <v-row justify="center">
    <v-dialog v-model="data" width="40vw">
      <v-card class="comment-card">
        <span class="bg"></span>
        <div class="comment-model">
          <v-icon class="close" @click="data = false">mdi-close</v-icon>
          <div class="comment-image-left">
            <img :src="post.image" alt="" class="c-img" />
          </div>
          <div class="comment-write-box">
            <PostHeader :post="post"/>
            <div class="comment">
              <CommentPeople />
              <CommentPeople />
              <CommentPeople />
              <CommentPeople />
              <CommentPeople />
              <CommentPeople />
            </div>
            <div class="coment-input">
              <InputPostComment />
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup>
import { defineProps } from "vue";
import PostHeader from "./PostHeader.vue";
import InputPostComment from "./InputPostComment.vue";
import CommentPeople from "./CommentPeople.vue";

const props = defineProps(["data", "post"]);


</script>

<style  scoped>
.comment-card {
  width: 60vw;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);
  color: #eee;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 999;
}
.comment-model {
  display: flex;

  padding: 10px;
}
.comment-model .c-img {
  width: 400px;
  height: 100%;
  object-fit: cover;
}
.close {
  position: absolute;
  z-index: 9999;
  right: 0;
  opacity: 0;
  transition: 0.4s;
}

.comment-card:hover .close {
  opacity: 1;
}

.coment-input {
  position: absolute;
  bottom: 0;
}
.comment {
  width: 415px;
  height: 65vh;
  margin-top: 65px;
  padding: 0 10px;
  overflow-y: auto;
}
</style>