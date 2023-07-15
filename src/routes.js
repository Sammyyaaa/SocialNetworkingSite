import HomePage from "./pages/HomePage.vue";
import SearchPage from "./pages/SearchPage.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import ProfileEdittingPage from "./pages/ProfileEdittingPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import { createRouter, createWebHistory } from "vue-router";

//-- 自訂義路由
const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/search_result",
        name: "search_result",
        component: SearchPage,
    },
    {
        path: "/profile",
        name: "profile",
        component: ProfilePage,
    },
    {
        path: "/profile/edit",
        name: "profileEdit",
        component: ProfileEdittingPage,
    },
    {
        path: "/login",
        name: "login",
        component: LoginPage,
    }
];

//-- 創建路由器實例
const router = createRouter({
    //-- 路由自定義配置
    routes: routes, 
    //--  HTML5 History API
    history: createWebHistory(), 
});

export { router };