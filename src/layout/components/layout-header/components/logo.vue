<script setup lang='ts'>
import { useThemeStore } from '@/store/modules/theme'
import { storeToRefs } from 'pinia'

const { menuCollapse } = storeToRefs(useThemeStore())
</script>
<template>
<div class="logo text-24px flex justify-around items-center text-center" :style="`width: ${menuCollapse ? 64 : 220}px`">
  <img width="20px" height="20px" src="../../../../assets/images/logo.png" alt="">
  <h2 v-show="!menuCollapse" class="text-20px font-bold transition duration-300 ease-in-out">
    destiny
  </h2>
</div>
</template>