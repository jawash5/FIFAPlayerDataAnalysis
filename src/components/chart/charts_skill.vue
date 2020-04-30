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
                skill_name:[],
                skill_value:[]
            }
        },
        methods: {
            draw_chart_skill(){
                let myChart = this.$echarts.init(document.getElementById('charts'))

                this.axios.get('http://127.0.0.1:5000/data')
                    .then(response => {
                        const skill = response.data.技术;
                        for(const key in skill){
                            this.skill_name.push(key);
                            this.skill_value.push(parseInt(skill[key]));
                        }
                        this.$nextTick(() => {
                            let option = {
                                title: {
                                    text: '技术单项排行',
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
                                    data: this.skill_name
                                },
                                series: [
                                    {
                                        type: 'bar',
                                        data: this.skill_value
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
            this.draw_chart_skill();
        }
    }
</script>

<style scoped>
    #charts {
        width: 1000px;
        height: 600px;
    }
</style>