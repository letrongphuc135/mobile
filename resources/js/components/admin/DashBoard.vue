<template>
    <div>
        <h3>Số lượng sản phẩm khách hàng đã đặt</h3>
        <column-chart :data="chartOrder" :max="50"></column-chart>
    </div>
</template>

<script>
    export default {
        name: "DashBoard",
        data(){
            return{
                chartData: [['2020-05-02 15:24:05', 10], ['2020-05-02 15:24:05', 20]],
                order:[],
                chartOrder: [],
                test: [['Sun', 32], ['Mon', 46], ['Tue', 28]]
            }
        },
        methods:{
            getOrder(){
                axios.get('/api/admin/order')
                .then(response => {
                    console.log(response.data);
                    this.chartData = response.data;
                    for(var i = 0; i < this.chartData.length; i++){
                        this.order = [];
                        this.order.push(this.chartData[i].created_at);
                        this.order.push(this.chartData[i].quantity);
                        console.log("created_at" + this.chartData[i].created_at);
                        console.log("quantity" + this.chartData[i].quantity);
                        this.chartOrder.push(this.order);
                    }
                })
            },
        },
        created() {
            this.getOrder();
        }
    }
</script>

<style scoped>

</style>
