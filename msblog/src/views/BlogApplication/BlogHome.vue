
  <template>
  <v-row class="container">
    <v-col cols="2">
      <div class="leftsidebar">
        <SideBar />
      </div>
    </v-col>
    <v-col cols="6">
      <div class="blogPost mt-5">
        <div v-for="post in posts" :key="post.title">
          <BlogCard :post="post" />
        </div>
      </div>
    </v-col>
    <v-col cols="2">
      <!-- <p>left side</p> -->
    </v-col>
  </v-row>
</template>


<script setup>
import BlogCard from "./BlogCard.vue";
import SideBar from "./SideBar.vue";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";

const posts = [
  {
    title: "lets be a good version of yourself",
    image: p1,
    likes: "120",
  },
  {
    title: "never let down your attitude for anyone",
    image: p2,
    likes: "5k",
  },
  {
    title: "Silence is the best answer  of all cheep question",
    image: p1,
    likes: "5k",
  },
];
</script>

<style scoped>
.container {
  background: #222;
  height: 100vh;
  color: #fff;
}
.leftsidebar {
  height: 100vh;

  overflow-y: auto;
  border-right: 1px solid rgba(90, 88, 88, 0.8);
}
.v-col-2 {
  padding: 0;
}
.blogPost {
  height: 98vh;
  width: 80%;
  margin: 0 auto;

  overflow-y: auto;
  margin-top: 20px;
}
.storyHome {
  width: 80%;
  margin: 0 auto;
  background: #222;
}
@media (max-width: 768px) {
  .card p {
    display: none;
    opacity: 0;
  }
}
</style>