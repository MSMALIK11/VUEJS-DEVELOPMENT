<template>
  <div class="model-wraper">
    <div class="modelheader">
      <h5>{{ title }}</h5>
      <!-- custom events  -->
      <span
        @click="
          $emit('close', 'this arg data you can  receive in parent coooennt')
        "
        >&times;</span
      >
    </div>
    {{ user.username }}
    {{ user.email }}
    <div class="model-body">
      <InputView
        name="username"
        placeText="enter username..."
        v-model="user.username"
        type="text"
      />
      <InputView name="email" placeText="enter email..." v-model="user.email" />
      <InputView
        name="password"
        placeText="enter password..."
        v-model="user.password"
      />
      <div class="submit-btn">
        <PrimaryButton title="Submit" @submit="handleSubmit" />
      </div>
    </div>
  </div>
</template>

<script>
import InputView from "./InputView.vue";
import PrimaryButton from "../components/common/PrimaryButtom.vue";
export default {
  name: "ModelView",
  data() {
    return {
      content: "",
      user: {
        username: "",
        email: "",
        password: "",
      },
    };
  },

  props: {
    title: String,
  },
  components: {
    InputView,
    PrimaryButton,
  },
  emits: ["close", "input"],

  methods: {
    async handleSubmit() {
      console.log("users data---", this.user.username);
      const URL = "https://lmsserver11.herokuapp.com";
      const data = this.user;
      try {
        const config = {
          crossorigin: true,
          mode: "no-cors",
          "Access-Control-Allow-Origin": "*",
        };
        const res = await fetch(
          `${URL}/signup`,
          { method: "POST" },
          config,
          data
        );
        console.log("respionse", res);
      } catch (error) {
        console.log("error---", error);
      }
    },
  },
};
</script>

<style scoped>
.model-wraper {
  width: 30vw;
  height: 300px;
  background: #000;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  padding: 10px 15px;
  border-left: 3px solid indigo;
  border-radius: 4px;
  z-index: 9999;
}
.modelheader {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 30px;
}
.modelheader span {
  background: #fff;
  width: 20px;
  height: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  opacity: 0;
  transition: 0.2s;
}

.model-wraper:hover span {
  opacity: 1;
}
.modelheader span:hover {
  color: red;
}
.model-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 15px;
  padding: 0 20px;
}
</style>