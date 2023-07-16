<template>
  <div class="storybook sb-column"> 
    <h4> SFC Component </h4>
    <button type="button" :class="classes" @click="onClick" :style="style">{{ label }} </button>
 </div>
</template>

<script lang="ts" setup>
import './button.css';
import { computed } from 'vue';

import type { Sizes } from './types';

const props = withDefaults(defineProps<{
  /**
   * The label of the button
   */
  label: string,
  /**
   * primary or secondary button
   */
  primary?: boolean,
  /**
   * size of the button
   */
  size?: Sizes ,
  /**
   * background color of the button
   */
  backgroundColor?: string,

  union?: string | number | boolean

}>(), { primary: false });

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size || 'medium'}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor
}));

const onClick = () => {
  emit("click", 1)
};

</script>