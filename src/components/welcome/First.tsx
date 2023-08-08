import { defineComponent } from 'vue';
import pig from '../../assets/icons/pig.svg';
import s from './First.module.scss';
import { RouterLink } from 'vue-router';

export const First = defineComponent({
  setup(props, ctx) {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img src={pig} />
          <h2>
            会挣钱
            <br />
            还要会省钱
          </h2>
        </div>
        <div class={s.actions}>
          <RouterLink to="/2" class={s.fake}>
            下一页
          </RouterLink>
          <RouterLink to="/2">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </div>
      </div>
    );
  },
});
