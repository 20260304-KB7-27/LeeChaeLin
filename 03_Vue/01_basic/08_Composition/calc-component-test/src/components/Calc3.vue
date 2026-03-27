<template>
  <div>
    X : <input type="text" v-model.number="x" /><br />
    Y : <input type="text" v-model.number="y" /><br />
    <button @click="calcAdd">계산</button>
    <div>결과 {{ result }}</div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';

export default {
  name: 'Calc3',
  setup() {
    // 객체를 반응형으로 전환
    const state = reactive({ x: 10, y: 20, result: 30 });

    const calcAdd = () => {
      state.result = state.x + state.y;
    };

    // reactive()
    // - 객체 전용 반응형 API (Object, Array, Map, Set)
    // - 속성에 직접 접근 (state.[속성명])
    // - Proxy로 반응형 주입

    // ref()
    // - 모든 타입 가능 (원시값도 포함 num...)
    // - .value로 접근 ([반응형데이터명].value)
    // - Wrapper 형태로 반응형 객체로 감싸 반응형을 주입함 

    // toRefs: reactive 객체의 각 속성을 개별 ref로 반환
    return { ...toRefs(state), calcAdd };
  },
};
</script>

<style scoped></style>
