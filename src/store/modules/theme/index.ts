import { useDark, useToggle } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme-store', () => {
  
  /** 暗黑模式 */
  const darkMode = useDark()

  /** 菜单折叠 */
  const menuCollapse = ref<boolean>(false)

  const animationMode = ref<Theme.AnimationMode>('fade-slide')

  function changeMenuCollapse() {
    menuCollapse.value = !menuCollapse.value
  }

  /**
   * @description: 暗黑模式切换
   * @return {*}
   */  
  function changeDarkMode() {
    useToggle(darkMode)
  }

  return {
    darkMode,
    menuCollapse,
    animationMode,
    changeDarkMode,
    changeMenuCollapse,
  }
})