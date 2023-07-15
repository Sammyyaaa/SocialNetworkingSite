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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
}
</style>
