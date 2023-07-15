<template>
    <!-- 貼文的容器 -->
    <div class="postItem" @click="userIdUpdate">
        <img @click="PostDetails()" :src="users.postImage" alt="" width="100%" height="100%" style="background: #eee; /">
        <!-- 發布訊息 -->
        <div class="postInfo">
            <div class="postMeta">
                <TheAvatar :src="userPhoto()" />
                <span class="postName">{{ users.name }}</span>
                <span class="postPubDate">{{ users.time}} 小時前發布</span>
                <PostActions 
                  :users="users"
                  @likeChange="$store.commit('likeChange', userId)"
                  @favoriteChange="$store.commit('favoriteChange', userId)"
                />
            </div>
            <!-- 貼文描述 -->
            <div class="postDesc">
                <p>
                  {{ users.postText }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import TheAvatar from "../components/TheAvatar.vue";
import PostActions from "../components/PostActions.vue";
import { useStore } from "vuex";
import { computed, provide } from "vue";
const props = defineProps(["userId"]);
const store = useStore();
provide('userId', props.id);
//-- 使用者
const users = computed(() => store.state.comment.users[props.userId-1]);
const userId = users.value.id
const photo = computed(() => users.value.photo);

function userPhoto(){
    return `src/assets/photo/${userId}.jpg`;
};

//-- 顯示貼文彈跳視窗 + userId 傳遞
function PostDetails() {
  store.commit("changeShowPostDetails", {
    show: true, 
    userId:props.userId});
};
</script>

<style scoped>
.postItem {
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s;
}
.postItem:hover{
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  transform: scale(1);
  overflow: hidden;
  transition: all 0.4s;
}

.postInfo {
  padding: 24px;
  z-index: 999;
}

.postItem > img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  background: #eee;
  cursor: pointer;
}

.postMeta {
  display: grid;
  grid-template-areas:
    "avatar name actions"
    "pubDate pubDate actions";
  grid-template-columns: 42px 1fr 3fr;
  row-gap: 6px;
}
.postMeta .avatar {
  grid-area: avatar;
}
.postMeta .postName {
  margin-top: 10px;
}

.postMeta .postPubDate {
  grid-area: pubDate;
  color: #9f9f9f;
  font-size: 14px;
  margin-left: 3px;
}

.postActions {
  grid-area: actions;
  justify-self: end;
}

.postDesc {
  margin-top: 28px;
  white-space: pre-line;
}
</style>
