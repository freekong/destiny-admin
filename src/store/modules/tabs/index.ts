import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Router } from 'vue-router';
import { useRouterPush } from '@/composables';

interface TabsRow {
  title: string;
  path: string;
  name: string;
  active: boolean;
}

const { routerPush } = useRouterPush(false)
export const useTabsStore = defineStore('tabs-store', () => {
  const tabsList = ref<TabsRow[]>([])

  const activeTabName = ref<string>('')

  function addTab(router: Router) {
    const currentRoute = router.currentRoute.value
    if (currentRoute?.meta?.keepAlive) {
      if (!findTab(currentRoute.path)) {
        tabsList.value.push({
          title: currentRoute.meta.title as string,
          name: currentRoute.name as string,
          path: currentRoute.path,
          active: true
        })
      }
      setActiveTab(currentRoute.name as string)

    }
  }


  /**
   * 查找指定路径的标签页是否存在
   * @param path - 要查找的路径
   * @returns 如果存在返回 true，否则返回 false
   */
  function findTab(path: string): Boolean {
    return tabsList.value.findIndex(item => item.path === path) !== -1
  }

  function setActiveTab(name: string, isRouterPush: boolean = false) {
    activeTabName.value = name
    tabsList.value.forEach(item => {
      if (item.name === name) {
        item.active = true
        if (isRouterPush) {
          routerPush({path: item.path})
        }
      } else {
        item.active = false
      }
    })
  }

  return {
    tabsList,
    activeTabName,
    addTab,
    setActiveTab
  }
})