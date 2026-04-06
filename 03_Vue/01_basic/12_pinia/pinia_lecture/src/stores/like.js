import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useLikeStroe = defineStore('like', () => {
  // const like = ref(false);

  // // actions
  // function toggleLike() {
  //   like.value = !like.value;
  // }

  // state
  const like = ref(Number(sessionStorage.getItem('like-session') || 0));

  // actions
  function toggleLike() {
    like.value++;

    // sessionStorage
    // 현재 '탭'에서만 유지 됨(임시 데이터, 일회성 상태)
    sessionStorage.setItem('like-session', like.value);
  }

  // getter
  // 여러 컴포넌트에서 사용하는(공유되는) 계산 값
  const fivetime = computed(() => like.value * 5);

  return { like, toggleLike, fivetime };
});
