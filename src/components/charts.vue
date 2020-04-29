<template>
    <div>
        <div id="charts"></div>
    </div>
</template>

<script>
    export default {
        name: "charts",
        methods: {
            draw_chart(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('charts'))
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '速度单项排行',
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: ['梅西', 'C罗', '内马尔', '本泽马', '本泽马','本泽马','本泽马','本泽马','本泽马','本泽马','本泽马']
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [50, 57, 58, 69, 70, 71, 75, 76, 80, 84, 88]
                        }
                    ]
                });
            }
        },
        mounted(){
            this.draw_chart();
        }
    }
</script>

<style scoped>
    #charts {
        width: 1000px;
        height: 600px;
    }
</style>