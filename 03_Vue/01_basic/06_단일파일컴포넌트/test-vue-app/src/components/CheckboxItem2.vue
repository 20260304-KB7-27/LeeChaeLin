<template>
  <li><input type="checkbox" :checked="checked" />{{ name }}</li>
</template>

<script setup>
// 유효성 검사
defineProps({
  id: [Number, String], // 문자열과 숫자형 타입체크
  name: {
    type: String,
    required: true, // 기본적으로 false
  },
  checked: {
    type: Boolean,
    default: true, // 기본값 설정
  },
});
</script>

<style lang="scss" scoped></style>
