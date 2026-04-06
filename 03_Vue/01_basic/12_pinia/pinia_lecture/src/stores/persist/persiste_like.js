import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useLikePersistStroe = defineStore(
  'like-persist',
  () => {
    // state
    const like = ref(0);

    // actions
    function toggleLike() {
      like.value++;
    }

    // getter
    // 여러 컴포넌트에서 사용하는(공유되는) 계산 값
    const fivetime = computed(() => like.value * 5);

    return { like, toggleLike, fivetime };
  },
  {
    persist: {
      key: 'like-p', // storage에 저장될 key이름(기본값 store id)
      storage: sessionStorage, // 기본값: localStorage
      pick: ['like'],  // 저장하고싶은 상태값 지정 가능
    },
  },
);
