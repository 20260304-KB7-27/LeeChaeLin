<template>
  <div>
    <h2>App Component</h2>
    <br />
    <ul>
      <!-- 객체형태로 전달 -->
      <CheckboxItem
        v-for="idol in idols"
        :key="idol.id"
        :name="idol.name"
        :checked="idol.checked"
      />
    </ul>
  </div>
</template>

<script setup>
import CheckboxItem from './components/CheckboxItem2.vue';
import { ref } from 'vue';

const idols = ref([
  { id: 1, name: 'BTS', checked: true },
  { id: 2, name: 'Black Pink', checked: false },
  { id: 3, name: 'EXO', checked: false },
  { id: 4, name: 'ITZY', checked: false },
  { id: 5, name: '', checked: false },
  { id: 6, name: 'NCT' },
]);
</script>

<style lang="scss" scoped></style>
