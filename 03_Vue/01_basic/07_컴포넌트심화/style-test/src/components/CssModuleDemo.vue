<template>
  <h2>3. CSS 모듈</h2>

  <!-- CSS 모듈을 객체처럼 사용한다. -->
  <div :class="sytle.box">CSS 모듈이 적용된 박스입니다.</div>
  <div>style: {{ style }}</div>
</template>

<script setup>
import { useCssModule } from 'vue';

// coomposition 방식 -> useCssModuel()로 $style 객체를 꺼내옴
const sytle = useCssModule();
</script>

<style module>
/* 
moduel
- CSS 모듈은 클래스명 자체를 고유하게 바꾼다

 */
.box {
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: pink;
  border: 2px solid yellow;
}
</style>
