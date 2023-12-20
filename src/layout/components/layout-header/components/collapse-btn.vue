<script setup lang='ts'>
import { useThemeStore } from '@/store'
import { storeToRefs } from 'pinia'

const { menuCollapse } = storeToRefs(useThemeStore())
const { changeMenuCollapse } = useThemeStore()
</script>
<template>
  <svg-icon 
    :local-icon="menuCollapse ? 'closeMenu' : 'openMenu'" 
    class="h-30px lh-30px text-26px cursor-pointer mr-10px"  
    @click="changeMenuCollapse" 
  ></svg-icon>
</template>
<style scoped lang='scss'>

</style>