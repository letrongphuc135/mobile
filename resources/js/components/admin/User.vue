<template>
    <div>
       <router-link to="/admin/add-user">
            <button class="btn btn-outline-success float-right" data-toggle="modal"
                    data-target="#exampleModal">Add user
            </button>
        </router-link>
        <h2 class="text-center mb-3">All User</h2>
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Created At</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="(user, index) in users" :key="`${index}-${user.id}`">
                <th scope="row">{{index+1}}</th>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.created_at | myDate}}</td>
                <td>
                    <div class="btn-group">
                         <!-- <router-link
                            :to="{name: 'edit-user', params:{id: user.id}}"
                            class="btn btn-outline-warning">Edit
                        </router-link> -->
                        <button
                            class="btn btn-outline-warning"
                            data-target="#exampleModal"
                            data-toggle="modal"
                            @click="getUserById(user)">Edit
                        </button>
                        <button
                            @click="deleteComment(comment.id, index)"
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
                        <h5 class="modal-title text-success">Reply Comment</h5>
                        <button type="button" class="close" data-dismiss="modal"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <h2 class="text-center mb-3">Edit User</h2>
        <form @submit.prevent="addUser">
            <div class="modal-body">
                <div class="form-group">
                    <label>Name</label>
                    <input v-model="form.name" type="text" name="name"
                           class="form-control"
                           :class="{ 'is-invalid': form.errors.has('name') }">
                    <has-error :form="form" field="name"></has-error>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input v-model="form.email" type="text" name="email"
                           class="form-control"
                           :class="{ 'is-invalid': form.errors.has('email') }">
                    <has-error :form="form" field="name"></has-error>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input v-model="form.password" type="password" name="password"
                           class="form-control"
                           :class="{ 'is-invalid': form.errors.has('password') }">
                    <has-error :form="form" field="password"></has-error>
                </div>
                <div class="form-group">
                    <label>Comfim Password</label>
                    <input v-model="form.re_password" type="password" name="re_password"
                           class="form-control"
                           :class="{ 'is-invalid': form.errors.has('re_password') }">
                    <has-error :form="form" field="re_password"></has-error>
                </div>
                 <label>Role</label>
                <select class="form-group" style="width: 100%; height: 45px; border-radius: 5px;" name="role[]" v-model="form.role" multiple > 
                    <option  v-for="(role, index) in roles" :key="`${index}-${role.id}`" v-bind:value="role.id">{{ role.dislay_name }}</option>
                </select>
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
    </div>
</template>

<script>
    export default {
        name: "User",
        data() {
            return {
                editMode: false,
                users:[],
                user: null,
                form: new Form({
                    id: '',
                    name: '',
                    email: '',
                    password: '',
                    re_password: '',
                    role:[],
                }),
                // error: null,
                
            }
        },
        methods: {
            openUser(){
                this.editMode = false;
                this.form.reset();
            },
            getAllUser() {
                axios.get('/api/getAllUser')
                .then(response => {
                    console.log(response.data.user);
                    this.users = response.data.user;
                })
            },
             getUserById(user) {
                this.editMode = true;
                this.form.clear();
                $('#exampleModal').modal('show');
                this.form.fill(user);
            },
        },
        created() {
            this.getAllUser();
            // //this.getAllCategory();
            // Fire.$on('afterSaveChange', ()=>{
            //     this.getAllComment();
            // });
           
            // setInterval(()=>this.getAllCategory(), 5000);
        }
    }
</script>

<style scoped>

</style>
