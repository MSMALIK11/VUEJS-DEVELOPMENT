<template>
  <div class="cart-items">
    <div class="cart-left">
      <div class="cart-item-wraper">
        <div class="card cart" v-for="product in products" :key="product.id">
          <div class="cart-image">
            <img v-bind:src="product.image" alt="" />
          </div>
          <div class="cart-details">
            <h5 @click="goToDetails(product.id)" class="card-title">
              {{ product.title.slice(0, 20) }}
            </h5>

            <!-- <h2 class="product-title">title {{ product.title.slice(0, 20) }}</h2> -->
            <p class="cart-cat">Category {{ product.category }}</p>
            <p class="cart-price">
              Price <span>{{ product.price }}</span>
            </p>
            <div class="add-buy">
              <button>Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-right">
      <div class="price-details">price</div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "../stores/product";
export default {
  setup() {
    const store = useProductsStore();

    return { products: store.cartItems };
  },
};
</script>

<style  scoped>
.cart-items {
  display: flex;
  gap: 20px;
}
.cart-left {
  width: 60%;
}
.cart {
  display: flex;

  padding: 10px 20px;
  gap: 20px;
  border-bottom: 2px solid #ddd;
}
.cart-image {
  width: 200px;
  height: 150px;
}

.cart-image img {
  width: 100%;
  height: 100%;
}
.cart-item-wraper {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin: 20px;
  width: 80%;
  margin: 30px auto;
}
</style>