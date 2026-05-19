import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import { createApp } from "vue";

import "@/styles/main.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import { Theme } from "./theme";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(ToastService);
app.use(PrimeVue, {
  theme: {
    preset: Theme,
    options: {
      darkModeSelector: ".theme",
    },
  },
});

app.mount("#app");
