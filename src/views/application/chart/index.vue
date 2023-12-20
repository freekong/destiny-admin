<script setup lang='ts' name="chart" >
import { ref } from "vue";


const radioValue = ref<string>('1')
</script>
<template>
  <div>
    <el-button>chart</el-button>
    <el-radio-group v-model="radioValue" class="ml-4">
      <el-radio label="1" size="large">Option 1</el-radio>
      <el-radio label="2" size="large">Option 2</el-radio>
    </el-radio-group>
  </div>
</template>
<style scoped lang='scss'>

</style>