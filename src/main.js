import "./assets/main.css";

import App from "./App.vue";
import router from "./router";

import { createApp } from "vue";
import { createPinia } from "pinia";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "./config/firebase";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(vuetify);
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});

app.mount("#app");
