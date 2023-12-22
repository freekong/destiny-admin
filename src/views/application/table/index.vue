<script setup lang='ts' name="table" >
import { ref } from "vue";


const num = ref<number>(1)

</script>
<template>
  <div>
    table--
    <n-input v-model="num"></n-input>
  </div>
</template>
<style scoped lang='scss'>

</style>