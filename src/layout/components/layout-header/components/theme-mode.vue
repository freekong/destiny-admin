<script setup lang='ts'>
import { useThemeStore } from '@/store/modules/theme'


const theme = useThemeStore()

</script>
<template>
  <div class="dark-mode-switch">
    <n-switch
      v-model:value="theme.darkMode"
      :on-update:value="theme.changeDarkMode"
    >
      <template #checked-icon>
        <svg-icon local-icon="darkMode"></svg-icon>
      </template>
      <template #unchecked-icon>
        <svg-icon local-icon="lightMode"></svg-icon>
      </template>
    </n-switch>
  </div>
</template>
<style scoped lang='scss'>

</style>