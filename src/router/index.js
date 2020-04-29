import Vue from 'vue';
import Router from 'vue-router'
import best from "@/components/best";
import first from "@/components/first";
import test from "@/components/test";

Vue.use(Router);

export  default  new Router(
    {
        routes:[
            {
                path:'/',
                name:'first',
                component:first
            },
            {
                //路由路径
                path:'/best',
                //路由名称
                name:'best',
                //跳转到组件
                component:best
            },
            {
                path:'/test',
                name:'test',
                component:test
            }
        ]
    }
)