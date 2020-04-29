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
            this.axios.get('localhost:5000/data')
                .then(response => {
                    this.content = response
                    console.log('ok')
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    }
</script>

<style scoped>

</style>