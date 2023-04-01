<template>
    <div class='register'>
        <!-- <div class="register_input_box">
            <div class="user_name_row">
                <p>姓名：</p>
                <input type="text" v-model="req_data.user_name">
            </div>
            <div class="user_pwd_row">
                <p>密码：</p>
                <input type="text" v-model="req_data.user_pwd">
            </div>
            <div class="user_age_row">
                <p>年龄：</p>
                <input type="text" v-model="req_data.user_age">
            </div>
            <div class="user_address_row">
                <p>地址：</p>
                <input type="text" v-model="req_data.user_address">
            </div>
            <div class="user_email_row">
                <p>邮箱：</p>
                <input type="text" v-model="req_data.user_email">
            </div>
            <button @click="submit_data(req_data)">提交</button>
        </div>
        <router-link to="/login">登录页面</router-link> -->
        <el-form label-width="100px" class="register_form">
            <el-form-item label="用户名：">
                <el-input v-model="req_data.user_name"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
                <el-input v-model="req_data.user_pwd"></el-input>
            </el-form-item>
            <el-form-item label="年龄：">
                <el-input v-model="req_data.user_age"></el-input>
            </el-form-item>
            <el-form-item label="地址：">
                <el-input v-model="req_data.user_address"></el-input>
            </el-form-item>
            <el-form-item label="邮箱：">
                <el-input v-model="req_data.user_email"></el-input>
            </el-form-item>
            <div class="button_box">
                <el-button @click="submit_data(req_data)">提交</el-button>
                <el-button @click="goLogin()">前往登录</el-button>
            </div>

        </el-form>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { user_register } from '@/axios/axios_request/user_axios/post';
import { usersRegisterInterface } from "@/axios/axios_request/axiosRequestInterface"

const $useRouter = useRouter()

const req_data = reactive({
    user_name: '',
    user_pwd: '',
    user_age: 0,
    user_address: '',
    user_email: ''
})


const submit_data = (req_data: usersRegisterInterface): void => {
    user_register(req_data)
}

const goLogin = () => {
    $useRouter.push({
        path: '/login'
    })
}

</script>
    
<style scoped>
.register {
    width: 100vw;
    height: 100vh;
    position: relative;
}

.register_form {
    width: 500px;
    height: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.register_form .button_box{
    display: flex;
    justify-content: center;
    align-items: center;
    
}

</style>