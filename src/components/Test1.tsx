import type { PropType } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    count: { type: Number, required: true },
    setCount: { type: Function as PropType<(arg: number) => void>, required: true },
  },

  setup(props) {
    return () => (
      <div>
        <div class="text-5xl bg-red-500"> TEST1 </div>
        <h1> {props.count} </h1>
        <button class="mb-8 bg-orange-600" onClick={() => props.setCount(props.count + 1)}>
          add count
        </button>
      </div>
    );
  },
});
