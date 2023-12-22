<script setup lang="ts">
import { useThemeStore } from '@/store'

const theme = useThemeStore()

</script>

<template>
  <n-config-provider
    :theme="theme.naiveTheme"
    class="h-full"
  >
    <router-view />
  </n-config-provider>
</template>

<style scoped>

</style>
