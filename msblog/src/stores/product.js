import { ref, reactive, onMounted } from "vue";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("getProduct", {
  state: () => ({
    Products: [],
    cartItems: [],
  }),

  actions: {
    addToCart(product) {
      this.cartItems.push(product);
    },

    async fetchProducts() {
      this.Products = await fetch("https://dummyjson.com/products");
      console.log("data", this.Products);
    },
  },
});
