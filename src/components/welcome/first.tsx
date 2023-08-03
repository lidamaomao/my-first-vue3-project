import { defineComponent } from 'vue';

export const First = defineComponent({
  setup(props, ctx) {
    return () => <div>first</div>;
  },
});
