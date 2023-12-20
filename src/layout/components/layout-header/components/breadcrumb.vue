<script setup lang='ts'>
import { computed } from 'vue';
import { type Router, useRouter } from 'vue-router';

const router: Router = useRouter()
const routes = computed(() => router.currentRoute.value.matched)
</script>
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in routes" :key="item.path" :to="{ path: item?.path }">{{ item?.meta?.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<style scoped lang='scss'>

</style>