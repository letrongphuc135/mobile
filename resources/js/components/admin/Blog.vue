<template>
    <div>
        <button class="btn btn-outline-success float-right" data-toggle="modal"
                data-target="#exampleModal" @click="openBlog()">Add Blog
        </button>
        <h2 class="text-center mb-3">All comment</h2>
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Image</th>
                <th scope="col">Created At</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="(blog, index) in blogs" :key="`${index}-${blog.id}`">
                <th scope="row">{{index+1}}</th>
                <td>{{blog.title}}</td>
                <td v-html="blog.content">{{blog.content}}</td>
                <td v-if="blog.image.length > 0">
                        <img :src="blog.image" style="width: 50px; height: 50px">
                    </td>
                <td v-else>
                    <img src="../../../../public/assets/customer/fashi/img/no-image.jpg" alt=""
                            style="width: 50px; height: 50px">
                </td>
                <td>{{blog.created_at | myDate}}</td>
                <td>
                    <div class="btn-group">
                        <button
                            class="btn btn-outline-warning"
                            data-target="#exampleModal"
                            data-toggle="modal"
                            @click="getBlogById(blog)">Edit
                        </button>
                        <button
                            @click="deleteBlog(blog.id, index)"
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
                            blog</h5>
                        <h5 v-else class="modal-title text-success">Add
                            blog</h5>
                        <button type="button" class="close" data-dismiss="modal"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form  @submit.prevent="editMode ? updateBlog() : addBlog()">
                        <div class="modal-body">

                            <div class="form-group">
                                <input type="text" name="title" v-model="form.title"
                                    placeholder="Enter Title"
                                    class="form-control">    
                            </div>
                            <div class="form-group">
                                <label>Blog Content</label>
                                <ckeditor  v-model="form.content" name="content"></ckeditor>
                                <has-error :form="form" field="content"></has-error>
                            </div>
                            <div class="form-group">
                                <label>Blog Image</label>
                                    <div>
                                        <input type="file" @change="getImage" ref="file" name="file[]" multiple >
                                        <button class="btn btn-success" @click.prevent="clearImage">Clear</button>
                                    </div>
                                    <div v-if="this.UploadImage.length < 1">
                                        <span>
                                            <img :src="Image" alt="" style="height: 80px; height: 80px;margin-top:30px">
                                        </span>
                                    </div>  
                                    <div v-if="this.UploadImage.length > 0">
                                        <span>
                                            <img :src="UploadImage" alt="" style="height: 80px; height: 80px;margin-top:30px">
                                        </span>
                                    </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary"
                                    data-dismiss="modal">Close
                            </button>
                            <button type="submit" class="btn btn-primary">Save change
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
        name: "Blog",
        data() {
            return {
                editMode: false,
                blogs:[],
                Image: [],
                blogData:'',
                UploadImage: [],
                avatar:null,
                filename: null,
                file:'',
                success: '',
                form: new Form({
                    id: '',
                    title:'',
                    content:'',
                }),
                // error: null,
                
            }
        },
        methods: {
            openBlog(){
                this.editMode = false;
                this.form.reset();
                this.clearImage();
            },
             getImage(e){
                let image =  this.$refs.file.files[0];
                var current = this;
                let reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    this.avatar = e.target.result;
                    current.UploadImage.push(current.avatar);

                }
            },
             clearImage(){
                this.avatar = "";
                console.log("aaaaa");
                this.UploadImage = [];
                this.Image = [];
                this.$refs.file.type='text';
                this.$refs.file.type='file';
            },
             getBlogById(blog) {
                 this.editMode = true;
                axios.get('/api/getBlogById/' +blog.id)
                .then(response => {
                    console.log(response.data[0]);
                    this.blogData = response.data[0];
                    this.form.fill(this.blogData);
                    this.Image = this.blogData.image;
                });
            },
            addBlog(e){
                this.isLoading = true;
                const config = {
                    headers: {
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    }
                };
                var current = this;
                let image =this.$refs.file.files[0];
                let formData = new FormData();
                this.file = image;
                formData.append('file',image);
                formData.append('title',current.form.title);
                formData.append('content',current.form.content);
                console.log(formData);
                axios.post('/api/addBlog',formData, config)
                .then(function (response) {
                    console.log(response.data.message);
                    Toast.fire({
                        icon: 'success',
                        title: "Them thanh cong"
                    });
                     $('#exampleModal').modal('hide');
                     Fire.$emit('loadBlog');
                })
                .catch(function (error) {
                    this.isLoading = false;
                    console.log(error);
                });
            },
            updateBlog() {
                this.isLoading = true;
                const config = {
                    headers: {
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    }
                };
                var current = this;
                let image =this.$refs.file.files[0];
                let formData = new FormData();
                this.file = image;
                formData.append('file',image);
                formData.append('title',current.form.title);
                formData.append('content',current.form.content);
                console.log(formData);
                axios.post('/api/editBlog/'+this.form.id,formData, config)
                .then(function (response) {
                    console.log(response.data.message);
                    Toast.fire({
                        icon: 'success',
                        title: "Them thanh cong"
                    });
                     $('#exampleModal').modal('hide');
                    Fire.$emit('loadBlog');
                })
                .catch(function (error) {
                    this.isLoading = false;
                    console.log(error);
                });
            },
            getAllBlog() {
                axios.get('/api/getAllBlog')
                .then(response => {
                    console.log(response.data.blog);
                    this.blogs = response.data.blog;
                })
            },
            deleteBlog(id, index) {
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
                        axios.delete('/api/deleteBlog/' + id)
                        .then(function (resp) {
                            app.comments.splice(index, 1);
                            console.log(resp)
                        })
                        .catch(function (resp) {
                            console.log(resp)
                        });
                    }

                })

            },
           
        },
        created() {
            this.getAllBlog();
            Fire.$on('loadBlog', ()=>{
                this.getAllBlog();
            });
            //setInterval(()=>this.getAllCategory(), 5000);
        }
    }
</script>

<style scoped>

</style>
