import { defineComponent } from 'vue';
import chart from '../../assets/icons/chart.svg';
import s from './Welcome.module.scss';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';

export const Third = defineComponent({
  setup(props, ctx) {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img src={chart} />,
          title: () => (
            <h2>
              数据可视化
              <br />
              收支一目了然
            </h2>
          ),
          buttons: () => (
            <>
              <RouterLink to="/2" class={s.fake}>
                下一页
              </RouterLink>
              <RouterLink to="/welcome/4">下一页</RouterLink>
              <RouterLink to="/start">跳过</RouterLink>
            </>
          ),
        }}
      </WelcomeLayout>
    );
  },
});
