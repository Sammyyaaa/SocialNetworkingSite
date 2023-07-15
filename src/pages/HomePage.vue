<template>
    <div>
        <!-- 整體貼文的容器 -->
        <PostList>
            <!-- 貼文的容器 -->
            <PostItem class="postItem" v-for="n in users.length" :key="n" :userId="n" />
        </PostList>
        <PostDetails v-if="showPostDetails"/>
        <PostUpload v-if="showPostUpload"/>
    </div>
</template>

<script setup>
import PostDetails from "../components/PostDetails.vue";
import PostList from "../components/PostList.vue";
import PostItem from "../components/PostItem.vue";
import PostUpload from "../components/PostUpload.vue";
import { computed } from "vue"; 
import { useStore } from "vuex"; 
const store = useStore();
//-- 使用者
const users = computed(() => store.state.comment.users);
//-- 顯示上傳檔案彈出視窗
const showPostUpload = computed(() => store.state.showPostUpload);
//-- 顯示貼文彈出視窗
const showPostDetails = computed(() => store.state.showPostDetails);
</script>

<style scoped></style>
