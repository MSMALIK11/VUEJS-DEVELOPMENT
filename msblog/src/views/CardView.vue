<template>
  <div class="product-wraper">
    <h1 v-if="loading">Loading....</h1>

    <div class="card" v-else v-for="product in products" :key="product.id">
      <div class="product-image">
        <img v-bind:src="product.image" alt="" />
      </div>

      <h5 @click="goToDetails(product.id)" class="card-title">
        {{ product.title.slice(0, 20) }}
      </h5>

      <!-- <h2 class="product-title">title {{ product.title.slice(0, 20) }}</h2> -->
      <p class="product-cat">Category {{ product.category }}</p>
      <p class="product-price">
        Price <span>{{ product.price }}</span>
      </p>
      <div class="add-buy">
        <button @click="addToCart(product)">Add to cart</button>
        <button>Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "../stores/product";
export default {
  name: "CardView",
  // props: {
  //   name: String,
  //   rating: {
  //     type: Number,
  //     required: true,
  //     default: "No Rating Found",
  //   },
  // },
  data() {
    return {
      products: [],
      Newproducts: [],
      cartItems: [],
      loading: true,
    };
  },

  setup() {
    const store = useProductsStore();
    console.log("store", store);

    const addToCart = (product) => {
      store.cartItems.push(product);
    };

    return { addToCart };
  },
  props: ["Products"],
  methods: {
    // addToCart: function (item) {
    //   this.cartItems = [...this.cartItems, item];
    //   console.log("item--", this.cartItems);
    // },
    goToDetails(pId) {
      this.$router.push({ name: "ShowDetails", params: { id: pId } });
    },
  },
  inject: ["username"],

  mounted() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.products = json;
        this.loading = false;
      })
      .catch(() => {
        this.loading = true;
      });
    this.Newproducts = this.Products;
  },
};
</script>

<style scoped>
.product-wraper {
  display: flex;

  gap: 20px;
  justify-content: space-evenly;
  flex-wrap: wrap;

  background: papayawhip;
  width: 100%;
}

.card {
  text-align: center;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 340px;
  height: 430px;
  padding: 20px 20px;
  margin: 20px;
  border-radius: 20px;
  border-bottom: 5px solid orange;
  overflow: hidden;
  transition: transform 400ms ease-in;
}
.card h5 {
  color: #222;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  margin-top: 30px;

  cursor: pointer;
}

.product-image {
  width: 100%;
  height: 200px;
}
.product-image img {
  width: 100%;
  height: 100%;
}
.product-title {
  color: #222;
  text-transform: capitalize;
  letter-spacing: 1.2px;
  font-weight: bold;
}
.product-cat {
  color: #ccc;
}

.product-price {
  color: #ccc;
}
.product-price span {
  color: #222;
  font-weight: bold;
  margin-left: 20px;
}
.product-wraper button {
  border: none;
  background: indigo;
  color: #fff;
  border-radius: 10px;
  outline: none;
  padding: 10px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

.add-buy {
  display: flex;
  gap: 20px;
}

.add-buy button:nth-last-of-type(1) {
  background: orange;
}
.card:hover img {
  transform: scale(1.2);
  transition: all 0.4s;
}

button:active {
  transform: scale(0.9);
}
</style>
