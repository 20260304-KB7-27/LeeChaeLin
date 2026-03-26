<template>
  <ul>
    <SongLIstItem
      v-for="song in songs"
      :key="song.id"
      :song="song"
    ></SongLIstItem>
  </ul>

  <div>체크된 곡 수: {{ doneCount }}</div>
</template>

<script setup>
import { inject } from 'vue';
import SongLIstItem from './SongLIstItem.vue';

const props = defineProps(['songs']);

// 반응형 값을 (computed)을 전달 받음
const doneCount = inject('doneCount');
</script>

<style scoped></style>
