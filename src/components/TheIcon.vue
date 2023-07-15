<template>
    <svg>
        <use :href="`${sprite}#icon-${icon}`"></use>
    </svg>
</template>

<script setup>
    //-- 使用動態屬性時，不能直接使用圖片路徑，需要使用 import 導入
    import sprite from "../assets/icons/sprite.svg"; 
    // console.log(sprite); //-- /src/assets/icons/sprite.svg
    defineProps({
        icon: String,
    });
</script>