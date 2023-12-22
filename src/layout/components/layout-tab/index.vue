<script setup lang='ts'>
import { useTabsStore } from "@/store";
import { storeToRefs } from "pinia";

const { tabsList, activeTabName } = storeToRefs(useTabsStore())
const { setActiveTab, removeTab } = useTabsStore()

function handleTabChange(name: string) {
  setActiveTab(name as string, true)
}



</script>
<template>
  <div class="tab-content bg-var(--n-color)">
    <n-tabs
      v-model:value="activeTabName"
      type="card"
      style="border-bottom: none;"
      :closable="tabsList.length > 1"
      :on-update:value="handleTabChange"
      :on-close="removeTab"
    >
      <n-tab-pane
        v-for="item in tabsList"
        :key="item.name"
        :tab="item.title"
        :name="item.name"
      ></n-tab-pane>
    </n-tabs>
  </div>
</template>
<style scoped lang='scss'>
.tab-content {
  background-color: var(--n-color);
}
</style>