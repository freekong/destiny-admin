<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { RouteRecord, RouterLink, useRouter } from 'vue-router'
import { useThemeStore } from '@/store'
import { h, ref } from 'vue'
import { MenuOption } from 'naive-ui'
import SvgIcon from '@/components/common/svg-icon.vue'

const router = useRouter()
const routeList = router.getRoutes()

const activeMenuKey = ref(null)

const { menuCollapse } = storeToRefs(useThemeStore()) 

let menuList: RouteRecord[] = routeList.filter((item) => {
  return !item.meta?.hiddle && item.children?.length
})

function renderIcon(icon: string) {
  return () => h(SvgIcon, { localIcon: icon })
}


function transformRouteToMenu(route: RouteRecord[]): MenuOption[] {
  let menuList: MenuOption[] = []
  for (let i = 0; i < route.length; i++) {
    const item = route[i];
    if (item.children?.length > 1) {
      menuList.push({
        label: item.meta?.title,
        key: item.path,
        icon: item.meta.icon ? renderIcon(item.meta.icon) : undefined,
        children: transformRouteToMenu(item.children as RouteRecord[])
      }) 
    } else {
      menuList.push({
        label: () => h(RouterLink, {
          to: {
            path: item.path 
          }
        }, {
          default: () => item.meta?.title
        }),
        key: item.path,
        icon: item.meta.icon ? renderIcon(item.meta.icon) : undefined
      })
    }
    
  }
  return menuList
}

const menuOptions: MenuOption[] = transformRouteToMenu(menuList)
</script>
<template>
  <n-menu
    v-model:value="activeMenuKey"
    :collapse="menuCollapse"
    :collapsed-width="64"
    :options="menuOptions"
  >
  </n-menu>
</template>
<style scoped lang='scss'>

</style>