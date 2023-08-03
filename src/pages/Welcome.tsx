import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

export const Welcome = defineComponent({
  setup(props, ctx) {
    return () => (
      <>
        <RouterView />
      </>
    );
  },
});
