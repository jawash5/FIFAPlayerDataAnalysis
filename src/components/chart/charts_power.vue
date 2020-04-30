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
                power_name:[],
                power_value:[]
            }
        },
        methods: {
            draw_chart_power(){
                let myChart = this.$echarts.init(document.getElementById('charts'))

                this.axios.get('http://127.0.0.1:5000/data')
                    .then(response => {
                        const power = response.data.力量;
                        for(const key in power){
                            this.power_name.push(key);
                            this.power_value.push(parseInt(power[key]));
                        }
                        // console.log(this.power_value)
                        this.$nextTick(() => {
                            let option = {
                                title: {
                                    text: '力量单项排行',
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
                                    min:80,
                                    boundaryGap: [0, 0.01]
                                },
                                yAxis: {
                                    type: 'category',
                                    data: this.power_name
                                },
                                series: [
                                    {
                                        type: 'bar',
                                        data: this.power_value
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
            this.draw_chart_power();
        }
    }
</script>

<style scoped>
    #charts {
        width: 1000px;
        height: 600px;
    }
</style>