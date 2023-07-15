import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes';
import { store } from "./store/index";

//-- 將 APP 設為根組件
const app = createApp(App); 

//-- 全局路由
app.use(router); 
//-- vuex store
app.use(store);

//-- 掛載至 HTML #app 上
app.mount('#app'); 
