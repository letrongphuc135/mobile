<template>
    <div>
        <router-link to="/admin/add-product">
            <button class="btn btn-outline-success float-right" data-toggle="modal"
                    data-target="#exampleModal">Add product
            </button>
        </router-link>

        <h2 class="text-center mb-3">All product type</h2>
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Image</th>
                <th scope="col">Promotion</th>
                <th scope="col">Category</th>
                <th scope="col">Product type</th>
                <th scope="col">Created At</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="(product, index) in products" :key="`${index}-${product.id}`">
                <th scope="row">{{index+1}}</th>
                <td>{{product.name}}</td>
                <td>{{product.quantity}}</td>
                <td v-if="product.product_img.length > 0">
                    <img :src="product.product_img[0].url" style="width: 50px; height: 50px">
                </td>
                <td v-else>
                    <img src="../../../../public/assets/customer/fashi/img/no-image.jpg" alt="" style="width: 50px; height: 50px">
                </td>
                <td>{{product.promotion}}</td>
                <td>{{product.category.name}}</td>
                <td>{{product.product_type.name}}</td>
                <td>{{product.created_at | myDate}}</td>
                <td>
                    <div class="btn-group">
                        <router-link
                            :to="{name: 'edit-product', params:{id: product.id}}"
                            class="btn btn-outline-warning">Edit
                        </router-link>
                        <button
                            @click="deleteProductType(product.id, index)"
                            class="btn btn-outline-danger">Delete
                        </button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    // import ('../../../../node_modules/admin-lte/dist/css/adminlte.min.css');
    // import ('../../../../node_modules/admin-lte/dist/js/adminlte.js');
    // import ('../../../../node_modules/admin-lte/plugins/fontawesome-free/css/all.css');
    export default {
        name: "Product",
        data() {
            return {
                editMode: false,
                categories: [],
                productType: null,
                category: null,
                products: [],
                form: new Form({
                    id: '',
                    idCategory: -1,
                    name: '',
                    status: 1,
                    created_at: '',
                    idProductType: -1,
                    description: '',
                    quantity: '',
                    price: '',
                    image: '',
                    promotion: '',
                }),
                categoryId: '',
            }
        },
        methods: {
            openProduct(){
                this.editMode = false;
                this.form.reset();
            },
            addProduct() {
                if (this.idCategory < 0){
                    this.idCategory = null;
                }
                this.form.post('/api/admin/product', this.form)
                .then(function (response) {
                    console.log(response);
                    Toast.fire({
                        icon: 'success',
                        title: response.data.message
                    });
                    $('#exampleModal').modal('hide');
                    Fire.$emit('afterSaveChange');
                })
                .catch(function (error) {
                    console.log(error);
                })
            },
            getAllProduct() {
                axios.get('/api/getAllProduct')
                .then(response => {
                    console.log(response.data);
                    this.products = response.data.product;
                })
            },
            deleteProduct(id, index) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        var app = this;
                        axios.delete('/api/admin/producttype/' + id)
                        .then(function (resp) {
                            app.categories.splice(index, 1);
                            console.log(resp)
                        })
                        .catch(function (resp) {
                            alert("Could not delete company");
                            console.log(resp)
                        });
                    }

                })
            },
            getProductById(producttype) {
                this.editMode = true;
                this.form.clear();
                $('#exampleModal').modal('show');
                this.form.fill(producttype);
            },
            updateProduct() {
                this.form.put('/api/admin/producttype/'+this.form.id)
                .then(function (response) {
                    console.log(response);
                    Toast.fire({
                        icon: 'success',
                        title: 'update successfully'
                    });
                    $('#exampleModal').modal('hide');
                    Fire.$emit('afterSaveChange');
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        },
        created() {
            this.getAllProduct();
            // Fire.$on('afterSaveChange', ()=>{
            //     this.getAllProduct();
            // });
            // setInterval(()=>this.getAllCategory(), 5000);
        }
    }
</script>

<style scoped>

</style>
