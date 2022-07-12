import Vue from 'vue'
import VueRouter from 'vue-router'
import notice from "@/views/notice.vue"

import site from "@/views/site.vue";
import user from "@/views/user.vue";
import strategy from "@/views/strategy.vue";

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'notice',
        component:notice
    },{
        path:'/strategy',
        name:'strategy',
        component:strategy
    },{
        path:'/site',
        name:'site',
        component:site
    },{
        path:'/user',
        name:'user',
        component:user
    }
]
const router = new VueRouter(
    {
        mode:'history',
        routes
    }
)
export default router