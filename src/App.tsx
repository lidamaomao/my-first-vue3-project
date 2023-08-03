import { defineComponent, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

export const App = defineComponent({
  setup() {
    return () => (
      <>
        <header>导航</header>
        <RouterLink to="/">Foo</RouterLink>
        <br />
        <RouterLink to="/bar">Bar</RouterLink>
        <br />
        <RouterLink to="/welcome">Welcome</RouterLink>
        <main>
          <RouterView />
        </main>
        <footer>页脚</footer>
      </>
    );
  },
});
