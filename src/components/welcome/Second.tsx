import { defineComponent } from 'vue';
import clock from '../../assets/icons/clock.svg';
import s from './Welcome.module.scss';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';

export const Second = defineComponent({
  setup(props, ctx) {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img src={clock} />,
          title: () => (
            <h2>
              每日提醒
              <br />
              不会遗漏每一笔账单
            </h2>
          ),
          buttons: () => (
            <>
              <RouterLink to="/2" class={s.fake}>
                下一页
              </RouterLink>
              <RouterLink to="/welcome/3">下一页</RouterLink>
              <RouterLink to="/start">跳过</RouterLink>
            </>
          ),
        }}
      </WelcomeLayout>
    );
  },
});
