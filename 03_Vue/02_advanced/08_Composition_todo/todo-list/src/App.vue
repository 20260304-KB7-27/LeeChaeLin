<template>
  <h1>TodoList</h1>
  <InputTodo v-model="inputValue" @add="addTodo" />
  <TodoList :todolist="todolist" />
</template>

<script setup>
import InputTodo from './components/InputTodo.vue';
import { computed, ref, provide } from 'vue';
import TodoList from './components/TodoList.vue';

let ts = new Date();

const todolist = ref([
  { id: ts, todo: '자전거 타기', completed: false },
  { id: ts + 1, todo: '딸과 공원 산책', completed: true },
  { id: ts + 2, todo: '일요일 애견 카페', completed: false },
  { id: ts + 3, todo: 'Vue 원고 집필', completed: false },
]);

const inputValue = ref('');

const addTodo = (newTodo) => {
  todolist.value.push(newTodo);
};

const toggleCompleted = (id) => {
  let index = todolist.value.findIndex((item) => item.id === id);
  todolist.value[index].completed = !todolist.value[index].completed;
};

provide('toggleCompleted', toggleCompleted);

const deleteTodo = (id) => {
  let index = todolist.value.findIndex((item) => item.id === id);
  todolist.value.splice(index, 1);
};

provide('deleteTodo', deleteTodo);
</script>

<style scoped></style>
