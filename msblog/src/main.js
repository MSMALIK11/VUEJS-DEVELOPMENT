import { createApp } from "vue";
import { createPinia } from "pinia";
import "@mdi/font/css/materialdesignicons.css";

import "./assets/main.css";

import App from "./App.vue";
import router from "./router";
// Vuetify
import "vuetify/styles";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  iconfont: "mdi",
});

const app = createApp(App);
app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount("#app");
