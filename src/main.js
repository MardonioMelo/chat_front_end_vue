import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//CSS
import "bootstrap/dist/css/bootstrap.min.css"
import "../src/assets/css/style.css"
import "../src/assets/css/swipe.min.css"
//JS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; //este incluir o bootstrap e o Popper
//import "../src/assets/js/swipe.min.js"


createApp(App).use(router).mount('#app')
