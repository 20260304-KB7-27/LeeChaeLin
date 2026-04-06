import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// Pinia
// Vue3에서 사용하는 상태 관리 라이브러리
// 전역 상태(반응형 데이터)를 관리 할 수 있다.

// 1. state -> 데이터
// 2. getters -> 계산된 값
// 3. actions -> 함수(비즈니스 로직) API 요청, satte 변경하는 함수 등
export const useCounterPersistStroe = defineStore(
  'counter',
  () => {
    // state
    const count = ref(0);

    // actions
    function increment() {
      count.value++;
    }

    function reset() {
      count.value = 0;
      localStorage.setItem('local-count', 0);
    }

    return { count, increment, reset };
  },
  {
    persist: true, //localstorage에 자동 저장 / 복언
  },
);
