import type { PropType } from 'vue';

export const voidFnType = {
  type: Function as PropType<() => void>,
  required: true as const,
};

export const optionalVoidFnType = Function as PropType<() => void>;
export const getOptionalBoolType = (defaultVal = false) => ({
  type: Boolean,
  required: false as const,
  default: defaultVal,
});

export const getObjType = <T>() => ({
  type: Object as PropType<T>,
  required: true as const,
});

export const getOptionalObjType = <T>() => ({
  type: Object as PropType<T>,
  required: false as const,
});

export const getOptionalArrType = <T>() => ({
  type: Array as PropType<T[]>,
  required: false as const,
});

export const getArrType = <T>() => ({
  type: Array as PropType<T[]>,
  required: true as const,
});
