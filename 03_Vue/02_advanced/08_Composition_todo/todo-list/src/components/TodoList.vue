<template>
  <ul>
    <TodoListItem
      v-for="todoitem in todolist"
      :key="todoitem.id"
      :todoitem="todoitem"
    />
  </ul>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';

const props = defineProps({
  todolist: Array,
});
</script>

<style scoped></style>
