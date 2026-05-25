<template>
  <template v-if="$route.name != 'login'">
    <header class="header">
      <NavBar />
    </header>
    <TheLayout>
      <router-view></router-view>
    </TheLayout>
  </template>
  <template v-else>
    <router-view></router-view>
  </template>
  <!-- 為登入頁面時，增加動態 class="inside"  -->
  <footer v-if="$route.name !== 'login'" class="footer">
    &copy; 2023 SamYen. All rights reserved.
  </footer>
</template>

<script setup>
import "./assets/base.css";
import TheIcon from "./components/TheIcon.vue";
import NavBar from "./components/NavBar.vue";
import TheLayout from "./components/TheLayout.vue";
</script>

<style scoped>
.header {
  height: 54px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--ig-white);
  border-bottom: 1px solid var(--ig-border);
}
.footer {
  text-align: center;
  padding: 16px 0;
  color: var(--ig-secondary);
  font-size: 12px;
}
</style>
