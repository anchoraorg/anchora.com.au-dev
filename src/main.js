import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import "@/assets/scss/main.scss";

//Plugins
import "@/plugins/bootstrap";

createApp(App).use(router).mount("#app");
