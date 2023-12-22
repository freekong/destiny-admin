<script setup lang='ts'>
import { computed } from 'vue';
import { type Router, useRouter } from 'vue-router';

const router: Router = useRouter()
const routes = computed(() => router.currentRoute.value.matched)
</script>
<template>
  <n-breadcrumb separator="/">
    <n-breadcrumb-item v-for="item in routes" :key="item.path" >{{ item?.meta?.title }}</n-breadcrumb-item>
  </n-breadcrumb>
</template>
<style scoped lang='scss'>

</style>