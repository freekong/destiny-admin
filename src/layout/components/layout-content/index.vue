<script setup lang='ts'>
import { computed } from "vue";
import { useThemeStore } from '@/store/modules/theme';
import { useTabsStore } from '@/store/modules/tabs'
import { storeToRefs } from "pinia";

const { animationMode } = storeToRefs(useThemeStore())
const { tabsList } = storeToRefs(useTabsStore())

const cacheComponents = computed(() => {
  return tabsList.value.map((item) => item.name)
})

</script>
<template>
  <div class="layout-content p10px">
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