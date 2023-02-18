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
        <h1> TEST1 </h1>
        <h1> {props.count} </h1>
        <button onClick={() => props.setCount(props.count + 1)}>add count</button>
      </div>
    );
  },
});
