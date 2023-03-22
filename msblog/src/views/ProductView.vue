<template>
  <div class="productWraper">
    <!-- <div class="product" v-for="items in product" :key="items.title">
      <h3>{{ items.title }}</h3>
      <h4>{{ items.price }}</h4>
    </div> -->
    <!--
    <pre>

{{ JSON.stringify(formValues) }}
</pre -->
    >

    <!-- <input type="text" placeholder="Search here " v-model="formValues.name" />

    <input type="text" placeholder="Search here " v-model="formValues.email" />

    <select name="" id="" v-model="formValues.country">
      <option value="india">india</option>
      <option value="Dubai">Dubai</option>
      <option value="Caneda">Caneda</option>
    </select>

    <div class="location">
      <h4>Location</h4>
      <select name="" id="" multiple v-model="formValues.location">
        <option value="india">india</option>
        <option value="Dubai">Dubai</option>
        <option value="Caneda">Caneda</option>
      </select>
    </div>

    <div class="remotework">
      <h4>open to remote work</h4>
      <input
        type="checkbox"
        v-model="formValues.remoteWork"
        true-value="yes"
        false-value="No"
      />
    </div>

    <div class="skillSet">
      <h1>Skill</h1>
      <div class="flex">
        <label for="html"> html</label>
        <input
          type="checkbox"
          id="html"
          value="html"
          v-model="formValues.skillSet"
        />
        <label for="css"> css</label>
        <input
          type="checkbox"
          id="css"
          value="css"
          v-model="formValues.skillSet"
        />
        <label for="react"> React.Js</label>
        <input
          type="checkbox"
          id="react"
          value="react"
          v-model="formValues.skillSet"
        />
      </div>
    </div> -->

    <!-- show product  -->
    <!-- <h1>cart item{{ cartItems.length }}</h1> -->

    <CardView @handleCart="handleEvent" />
  </div>
</template>



<script>
import CardView from "./CardView.vue";

export default {
  components: { CardView },
  name: "ProductView",
  data() {
    return {
      formValues: {
        name: "",
        email: "",
        country: "",
        location: [],
        remoteWork: false,
        skillSet: [],
      },
      product: [],
      cartItems: [],
    };
  },
  methods: {
    handleEvent(data) {
      this.cartItems.push(data);
      console.log("cartitems", this.cartItems);
      alert("run");
    },
  },
};
</script>

<style scoped>
.productWraper {
  background: #eee;

  gap: 20px;

  height: 70vh;

  padding: 30px;
}

input {
  padding: 10px;
}

.product {
  background: #fff;
  display: block;
  height: 100px;
}

.remotework {
  display: flex;
}

.flex {
  display: flex;
  align-content: center;
  gap: 20px;
}
</style>