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

  const themeOverrides = {
    Tabs: {
      tabColor: 'transparent',
      tabBorderColor: 'transparent',
      tabBorderRadius: '8px'
    }
  }

  const naiveTheme = computed(() => {
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
    themeOverrides,
    changeDarkMode,
    changeMenuCollapse,
  }
})