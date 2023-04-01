<template>
    <div class='login'>
        <div class="login_input_box">
            <div class="user_name_row">
                <p>姓名：</p>
                <input type="text" v-model="req_data.user_name">
            </div>
            <div class="user_pwd_row">
                <p>密码：</p>
                <input type="text" v-model="req_data.user_pwd">
            </div>
            <button @click="submit_data(req_data)">登录</button>
            <router-link to="/register">注册页面</router-link>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { user_login } from '@/axios/axios_request/user_axios/post'
import { users_login } from '@/axios/axios_request/axiosRequestInterface'

const req_data = reactive({
    user_name: '',
    user_pwd: ''
})

const submit_data = (req_data:users_login) =>{
    const token = user_login(req_data)
    token.then(res=>{
        window.sessionStorage.setItem('token',res)
    })
}

</script>
    
<style scoped></style>