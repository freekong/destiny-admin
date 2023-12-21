<script setup lang='ts'>
import { useTabsStore } from "@/store";
import { TabPaneName } from "element-plus";
import { storeToRefs } from "pinia";

const { tabsList, activeTabName } = storeToRefs(useTabsStore())
const { setActiveTab, removeTab } = useTabsStore()

function handleTabChange(name: TabPaneName) {
  setActiveTab(name as string, true)
}



</script>
<template>
  <div class="tab-content">
    <el-tabs
      v-model="activeTabName"
      type="card"
      class="demo-tabs"
      :closable="tabsList.length > 1"
      @tab-change="handleTabChange"
      @tab-remove="(name: TabPaneName) => removeTab(name as string)"
    >
      <el-tab-pane
        v-for="item in tabsList"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>
<style scoped lang='scss'>

</style>