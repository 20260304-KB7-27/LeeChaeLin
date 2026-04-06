<!-- <template>
  <h3 v-if="like.like">❤️</h3>
  <button @click="toggleLike">좋아요</button>
</template> -->
<template>
  <h3>{{ like.like }}</h3>
  <h2>5개씩 불려서 좋아요보기 {{ like.fivetime }}</h2>
  <button @click="toggleLike">좋아요</button>
</template>

<script setup>
// import { useLikeStroe } from '@/stores/like';
import { useLikePersistStroe } from '@/stores/persist/persiste_like';

const like = useLikePersistStroe(); // 객체 자체를 꺼내서 쓰는 방식
// state를 꺼낼때는 구조분해 할당을 하게되면, 반응형이 꺠진다
const { toggleLike } = useLikePersistStroe(); // 구조분해할당으로 꺼내는 방식, 값만 복사(반응형X)
</script>

<style scoped></style>
