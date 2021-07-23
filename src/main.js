import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//CSS
import "bootstrap/dist/css/bootstrap.min.css"
import "../src/assets/css/tema.min.css"
import "../src/assets/css/style.css"
//JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createApp(App).use(router).mount('#app')
