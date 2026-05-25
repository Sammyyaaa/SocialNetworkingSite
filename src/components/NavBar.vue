<template>
    <nav class="navbar">
        <router-link to="/"><span class="logo-text">Framio</span></router-link>
        <!-- 左側搜尋框 -->
        <div class="searchInput">
            <input type="text" v-model="searchQuery" placeholder="搜尋..." />
            <TheIcon icon="search" />
        </div>
        <!-- 右側主頁 -->
        <div class="navItems">
            <router-link to="/"><TheIcon icon="home" /></router-link>
            <button @click="publishPost()"><TheIcon icon="publish" /></button>
            <!-- 下拉選單 -->
            <div class="profileDropDown">
              <router-link to="/profile">
                <TheAvatar :src="mine" :width="42" :height="42" style="cursor: pointer;" />
              </router-link>
                <!-- 彈出下拉選單 -->
                <!-- <div class="dropdownMenu">
                    <ul class="profileMenu">
                        <li><router-link to="/profile">個人主頁</router-link></li>
                        <li>退出登入</li>
                    </ul>
                </div> -->
            </div>
        </div>
    </nav>
</template>

<script setup>
import TheAvatar from "./TheAvatar.vue";
import TheIcon from "./TheIcon.vue";
import { useStore } from "vuex";
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import mine from '../assets/photo/0.jpg';

const store = useStore();
const router = useRouter();
const route = useRoute();
const searchQuery = ref('');
let debounceTimer = null;

watch(searchQuery, (val) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    router.push({ name: 'search_result', query: { q: val.trim() } });
  }, 1000);
});

watch(() => route.name, (name) => {
  if (name !== 'search_result') {
    clearTimeout(debounceTimer);
    searchQuery.value = '';
  }
});

function publishPost() {
  store.commit("changeShowPostUpload", true);
};
</script>

<style scoped>
.navbar {
  max-width: 935px;
  height: 54px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 16px;
}

.navbar svg {
  width: 24px;
  height: 24px;
}

.logo-text {
  font-family: 'Dancing Script', cursive;
  font-size: 28px;
  font-weight: 700;
  color: var(--ig-text);
  letter-spacing: -0.5px;
  white-space: nowrap;
}

.searchInput {
  position: relative;
  max-width: 268px;
  margin: 0 auto;
  width: 100%;
}

.searchInput input {
  width: 100%;
  padding: 8px 12px 8px 36px;
  background: #EFEFEF;
  border-radius: 8px;
  border: 1px solid var(--ig-border);
  font-size: 14px;
  color: var(--ig-text);
}

.searchInput input::placeholder {
  color: var(--ig-secondary);
}

.searchInput > svg {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--ig-secondary);
}

.navItems {
  justify-self: end;
  display: flex;
  gap: 16px;
  align-items: center;
}

.navItems > button {
  border: none;
  background: none;
  padding: 0;
  display: flex;
  align-items: center;
}

.profileDropDown {
  position: relative;
}
</style>
