import { createApp } from 'vue';
import { App } from './App';
import { routes } from './config/router';
import { history } from './utils/history';
import { createRouter } from 'vue-router';

const router = createRouter({
  history,
  routes,
});

const app = createApp(App);
app.use(router);

app.mount('#app');
