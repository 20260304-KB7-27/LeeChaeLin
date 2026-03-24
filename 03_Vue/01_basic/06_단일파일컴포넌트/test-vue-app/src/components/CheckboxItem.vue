<template>
  <li><input type="checkbox" v-model="checked" />옵션</li>
</template>

<script setup>
import { ref } from 'vue';

// setup을 사용하지 않았을때
// export default {
//   name: 'CheckBoxItem',
//   setup() {
//     const checked = ref(false);

//     return { checked };
//   },
// };

// setup 사용할때
const checked = ref(false);
</script>

<style lang="scss" scoped></style>
