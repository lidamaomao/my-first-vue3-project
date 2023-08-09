import { defineComponent } from 'vue';
import pig from '../../assets/icons/pig.svg';
import s from './Welcome.module.scss';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';

export const First = defineComponent({
  setup(props, ctx) {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img src={pig} />,
          title: () => (
            <h2>
              会挣钱
              <br />
              还要会省钱
            </h2>
          ),
          buttons: () => (
            <>
              <RouterLink to="/2" class={s.fake}>
                下一页
              </RouterLink>
              <RouterLink to="/welcome/2">下一页</RouterLink>
              <RouterLink to="/start">跳过</RouterLink>
            </>
          ),
        }}
      </WelcomeLayout>
    );
  },
});
