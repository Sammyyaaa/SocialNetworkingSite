<template>
    <Teleport to="body">
        <div class="modal">
            <div class="backdrop" @click="$emit('close')"></div>
            <div class="modalContent">
                <slot></slot>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

defineEmits(["close"]);

onMounted(() => { document.body.style.overflow = 'hidden'; });
onUnmounted(() => { document.body.style.overflow = ''; });
</script>

<style scoped>
.modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  display: grid;
  place-items: center;
}
.backdrop {
  background: rgba(0, 0, 0, 0.65);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  cursor: pointer;
}
.modalContent {
  position: relative;
  background: var(--ig-white);
  border-radius: 4px;
  overflow: hidden;
}
</style>
