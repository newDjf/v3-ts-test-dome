import {usersRegisterInterface,users_login} from "@/axios/axios_request/axiosRequestInterface"
import request from "@/axios/request"

// 用户注册接口调用
export const user_register = (req_data : usersRegisterInterface) => {
    request.post('/users/register',req_data)
}

// 用户登录接口调用
export const user_login = async (req_data:users_login) =>{
    const token = await request.post('./users/login',req_data).then(res=>{
         return res
    })
    return token
   
}