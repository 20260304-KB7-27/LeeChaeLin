<template>
  <teleport to="#modal">
    <Modal v-if="isModal"></Modal>
  </teleport>

  <!-- teleport: 컴포넌트의 일부 HTML을 컴포넌트가 위치한곳이 아닌 다른 DOM 위치로 렌더링 -->
  <!-- - 컴포넌트 계층: App 자식으로 남아있음 -->
  <!-- - 실제 DOM 렌더링 위치: to 속성에 정의한 요소 안으로 이동 -->

  <div>
    <h2>Teleport 테스트</h2>
    <hr />

    <button @click="openModal">모달 열기</button>
  </div>
</template>

<script setup>
import Modal from './components/Modal.vue';
import { ref } from 'vue';

const isModal = ref(false);

const openModal = () => {
  isModal.value = true;
};
</script>

<style scoped></style>
