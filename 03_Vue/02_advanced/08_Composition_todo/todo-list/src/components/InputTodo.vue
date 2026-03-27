<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @keyup.enter="addTodo"
  />
  <button @click="addTodo">추가</button>
</template>

<script setup>
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue', 'add']);

const addTodo = () => {
  if (props.modelValue.trim() === '') return;

  emit('add', {
    id: new Date().getTime(),
    todo: props.modelValue,
    completed: false,
  });

  emit('update:modelValue', '');
};
</script>

<style scoped></style>
