import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/sass/reset.scss';
import '@/assets/sass/globals.scss';
import routes from './routes';
import Antd from 'ant-design-vue';
import store from './store';

const app = createApp(App);
app.use(routes).use(Antd).use(store).mount('#app');