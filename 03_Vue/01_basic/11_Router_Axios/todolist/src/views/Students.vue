<template>
  <h2>KB - 27회차 훈련생들</h2>

  <div v-for="student in students" :key="student.id">
    <StudentCard :student="student"></StudentCard>
  </div>
</template>

<script setup>
import { useStudents } from '@/api/Students';
import { onMounted } from 'vue';
import StudentCard from '@/components/StudentCard.vue';

const { fetchAllStudents, students } = useStudents();

onMounted(() => {
  fetchAllStudents();
});
</script>

<style scoped></style>
