<script setup lang='ts'>
import { LayoutHeader, LayoutAside, LayoutContent, LayoutFooter, LayoutTab } from './components'
import { useThemeStore } from '@/store'
import { storeToRefs } from 'pinia'

const { menuCollapse } = storeToRefs(useThemeStore())

</script>
<template>
  <div class="layout h-full flex">
    <el-container>
      <el-header height="60px">
        <layout-header></layout-header>
      </el-header>
      <el-container>
        <el-aside :width="`${menuCollapse ? 64 : 220}px`">
          <layout-aside></layout-aside>
        </el-aside>
        <el-container>
          <el-main>
            <layout-tab></layout-tab>
            <layout-content></layout-content>
          </el-main>
          <el-footer>
            <layout-footer></layout-footer>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang='scss'>
</style>