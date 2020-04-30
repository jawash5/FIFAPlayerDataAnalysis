<template>
    <div id="data_chart">132{{ content }}</div>
</template>

<script>
    export default {
        name: "data_chart",
        data(){
            return{
                content:null
            }
        },
        mounted () {
            console.log('ok')
            this.axios.get('http://127.0.0.1:5000/data')
                .then(response => {
                    this.content = response;
                    console.log('ok')
                })
                .catch(function (error) {
                    console.log(error.response)
                })
        }
    }
</script>

<style scoped>

</style>
