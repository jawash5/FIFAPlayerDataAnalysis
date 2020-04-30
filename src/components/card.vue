<template>
    <div class="card">
        <p class="content">姓名：messi</p>
        <p class="content">位置：前锋</p>
        <p class="content">综合能力：83</p>
        <el-popover
                placement="right"
                width="280"
                trigger="click">
            <div id="data_chart"></div>
            <el-button round size="mini" slot="reference"><span style="font-size: 10px">具体数据</span></el-button>
        </el-popover>
    </div>
</template>

<script>
    export default {
        name: "card",
        methods: {
            draw_chart(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('data_chart'))
                // 绘制图表
                myChart.setOption({
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
                        // areaStyle: {normal: {}},
                        data: [
                            {
                                value: [73.80, 88.60, 86.40, 72.00, 72.83, 52.0, 9.60],
                                name: '球员能力值'
                            }
                        ]
                    }]
                });
            }
        },
        mounted(){
            this.draw_chart();
        }
    }
</script>

<style scoped>
    @import "../assets/card/card.css";
</style>