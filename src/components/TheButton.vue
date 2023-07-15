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
    padding: 10px 32px;
    border: none;
    color: white;
    font-size: 16px;
    background: #1da0ff;
}
.button.premary {
  background: #1da0ff;
}
.button.reverse {
  background: none;
  border: 1px solid #e8e8e8;
  color: initial;
}
</style>