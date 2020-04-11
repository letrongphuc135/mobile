<template>
    <div>
        <button class="btn btn-outline-success float-right" data-toggle="modal"
                data-target="#exampleModal" @click="openProduct()">Add product
        </button>
        <h2 class="text-center mb-3">All product type</h2>
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Image</th>
                <th scope="col">Promotion</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Name</th>
                <th scope="col">Created At</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="(product, index) in products" :key="`${index}-${product.id}`">
                <th scope="row">{{index+1}}</th>
                <td>{{product.name}}</td>
                <td>{{product.created_at | myDate}}</td>
                <td>
                    <div class="btn-group">
                        <button
                            class="btn btn-outline-warning" style="color: #ffc107; border-color: #ffc107"
                            data-target="#exampleModal"
                            data-toggle="modal"
                            @click="getProductTypeById(product)">Edit
                        </button>
                        <button
                            @click="deleteProductType(product.id, index)"
                            class="btn btn-outline-danger">Delete
                        </button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 v-if="editMode" class="modal-title text-success">Edit
                            category</h5>
                        <h5 v-else class="modal-title text-success">Add
                            category</h5>
                        <button type="button" class="close" data-dismiss="modal"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="editMode ? updateProduct() : addProduct()">
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Product name</label>
                                <input v-model="form.name" type="text" name="name"
                                       class="form-control"
                                       :class="{ 'is-invalid': form.errors.has('name') }">
                                <has-error :form="form" field="name"></has-error>
                            </div>
                            <div class="form-group">
                                <label>Product description</label>
                                <textarea></textarea>
                            </div>
                            <div class="form-group">
                                <label>Product price</label>
                                <input type="number" name=""
                                       placeholder="Enter price"
                                       class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Product promotion</label>
                                <input type="number" name="category_name"
                                       placeholder="Enter promotion"
                                       class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Product image</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="validatedCustomFile" required>
                                    <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                                    <div class="invalid-feedback">Example invalid custom file feedback</div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Product category</label>
                                <select class="form-control" id="exampleFormControlSelect1" v-model="form.idCategory"
                                        :class="{ 'is-invalid': form.errors.has('idCategory') }" @change.prevent="getAllProductType(form.idCategory)">
                                    <option :value=-1>----- Select a category -----</option>
                                    <option v-for="(category, index) in categories" :key="index" :value="category.id">{{category.name}}</option>
                                </select>
                                <has-error :form="form" field="idCategory"></has-error>
                            </div>
                            <div class="form-group" v-if="this.productTypes.length > 0">
                                <label>Product category</label>
                                <select class="form-control"  v-model="form.idProductType"
                                        :class="{ 'is-invalid': form.errors.has('idCategory') }">
                                    <option :value=-1>----- Select a product type -----</option>
                                    <option v-for="(productType, index) in productTypes" :key="index" :value="productType.id">{{productType.name}}</option>
                                </select>
                                <has-error :form="form" field="idCategory"></has-error>
                            </div>
                            <fieldset class="form-group">
                                <div class="row">
                                    <legend class="col-form-label col-sm-2 pt-0">Status</legend>
                                    <div class="col-sm-10">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio"
                                                   name="publication_status"
                                                   id="publication_status" value="1"
                                                   v-model="form.status" checked>
                                            <label class="form-check-label"
                                                   for="publication_status">
                                                Published
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio"
                                                   name="publication_status"
                                                   id="unpublished" value="0"
                                                   v-model="form.status">
                                            <label class="form-check-label" for="unpublished">
                                                Unpublished
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary"
                                    data-dismiss="modal">Close
                            </button>
                            <button type="submit" class="btn btn-primary">Save
                                changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Product",
        data() {
            return {
                editMode: false,
                categories: [],
                productTypes: [],
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
                axios.get('/api/admin/product')
                .then(response => {
                    console.log(response.data);
                    this.product = response.data;
                })
            },
            getAllProductType(id) {
                this.form.idProductType = -1;
                axios.post('/api/getProductTypeByCategoryId/'+ id)
                .then(response => {
                    console.log(response.data);
                    this.productTypes = response.data.product_type;
                })
            },
            getAllCategory() {
                axios.get('/api/admin/category')
                .then(response => {
                    console.log(response.data);
                    this.categories = response.data;
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
            this.getAllCategory();
            this.getAllProductType();
            this.getAllProduct();
            Fire.$on('afterSaveChange', ()=>{
                this.getAllProductType();
            });
            // setInterval(()=>this.getAllCategory(), 5000);
        }
    }
</script>

<style scoped>

</style>
