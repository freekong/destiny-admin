<script setup lang='ts'>
import { computed } from "vue";
import { useTabsStore, useThemeStore } from '@/store';
import { storeToRefs } from "pinia";

const { animationMode } = storeToRefs(useThemeStore())
const { tabsList } = storeToRefs(useTabsStore())

const cacheComponents = computed(() => {
  console.log('%c [ tabsList.value.map((item) => item.name) ]-11', 'font-size:13px; background:#f917f2; color:#ff5bff;', tabsList.value.map((item) => item.name))
  return tabsList.value.map((item) => item.name)
})

</script>
<template>
  <div class="layout-content">
    <router-view v-slot="{ Component, route }">
      <transition
        :name="animationMode"
        mode="out-in"
        :appear="true"
      >
        <keep-alive :include="cacheComponents">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>
<style scoped lang='scss'>

</style>