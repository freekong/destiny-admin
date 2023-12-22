<script setup lang='ts'>
import { onMounted, ref } from "vue";
import { useAuthStore } from '@/store'
import { useThemeStore } from '@/store'

const { login } = useAuthStore()

const loginForm = ref<Auth.LoginForm>({
  username: 'admin',
  password: '123456'
})


function handleLogin() {
  login(loginForm.value)
}

onMounted(() => {
  const { changeDarkMode, darkMode } = useThemeStore()
  console.log('%c [ darkMode ]-20', 'font-size:13px; background:#09cd72; color:#4dffb6;', darkMode)
  changeDarkMode(darkMode)
})

</script>
<template>
  <div class="login-cointainer w-full h-full flex-center">
    <div class="login-form w-500px h-260px b-1px b-solid b-color-#666 b-rd-4px flex-col-center">
      <n-form label-placement="left">
        <n-form-item class="w-300px">
          <n-input v-model:value="loginForm.username">
            <template #prefix>
              <svg-icon local-icon="username" class="text-16px"></svg-icon>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item class="w-300px">
          <n-input v-model:value="loginForm.password" type="password">
            <template #prefix>
              <svg-icon local-icon="password" class="text-16px"></svg-icon>
            </template>
          </n-input>
        </n-form-item>
      </n-form>
      <div class="text-center">
        <n-button type="primary" @click="handleLogin" class="w-300px">{{ $t('common.login') }}</n-button>
      </div>
    </div>
  </div>
</template>
<style scoped lang='scss'>

</style>