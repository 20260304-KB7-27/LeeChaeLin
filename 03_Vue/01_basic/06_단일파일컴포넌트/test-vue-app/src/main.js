import { createApp } from 'vue';
import App from './App.vue';
import App1 from './App1.vue';
import App2 from './App2.vue';
import App3 from './App3.vue';
import App4 from './App4.vue';
import CheckboxItem from './components/CheckboxItem.vue';

// 전역설정
// createApp(App).component('CheckboxItem', CheckboxItem).mount('#app');
createApp(App4).mount('#app');
