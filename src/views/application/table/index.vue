<script setup lang='ts' name="table" >
import { ref } from "vue";


const num = ref<number>(1)

</script>
<template>
  <div>
    table--
    <el-input v-model="num"></el-input>
  </div>
</template>
<style scoped lang='scss'>

</style>