<script setup lang='ts'>
import { LayoutHeader, LayoutAside, LayoutContent, LayoutFooter, LayoutTab } from './components'
import { useThemeStore } from '@/store'
import { storeToRefs } from 'pinia'

const { menuCollapse } = storeToRefs(useThemeStore())

</script>
<template>
  <n-layout class="h-full" content-class="flex-col">
    <n-layout-header class="h-60px">
      <layout-header></layout-header>
    </n-layout-header>
    <n-layout has-sider content-class="flex-1" class="flex">
      <n-layout-sider 
        :native-scrollbar="false"
        :collapsed="menuCollapse" 
        collapse-mode="width" 
        :collapsed-width="64" 
        content-class="transition transition-width duration-300 ease-in-out">
        <layout-aside></layout-aside>
      </n-layout-sider>
      <n-layout class="flex-1" content-class="flex-col">
        <n-layout-content :native-scrollbar="false" content-class="flex-1">
          <n-layout-header>
            <layout-tab></layout-tab>
          </n-layout-header>
          <layout-content></layout-content>
        </n-layout-content>
        <n-layout-footer >
          <layout-footer></layout-footer>
        </n-layout-footer>
      </n-layout>
    </n-layout>
  </n-layout>
</template>
