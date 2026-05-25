<template>
    <div class="searchPage">
        <div class="searchFeed">
            <PostItem
              v-for="user in filteredUsers"
              :key="user.id"
              :userId="user.id"
            />
        </div>
        <p v-if="filteredUsers.length === 0" class="no-result">
          找不到「{{ route.query.q }}」的相關貼文
        </p>
    </div>
    <PostDetails v-if="showPostDetails" />
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute } from "vue-router";
import PostItem from "../components/PostItem.vue";
import PostDetails from "../components/PostDetails.vue";

const store = useStore();
const route = useRoute();
const showPostDetails = computed(() => store.state.showPostDetails);

const filteredUsers = computed(() => {
  const q = (route.query.q || '').toLowerCase().trim();
  if (!q) return store.state.comment.users;
  return store.state.comment.users.filter(u =>
    u.name.toLowerCase().includes(q) ||
    u.postText.toLowerCase().includes(q)
  );
});
</script>

<style scoped>
.searchPage {
    max-width: 935px;
    margin: 0 auto;
    padding: 20px;
}

.searchFeed {
    display: flex;
    flex-direction: column;
    max-width: 470px;
    margin: 0 auto;
    width: 100%;
}

.no-result {
    text-align: center;
    color: var(--ig-secondary);
    padding: 40px 0;
    font-size: 14px;
}
</style>
