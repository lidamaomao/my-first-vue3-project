import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import logo from '../assets/icons/mangosteen.svg';
import s from './Welcome.module.scss';
export const Welcome = defineComponent({
  setup(props, ctx) {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={logo} alt="山竹Logo" />
          <h1>山竹记账</h1>
        </header>
        <main>
          <RouterView />
        </main>
      </div>
    );
  },
});
