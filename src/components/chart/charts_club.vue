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
                club_name:[],
                club_value:[]
            }
        },
        methods: {
            draw_chart_club(){
                let myChart = this.$echarts.init(document.getElementById('charts'))

                this.axios.get('http://127.0.0.1:5000/data')
                    .then(response => {
                        const club = response.data.club;
                        for(const key in club){
                            this.club_name.push(key);
                            this.club_value.push(Math.floor(parseFloat(club[key])*100)/100);
                        }
                        this.$nextTick(() => {
                            let option = {
                                title: {
                                    text: '俱乐部综合排行',
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
                                    min:75,
                                    boundaryGap: [0, 0.01]
                                },
                                yAxis: {
                                    type: 'category',
                                    data: this.club_name
                                },
                                series: [
                                    {
                                        type: 'bar',
                                        data: this.club_value
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
            this.draw_chart_club();
        }
    }
</script>

<style scoped>
    #charts {
        width: 1000px;
        height: 600px;
    }
</style>