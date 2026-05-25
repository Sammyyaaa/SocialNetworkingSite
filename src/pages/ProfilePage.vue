<template>
  <div class="profilePage">
    <!-- 上半部分：頭像 + 個人資料 -->
    <div class="profileContainer">
      <TheAvatar :src="mineImage" :width="150" :height="150" class="profile-avatar" />
      <!-- 個人資料 -->
      <div class="profile">
        <!-- 用戶名 + 編輯按鈕 -->
        <div class="profile-top">
          <span class="username">{{ mine.name }}</span>
          <router-link to="/profile/edit" class="editBtn">編輯個人資料</router-link>
        </div>
        <!-- Stats：貼文 / 粉絲 / 追蹤 -->
        <div class="stats">
          <span><strong>10</strong> 貼文</span>
          <span><strong>128</strong> 粉絲</span>
          <span><strong>96</strong> 追蹤中</span>
        </div>
        <!-- 簡介 -->
        <div class="bio">
          <p>保持好奇心，持續學習，永不停止探索生命的奇蹟</p>
          <a href="https://github.com/Sammyyaaa" target="_blank" class="website-link">github.com/Sammyyaaa</a>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        class="tab"
        :class="{ active: index === currentTab }"
        :key="index"
        @click="currentTab = index"
      >
        <TheIcon :icon="tab.icon" />
        <span>{{ tab.label }}</span>
      </div>
    </div>

    <!-- Tab 內容：圖片網格 -->
    <div class="tabContent">
      <div class="posts">
        <img
          v-for="(post, index) in myPosts[currentTab]"
          :key="index"
          :src="post.postImage || post"
          alt=""
          class="postImage"
        />
      </div>
    </div>
  </div>
  <PostUpload v-if="showPostUpload" />
</template>

<script setup>
import TheIcon from '../components/TheIcon.vue';
import TheAvatar from '../components/TheAvatar.vue';
import PostUpload from '../components/PostUpload.vue';
import { computed, ref, watch, reactive } from "vue";
import { useStore } from "vuex";
import mineImage from '../assets/photo/0.jpg';

const store = useStore();
const mine = store.state.comment.mine;
const showPostUpload = computed(() => store.state.showPostUpload);

const likePosts = store.state.comment.users.filter((post) => post.favoriteState === true);
const favorites = store.state.comment.users.filter((post) => post.likeState === true);
const minePosts = store.state.comment.mine.postImages || [];

const tabs = ref([
  { label: "貼文", icon: "posts" },
  { label: "喜愛", icon: "like" },
  { label: "收藏", icon: "favorite" },
]);

const currentTab = ref(0);

const myPosts = reactive({ 0: [], 1: [], 2: [] });

watch(currentTab, () => {
  switch (currentTab.value) {
    case 0:
      if (myPosts[0].length === 0) myPosts[0] = minePosts;
      break;
    case 1:
      if (myPosts[1].length === 0) myPosts[1] = favorites;
      break;
    case 2:
      if (myPosts[2].length === 0) myPosts[2] = likePosts;
      break;
  }
}, { immediate: true });
</script>

<style scoped>
.profilePage {
  max-width: 935px;
  margin: 0 auto;
  padding: 30px 20px 0;
}

.profileContainer {
  display: flex;
  align-items: flex-start;
  gap: 80px;
  padding-bottom: 40px;
}

.profile {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
}

.profile-top {
  display: flex;
  align-items: center;
  gap: 20px;
}

.username {
  font-size: 20px;
  font-weight: 400;
  color: var(--ig-text);
}

.editBtn {
  border: 1px solid var(--ig-border);
  border-radius: 8px;
  padding: 6px 24px;
  font-size: 14px;
  font-weight: 600;
  color: var(--ig-text);
  background: none;
  text-decoration: none;
  cursor: pointer;
}

.editBtn:hover {
  background: var(--ig-bg);
}

.stats {
  display: flex;
  gap: 40px;
  font-size: 16px;
  color: var(--ig-text);
}

.stats span strong {
  font-weight: 600;
}

.bio {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
}

.website-link {
  color: #00376b;
  font-weight: 600;
  font-size: 14px;
}

/* Tabs */
.tabs {
  border-top: 1px solid var(--ig-border);
  display: flex;
  justify-content: center;
  gap: 60px;
}

.tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 0;
  cursor: pointer;
  border-top: 1px solid transparent;
  margin-top: -1px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--ig-secondary);
}

.tab > :deep(svg) {
  width: 20px;
  height: 20px;
  stroke: var(--ig-secondary);
  fill: var(--ig-secondary);
}

.tab.active {
  border-top-color: var(--ig-text);
  color: var(--ig-text);
}

.tab.active > :deep(svg) {
  stroke: var(--ig-text);
  fill: var(--ig-text);
}

/* 圖片網格 */
.tabContent {
  margin-top: 4px;
}

.posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}

.postImage {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  background: #EFEFEF;
  cursor: pointer;
}
</style>
