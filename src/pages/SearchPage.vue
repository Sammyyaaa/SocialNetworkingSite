<template>
    <!-- 頁面容器 -->
    <div>
        <h2 class="title">搜尋結果: 植物</h2>
        <!-- 整體貼文的容器 -->
        <PostList>
            <!-- 貼文的容器 -->
            <PostItem class="postItem" v-for="n in 10" />
        </PostList>
        <!-- 彈出視窗 -->
        <!-- <PostDetails /> -->
        <!-- 上傳文件視窗 -->
        <!-- <PostUpload /> -->
    </div>
</template><script setup>
import PostList from "../components/PostList.vue";
import PostItem from "../components/PostItem.vue";
</script>

<style scoped>
  .title {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 44px;
  }
</style>
