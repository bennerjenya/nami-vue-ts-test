<template>
  <div class="container__item container__big">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :body="post.body"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ActionTypes } from "../types/action-types";
import PostPreview from "./PostPreview.vue";

const store = useStore();
const posts = computed(() => store.getters.getPosts);

store.dispatch(ActionTypes.FETCH_POSTS);
</script>

<style scoped lang="scss">
.container {
  &__big {
    padding: 8px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 4px;
    @media (min-width: 1280px) {
      grid-column: 2 / 5;
      min-height: calc(100vh - 108px);
      grid-template-columns: repeat(5, 1fr);
    }
  }
}
</style>
