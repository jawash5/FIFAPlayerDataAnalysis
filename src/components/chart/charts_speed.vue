<template>
    <div>
        <div id="charts"></div>
    </div>
</template>

<script>
    export default {
        name: "charts",
        data(){
            return{
                speed_name:[],
                speed_value:[],
            }
        },
        methods: {
            draw_chart_speed(){
                let myChart = this.$echarts.init(document.getElementById('charts'))

                this.axios.get('http://127.0.0.1:5000/data')
                    .then(response => {
                        const speed = response.data.速度;
                        for(const key in speed){
                            this.speed_name.push(key);
                            this.speed_value.push(parseInt(speed[key]));
                        }
                        // console.log(this.speed_value)
                        this.$nextTick(() => {
                            let option = {
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
                                    min:88,
                                    boundaryGap: [0, 0.01]
                                },
                                yAxis: {
                                    type: 'category',
                                    data: this.speed_name
                                },
                                series: [
                                    {
                                        type: 'bar',
                                        data: this.speed_value
                                    }
                                ]
                            }
                            myChart.setOption(option);
                        })
                    })
                    .catch(function (error) {
                        console.log(error.response)
                    })
            }
        },

        mounted(){
            this.draw_chart_speed()
        }
    }
</script>

<style scoped>
    #charts {
        width: 1000px;
        height: 600px;
    }
</style>