<template>
  <input
    type="text"
    :value="modelValue"
    placeholder="Enrer..."
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "InputView",
  props: {
    modelValue: String,
    placeText: String,
    type: String,
  },
  methods: {},
};
</script>

<style scoped>
input {
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 7px 10px;
  border-left: 3px solid indigo;
  border-radius: 10px;
  width: 100%;
  outline: none;
  background: #111;
  color: #eee;
}
::placeholder {
  text-transform: capitalize;
  font-weight: bold;
  color: #ddd;
}
</style>
  

