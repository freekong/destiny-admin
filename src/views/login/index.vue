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
  const { changeDarkMode } = useThemeStore()
  changeDarkMode()
})

</script>
<template>
  <div class="login-cointainer">
    <div class="login-form">
      <el-form label-width="120px">
        <el-form-item :label="$t('common.username')">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item :label="$t('common.password')">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">{{ $t('common.login') }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style scoped lang='scss'>
.login-cointainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 500px;
    height: 260px;
    border: 1px solid #666;
    border-radius: 4px;
    display: flex;
    align-items: center;
    .el-input {
      width: 300px;
    }
    .el-button {
      width: 300px;
      height: 40px;
    }
  }
}
</style>