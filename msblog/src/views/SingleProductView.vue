<template>
  <div class="details-wraper">
    <v-btn icon="mdi-heart" color="primary"></v-btn>
    <div class="left-image">
      <img :src="Products.image" alt="" />
    </div>

    <div class="right-details">
      <p>
        Category
        <span class="cat">{{ Products.category }}</span>
      </p>
      <h1>{{ Products.title }}</h1>
      <p>{{ Products.description }}</p>

      <p class="price"><span>price </span> ${{ Math.ceil(Products.price) }}</p>

      <div class="actionbutton">
        <Primarybutton title="Add To Cart" />
        <Primarybutton title="Add To Wishlist" />
      </div>
    </div>
  </div>
</template>


<script>
import Primarybutton from "../components/common/PrimaryButtom.vue";

export default {
  components: {
    Primarybutton,
  },
  data() {
    return {
      id: "",
      Products: [],
    };
  },
  methods: {
    fetchData() {
      fetch(`https://fakestoreapi.com/products/${this.id}`)
        .then((res) => res.json())
        .then((data) => {
          this.Products = data;
          console.log(this.Products);
        })
        .catch((err) => {
          console.log("eror", err.message);
        });
    },
  },

  mounted() {
    this.id = this.$route.params.id;
    this.fetchData();
  },
};
</script>


<style  scoped>
.details-wraper {
  margin-top: 20px;
  background: #fff;
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 30px 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 90%;
  margin: 0 auto;
}
.details-wraper .left-image {
  backdrop-filter: #dddd;
}
.details-wraper .left-image img {
  width: 300px;
}

.price {
  font-size: 20px;
  text-transform: capitalize;
}
.price span {
  font-weight: bold;
  letter-spacing: 2px;
  color: #222;
}

.cat {
  background: aqua;
  padding: 5px 10px;
  text-transform: capitalize;
  color: indigo;
  font-weight: bold;
  letter-spacing: 1px;
  border-radius: 5px;
}
.actionbutton {
  display: flex;
  gap: 20px;
}
</style>
