<template>
    <div>
        <h2 class="text-center mb-3">Add product</h2>
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
</template>

<script>
    export default {
        name: "AddProduct",
        data() {
            return {
                listImage: [],
                avatar: '',
                filename: null,
                file:[],
                success: '',
                data:'',
                editMode: false,
                categories: [],
                productTypes: [],
                products: null,
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
                    promotion: '',
                }),
                categoryId: '',
                editorConfig: {
                    // The configuration of the editor.
                    filebrowserImageBrowseUrl: '/laravel-filemanager?type=Images',
                    filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token=',
                    filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
                    filebrowserUploadUrl: '/laravel-filemanager/upload?type=Files&_token=',
                    autoEmbed_widget: 'customEmbed'
                }
            }
        },
        methods: {
            openProduct(){
                this.editMode = false;
                this.form.reset();
            },
            getImage(e){
                // let image = e.target.files[0];
                // this.file = image;
                // this.filename = "Selected File: " + e.target.files[0].name;
                // let reader = new FileReader();
                // reader.readAsDataURL(image);
                // reader.onload = e => {
                //     this.avatar = e.target.result;
                // }
                let image = this.$refs.file.files;
                var current = this;
               
                for(let i=0;i<image.length;i++){
                    let reader = new FileReader();
                    reader.readAsDataURL(image[i]);
                    reader.onload = e => {
                        current.avatar = e.target.result;
                         current.listImage.push(current.avatar);
                    }
                      console.log(this.avatar);
                     
                }
              
            },
             clearImage(){
                this.avatar = "";
                console.log("aaaaa");
                this.listImage = [];
            },
            addProduct() {
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    }
                };
                var current = this;
                let formData = new FormData();
                let image =this.$refs.file.files;
                this.file = image;
                for(let i=0;i<image.length;i++){
                    formData.append('file[]',image[i]);
                }
                formData.append('name',current.form.name);
                formData.append('description',current.form.description);
                formData.append('quantity',current.form.quantity);
                formData.append('price',current.form.price);
                formData.append('promotion',current.form.promotion);
                formData.append('idCategory',current.form.idCategory);
                formData.append('idProductType',current.form.idProductType);
                formData.append('status',current.form.status);
                 axios.post('/api/admin/product',formData, config)
                .then(function (response) {
                    console.log(response.data.message);
                    current.$router.push({path: '/admin/product'});
                    Toast.fire({
                        icon: 'success',
                        title: "Them thanh cong"
                    });
                   
                })
                .catch(function (error) {
                    console.log(error);
                });
                // this.form.post('/api/admin/product', this.form,formData,config)
                // .then(function (response) {
                //     console.log(response.data.data);
                //     this.data = response.data.data;
                //     Toast.fire({
                //         icon: 'success',
                //         title: response.data.message
                //     });
                //     $('#exampleModal').modal('hide');
                //     Fire.$emit('afterSaveChange');
                // })
                // .catch(function (error) {
                //     console.log(error);
                // })
            },
            getAllProductType(id) {
                this.form.idProductType = -1;
                axios.get('/api/getProductTypeByCategoryId/'+ id)
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
        },
        created() {
            this.getAllCategory();
            this.getAllProductType();
            // setInterval(()=>this.getAllCategory(), 5000);
        }
    }
</script>

<style scoped>

</style>
