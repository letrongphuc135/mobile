<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                 <div class="form-group">
                    <label>Product image</label>
                      <strong>File:</strong>
                      <input  type="file" class="form-control" name="file" ref="file" @change="sentFile" accept="image/*">
                      <div><img :src="file" height="300px"></div>
                      <button class="btn btn-success" @click.prevent="upload">Submit</button>   
                </div>               
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Develop",
        props:['user'],
        data() {
            return {
              file:this.file, 
            }
        },
       methods: {
            sentFile(e){
               let image = e.target.files[0];
                let reader=new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.file =e.target.result; 
                }
           },
           upload(){
               axios.post('/api/upload',{'image':this.file})
           }
        }
    }
</script>

<style scoped>

</style>
