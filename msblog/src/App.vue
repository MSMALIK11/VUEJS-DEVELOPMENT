
<template>
  <header>
    <Header />
    <!-- <BannerView /> -->
    <!-- <ProductView /> -->

    <!-- <h1 v-if="isActive">helo vue js {{ message }}</h1>
    <h1>count : {{ count }}</h1>
    <button @click="count++">incrment</button>

    <button @click="isActive = !isAactive">show</button>

    <h1>user</h1>
    <ul>
      <li v-for="item in user" :key="item">{{ item }}</li>
    </ul> -->
    <transition name="moveInUp">
      <router-view :Products="Products" @fetchData="fetchData" />
    </transition>
  </header>
</template>

<script setup>
import Header from "./views/HeaderView.vue";

// export default {
//   data() {
//     return {
//       Products: [],
//     };
//   },
//   components: {
//     Header,
//   },
//   provide: {
//     username: "Mr Shoaib",
//   },

//   methods: {
//     async fetchData() {
//       fetch("https://fakestoreapi.com/products")
//         .then((res) => res.json())
//         .then((data) => {
//           this.Products = data;

//           console.log("this.products", this.Products);
//         })
//         .catch((err) => {
//           console.log("error", err.message);
//         });
//     },
//   },
//   mounted() {
//     console.log("appp  data", this.Products);
//     this.fetchData();
//   },
// };
</script>

<style>
.moveInUp-enter-active {
  opacity: 0;
  transition: opacity 1s ease-in;
}
.moveInUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.link {
  color: #fff;
  list-style-type: none;
  text-decoration: none;
}
::-webkit-scrollbar {
  display: none;
}
</style>



