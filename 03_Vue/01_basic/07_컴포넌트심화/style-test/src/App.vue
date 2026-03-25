<script setup>
import CssModuleDemo from './components/CssModuleDemo.vue';
import GlobalCssDemo from './components/GlobalCssDemo.vue';
import ScopedCssDemo from './components/ScopedCssDemo.vue';
</script>

<template>
  <div class="container">
    <h1>Vue CSS 스타일 방법</h1>

    <!-- 전역 CSS -->
    <GlobalCssDemo />

    <!-- Scoped CSS -->
    <ScopedCssDemo />

    <!--  -->
    <CssModuleDemo />
  </div>
</template>

<!-- 전역 -->
<!-- App.vue의 <style>: 전역처럼 동작함 -->
<!-- main.css와 역할을 구분하기위해 주로 앱의 레이아웃 구성 -->
<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
}
</style>

<!-- <style scoped></style> -->
