<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="form-group">
                    <div v-if="success !== ''" class="alert alert-success" role="alert">
                        {{success}}
                    </div>
                    <label>Product image</label>
                    <div class="custom-file">
                        <input type="file" @change="getImage" name="image">
                        <img :src="avatar" alt="" style="height: 250px; height: 200px">
                    </div>
                    <div>
                        <a href="#" class="btn btn-success" @click.prevent="upload">Upload</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Develop",
        data(){
            return{
                avatar: null,
                filename: null,
                file: null,
                success: '',
            }
        },
        methods:{
            getImage(e){
                let image = e.target.files[0];
                this.file = image;
                this.filename = "Selected File: " + e.target.files[0].name;
                let reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e => {
                    this.avatar = e.target.result;
                }

            },
            upload(){
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    }
                };
                // form data
                let formData = new FormData();
                formData.append('file', this.file);

                // send upload request
                axios.post('/api/upload', formData, config)
                .then(response => {
                    console.log(response.data.success);
                    this.success = response.data.success;
                    this.filename = "";
                })
                .catch(function (error) {
                    console.log(error);
                });
            }

        }
    }
</script>

<style scoped>

</style>
