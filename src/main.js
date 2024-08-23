import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import translate from "./utils/translate";
import validation from "./utils/validation";

const app = createApp(App)

app.config.globalProperties.$t = translate

app.use(router).use(validation).mount("#app");
