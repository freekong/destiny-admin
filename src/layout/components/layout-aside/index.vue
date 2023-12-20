<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/store'

const router = useRouter()
const routeList = router.getRoutes()

const { menuCollapse } = storeToRefs(useThemeStore()) 

let menuList = routeList.filter((item) => {
  return !item.meta?.hiddle && item.children?.length
})
</script>
<template>
  <aside class="layout-aside h-full">
    <el-menu :collapse="menuCollapse" router class="h-full" >
      <template v-for="item in menuList">
        <el-sub-menu v-if="item.meta.menu" :index="item.path">
          <template #title>
            <el-icon class="text-18px mr-10px">
              <svg-icon :local-icon="item.meta?.icon" ></svg-icon>
            </el-icon>
            <span>{{ item.meta?.title }}</span>
          </template>
          <el-menu-item-group >
            <el-menu-item
              v-for="child in item.children"
              :key="child.name"
              :index="child.path"
            >
            <template #title>
              <span>{{ child.meta?.title }}</span>
            </template>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item v-else :index="item.path" >
          <el-icon class="text-18px mr-10px">
            <svg-icon :local-icon="item.meta?.icon" ></svg-icon>
          </el-icon>
          <template #title>
            <span>{{ item.meta?.title }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </aside>
</template>
<style scoped lang='scss'>

</style>