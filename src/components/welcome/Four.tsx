import { defineComponent } from 'vue';
import cloud from '../../assets/icons/cloud.svg';
import s from './Welcome.module.scss';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';

export const Four = defineComponent({
  setup(props, ctx) {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img src={cloud} />,
          title: () => (
            <h2>
              云备份
              <br />
              再也不怕数据丢失
            </h2>
          ),
          buttons: () => (
            <>
              <RouterLink to="/2" class={s.fake}>
                下一页
              </RouterLink>
              <RouterLink to="/start">完成</RouterLink>
              <RouterLink to="/start" class={s.fake}>
                完成
              </RouterLink>
            </>
          ),
        }}
      </WelcomeLayout>
    );
  },
});
