<template>
    <div>
        <button class="btn btn-outline-success float-right" data-toggle="modal"
                data-target="#exampleModal" @click="openProductType()">Add product type
        </button>
        <h2 class="text-center mb-3">All product type</h2>
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Created At</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="(productType, index) in productTypes" :key="`${index}-${productType.id}`">
                <th scope="row">{{index+1}}</th>
                <td>{{productType.name}}</td>
                <td>{{productType.created_at | myDate}}</td>
                <td>
                    <div class="btn-group">
                        <button
                            class="btn btn-outline-warning" style="color: #ffc107; border-color: #ffc107"
                            data-target="#exampleModal"
                            data-toggle="modal"
                            @click="getProductTypeById(productType)">Edit
                        </button>
                        <button
                            @click="deleteProductType(productType.id, index)"
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
                    <form @submit.prevent="editMode ? updateProductType() : addProductType()">
                        <div class="modal-body">

                            <div class="form-group">
                                <label>Category name</label>
                                <input v-model="form.name" type="text" name="name"
                                       class="form-control"
                                       :class="{ 'is-invalid': form.errors.has('name') }">
                                <has-error :form="form" field="name"></has-error>
                            </div>
                            <div class="form-group">
                                <label>Product category</label>
                                <select class="form-control" id="exampleFormControlSelect1" v-model="form.idCategory"
                                        :class="{ 'is-invalid': form.errors.has('idCategory') }">
                                    <option :value=-1>----- Select a category -----</option>
                                    <option v-for="(category, index) in categories" :key="index" :value="category.id">{{category.name}}</option>
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
                product: [],
                form: new Form({
                    id: '',
                    idCategory: -1,
                    name: '',
                    status: 1,
                    created_at: ''
                }),
            }
        },
        methods: {
            openProductType(){
                this.editMode = false;
                this.form.reset();
            },
            addProductType() {
                if (this.idCategory < 0){
                    this.idCategory = null;
                }
                this.form.post('/api/admin/producttype', this.form)
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
            getAllProductType() {
                axios.get('/api/admin/producttype')
                .then(response => {
                    console.log(response.data);
                    this.productTypes = response.data;
                })
            },
            getAllCategory() {
                axios.get('/api/admin/category')
                .then(response => {
                    console.log(response.data);
                    this.categories = response.data;
                })
            },
            deleteProductType(id, index) {
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
            getProductTypeById(producttype) {
                this.editMode = true;
                this.form.clear();
                $('#exampleModal').modal('show');
                this.form.fill(producttype);
            },
            updateProductType() {
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
            Fire.$on('afterSaveChange', ()=>{
                this.getAllProductType();
            });
            // setInterval(()=>this.getAllCategory(), 5000);
        }
    }
</script>

<style scoped>

</style>
