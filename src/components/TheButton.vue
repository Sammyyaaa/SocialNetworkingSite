<template>
    <button
      @click="$emit('close')"
      class="button" 
      :class="{ primary: color === 'primary', reverse }"
      >
      <slot></slot>
      </button>
</template>

<script setup>
  defineEmits(["close"]);
  defineProps({
    color: {
        type: String,
        default: "reimary",
    },
    reverse: Boolean,
  });
</script>

<style scoped>
.button {
    border-radius: 8px;
    padding: 8px 24px;
    border: none;
    color: white;
    font-size: 14px;
    font-weight: 600;
    background: var(--ig-blue);
    cursor: pointer;
}
.button:hover {
  background: #1aa3ff;
}
.button.reverse {
  background: none;
  border: 1px solid var(--ig-border);
  color: var(--ig-text);
}
</style>