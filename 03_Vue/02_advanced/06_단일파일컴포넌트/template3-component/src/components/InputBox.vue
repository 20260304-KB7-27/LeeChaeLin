<template>
  <div class="inputBox">
    <input type="text" placeholder="새 제목" v-model.trim="title" />
    <input type="text" placeholder="새 내용" v-model.trim="content" />
    <button @click="addContent">작성</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const content = ref('');
const emit = defineEmits(['add']);
const no = ref(11);

const addContent = () => {
  if (!title.value || !content.value) return;

  emit('add', {
    no: no.value++,
    title: title.value,
    content: content.value,
  });
  title.value = '';
  content.value = '';
};
</script>

<style lang="scss" scoped></style>
