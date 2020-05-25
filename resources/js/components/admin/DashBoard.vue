<template>
    <div class="row">
        <div class="form-group col-sm">
            <h4>Số lượng sản phẩm khách hàng đã đặt trong 7 ngày</h4>
            <column-chart :data="chartOrder" :max="50"></column-chart>
        </div>
        <div class="form-group col-sm">
            <h4>Số lượng sản phẩm đã vận chuyển trong 7 ngày</h4>
            <column-chart :data="chartShip" :max="50"></column-chart>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: "DashBoard",
        data() {
            return {
                chartData: [['2020-05-02 15:24:05', 10], ['2020-05-02 15:24:05', 20]],
                order: [],
                chartOrder: [],
                chartShip: [],
            }
        },
        methods: {
            getOrder() {
                axios.get('/api/admin/order')
                .then(response => {
                    console.log(response.data);
                    this.chartData = response.data;
                    for (var i = 0; i < this.chartData.length; i++) {
                        this.order = [];
                        this.order.push(moment(this.chartData[i].created_at).format('DD-MM'));
                        this.order.push(this.chartData[i].quantity);
                        console.log(
                            "created_at" + moment(this.chartData[i].created_at).format('DD-MM'));
                        console.log("quantity" + this.chartData[i].quantity);
                        this.chartOrder.push(this.order);
                    }
                })
            },
            getShip() {
                axios.get('/api/getChartShip')
                .then(response => {
                    console.log(response.data);
                    this.chartData = response.data;
                    for (var i = 0; i < this.chartData.length; i++) {
                        this.order = [];
                        this.order.push(moment(this.chartData[i].created_at).format('DD-MM'));
                        this.order.push(this.chartData[i].quantity);
                        console.log(
                            "created_at" + moment(this.chartData[i].created_at).format('DD-MM'));
                        console.log("quantity" + this.chartData[i].quantity);
                        this.chartShip.push(this.order);
                    }
                })
            },
        },
        created() {
            this.getOrder();
            this.getShip();
        }
    }
</script>

<style scoped>

</style>
