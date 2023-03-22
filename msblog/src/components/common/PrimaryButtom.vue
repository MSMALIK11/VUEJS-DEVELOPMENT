<template>
  <button @click="$emit('submit')">{{ title }}</button>
</template>


<script>
export default {
  name: "PrimaryButton",
  props: {
    title: String,
  },
};
</script>

<style>
button {
  display: block;
  padding: 5px 20px;
  background: linear-gradient(to left, #0bb1b1, #20ec05d3);
  border: none;
  outline: none;
  color: #fff;
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: 1px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 10px 0;
  transition: 0.3s;
  margin: 5px 10px;
}

button:hover {
  transform: scale(1.1);
}
</style>