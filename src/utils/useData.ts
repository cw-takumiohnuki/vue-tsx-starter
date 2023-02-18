import { ref, computed } from 'vue';
import type { ComputedRef, UnwrapRef } from 'vue';

function useData<T>(): [ComputedRef<UnwrapRef<T | undefined>>, (value: T | undefined) => void];
function useData<T>(initialState: T): [ComputedRef<UnwrapRef<T>>, (value: T) => void];
function useData<T>(initialState?: T) {
  const state = ref(initialState);
  const setState = (value: T) => {
    state.value = value as UnwrapRef<T>;
  };
  return [computed(() => state.value), setState];
}

export { useData };
