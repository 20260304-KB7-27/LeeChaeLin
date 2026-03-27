<template>
  <li>
    <span
      @click="onToggle(todoitem.id)"
      :style="{
        textDecoration: todoitem.completed ? 'line-through' : none,
        cursor: 'pointer',
      }"
    >
      {{ todoitem.todo }} {{ todoitem.completed ? '[완료]' : '' }}
    </span>
    <button :style="{ cursor: 'pointer' }" @click="onDelete(todoitem.id)">
      삭제
    </button>
  </li>
</template>

<script setup>
import { inject } from 'vue';

const props = defineProps({
  todoitem: Object,
});

const onToggle = inject('toggleCompleted');
const onDelete = inject('deleteTodo');
</script>

<style scoped></style>
