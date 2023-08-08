import { defineComponent } from 'vue';

export const Second = defineComponent({
  setup(props, ctx) {
    return () => <div>second</div>;
  },
});
