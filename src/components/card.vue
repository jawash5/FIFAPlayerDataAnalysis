<template>
    <div class="card">
        <p class="content">姓名：{{ overall_name[index] }}</p>
        <p class="content">位置：{{ position[element_id] }}</p>
        <p class="content">综合能力：{{ overall_value[index] }}</p>
        <el-popover
                placement="right"
                width="280"
                trigger="click">
            <div class="data_chart" :id=element_id></div>
            <el-button round size="mini" slot="reference"><span style="font-size: 10px">具体数据</span></el-button>
        </el-popover>
    </div>
</template>

<script>
    export default {
        name: "card",
        props:{
            element_id: String,
            index: Number
        },
        data(){
            return{
                overall_name:[],
                overall_value:[],
                shoumen_overall:[],
                zuoqianfeng_overall:[],
                youqianfeng_overall:[],
                qianfeng_overall:[],
                zuohouwei_overall:[],
                youhouwei_overall:[],
                zuoqianwei_overall:[],
                youqianwei_overall:[],
                zhongqianwei_overall:[],
                zhongfeng_overall:[],
                zhonghouwei_overall:[],
                position:{
                    "shoumen":"守门员",
                    "zuoqianfeng":"左前锋",
                    "youqianfeng":"右前锋",
                    "qianfeng":"前锋",
                    "zuohouwei":"左后卫",
                    "youhouwei":"右后卫",
                    "zuoqianwei":"左前卫",
                    "youqianwei":"右前卫",
                    "zhongqianwei":"中前卫",
                    "zhongfeng":"中锋",
                    "zhonghouwei":"中后卫",
                }
            }
        },
        methods: {
            draw_chart_shoumen(){
                let myChart = this.$echarts.init(document.getElementById('shoumen'))
                this.axios.get('http://127.0.0.1:5000/data')
                    .then(response => {
                        const overall = response.data.综合;
                        for(const key in overall){
                            this.overall_name.push(key);
                            this.overall_value.push(Math.floor(parseFloat(overall[key])*100)/100);
                        }
                        const overall_attack = response.data.overall_进攻;
                        this.shoumen_overall.push(overall_attack[this.overall_name[0]]);
                        const overall_skill = response.data.overall_技术;
                        this.shoumen_overall.push(overall_skill[this.overall_name[0]]);
                        const overall_speed = response.data.overall_速度;
                        this.shoumen_overall.push(overall_speed[this.overall_name[0]]);
                        const overall_power = response.data.overall_力量;
                        this.shoumen_overall.push(overall_power[this.overall_name[0]]);
                        const overall_IQ = response.data.overall_球商;
                        this.shoumen_overall.push(overall_IQ[this.overall_name[0]]);
                        const overall_defense = response.data.overall_防守;
                        this.shoumen_overall.push(overall_defense[this.overall_name[0]]);
                        const overall_goalkeeper = response.data.overall_守门;
                        this.shoumen_overall.push(overall_goalkeeper[this.overall_name[0]]);

                        for(let i=0; i<this.shoumen_overall.length; i++) {
                            this.shoumen_overall[i] = Math.floor(parseFloat(this.shoumen_overall[i])*100)/100;
                        }

                        this.$nextTick(() => {
                            let option = {
                                tooltip: {},
                                radar: {
                                    // shape: 'circle',
                                    name: {
                                        textStyle: {
                                            color: '#fff',
                                            backgroundColor: '#999',
                                            borderRadius: 3,
                                            padding: [3, 5]
                                        }
                                    },
                                    indicator: [
                                        { name: '进攻', max: 100},
                                        { name: '技术', max: 100},
                                        { name: '速度', max: 100},
                                        { name: '力量', max: 100},
                                        { name: '球商', max: 100},
                                        { name: '防守', max: 100},
                                        { name: '守门', max: 100}
                                    ]
                                },
                                series: [{
                                    name: '球员能力值',
                                    type: 'radar',
                                    data: [
                                        {
                                            value: this.shoumen_overall,
                                            name: '球员能力值'
                                        }
                                    ]
                                }]
                            }
                            myChart.setOption(option);
                        })
                    })
                    .catch(function (error) {
                        console.log(error.response)
                    })
            },
            draw_chart_zuoqianfeng(){
                let myChart = this.$echarts.init(document.getElementById('zuoqianfeng'))
                this.axios.get('http://127.0.0.1:5000/data')
                    .then(response => {
                        const overall = response.data.综合;
                        for(const key in overall){
                            this.overall_name.push(key);
                            this.overall_value.push(Math.floor(parseFloat(overall[key])*100)/100);
                        }
                        const overall_attack = response.data.overall_进攻;
                        this.zuoqianfeng_overall.push(overall_attack[this.overall_name[1]]);
                        const overall_skill = response.data.overall_技术;
                        this.zuoqianfeng_overall.push(overall_skill[this.overall_name[1]]);
                        const overall_speed = response.data.overall_速度;
                        this.zuoqianfeng_overall.push(overall_speed[this.overall_name[1]]);
                        const overall_power = response.data.overall_力量;
                        this.zuoqianfeng_overall.push(overall_power[this.overall_name[1]]);
                        const overall_IQ = response.data.overall_球商;
                        this.zuoqianfeng_overall.push(overall_IQ[this.overall_name[1]]);
                        const overall_defense = response.data.overall_防守;
                        this.zuoqianfeng_overall.push(overall_defense[this.overall_name[1]]);
                        const overall_goalkeeper = response.data.overall_守门;
                        this.zuoqianfeng_overall.push(overall_goalkeeper[this.overall_name[1]]);

                        for(let i=0; i<this.zuoqianfeng_overall.length; i++) {
                            this.zuoqianfeng_overall[i] = Math.floor(parseFloat(this.zuoqianfeng_overall[i])*100)/100;
                        }
                        this.$nextTick(() => {
                            let option = {
                                tooltip: {},
                                radar: {
                                    // shape: 'circle',
                                    name: {
                                        textStyle: {
                                            color: '#fff',
                                            backgroundColor: '#999',
                                            borderRadius: 3,
                                            padding: [3, 5]
                                        }
                                    },
                                    indicator: [
                                        { name: '进攻', max: 100},
                                        { name: '技术', max: 100},
                                        { name: '速度', max: 100},
                                        { name: '力量', max: 100},
                                        { name: '球商', max: 100},
                                        { name: '防守', max: 100},
                                        { name: '守门', max: 100}
                                    ]
                                },
                                series: [{
                                    name: '球员能力值',
                                    type: 'radar',
                                    data: [
                                        {
                                            value: this.zuoqianfeng_overall,
                                            name: '球员能力值'
                                        }
                                    ]
                                }]
                            }
                            myChart.setOption(option);
                        })
                    })
                    .catch(function (error) {
                        console.log(error.response)
                    })
            },
            draw_chart_youqianfeng(){
                let myChart = this.$echarts.init(document.getElementById('youqianfeng'))
                this.axios.get('http://127.0.0.1:5000/data')
                    .then(response => {
                        const overall = response.data.综合;
                        for(const key in overall){
                            this.overall_name.push(key);
                            this.overall_value.push(Math.floor(parseFloat(overall[key])*100)/100);
                        }
                        const overall_attack = response.data.overall_进攻;
                        this.youqianfeng_overall.push(overall_attack[this.overall_name[2]]);
                        const overall_skill = response.data.overall_技术;
                        this.youqianfeng_overall.push(overall_skill[this.overall_name[2]]);
                        const overall_speed = response.data.overall_速度;
                        this.youqianfeng_overall.push(overall_speed[this.overall_name[2]]);
                        const overall_power = response.data.overall_力量;
                        this.youqianfeng_overall.push(overall_power[this.overall_name[2]]);
                        const overall_IQ = response.data.overall_球商;
                        this.youqianfeng_overall.push(overall_IQ[this.overall_name[2]]);
                        const overall_defense = response.data.overall_防守;
                        this.youqianfeng_overall.push(overall_defense[this.overall_name[2]]);
                        const overall_goalkeeper = response.data.overall_守门;
                        this.youqianfeng_overall.push(overall_goalkeeper[this.overall_name[2]]);

                        for(let i=0; i<this.youqianfeng_overall.length; i++) {
                            this.youqianfeng_overall[i] = Math.floor(parseFloat(this.youqianfeng_overall[i])*100)/100;
                        }

                        this.$nextTick(() => {
                            let option = {
                                tooltip: {},
                                radar: {
                                    // shape: 'circle',
                                    name: {
                                        textStyle: {
                                            color: '#fff',
                                            backgroundColor: '#999',
                                            borderRadius: 3,
                                            padding: [3, 5]
                                        }
                                    },
                                    indicator: [
                                        { name: '进攻', max: 100},
                                        { name: '技术', max: 100},
                                        { name: '速度', max: 100},
                                        { name: '力量', max: 100},
                                        { name: '球商', max: 100},
                                        { name: '防守', max: 100},
                                        { name: '守门', max: 100}
                                    ]
                                },
                                series: [{
                                    name: '球员能力值',
                                    type: 'radar',
                                    data: [
                                        {
                                            value: this.youqianfeng_overall,
                                            name: '球员能力值'
                                        }
                                    ]
                                }]
                            }
                            myChart.setOption(option);
                        })
                    })
                    .catch(function (error) {
                        console.log(error.response)
                    })
            },
            draw_chart_qianfeng(){
                let myChart = this.$echarts.init(document.getElementById('qianfeng'))
                this.axios.get('http://127.0.0.1:5000/data')
                    .then(response => {
                        const overall = response.data.综合;
                        for(const key in overall){
                            this.overall_name.push(key);
                            this.overall_value.push(Math.floor(parseFloat(overall[key])*100)/100);
                        }
                        const overall_attack = response.data.overall_进攻;
                        this.qianfeng_overall.push(overall_attack[this.overall_name[3]]);
                        const overall_skill = response.data.overall_技术;
                        this.qianfeng_overall.push(overall_skill[this.overall_name[3]]);
                        const overall_speed = response.data.overall_速度;
                        this.qianfeng_overall.push(overall_speed[this.overall_name[3]]);
                        const overall_power = response.data.overall_力量;
                        this.qianfeng_overall.push(overall_power[this.overall_name[3]]);
                        const overall_IQ = response.data.overall_球商;
                        this.qianfeng_overall.push(overall_IQ[this.overall_name[3]]);
                        const overall_defense = response.data.overall_防守;
                        this.qianfeng_overall.push(overall_defense[this.overall_name[3]]);
                        const overall_goalkeeper = response.data.overall_守门;
                        this.qianfeng_overall.push(overall_goalkeeper[this.overall_name[3]]);

                        for(let i=0; i<this.qianfeng_overall.length; i++) {
                            this.qianfeng_overall[i] = Math.floor(parseFloat(this.qianfeng_overall[i])*100)/100;
                        }
                        this.$nextTick(() => {
                            let option = {
                                tooltip: {},
                                radar: {
                                    // shape: 'circle',
                                    name: {
                                        textStyle: {
                                            color: '#fff',
                                            backgroundColor: '#999',
                                            borderRadius: 3,
                                            padding: [3, 5]
                                        }
                                    },
                                    indicator: [
                                        { name: '进攻', max: 100},
                                        { name: '技术', max: 100},
                                        { name: '速度', max: 100},
                                        { name: '力量', max: 100},
                                        { name: '球商', max: 100},
                                        { name: '防守', max: 100},
                                        { name: '守门', max: 100}
                                    ]
                                },
                                series: [{
                                    name: '球员能力值',
                                    type: 'radar',
                                    data: [
                                        {
                                            value: this.qianfeng_overall,
                                            name: '球员能力值'
                                        }
                                    ]
                                }]
                            }
                            myChart.setOption(option);
                        })
                    })
                    .catch(function (error) {
                        console.log(error.response)
                    })
            },
            draw_chart_zuohouwei(){
                let myChart = this.$echarts.init(document.getElementById('zuohouwei'))
                this.axios.get('http://127.0.0.1:5000/data')
                    .then(response => {
                        const overall = response.data.综合;
                        for(const key in overall){
                            this.overall_name.push(key);
                            this.overall_value.push(Math.floor(parseFloat(overall[key])*100)/100);
                        }
                        const overall_attack = response.data.overall_进攻;
                        this.zuohouwei_overall.push(overall_attack[this.overall_name[4]]);
                        const overall_skill = response.data.overall_技术;
                        this.zuohouwei_overall.push(overall_skill[this.overall_name[4]]);
                        const overall_speed = response.data.overall_速度;
                        this.zuohouwei_overall.push(overall_speed[this.overall_name[4]]);
                        const overall_power = response.data.overall_力量;
                        this.zuohouwei_overall.push(overall_power[this.overall_name[4]]);
                        const overall_IQ = response.data.overall_球商;
                        this.zuohouwei_overall.push(overall_IQ[this.overall_name[4]]);
                        const overall_defense = response.data.overall_防守;
                        this.zuohouwei_overall.push(overall_defense[this.overall_name[4]]);
                        const overall_goalkeeper = response.data.overall_守门;
                        this.zuohouwei_overall.push(overall_goalkeeper[this.overall_name[4]]);

                        for(let i=0; i<this.zuohouwei_overall.length; i++) {
                            this.zuohouwei_overall[i] = Math.floor(parseFloat(this.zuohouwei_overall[i])*100)/100;
                        }
                        this.$nextTick(() => {
                            let option = {
                                tooltip: {},
                                radar: {
                                    // shape: 'circle',
                                    name: {
                                        textStyle: {
                                            color: '#fff',
                                            backgroundColor: '#999',
                                            borderRadius: 3,
                                            padding: [3, 5]
                                        }
                                    },
                                    indicator: [
                                        { name: '进攻', max: 100},
                                        { name: '技术', max: 100},
                                        { name: '速度', max: 100},
                                        { name: '力量', max: 100},
                                        { name: '球商', max: 100},
                                        { name: '防守', max: 100},
                                        { name: '守门', max: 100}
                                    ]
                                },
                                series: [{
                                    name: '球员能力值',
                                    type: 'radar',
                                    data: [
                                        {
                                            value: this.zuohouwei_overall,
                                            name: '球员能力值'
                                        }
                                    ]
                                }]
                            }
                            myChart.setOption(option);
                        })
                    })
                    .catch(function (error) {
                        console.log(error.response)
                    })
            },
            draw_chart_youhouwei(){
                let myChart = this.$echarts.init(document.getElementById('youhouwei'))
                this.axios.get('http://127.0.0.1:5000/data')
                    .then(response => {
                        const overall = response.data.综合;
                        for(const key in overall){
                            this.overall_name.push(key);
                            this.overall_value.push(Math.floor(parseFloat(overall[key])*100)/100);
                        }
                        const overall_attack = response.data.overall_进攻;
                        this.youhouwei_overall.push(overall_attack[this.overall_name[5]]);
                        const overall_skill = response.data.overall_技术;
                        this.youhouwei_overall.push(overall_skill[this.overall_name[5]]);
                        const overall_speed = response.data.overall_速度;
                        this.youhouwei_overall.push(overall_speed[this.overall_name[5]]);
                        const overall_power = response.data.overall_力量;
                        this.youhouwei_overall.push(overall_power[this.overall_name[5]]);
                        const overall_IQ = response.data.overall_球商;
                        this.youhouwei_overall.push(overall_IQ[this.overall_name[5]]);
                        const overall_defense = response.data.overall_防守;
                        this.youhouwei_overall.push(overall_defense[this.overall_name[5]]);
                        const overall_goalkeeper = response.data.overall_守门;
                        this.youhouwei_overall.push(overall_goalkeeper[this.overall_name[5]]);

                        for(let i=0; i<this.youhouwei_overall.length; i++) {
                            this.youhouwei_overall[i] = Math.floor(parseFloat(this.youhouwei_overall[i])*100)/100;
                        }
                        this.$nextTick(() => {
                            let option = {
                                tooltip: {},
                                radar: {
                                    // shape: 'circle',
                                    name: {
                                        textStyle: {
                                            color: '#fff',
                                            backgroundColor: '#999',
                                            borderRadius: 3,
                                            padding: [3, 5]
                                        }
                                    },
                                    indicator: [
                                        { name: '进攻', max: 100},
                                        { name: '技术', max: 100},
                                        { name: '速度', max: 100},
                                        { name: '力量', max: 100},
                                        { name: '球商', max: 100},
                                        { name: '防守', max: 100},
                                        { name: '守门', max: 100}
                                    ]
                                },
                                series: [{
                                    name: '球员能力值',
                                    type: 'radar',
                                    data: [
                                        {
                                            value: this.youhouwei_overall,
                                            name: '球员能力值'
                                        }
                                    ]
                                }]
                            }
                            myChart.setOption(option);
                        })
                    })
                    .catch(function (error) {
                        console.log(error.response)
                    })
            },
            draw_chart_zuoqianwei(){
                let myChart = this.$echarts.init(document.getElementById('zuoqianwei'))
                this.axios.get('http://127.0.0.1:5000/data')
                    .then(response => {
                        const overall = response.data.综合;
                        for(const key in overall){
                            this.overall_name.push(key);
                            this.overall_value.push(Math.floor(parseFloat(overall[key])*100)/100);
                        }
                        const overall_attack = response.data.overall_进攻;
                        this.zuoqianwei_overall.push(overall_attack[this.overall_name[6]]);
                        const overall_skill = response.data.overall_技术;
                        this.zuoqianwei_overall.push(overall_skill[this.overall_name[6]]);
                        const overall_speed = response.data.overall_速度;
                        this.zuoqianwei_overall.push(overall_speed[this.overall_name[6]]);
                        const overall_power = response.data.overall_力量;
                        this.zuoqianwei_overall.push(overall_power[this.overall_name[6]]);
                        const overall_IQ = response.data.overall_球商;
                        this.zuoqianwei_overall.push(overall_IQ[this.overall_name[6]]);
                        const overall_defense = response.data.overall_防守;
                        this.zuoqianwei_overall.push(overall_defense[this.overall_name[6]]);
                        const overall_goalkeeper = response.data.overall_守门;
                        this.zuoqianwei_overall.push(overall_goalkeeper[this.overall_name[6]]);

                        for(let i=0; i<this.zuoqianwei_overall.length; i++) {
                            this.zuoqianwei_overall[i] = Math.floor(parseFloat(this.zuoqianwei_overall[i])*100)/100;
                        }
                        this.$nextTick(() => {
                            let option = {
                                tooltip: {},
                                radar: {
                                    // shape: 'circle',
                                    name: {
                                        textStyle: {
                                            color: '#fff',
                                            backgroundColor: '#999',
                                            borderRadius: 3,
                                            padding: [3, 5]
                                        }
                                    },
                                    indicator: [
                                        { name: '进攻', max: 100},
                                        { name: '技术', max: 100},
                                        { name: '速度', max: 100},
                                        { name: '力量', max: 100},
                                        { name: '球商', max: 100},
                                        { name: '防守', max: 100},
                                        { name: '守门', max: 100}
                                    ]
                                },
                                series: [{
                                    name: '球员能力值',
                                    type: 'radar',
                                    data: [
                                        {
                                            value: this.zuoqianwei_overall,
                                            name: '球员能力值'
                                        }
                                    ]
                                }]
                            }
                            myChart.setOption(option);
                        })
                    })
                    .catch(function (error) {
                        console.log(error.response)
                    })
            },
            draw_chart_youqianwei(){
                let myChart = this.$echarts.init(document.getElementById('youqianwei'))
                this.axios.get('http://127.0.0.1:5000/data')
                    .then(response => {
                        const overall = response.data.综合;
                        for(const key in overall){
                            this.overall_name.push(key);
                            this.overall_value.push(Math.floor(parseFloat(overall[key])*100)/100);
                        }
                        const overall_attack = response.data.overall_进攻;
                        this.youqianwei_overall.push(overall_attack[this.overall_name[7]]);
                        const overall_skill = response.data.overall_技术;
                        this.youqianwei_overall.push(overall_skill[this.overall_name[7]]);
                        const overall_speed = response.data.overall_速度;
                        this.youqianwei_overall.push(overall_speed[this.overall_name[7]]);
                        const overall_power = response.data.overall_力量;
                        this.youqianwei_overall.push(overall_power[this.overall_name[7]]);
                        const overall_IQ = response.data.overall_球商;
                        this.youqianwei_overall.push(overall_IQ[this.overall_name[7]]);
                        const overall_defense = response.data.overall_防守;
                        this.youqianwei_overall.push(overall_defense[this.overall_name[7]]);
                        const overall_goalkeeper = response.data.overall_守门;
                        this.youqianwei_overall.push(overall_goalkeeper[this.overall_name[7]]);

                        for(let i=0; i<this.youqianwei_overall.length; i++) {
                            this.youqianwei_overall[i] = Math.floor(parseFloat(this.youqianwei_overall[i])*100)/100;
                        }
                        this.$nextTick(() => {
                            let option = {
                                tooltip: {},
                                radar: {
                                    // shape: 'circle',
                                    name: {
                                        textStyle: {
                                            color: '#fff',
                                            backgroundColor: '#999',
                                            borderRadius: 3,
                                            padding: [3, 5]
                                        }
                                    },
                                    indicator: [
                                        { name: '进攻', max: 100},
                                        { name: '技术', max: 100},
                                        { name: '速度', max: 100},
                                        { name: '力量', max: 100},
                                        { name: '球商', max: 100},
                                        { name: '防守', max: 100},
                                        { name: '守门', max: 100}
                                    ]
                                },
                                series: [{
                                    name: '球员能力值',
                                    type: 'radar',
                                    data: [
                                        {
                                            value: this.youqianwei_overall,
                                            name: '球员能力值'
                                        }
                                    ]
                                }]
                            }
                            myChart.setOption(option);
                        })
                    })
                    .catch(function (error) {
                        console.log(error.response)
                    })
            },
            draw_chart_zhongqianwei(){
                let myChart = this.$echarts.init(document.getElementById('zhongqianwei'))
                this.axios.get('http://127.0.0.1:5000/data')
                    .then(response => {
                        const overall = response.data.综合;
                        for(const key in overall){
                            this.overall_name.push(key);
                            this.overall_value.push(Math.floor(parseFloat(overall[key])*100)/100);
                        }
                        const overall_attack = response.data.overall_进攻;
                        this.zhongqianwei_overall.push(overall_attack[this.overall_name[8]]);
                        const overall_skill = response.data.overall_技术;
                        this.zhongqianwei_overall.push(overall_skill[this.overall_name[8]]);
                        const overall_speed = response.data.overall_速度;
                        this.zhongqianwei_overall.push(overall_speed[this.overall_name[8]]);
                        const overall_power = response.data.overall_力量;
                        this.zhongqianwei_overall.push(overall_power[this.overall_name[8]]);
                        const overall_IQ = response.data.overall_球商;
                        this.zhongqianwei_overall.push(overall_IQ[this.overall_name[8]]);
                        const overall_defense = response.data.overall_防守;
                        this.zhongqianwei_overall.push(overall_defense[this.overall_name[8]]);
                        const overall_goalkeeper = response.data.overall_守门;
                        this.zhongqianwei_overall.push(overall_goalkeeper[this.overall_name[8]]);

                        for(let i=0; i<this.zhongqianwei_overall.length; i++) {
                            this.zhongqianwei_overall[i] = Math.floor(parseFloat(this.zhongqianwei_overall[i])*100)/100;
                        }
                        this.$nextTick(() => {
                            let option = {
                                tooltip: {},
                                radar: {
                                    // shape: 'circle',
                                    name: {
                                        textStyle: {
                                            color: '#fff',
                                            backgroundColor: '#999',
                                            borderRadius: 3,
                                            padding: [3, 5]
                                        }
                                    },
                                    indicator: [
                                        { name: '进攻', max: 100},
                                        { name: '技术', max: 100},
                                        { name: '速度', max: 100},
                                        { name: '力量', max: 100},
                                        { name: '球商', max: 100},
                                        { name: '防守', max: 100},
                                        { name: '守门', max: 100}
                                    ]
                                },
                                series: [{
                                    name: '球员能力值',
                                    type: 'radar',
                                    data: [
                                        {
                                            value: this.zhongqianwei_overall,
                                            name: '球员能力值'
                                        }
                                    ]
                                }]
                            }
                            myChart.setOption(option);
                        })
                    })
                    .catch(function (error) {
                        console.log(error.response)
                    })
            },
            draw_chart_zhongfeng(){
                let myChart = this.$echarts.init(document.getElementById('zhongfeng'))
                this.axios.get('http://127.0.0.1:5000/data')
                    .then(response => {
                        const overall = response.data.综合;
                        for(const key in overall){
                            this.overall_name.push(key);
                            this.overall_value.push(Math.floor(parseFloat(overall[key])*100)/100);
                        }
                        const overall_attack = response.data.overall_进攻;
                        this.zhongfeng_overall.push(overall_attack[this.overall_name[9]]);
                        const overall_skill = response.data.overall_技术;
                        this.zhongfeng_overall.push(overall_skill[this.overall_name[9]]);
                        const overall_speed = response.data.overall_速度;
                        this.zhongfeng_overall.push(overall_speed[this.overall_name[9]]);
                        const overall_power = response.data.overall_力量;
                        this.zhongfeng_overall.push(overall_power[this.overall_name[9]]);
                        const overall_IQ = response.data.overall_球商;
                        this.zhongfeng_overall.push(overall_IQ[this.overall_name[9]]);
                        const overall_defense = response.data.overall_防守;
                        this.zhongfeng_overall.push(overall_defense[this.overall_name[9]]);
                        const overall_goalkeeper = response.data.overall_守门;
                        this.zhongfeng_overall.push(overall_goalkeeper[this.overall_name[9]]);

                        for(let i=0; i<this.zhongfeng_overall.length; i++) {
                            this.zhongfeng_overall[i] = Math.floor(parseFloat(this.zhongfeng_overall[i])*100)/100;
                        }
                        this.$nextTick(() => {
                            let option = {
                                tooltip: {},
                                radar: {
                                    // shape: 'circle',
                                    name: {
                                        textStyle: {
                                            color: '#fff',
                                            backgroundColor: '#999',
                                            borderRadius: 3,
                                            padding: [3, 5]
                                        }
                                    },
                                    indicator: [
                                        { name: '进攻', max: 100},
                                        { name: '技术', max: 100},
                                        { name: '速度', max: 100},
                                        { name: '力量', max: 100},
                                        { name: '球商', max: 100},
                                        { name: '防守', max: 100},
                                        { name: '守门', max: 100}
                                    ]
                                },
                                series: [{
                                    name: '球员能力值',
                                    type: 'radar',
                                    data: [
                                        {
                                            value: this.zhongfeng_overall,
                                            name: '球员能力值'
                                        }
                                    ]
                                }]
                            }
                            myChart.setOption(option);
                        })
                    })
                    .catch(function (error) {
                        console.log(error.response)
                    })
            },
            draw_chart_zhonghouwei(){
                let myChart = this.$echarts.init(document.getElementById('zhonghouwei'))
                this.axios.get('http://127.0.0.1:5000/data')
                    .then(response => {
                        const overall = response.data.综合;
                        for(const key in overall){
                            this.overall_name.push(key);
                            this.overall_value.push(Math.floor(parseFloat(overall[key])*100)/100);
                        }
                        const overall_attack = response.data.overall_进攻;
                        this.zhonghouwei_overall.push(overall_attack[this.overall_name[10]]);
                        const overall_skill = response.data.overall_技术;
                        this.zhonghouwei_overall.push(overall_skill[this.overall_name[10]]);
                        const overall_speed = response.data.overall_速度;
                        this.zhonghouwei_overall.push(overall_speed[this.overall_name[10]]);
                        const overall_power = response.data.overall_力量;
                        this.zhonghouwei_overall.push(overall_power[this.overall_name[10]]);
                        const overall_IQ = response.data.overall_球商;
                        this.zhonghouwei_overall.push(overall_IQ[this.overall_name[10]]);
                        const overall_defense = response.data.overall_防守;
                        this.zhonghouwei_overall.push(overall_defense[this.overall_name[10]]);
                        const overall_goalkeeper = response.data.overall_守门;
                        this.zhonghouwei_overall.push(overall_goalkeeper[this.overall_name[10]]);

                        for(let i=0; i<this.zhonghouwei_overall.length; i++) {
                            this.zhonghouwei_overall[i] = Math.floor(parseFloat(this.zhonghouwei_overall[i])*100)/100;
                        }
                        this.$nextTick(() => {
                            let option = {
                                tooltip: {},
                                radar: {
                                    // shape: 'circle',
                                    name: {
                                        textStyle: {
                                            color: '#fff',
                                            backgroundColor: '#999',
                                            borderRadius: 3,
                                            padding: [3, 5]
                                        }
                                    },
                                    indicator: [
                                        { name: '进攻', max: 100},
                                        { name: '技术', max: 100},
                                        { name: '速度', max: 100},
                                        { name: '力量', max: 100},
                                        { name: '球商', max: 100},
                                        { name: '防守', max: 100},
                                        { name: '守门', max: 100}
                                    ]
                                },
                                series: [{
                                    name: '球员能力值',
                                    type: 'radar',
                                    data: [
                                        {
                                            value: this.zhonghouwei_overall,
                                            name: '球员能力值'
                                        }
                                    ]
                                }]
                            }
                            myChart.setOption(option);
                        })
                    })
                    .catch(function (error) {
                        console.log(error.response)
                    })
            },
        },

        mounted(){
            this.draw_chart_shoumen();
            this.draw_chart_zuoqianfeng();
            this.draw_chart_youqianfeng();
            this.draw_chart_qianfeng();
            this.draw_chart_zuohouwei();
            this.draw_chart_youhouwei();
            this.draw_chart_zuoqianwei();
            this.draw_chart_youqianwei();
            this.draw_chart_zhongqianwei();
            this.draw_chart_zhongfeng();
            this.draw_chart_zhonghouwei();
        }
    }
</script>

<style scoped>
    @import "../assets/card/card.css";
</style>