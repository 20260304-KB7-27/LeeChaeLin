<template>
  <h1>Members</h1>

  <div v-for="member in members" :key="member.id">
    <RouterLink :to="{ name: 'members/id', params: { id: member.id } }">
      <img :src="member.photo" style="width: 90px; height: 110px" alt="" />
      <h6>{{ member.name }}</h6>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import members from '@/members.json';
</script>

<style scoped></style>
