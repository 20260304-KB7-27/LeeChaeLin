<template>
  <div>
    <h2>App Component</h2>
    <hr />
    <InputName @name-change="nameChangeHandlere" />
    <h3>App Data: {{ parentName }}</h3>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputName from './components/InputName.vue';

// 1. 자식컴포넌트에서 이벤트 발생 (이벤트 이름: change-name
// 2. 부모 컴포넌트에서 이벤트 감지 (@name-change) -> 이때 데이터를 전달 받을 수 있음
// 3. 부모 컴포넌트의 이벤트 핸들러 동작 (nameChangeHandlere)
const parentName = ref('기본값');
const nameChangeHandlere = (e) => {
  parentName.value = e.name;
};
</script>

<style lang="scss" scoped></style>
