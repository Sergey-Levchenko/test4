import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/reset.scss";
import "./assets/styles/main.scss";
import "./assets/styles/transitions.scss";
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
