<template>
  <h1>TodoList</h1>
  <InputTodo v-model="inputValue" @add="addTodo" />
  <div v-if="todolist.length > 0">
    <TodoList :todolist="todolist" />
  </div>
  <div v-else>할 일을 추가하세요!</div>
</template>

<script setup>
import InputTodo from './components/InputTodo.vue';
import { ref, provide } from 'vue';
import TodoList from './components/TodoList.vue';

const todolist = ref([]);

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
