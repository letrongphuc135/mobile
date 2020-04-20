<template>
    <div>
        <h2 class="text-center mb-3">Add product</h2>
        <form @submit.prevent="updateProduct()">
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
                    <ckeditor :config="editorConfig" v-model="form.description"></ckeditor>

                </div>
                <div class="form-group">
                    <label>Product price</label>
                    <input type="number" name="" v-model="form.price"
                           placeholder="Enter price"
                           class="form-control">
                </div>
                <div class="form-group">
                    <label>Product promotion</label>
                    <input type="number" name="category_name" v-model="form.promotion"
                           placeholder="Enter promotion"
                           class="form-control">
                </div>
                <div class="form-group">
                    <label>Product Quantity</label>
                    <input type="number" name="category_name" v-model="form.quantity"
                           placeholder="Enter quantity"
                           class="form-control">
                </div>
                <div class="form-group">
                        <label>Product Image</label>
                        <div>
                            <input type="file" @change="getImage" ref="file" name="file[]" multiple >
                            <button class="btn btn-success" @click.prevent="clearImage">Clear</button>
                        </div>
                        <span  v-for="(img, index) in listImage" :key="index">
                            <img :src="img" alt="" style="height: 80px; height: 80px;margin-top:30px">
                        </span>
                </div>
                <!--<div class="form-group">-->
                    <!--<label>Product image</label>-->
                    <!--<div class="custom-file">-->
                        <!--<input type="file" class="custom-file-input" id="validatedCustomFile" required>-->
                        <!--<label class="custom-file-label" for="validatedCustomFile">Choose file...</label>-->
                        <!--<div class="invalid-feedback">Example invalid custom file feedback</div>-->
                    <!--</div>-->
                <!--</div>-->
                <div class="form-group">
                    <label>Product category</label>
                    <select class="form-control" id="exampleFormControlSelect1" v-model="form.idCategory"
                            :class="{ 'is-invalid': form.errors.has('idCategory') }" @change.prevent="getAllProductType(form.idCategory)">
                        <option :value=-1>----- Select a category -----</option>
                        <option v-for="(category, index) in categories" :key="index" :value="category.id">{{category.name}}</option>
                    </select>
                    <has-error :form="form" field="idCategory"></has-error>
                </div>
                <div class="form-group">
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
</template>

<script>
    export default {
        name: "EditProduct",
        data() {
            return {
                editMode: false,
                categories: [],
                productTypes: [],
                product: null,
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
                editorConfig: {
                    // The configuration of the editor.
                    filebrowserImageBrowseUrl: '/laravel-filemanager?type=Images',
                    filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token=',
                    filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
                    filebrowserUploadUrl: '/laravel-filemanager/upload?type=Files&_token='
                }
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
            getProductById() {
                let id = this.$route.params.id;
                axios.get('/api/admin/product/' +id)
                .then(response => {
                    console.log(response.data);
                    this.product = response.data.product;
                    this.form.fill(this.product);
                    this.getAllProductType(this.product.idCategory);
                });

            },
            getAllProductType(id) {
                // this.form.idProductType = -1;
                axios.get('/api/getProductTypeByCategoryId/'+ id)
                .then(response => {
                    console.log(response.data);
                    this.productTypes = response.data.product_type;
                });
            },
            getAllCategory() {
                axios.get('/api/admin/category')
                .then(response => {
                    console.log(response.data);
                    this.categories = response.data;
                })
            },
            updateProduct() {
                const current = this;
                this.form.put('/api/admin/product/'+this.form.id)
                .then(function (response) {
                    console.log(response);
                    current.$router.push({path: '/admin/product'});
                    Toast.fire({
                        icon: 'success',
                        title: 'update successfully'
                    });

                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        },
        created() {
            this.getProductById();
            this.getAllCategory();
            this.getAllProductType();
            Fire.$on('afterSaveChange', ()=>{
                this.getAllProductType();
            });
            // setInterval(()=>this.getAllCategory(), 5000);
        }
    }
</script>

<style scoped>

</style>
