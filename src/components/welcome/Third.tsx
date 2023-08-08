import { defineComponent } from 'vue';

export const Third = defineComponent({
  setup(props, ctx) {
    return () => <div>third</div>;
  },
});
