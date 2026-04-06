// import axios from 'axios';
import axios from '@/utils/axios';
import { ref } from 'vue';

// 컴포저블 함수
// 훈련생 데이터를 관리하는 함수
export const useStudents = () => {
  const students = ref([]);

  // 전제 조회
  const fetchAllStudents = async () => {
    // const res = await axios.get('/api/students');
    
    // baseUrl 설정으로 /api 안써도됨
    const res = await axios.get('/students');
    students.value = res.data;
  };

  // 추가
  // 조회, 삭제 등

  return { fetchAllStudents, students };
};
