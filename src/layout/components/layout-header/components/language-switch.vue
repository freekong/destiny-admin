<script setup lang='ts'>
import { useI18n } from "vue-i18n"
import { localStg } from "@/utils"

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
    <el-dropdown
      placement="bottom"
      :show-arrow="false"
      @command="changeLanguage"
    >
      <el-text> 
        <svg-icon local-icon="language" class="text-20px cursor-pointer"></svg-icon>
      </el-text>
      <template #dropdown>
        <el-dropdown-item
          v-for="item in languageOptions"
          :command="item.value"
        >{{ item.label }}</el-dropdown-item>
      </template>
    </el-dropdown>
  </div>
</template>
<style scoped lang='scss'>
</style>