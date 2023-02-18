import { defineComponent } from 'vue';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import { useData } from './utils/useData';

export default defineComponent({
  setup() {
    const [context] = useData('Hello,World');

    const [countTest1, setCountTest1] = useData(1);
    const [countTest2, setCountTest2] = useData(1);
    return () => (
      <div class="bg-red-200 bg-opacity-30">
        <Test1 count={countTest1.value} setCount={setCountTest1} />
        <Test2 count={countTest2.value} setCount={setCountTest2} />
        <h1> {context.value}</h1>
      </div>
    );
  },
});
