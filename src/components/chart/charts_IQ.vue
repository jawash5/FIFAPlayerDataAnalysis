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
                IQ_name:[],
                IQ_value:[]
            }
        },
        methods: {
            draw_chart_IQ(){
                let myChart = this.$echarts.init(document.getElementById('charts'))

                this.axios.get(this.$root.URL)
                    .then(response => {
                        const IQ = response.data.qiushang;
                        for(const key in IQ){
                            this.IQ_name.push(key);
                            this.IQ_value.push(Math.floor(parseFloat(IQ[key])*100)/100);
                        }
                        this.$nextTick(() => {
                            let option = {
                                title: {
                                    text: '球商单项排行',
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
                                    min:78,
                                    boundaryGap: [0, 0.01]
                                },
                                yAxis: {
                                    type: 'category',
                                    data: this.IQ_name
                                },
                                series: [
                                    {
                                        type: 'bar',
                                        data: this.IQ_value
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
            this.draw_chart_IQ();
        }
    }
</script>

<style scoped>
    #charts {
        width: 1000px;
        height: 600px;
    }
</style>