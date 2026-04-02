<template>
  <div>
    <button @click="requestAxios">axios 버튼</button>
  </div>
</template>

<script setup>
import axios from 'axios';

// const url = '/api/todos';
const url = 'http://localhost:3000/todos';

const data = {
  todo: '윗몸 일으키기',
  desc: '너무 빠르지 않게...',
};

// const requestAxios = () => {
//   axios.post(url, data).then((response) => {
//     // console.log(`[axios]응답객체`, response);
//     console.log(`[axios]응답객체`, response.data);
//   });
// };

// async / await 적용
const requestAxios = async () => {
  const response = await axios.post(url, data);
  console.log('응답 데이터: ', response);
};
</script>

<style scoped></style>
