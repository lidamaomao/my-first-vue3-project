import { defineComponent } from 'vue';
import s from './Welcome.module.scss';

export const WelcomeLayout = defineComponent({
  setup(props, ctx) {
    const { icon, title, buttons } = ctx.slots;
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          {icon?.()}
          {title?.()}
        </div>
        <div class={s.actions}>{buttons?.()}</div>
      </div>
    );
  },
});
