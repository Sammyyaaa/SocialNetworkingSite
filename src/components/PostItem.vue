<template>
    <div class="postItem">
        <!-- IG 風格 Header：頭像 + 用戶名 + 時間 -->
        <div class="post-header">
            <TheAvatar :src="userPhoto()" :width="32" :height="32" />
            <span class="post-username">{{ users.name }}</span>
            <span class="post-time">{{ users.time }}小時前</span>
        </div>
        <!-- 全寬方形圖片 -->
        <div class="post-image" @dblclick="$store.commit('likeChange', userId)">
            <img :src="users.postImage" alt="" />
        </div>
        <!-- 操作列：讚、評論在左；收藏在右 -->
        <div class="post-actions-row">
            <div class="post-actions-left">
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
                  @click="openPostDetails"
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
        <div class="post-likes">
            <strong>{{ users.like }} 個讚</strong>
        </div>
        <!-- 貼文說明 -->
        <div class="post-caption">
            <strong class="post-caption-name">{{ users.name }}</strong>
            {{ users.postText }}
        </div>
        <!-- 查看評論 -->
        <div v-if="users.response.length > 0" class="post-comments-link" @click="openPostDetails">
            查看所有 {{ users.response.length }} 則評論
        </div>
        <!-- 發布時間 -->
        <div class="post-pubdate">{{ users.time }} 小時前</div>
    </div>
</template>

<script setup>
import TheAvatar from "../components/TheAvatar.vue";
import TheIcon from "../components/TheIcon.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const props = defineProps(["userId"]);
const store = useStore();

const users = computed(() => store.state.comment.users[props.userId - 1]);
const userId = users.value.id;
const hasMyComment = computed(() =>
    users.value.response.some(r => r.id === store.state.comment.mine.id)
);

function userPhoto() {
    return `src/assets/photo/${userId}.jpg`;
}

function openPostDetails() {
    store.commit("changeId", props.userId);
    store.commit("changeShowPostDetails", {
        show: true,
        userId: props.userId
    });
}
</script>

<style scoped>
.postItem {
    background: var(--ig-white);
    border-bottom: 1px solid var(--ig-border);
    padding-bottom: 12px;
    margin-bottom: 4px;
}

.post-header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 12px 8px;
}

.post-username {
    font-weight: 600;
    font-size: 14px;
    color: var(--ig-text);
    flex: 1;
}

.post-time {
    font-size: 12px;
    color: var(--ig-secondary);
}

.post-image {
    width: 100%;
}

.post-image img {
    width: 100%;
    max-height: 470px;
    object-fit: cover;
    display: block;
    background: #EFEFEF;
}

.post-actions-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px 4px;
}

.post-actions-left {
    display: flex;
    gap: 12px;
}

.action-icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.post-likes {
    padding: 0 12px 4px;
    font-size: 14px;
}

.post-caption {
    padding: 0 12px 4px;
    font-size: 14px;
    line-height: 1.5;
    white-space: pre-line;
}

.post-caption-name {
    margin-right: 4px;
}

.post-comments-link {
    padding: 0 12px 2px;
    font-size: 14px;
    color: var(--ig-secondary);
    cursor: pointer;
}

.post-comments-link:hover {
    color: var(--ig-text);
}

.post-pubdate {
    padding: 2px 12px 0;
    font-size: 10px;
    color: var(--ig-secondary);
    text-transform: uppercase;
    letter-spacing: 0.02em;
}
</style>
