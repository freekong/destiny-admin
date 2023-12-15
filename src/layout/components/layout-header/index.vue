<script setup lang='ts'>
import themeMode from './components/theme-mode.vue'
import logo from './components/logo.vue'
import languageSwitch from './components/language-switch.vue'
</script>
<template>
  <header class="h-80px pr-15px flex items-center justify-between">
    <logo />
    <div class="nav-bar flex items-center pr-50px">
      <theme-mode />
      <language-switch />
    </div>
  </header>
</template>
<style scoped lang='scss'>

</style>