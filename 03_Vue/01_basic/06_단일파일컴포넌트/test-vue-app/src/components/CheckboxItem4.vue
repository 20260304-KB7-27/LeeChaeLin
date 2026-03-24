<template>
  <li><input type="checkbox" :checked="idol.checked" />{{ idol.name }}</li>
</template>

<script setup>
// 유효성 검사
defineProps({
  idol: {
    type: {
      type: Object,
      required: true,

      // Vue 공식기능
      // 부모가 Props를 전달할때마다 함수가 호출된다.
      // 반환되는 값이 false => 콘솔에 경고 출력
      validator: (value) => {
        (typeof value.id === 'number' || typeof value.id === 'string') &&
          typeof value.name === 'string' &&
          typeof value.checked === 'boolean';
      },
    },
  },
});
</script>

<style lang="scss" scoped></style>
