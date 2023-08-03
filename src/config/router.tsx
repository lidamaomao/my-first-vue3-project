import { Foo } from '../pages/Foo';
import { Bar } from '../pages/Bar';
import { RouteRecordRaw } from 'vue-router';
import { Welcome } from '../pages/Welcome';
import { First } from '../components/welcome/first';
import { Second } from '../components/welcome/second';
import { Third } from '../components/welcome/third';
import { Four } from '../components/welcome/four';

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Foo },
  { path: '/bar', component: Bar },
  {
    path: '/welcome',
    component: Welcome,
    children: [
      {
        path: '1',
        component: First,
      },
      {
        path: '2',
        component: Second,
      },
      {
        path: '3',
        component: Third,
      },
      {
        path: '4',
        component: Four,
      },
    ],
  },
];
