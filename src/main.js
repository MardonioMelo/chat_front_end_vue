import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; //este incluir o bootstrap e o Popper
import "../src/assets/css/style.css"
createApp(App).use(router).mount('#app')
