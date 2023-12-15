<script setup lang='ts'>

</script>
<template>
  <div class="layout-content">
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>
<style scoped lang='scss'>

</style>