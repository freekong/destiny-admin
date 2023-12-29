<script setup lang='ts'>
import { useI18n } from "vue-i18n"
import { localStg } from "@/utils/storage/local"

const { locale } = useI18n()
const languageOptions = [
  {
    value: 'chinese',
    label: '简体中文'
  },
  {
    value: 'english',
    label: 'English'
  }
]


function changeLanguage(val: string) {
  locale.value = val
  localStg.set('lang', val)
}

</script>
<template>
  <div>
    <n-popselect
      :options="languageOptions"
      v-model:value="locale"
      :on-update:value="changeLanguage"
    >
      <svg-icon local-icon="language" class="text-20px cursor-pointer"></svg-icon>
    </n-popselect>
  </div>
</template>
<style scoped lang='scss'>
</style>