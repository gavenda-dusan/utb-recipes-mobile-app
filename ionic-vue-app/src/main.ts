import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { IonicVue } from '@modus/ionic-vue'

const app = createApp(App)
  .use(IonicVue)
  .use(router);

  IonicVue.isReady().then(() => app.mount('#app'));