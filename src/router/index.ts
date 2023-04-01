import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import {routes} from "@/router/route"

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

router.afterEach((to,from)=>{
    document.title = to.meta.title as string
})

export default router
