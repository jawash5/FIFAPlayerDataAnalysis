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
                attack_name:[],
                attack_value:[]
            }
        },
        methods: {
            draw_chart_attack(){
                let myChart = this.$echarts.init(document.getElementById('charts'))

                this.axios.get('http://127.0.0.1:5000/data')
                    .then(response => {
                        const attack = response.data.进攻;
                        for(const key in attack){
                            this.attack_name.push(key);
                            this.attack_value.push(Math.floor(parseFloat(attack[key])*100)/100);
                        }
                        this.$nextTick(() => {
                            let option = {
                                title: {
                                    text: '进攻单项排行',
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
                                    data: this.attack_name
                                },
                                series: [
                                    {
                                        type: 'bar',
                                        data: this.attack_value
                                    }
                                ]
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
            this.draw_chart_attack();
        }
    }
</script>

<style scoped>
    #charts {
        width: 1000px;
        height: 600px;
    }
</style>