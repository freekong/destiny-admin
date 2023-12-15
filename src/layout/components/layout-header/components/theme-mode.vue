<script setup lang='ts'>
import { useThemeStore } from '@/store'


const theme = useThemeStore()

</script>
<template>
  <div class="dark-mode-switch mr-10px">
    <el-switch
      v-model="theme.darkMode"
      @change="theme.changeDarkMode"
    ></el-switch>
  </div>
</template>
<style scoped lang='scss'>

</style>