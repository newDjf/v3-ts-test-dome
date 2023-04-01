<template>
    <div class='login'>
        <el-form :label-position="labelPosition" label-width="100px" class="login_form">
            <el-form-item label="用户名：" hide-required-asterisk="true">
                <el-input v-model="req_data.user_name" />
            </el-form-item>
            <el-form-item label="密码：">
                <el-input v-model="req_data.user_pwd" />
            </el-form-item>
            <div class="button_box">
                <el-button @click="submit_data(req_data)">登录</el-button>
                <el-button @click="goRegister()">前往注册</el-button>
            </div>
            

        </el-form>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import { user_login } from '@/axios/axios_request/user_axios/post'
import { users_login } from '@/axios/axios_request/axiosRequestInterface'

const $router = useRouter()

const labelPosition = ref('reght')

const req_data = reactive({
    user_name: '',
    user_pwd: ''
})

const goRegister = () => {
    $router.push({
        path: '/register'
    })
}

const submit_data = (req_data: users_login) => {
    const token = user_login(req_data)
    token.then(res => {
        console.log(res);
        window.sessionStorage.setItem('token', res.token)
    })
}
</script>
    
<style scoped>
.login {
    width: 100vw;
    height: 100vh;
    position: relative;
}

.login_form {
    width: 500px;
    height: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.login_form .button_box{
    display: flex;
    justify-content: center;
    align-items: center;
    
}
</style>