<script setup lang="ts">
import { useThemeStore } from '@/store'

const theme = useThemeStore()


</script>

<template>
  <n-config-provider
    :theme="theme.naiveTheme"
    :theme-overrides="theme.themeOverrides"
    class="h-full"
  >
    <naive-provider>
      <n-global-style />
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>

<style scoped>

</style>
