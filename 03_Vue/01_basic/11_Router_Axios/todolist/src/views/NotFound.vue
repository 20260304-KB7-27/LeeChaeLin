<template>
  <h3>존재하지 않는 경로</h3>
  <p>요청경로: {{ route.path }}</p>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped></style>
