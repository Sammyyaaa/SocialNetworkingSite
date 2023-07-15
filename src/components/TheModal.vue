<template>
    <!-- 掛載到 body 結束之前 -->
    <Teleport to="body">
        <!-- 彈跳視窗容器 -->
        <div class="modal">
            <!-- 背景遮罩 -->
            <div class="backdrop"></div>
            <!-- 談窗內容 -->
            <div class="modalContent">
                <button class="closeBtn" @click="$emit('close')"><TheIcon icon="close" /></button>
                <!-- 貼文詳情 -->
                <slot></slot>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import TheIcon from "../components/TheIcon.vue";

defineEmits(["close"]);
</script>

<style scoped>
.modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
}
.backdrop {
  background: rgba(0, 0, 0, 0.56);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.modalContent {
  position: relative;
  background: white;
  border-radius: 52px;
  overflow: hidden;
}
.closeBtn {
  position: absolute;
  background: none;
  border: none;
  right: 14px;
  top: 10px;
}
.closeBtn svg {
  width: 54px;
  height: 54px;
}
</style>