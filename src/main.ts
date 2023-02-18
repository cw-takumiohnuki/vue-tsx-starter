import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './index.css';

import App from './App';

import './assets/main.css';

const app = createApp(App);

app.use(createPinia());

app.mount('#app');
