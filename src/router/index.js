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
                component:first,
                meta:{
                    title:'首页'
                }
            },
            {
                path:'/best',
                name:'best',
                component:best,
                meta:{
                    title:'分析'
                }
            },
            {
                path:'/test',
                name:'test',
                component:test,
                meta:{
                    title:'测试'
                }
            }
        ]
    }
)