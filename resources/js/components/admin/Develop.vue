<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Product image</label>
                    <div class="custom-file">
                        <input type="file" @change="getImage" name="image">
                        <img :src="avatar" alt="">
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
            }
        },
        methods:{
            getImage(e){
                let image = e.target.files[0];
                let reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.avatar = e.target.result;
                    console.log(this.avatar);
                }

            }
        }
    }
</script>

<style scoped>

</style>
