<script setup lang='ts'>
import themeMode from './components/theme-mode.vue'
import logo from './components/logo.vue'
import languageSwitch from './components/language-switch.vue'
import githubLink from './components/github-link.vue'
import breadcrumb from './components/breadcrumb.vue'
import collapseBtn from './components/collapse-btn.vue'
</script>
<template>
  <header class="layout-header h-full pr-15px flex items-center justify-between">
    <div class="flex items-center">
      <logo />
      <collapse-btn />
      <breadcrumb />
    </div>
    <div class="nav-bar w-200px flex items-center justify-around pr-50px ">
      <theme-mode />
      <language-switch />
      <github-link />
    </div>
  </header>
</template>
<style scoped lang='scss'>

</style>