<template>
    <!-- 預設為 defaultAvatar.png -->
    <img :src="src || defaultAvatar" class="avatar" />
</template>

<script setup>
import defaultAvatar from "../assets/avatarDefault.png";
    defineProps({
        src: String,
        width: {
            type: Number,
            default: 34
        },
        height: {
            type: Number,
            default: 34
        },
    });
</script>

<style scoped>
.avatar {
  /* 綁定屬性 width: {...}  */
  width: v-bind(width + "px");
  /* 綁定屬性 height: {...}  */
  height: v-bind(height + "px");
  border-radius: 50%;
  background: #eee;
  object-fit: cover;
  object-position: top center;
}
</style>