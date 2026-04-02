<template>
  <RouterLink
    v-for="member in members"
    :key="member.id"
    :to="{ name: 'members-nested/detail', params: { id: member.id } }"
    class="m-2"
    >{{ member.name }}</RouterLink
  >
  <!-- 자식 라우트 -->
  <!-- * MemberDefault.vue -->
  <!-- * MemberDetail.vue -->
  <RouterView></RouterView>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import members from '@/members.json';
</script>

<style scoped></style>
