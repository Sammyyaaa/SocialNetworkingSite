<template>
    <div class="postActions">
        <!-- like icon -->
        <TheIcon 
          icon="like" 
          :fill="users.likeState ? 'red' : 'none'" 
          :stroke="users.likeState ? 'red' : '#000000'"
          @click="emit('likeChange')"
         />
        <span>{{ users.like }}</span>
        <!-- comment icon -->
        <TheIcon 
          icon="comment" 
          fill="none" 
          stroke="#000000"
         />
        <span>{{ users.response.length }}</span>
        <!-- favorite icon -->
        <TheIcon 
          icon="favorite" 
          :fill="users.favoriteState ? 'gold' : 'none'" 
          :stroke="users.favoriteState ? 'gold' : '#000000'"
          @click="emit('favoriteChange')"
        />
        <span>{{ users.favorite }}</span>
    </div>
</template>

<script setup>
import TheIcon from './TheIcon.vue';
import { useStore } from 'vuex';
import { computed} from 'vue';
const store = useStore();
const props = defineProps(['users']);
const users = props.users;

const emit = defineEmits([
  "likeChange",
  "favoriteChange",
]);
</script>

<style>
.postActions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  column-gap: 16px;
  row-gap: 4px;
}

.postActions > svg {
  width: 32px;
  height: 32px;
  grid-row: 1/2;
  cursor: pointer;
}

.postActions>span {
  font-size: 14px;
}

</style>