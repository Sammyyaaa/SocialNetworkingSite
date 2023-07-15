<template>
  <!-- 掛載至 body 的談窗容器 -->
  <TheModal @close="store.commit('changeShowPostDetails', false)">
    <!-- 貼文詳情 -->
    <div class="postDetails">
      <img class="postImage" :src="users.postImage" alt="">
      <div class="postMeta">
        <div class="author">
          <TheAvatar :src="userPhoto(userId)"/>
          <span>{{ users.name }}</span>
        </div>
        <!-- 貼文訊息 -->
        <pre class="postDesc">
{{ users.postText }}
        </pre>
        <!-- 評論區塊: 滾動條 -->
        <div class="comments">
          <!-- 單個評論 -->
          <div class="comment" 
            v-for="n in users.response.length" 
            :key="n">
            <TheAvatar :src="userPhoto(users.response[n-1].id)" />
            <span class="user">{{ users.response[n-1].name }}</span>
            <!-- <span class="commentDate">1d</span> -->
            <p class="commentContent">{{ users.response[n-1].ReplyText }}</p>
          </div>
        </div>
        <!-- 評論、like、收藏 -->
        <div class="actions">
          <PostActions 
            :users="users"
            @likeChange="$store.commit('likeChange', userId)"
            @favoriteChange="$store.commit('favoriteChange', userId)"
          />
          <!-- 發布時間 -->
          <span class="postPubDate">{{ users.time }}h</span>
          <!-- 評論框 -->
          <input
            v-model="replyText" 
            type="text" 
            name="comment" 
            id="" 
            class="commentInput" 
            placeholder="寫一則評論吧!" />
          <button 
            class="commentPubBtn"
            @click="addReplyText"
          >
            發送
          </button>
        </div>
      </div>
    </div>
  </TheModal>
</template>

<script setup>
import PostActions from "./PostActions.vue";
import TheAvatar from "./TheAvatar.vue";
import TheModal from "./TheModal.vue"
import { useStore } from "vuex";
import { computed, ref } from "vue";
const store = useStore();
const replyText = ref("");
const userId = store.state.id;
const users = computed(() => store.state.comment.users[userId-1]);

function userPhoto(n){
    return `src/assets/photo/${n}.jpg`;
};

//-- 新增評論
const addReplyText = () => {
  store.commit("addComment", { 
    userId: userId, 
    replyText: replyText});
  replyText.value = "";
};

</script>

<style scoped>
.postDetails {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 300px);
  grid-template-rows: minmax(0, 1fr);
  width: 80vw;
  height: 80vh;
}
.postImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.postMeta {
  padding: 24px;
  padding-top: 36px;
  display: grid;
  align-items: start;
  grid-template-rows: max-content max-content 1fr max-content;
  max-height: 100%;
  height: 100%;
}

.author {
  display: flex;
  align-items: center;
  gap: 10px;
}
.postDesc {
  width: 100%;
  white-space: pre-wrap;
  margin-top: 24px;
}
.comments {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-gap: 28px;
  align-items: start;
  overflow-y: auto;
  height: 100%;
}
.comment {
  display: grid;
  grid-template-areas:
    "avatar name date"
    "comment comment comment";
  grid-template-columns: 34px 1fr 1fr;
  align-items: center;
  column-gap: 10px;
  row-gap: 14px;
}
.commentDate {
  grid-area: date;
  justify-self: end;
  color: #a7a7a7;
}
.commentContent {
  grid-area: comment;
}

.actions {
  border-top: 1px solid #eaeaea;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  margin: 20px -24px 0px -24px;
  padding: 20px 24px 0 24px;
  row-gap: 16px;
}

.postActions > :deep(svg) {
  transform: scale(0.8125);
}
.postPubDate {
  color: #9f9f9f;
  grid-column: 2 / 6;
  justify-self: end;
  font-size: 14px;
}
.commentInput {
  background: #f7f7f7;
  border-radius: 16px;
  border: none;
  grid-column: 1 / 4;
}
.commentInput::placeholder {
  color: #b9b9b9;
  border: none;
}
.commentPubBtn {
  color: #1da0ff;
  border: none;
  background: none;
  font-size: 16px;
  margin-left: 20px;
  grid-column: 4 / 6;
}
</style>