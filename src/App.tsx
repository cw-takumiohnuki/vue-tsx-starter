import { defineComponent, ref } from 'vue';
import Test1 from './components/Test1';
import Test2 from './components/Test2';

export default defineComponent({
  setup() {
    const name = ref('John');
    return () => (
      <div>
        <Test1 />
        <Test2 />
        <h1> Hello, {name.value}</h1>
      </div>
    );
  },
});
