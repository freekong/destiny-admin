import { useDark, useToggle } from '@vueuse/core';
import { darkTheme } from 'naive-ui';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useThemeStore = defineStore('theme-store', () => {
  
  /** 暗黑模式 */
  const darkMode = useDark()

  /** 菜单折叠 */
  const menuCollapse = ref<boolean>(false)

  const animationMode = ref<Theme.AnimationMode>('fade-slide')

  const naiveTheme = computed(() => {
    console.log('%c [ darkMode.value ]-18', 'font-size:13px; background:#937987; color:#d7bdcb;', darkMode.value)
    console.log('%c [ darkTheme ]-19', 'font-size:13px; background:#f6f7fd; color:#ffffff;', darkTheme)
    return darkMode.value ? darkTheme : undefined;
  })

  function changeMenuCollapse() {
    menuCollapse.value = !menuCollapse.value
  }

  /**
   * @description: 暗黑模式切换
   * @return {*}
   */  
  function changeDarkMode(val: boolean) {
    darkMode.value = val
    useToggle(darkMode)
  }

  return {
    darkMode,
    menuCollapse,
    animationMode,
    naiveTheme,
    changeDarkMode,
    changeMenuCollapse,
  }
})