<template>
  <div class="inputWraper">
    <input type="text" name="" id="" placeholder="Type Coment here..." />
    <v-btn class="mx-2 send-btn" fab dark small color="teal">
      <v-icon dark> mdi-send </v-icon>
    </v-btn>
  </div>
</template>

<script>
</script>

<style  scoped>
.inputWraper {
  background: #111;
  display: flex;
  width: 415px;
  position: relative;
}
input {
  display: block;
  padding: 10px;

  outline: none;
  color: #ccc;
  font-weight: bold;
  letter-spacing: 0.4px;
  width: 75%;
}
.send-btn {
  display: flex;
  position: absolute;
  right: 5px;
}
</style>