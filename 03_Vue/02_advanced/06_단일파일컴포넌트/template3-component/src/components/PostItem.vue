<template>
  <li class="post-item" @click="$emit('open', post.no)">
    <div class="wrap">
      <h2>{{ post.no }}. {{ post.title }}</h2>
      <span class="arrow">{{ selectNo === post.no ? '▲' : '▼' }}</span>
    </div>

    <div
      v-if="selectNo === post.no && editNo !== post.no"
      class="post-content"
      @click.stop
    >
      <p>{{ post.content }}</p>
      <button @click="$emit('startEdit', post)">수정</button>
      <button @click="$emit('delete', post.no)">삭제</button>
      <button class="btn-cancel" @click="$emit('open', null)">닫기</button>
    </div>

    <div v-if="editNo === post.no" class="updateBox" @click.stop>
      <div class="updateWrap">
        <input type="text" v-model="editTitle" />
        <textarea v-model="editContent" rows="3"></textarea>
      </div>
      <button class="btn-save" @click="handleSave">저장</button>
      <button class="btn-cancel" @click="$emit('startEdit', { no: null })">
        취소
      </button>
    </div>
  </li>
</template>

<script setup>
import { ref, watch } from 'vue';
const props = defineProps(['post', 'selectNo', 'editNo']);
const emit = defineEmits(['open', 'delete', 'startEdit', 'saveEdit']);

const editTitle = ref('');
const editContent = ref('');

watch(
  () => props.editNo,
  (newVal) => {
    if (newVal === props.post.no) {
      editTitle.value = props.post.title;
      editContent.value = props.post.content;
    }
  },
  { immediate: true },
);

const handleSave = () => {
  emit('saveEdit', {
    no: props.post.no,
    title: editTitle.value,
    content: editContent.value,
  });
};
</script>
