<template>
    <!-- 整體貼文的容器 -->
    <div class="postList">
        <!-- 貼文的容器 -->
        <slot></slot>
    </div>
</template>
<script setup>
import TheAvatar from "../components/TheAvatar.vue";
import PostActions from "../components/PostActions.vue";
</script>

<style scoped>
.postList {
    display: flex;
    flex-direction: column;
    max-width: 470px;
    margin: 16px auto 0;
    width: 100%;
}
</style>
