<template>
    <div>
        <button class="btn btn-outline-success float-right" data-toggle="modal"
                data-target="#exampleModal" @click="openAddCategory()">Add category
        </button>
        <h2 class="text-center mb-3">All category</h2>
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Slug</th>
                <th scope="col">Created At</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="(category, index) in categories" :key="`${index}-${category.id}`">
                <th scope="row">{{index+1}}</th>
                <td>{{category.name}}</td>
                <td>{{category.slug}}</td>
                <td>{{category.created_at | myDate}}</td>
                <td>
                    <div class="btn-group">
                        <button
                            class="btn btn-outline-warning" style="color: #ffc107; border-color: #ffc107"
                            data-target="#exampleModal"
                            data-toggle="modal"
                            @click="getCategoryById(category)">Edit
                        </button>
                        <button
                            @click="deleteCategroy(category.id, index)"
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
                    <form @submit.prevent="editMode ? updateCategory() : addCategory()">
                        <div class="modal-body">

                            <div class="form-group">
                                <label>Category name</label>
                                <input v-model="form.name" type="text" name="name"
                                       class="form-control"
                                       :class="{ 'is-invalid': form.errors.has('name') }">
                                <has-error :form="form" field="name"></has-error>
                            </div>
                            <div class="form-group">
                                <label>Category slug</label>
                                <input v-model="form.slug" type="text" name="name"
                                       class="form-control"
                                       :class="{ 'is-invalid': form.errors.has('slug') }">
                                <has-error :form="form" field="name"></has-error>
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
        name: "Category",
        data() {
            return {
                editMode: false,
                categories: [],
                form: new Form({
                    id: '',
                    name: '',
                    status: 1,
                    slug: '',
                    created_at: ''
                }),
                error: null
            }
        },
        methods: {
            openAddCategory(){
                this.editMode = false;
                this.form.reset();
            },
            addCategory() {
                this.form.post('/api/admin/category', this.form)
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
            getAllCategory() {
                axios.get('/api/admin/category')
                .then(response => {
                    console.log(response.data);
                    this.categories = response.data;
                })
            },
            deleteCategroy(id, index) {
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
                        axios.delete('/api/admin/category/' + id)
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
            getCategoryById(category) {
                this.editMode = true;
                this.form.clear();
                $('#exampleModal').modal('show');
                this.form.fill(category);
            },
            updateCategory() {
                this.form.put('/api/admin/category/'+this.form.id)
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
            Fire.$on('afterSaveChange', ()=>{
                this.getAllCategory();
            });
            // setInterval(()=>this.getAllCategory(), 5000);
        }
    }
</script>

<style scoped>

</style>
