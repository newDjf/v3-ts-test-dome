import request from '@/axios/request';

// import {users_register,users_login} from "@/axios/axios_request/axiosRequestInterface"
 
// export const index_get_data = (options : users_register) => {
//     return request.post<ResModel>('/register', {
//         user_name: options.user_name,
//         user_pwd: options.user_pwd,
//         user_age: options.user_age,
//         user_address: options.user_address,
//         user_email: options.user_email
//     }, {
//         requestOptions: {
//             globalErrorMessage: true
//         }
//     })
// }

export const user_login = (login_data: string)=>{
    console.log(login_data);
    return request.get('/users/login?'+login_data)
}