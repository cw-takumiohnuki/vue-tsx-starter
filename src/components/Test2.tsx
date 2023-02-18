import { useData } from '@/utils/useData';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  props: {
    count: { type: Number, required: true },
    setCount: { type: Function as PropType<(arg: number) => void>, required: true },
  },

  setup(props) {
    return () => (
      <div>
        <div class="text-5xl bg-red-500">Test2</div>
        <h1>{props.count}</h1>
        <button class="bg-orange-600" onClick={() => props.setCount(props.count + 1)}>
          {' '}
          add count2
        </button>
      </div>
    );
  },
});
