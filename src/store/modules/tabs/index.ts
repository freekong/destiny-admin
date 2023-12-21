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
      if (findTab(currentRoute.name as string) === -1) {
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

  function removeTab(name: string) {
    const index = findTab(name)
    if (index !== -1) {
      tabsList.value.splice(index, 1)
    }
    if (activeTabName.value === name) {
      const nextTab = tabsList.value[index] || tabsList.value[index - 1]
      console.log('%c [ nextTab ]-42', 'font-size:13px; background:#bd172a; color:#ff5b6e;', nextTab)
      if (nextTab) {
        setActiveTab(nextTab.name, true)
      }
    }
  }


  /**
   * 查找指定路径的标签页是否存在
   * @param path - 要查找的路径
   * @returns 如果存在返回 true，否则返回 false
   */
  function findTab(name: string): number {
    return tabsList.value.findIndex(item => item.name === name)
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
    removeTab,
    setActiveTab
  }
})