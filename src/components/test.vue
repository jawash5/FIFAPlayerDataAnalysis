
<template>
    <div id="data_chart">{{ club }}  {{ club_value }}</div>
</template>

<script>
    export default {
        name: "data_chart",
        data(){
            return{
                club:[],
                club_value:[]
            }
        },
        mounted () {
            console.log('ok')
            this.axios.get('http://127.0.0.1:5000/data')
                .then(response => {
                    this.club = response.data;

                })
                .catch(function (error) {
                    console.log(error.response)
                })
        }
    }
</script>

<style scoped>
</style>