
export const routes: Array < RouteRecordRaw >= [{
    path: '/',
    name: 'index',
    component: () => import ('@/pages/index.vue'),
    alias: '/index',
    meta:{
        title:"首页"
    }
},
{
    path:"/login",
    name:'login',
    component:()=>import('@/pages/login.vue'),
    meta:{
        title:'登录'
    }
},
{
    path:"/register",
    name:"register",
    component:()=>import("@/pages/register.vue"),
    meta:{
        title:'注册'
    }
},
{
    path:"/:pathMatch(.*)",
    name:'404',
    component:()=>import("@/pages/error.vue"),
    meta:{
        title:'404'
    }
}
]
