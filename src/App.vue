<script setup lang="ts">
import ContentHolder from './components/ContentHolder.vue';
</script>

<template>
  <div class="container">
    <div class="container__toggle">
      <input type="checkbox" id="toggle" class="container__item container__toggle">
      <label for="toggle">8</label>
    </div>
    <div class="container__holder">
      <div class="container__item">1</div>
      <div class="container__item container__item--hidden">2</div>
      <div class="container__item container__item--hidden">3</div>
      <div class="container__item container__item--hidden">4</div>
    </div>
    <div class="container__item container__space">5</div>
    <ContentHolder />
    <div class="container__item container__last container__space">7</div>
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>
