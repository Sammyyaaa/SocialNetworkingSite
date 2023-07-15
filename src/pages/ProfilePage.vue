<template>
  <div>
    <!-- 上半部分 -->
    <div class="profileContainer">
      <TheAvatar :src="mineImage" :width="186" :height="186" />
      <!-- 個人資料 -->
      <div class="profile">
        <p class="name">
          <span>{{ mine.name }}</span>
          <router-link to="/profile/edit">編輯個人資料</router-link>
        </p>
        <!-- 使用者名稱 -->
        <p class="handle">@Sam_Yen</p>
        <!-- 簡介 -->
        <div class="description">
          <pre>
保持好奇心，持續學習，永不停止探索生命的奇蹟
                    </pre>
        </div>
        <!-- 連結網站 -->
        <p class="website">GitHub:</p>
        <a href="https://github.com/Sammyyaaa">https://github.com</a>
      </div>
    </div>
    <div class="tabs">
      <!-- 當前展示，樣式為藍色 -->
      <div v-for="(tab, index) in tabs" class="tab" :class="{ active: index === currentTab }" :key="index"
        @click="currentTab = index">
        <TheIcon :icon="tab.icon" />
        <p>{{ tab.label }}</p>
      </div>
    </div>
    <div class="tabContent">
      <p>{{ myPosts[currentTab].length }}</p>
      <div class="posts">
        <img v-for="post in myPosts[currentTab]" :src="post.postImage" alt="" class="postImage"  />
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
//-- like 文章
const likePosts = store.state.comment.users.filter((likePost) => 
  likePost.favoriteState === true );
//-- favorite 文章
const favorites = store.state.comment.users.filter((favorite) => 
  favorite.likeState === true );

  const tabs = ref([
  {
    label: "Posts",
    icon: "posts",
  },
  {
    label: "Like",
    icon: "like",
  },
  {
    label: "Favorite",
    icon: "favorite",
  },
]);
//-- 選擇中的 tab
const currentTab = ref(0);

const myPosts = reactive({
  0: [],
  1: [],
  2: [],
})

watch(currentTab, async () => {
  switch (currentTab.value) {
    case 0:
      if (myPosts[0].length === 0) {
        myPosts[0] = minepostImage
      }
      break;
    case 1:
      if (myPosts[1].length === 0) {
        myPosts[1] = favorites;
      }
      break;
    case 2:
      if (myPosts[2].length === 0) {
        myPosts[2] = likePosts;
      }
      break;
  }
}, { immediate: true });
</script>

<style scoped>
.profileContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10vw;
}

.avatar {
  justify-self: end;
}

.profile .name {
  display: flex;
  align-items: center;
}

.profile .name>span {
  font-size: 26px;
}

.profile .name>a {
  color: #1da0ff;
  text-decoration: none;
  margin-left: 26px;
}

.profile .handle {
  margin-top: 4px;
  color: #848484;
}

.profile .description {
  margin-top: 26px;
  margin-bottom: 22px;
}

.tabs {
  display: grid;
  grid-template-columns: repeat(3, 88px);
  column-gap: 4vw;
  justify-content: center;

  margin-top: 7vmin;
  margin-bottom: 20px;
}

.tab {
  text-align: center;
  padding: 12px 0;
  cursor: pointer;
}

.tab>svg {
  width: 32px;
  height: 32px;
  stroke: #8a9194;
  fill: #8a9194;
}

.tab.active {
  background: #f6f9fb;
  border-radius: 18px;
}

.tab.active>svg {
  stroke: #1787d9;
  fill: #1787d9;
}

.tab.active>p {
  color: #1787d9;
}

.tabContent>p {
  text-align: center;
  font-weight: 600;
  margin-bottom: 32px;
}

.posts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}

.postImage {
  width: 100%;
  height: 321px;
  background: #eee;
  object-fit: cover;
}
</style>