<template>
  <article class="post">
    <p class="post__title">{{ title }}</p>
    <p class="post__body">{{ body }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  body: string;
}>();
</script>

<style scoped lang="scss">
.post {
  background: #FFFFFF;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  p {
    margin: 0;
  }
  &__title {
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
  }
  &__body {
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
