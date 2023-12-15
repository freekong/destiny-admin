import { useDark, useToggle } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme-store', () => {
  
  /** 暗黑模式 */
  const darkMode = useDark()

  /**
   * @description: 暗黑模式切换
   * @return {*}
   */  
  function changeDarkMode() {
    useToggle(darkMode)
  }

  return {
    darkMode,
    changeDarkMode
  }
})