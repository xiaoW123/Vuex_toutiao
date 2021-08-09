import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/index.css' //引入样式

createApp(App).use(store).use(router).mount('#app')
