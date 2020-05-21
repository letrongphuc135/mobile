<template>
    <div>
        <column-chart :data="chartData" :max="50"></column-chart>
    </div>
</template>

<script>
    export default {
        name: "DashBoard",
        data(){
            return{
                chartData: [['Mon', 10], ['Tue', 20]]
            }
        }
    }
</script>

<style scoped>

</style>
