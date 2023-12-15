<template>
  <svg aria-hidden="true" width="1em" height="1em" v-bind="bindAttrs">
    <use :xlink:href="symbolId" fill="currentColor" />
  </svg>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'SvgIcon' });
/**
 * 图标组件
 * - 支持本地svg图标
 * - 同时传递了icon和localIcon，localIcon会优先渲染
 */
interface Props {
  /** 图标名称 */
  icon?: string;
  /** 本地svg的文件名 */
  localIcon?: string;
}

const props = defineProps<Props>();

const attrs = useAttrs();

const bindAttrs = computed<{ class: string; style: string }>(() => ({
  class: (attrs.class as string) || '',
  style: (attrs.style as string) || ''
}));

const symbolId = computed(() => {
  const preffix = 'icon';

  const defaultLocalIcon = 'no-icon';

  const icon = props.localIcon || defaultLocalIcon;

  return `#${preffix}-${icon}`;
});

</script>

<style scoped></style>