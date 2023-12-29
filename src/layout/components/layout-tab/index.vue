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
  <div class="tab-content">
    <n-tabs
      v-model:value="activeTabName"
      type="card"
      style="border-bottom: none;"
      tab-style="border: none;"
      :closable="tabsList.length > 1"
      :on-update:value="handleTabChange"
      :on-close="removeTab"
    >
      <n-tab
        v-for="item in tabsList"
        :key="item.name"
        :tab="item.title"
        :name="item.name"
      ></n-tab>
    </n-tabs>
  </div>
</template>
<style scoped lang='scss'>
.tab-content {
  .n-tabs .n-tabs-nav.n-tabs-nav--card-type .n-tabs-tab.n-tabs-tab--active {
    background: blue;
  }
}
</style>