import { RouteRecordRaw } from 'vue-router';
import { Welcome } from '../pages/Welcome';
import { First } from '../components/welcome/First';
import { Second } from '../components/welcome/Second';
import { Third } from '../components/welcome/Third';
import { Four } from '../components/welcome/Four';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
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
