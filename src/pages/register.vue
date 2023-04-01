<template>
    <div class='index'>
        <div class="register_input_box">
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
        <router-link to="/login">登录页面</router-link>
    </div>
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { user_resgister } from '@/axios/axios_request/user_axios/post';
import {usersRegisterInterface} from "@/axios/axios_request/axiosRequestInterface"

const req_data = reactive({
    user_name: '',
    user_pwd: '',
    user_age: 0,
    user_address: '',
    user_email: ''
})


const submit_data = (req_data:usersRegisterInterface): void => {
     user_resgister(req_data)
   
}



</script>
    
<style scoped></style>