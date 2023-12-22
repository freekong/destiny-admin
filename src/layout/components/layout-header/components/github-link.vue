<script setup lang='ts'>
function linkGithub() {
  window.open('https://github.com/freekong/destiny-admin')
}
</script>
<template>
  <svg-icon local-icon="github" class="text-22px cursor-pointer" @click="linkGithub"></svg-icon>
</template>