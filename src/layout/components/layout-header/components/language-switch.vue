<script setup lang='ts'>
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
  console.log('%c [ val ]-14', 'font-size:13px; background:#615a7c; color:#a59ec0;', val)
   
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
        <svg-icon local-icon="language" class="text-18px cursor-pointer"></svg-icon>
      </el-text>
      <template #dropdown>
        <el-dropdown-item
          v-for="item in languageOptions"
          :command="item.value"
        >{{ item.label }}</el-dropdown-item>
      </template>
    </el-dropdown>
    <!-- <el-popover
      trigger="click"
      :show-arrow="false"
    >
      <template #reference>
        <svg-icon local-icon="language" class="text-16px"></svg-icon>
      </template>
      <template #default>
        <ul>
          <li 
            v-for="item in languageOptions" 
            :key="item.value"
            class="h-30px text-center line-height-30px cursor-pointer"
          >{{ item.label }}</li>
        </ul>
      </template>
    </el-popover> -->
  </div>
</template>
<style scoped lang='scss'>
</style>