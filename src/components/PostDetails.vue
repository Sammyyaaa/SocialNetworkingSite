<template>
  <TheModal @close="store.commit('changeShowPostDetails', false)">
    <div class="postDetails">
      <!-- 左側：貼文圖片 -->
      <img class="postImage" :src="users.postImage" alt="">
      <!-- 右側：資訊欄 -->
      <div class="postMeta">
        <!-- Header：頭像 + 用戶名 + 關閉按鈕 -->
        <div class="modal-header">
          <TheAvatar :src="userPhoto(userId)" :width="32" :height="32" />
          <span class="author-name">{{ users.name }}</span>
          <button class="close-btn" @click="store.commit('changeShowPostDetails', false)">
            <TheIcon icon="close" />
          </button>
        </div>
        <!-- 評論區（可捲動）：caption + 留言列表 -->
        <div class="comments">
          <!-- Caption -->
          <div class="comment">
            <TheAvatar :src="userPhoto(userId)" :width="32" :height="32" />
            <div class="comment-body">
              <span class="comment-username">{{ users.name }}</span>
              <span class="comment-text">{{ users.postText }}</span>
            </div>
          </div>
          <!-- 留言列表 -->
          <div class="comment"
            v-for="(reply, index) in users.response"
            :key="index">
            <TheAvatar :src="userPhoto(reply.id)" :width="32" :height="32" />
            <div class="comment-body">
              <span class="comment-username">{{ reply.name }}</span>
              <span class="comment-text">{{ reply.ReplyText }}</span>
            </div>
          </div>
        </div>
        <!-- 底部：操作 + 評論輸入 -->
        <div class="actions">
          <!-- 操作按鈕列 -->
          <div class="actions-row">
            <div class="actions-left">
              <TheIcon
                icon="like"
                :fill="users.likeState ? '#ED4956' : 'none'"
                :stroke="users.likeState ? '#ED4956' : '#262626'"
                @click="$store.commit('likeChange', userId)"
                class="action-icon"
              />
              <TheIcon
                icon="comment"
                :fill="hasMyComment ? '#0095F6' : 'none'"
                :stroke="hasMyComment ? '#0095F6' : '#262626'"
                class="action-icon"
              />
            </div>
            <TheIcon
              icon="favorite"
              :fill="users.favoriteState ? 'gold' : 'none'"
              :stroke="users.favoriteState ? 'gold' : '#262626'"
              @click="$store.commit('favoriteChange', userId)"
              class="action-icon"
            />
          </div>
          <!-- 讚數 -->
          <div class="likes-count">
            <strong>{{ users.like }} 個讚</strong>
          </div>
          <!-- 發布時間 -->
          <div class="pub-date">{{ users.time }}小時前</div>
          <!-- 評論輸入 -->
          <div class="comment-input-row">
            <input
              v-model="replyText"
              type="text"
              class="commentInput"
              placeholder="新增評論..."
              @keyup.enter="addReplyText"
            />
            <button
              class="commentPubBtn"
              :disabled="!replyText"
              @click="addReplyText"
            >發佈</button>
          </div>
        </div>
      </div>
    </div>
  </TheModal>
</template>

<script setup>
import TheAvatar from "./TheAvatar.vue";
import TheIcon from "./TheIcon.vue";
import TheModal from "./TheModal.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";

const store = useStore();
const replyText = ref("");
const userId = store.state.id;
const users = computed(() => store.state.comment.users[userId - 1]);
const hasMyComment = computed(() =>
    users.value.response.some(r => r.id === store.state.comment.mine.id)
);

function userPhoto(n) {
    return `${import.meta.env.BASE_URL}photo/${n}.jpg`;
}

const addReplyText = () => {
    if (!replyText.value) return;
    store.commit("addComment", {
        userId: userId,
        replyText: replyText
    });
    replyText.value = "";
};
</script>

<style scoped>
.postDetails {
    display: grid;
    grid-template-columns: 1fr minmax(0, 335px);
    width: 935px;
    max-width: 90vw;
    height: 600px;
    max-height: 90vh;
}

.postImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.postMeta {
    border-left: 1px solid var(--ig-border);
    display: grid;
    grid-template-rows: 60px 1fr auto;
    max-height: 100%;
    overflow: hidden;
    background: #FFFFFF;
}

.modal-header {
    height: 60px;
    padding: 0 16px;
    border-bottom: 1px solid var(--ig-border);
    display: flex;
    align-items: center;
    gap: 12px;
}

.author-name {
    font-weight: 600;
    font-size: 14px;
    flex: 1;
}

.close-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    color: var(--ig-text);
}

.close-btn :deep(svg) {
    width: 18px;
    height: 18px;
    stroke: var(--ig-text);
    fill: var(--ig-text);
}

.comments {
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.comment {
    display: flex;
    gap: 12px;
    align-items: flex-start;
}

.comment-body {
    font-size: 14px;
    line-height: 1.5;
    flex: 1;
}

.comment-username {
    font-weight: 600;
    margin-right: 6px;
}

.comment-text {
    color: var(--ig-text);
    white-space: pre-wrap;
}

.actions {
    border-top: 1px solid var(--ig-border);
    padding: 8px 16px 12px;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.actions-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.actions-left {
    display: flex;
    gap: 12px;
}

.action-icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.likes-count {
    font-size: 14px;
}

.pub-date {
    font-size: 10px;
    color: var(--ig-secondary);
    text-transform: uppercase;
    letter-spacing: 0.02em;
}

.comment-input-row {
    display: flex;
    align-items: center;
    border-top: 1px solid var(--ig-border);
    padding-top: 8px;
    gap: 8px;
}

.commentInput {
    flex: 1;
    border: 1px solid var(--ig-border);
    border-radius: 20px;
    background: #FAFAFA;
    font-size: 14px;
    padding: 8px 14px;
    color: #262626;
}

.commentInput::placeholder {
    color: var(--ig-secondary);
}

.commentPubBtn {
    background: none;
    border: none;
    color: var(--ig-blue);
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    padding: 0;
}

.commentPubBtn:disabled {
    opacity: 0.4;
    cursor: default;
}
</style>
