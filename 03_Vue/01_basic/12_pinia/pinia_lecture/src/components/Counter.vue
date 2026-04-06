<template>
  <h3>반응형: {{ couter.count }}</h3>
  <h3>값만: {{ count }}</h3>
  <button @click="increment">증가</button>
  <button @click="reset">리셋</button>
</template>

<script setup>
// import { useCounterStore } from '@/stores/counter';
import { useCounterPersistStroe } from '@/stores/persist/persisit_counter';

const couter = useCounterPersistStroe(); // 객체 자체를 꺼내서 쓰는 방식
// state를 꺼낼때는 구조분해 할당을 하게되면, 반응형이 꺠진다
const { count, increment, reset } = useCounterPersistStroe(); // 구조분해할당으로 꺼내는 방식, 값만 복사(반응형X)
</script>

<style scoped></style>
