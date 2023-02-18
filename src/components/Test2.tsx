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
        <h1> Test2 </h1>
        <h1>{props.count}</h1>
        <button onClick={() => props.setCount(props.count + 1)}> add count2</button>
      </div>
    );
  },
});
