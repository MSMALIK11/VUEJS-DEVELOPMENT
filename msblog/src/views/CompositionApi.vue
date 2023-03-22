<template>
  <div class="main">
    <h1>Composition Api Testing :</h1>
    <div class="test">
      <form @submit.prevent="addItem">
        <input v-model="item" type="text" />
        <button type="submit">Add</button>
      </form>

      <ul>
        <h1>Itms</h1>
        <li v-for="val in store.myTask">
          {{ val.item }} <span @click="deleteItem(val.id)">&times;</span>
          <span @click="toggleCompleted(val.id)">&#10004;</span>
        </li>
      </ul>

      <!-- <BaseLayout>
        <template #namedSlot>
          <h1>Named slot</h1>
        </template>
        <template #secondarySlot>
          <h1>secondary</h1>
        </template>
      </BaseLayout> -->

      <!-- <BaseLayout v-slot="{ title }">
        <h1>slot props : {{ title }}</h1>
      </BaseLayout> -->
      <!--named scoped slot -->
      <!-- <BaseLayout>
        <template v-slot:header="headerProps">
          <h1>named scoped slot with props</h1>
          <h1>props data : {{ headerProps.title }}</h1>
        </template>
      </BaseLayout> -->

      <!-- inheritence props  -->

      <BaseLayout class="btn" @click="handleAlert" />
    </div>
  </div>
</template>

<script setup>
import { useMyTaskStore } from "../stores/task.js";
import { ref } from "vue";
import BaseLayout from "./BaseLayout.vue";

const item = ref("");
const btn = ref("btn");

const store = useMyTaskStore();
const { toggleCompleted } = store;

function addItem() {
  // invoke  function in  store
  store.addMyTask(item);
}

function deleteItem(itemId) {
  store.deleteMyTask(itemId);
}
const handleAlert = () => {
  alert("runningg");
};
</script>

<style  scoped>
.main {
  height: 70vh;
  background: papayawhip;
}
.completed {
  text-decoration: line-through;
}
</style>