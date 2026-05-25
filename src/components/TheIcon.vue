<template>
    <svg :viewBox="iconViewBox">
        <use :href="`${sprite}#icon-${icon}`"></use>
    </svg>
</template>

<script setup>
import sprite from "../assets/icons/sprite.svg";
import { computed } from "vue";

const props = defineProps({ icon: String });

const viewBoxMap = {
    'home':         '0 0 38 38',
    'publish':      '0 0 38 38',
    'like':         '0 0 32 32',
    'comment':      '0 0 32 32',
    'favorite':     '0 0 32 32',
    'posts':        '0 0 32 32',
    'close':        '0 0 53 53',
    'search':       '0 0 20 20',
    'upload-image': '0 0 254 310',
};

const iconViewBox = computed(() => viewBoxMap[props.icon] ?? '0 0 32 32');
</script>
