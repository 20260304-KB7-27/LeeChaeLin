<template>
  <h1>App</h1>
  <h2>App에서 보는 Counter: {{ counter.count }}</h2>
  <Counter />
  <Like />
</template>

<script setup>
import Counter from './components/Counter.vue';
import Like from './components/Like.vue';
import { useCounterStore } from './stores/counter';
import { useLikePersistStroe } from './stores/persist/persiste_like';

const counter = useCounterStore();
const like = useLikePersistStroe();
</script>

<style scoped></style>
