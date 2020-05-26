<template>
    <div>
        <section class="blog-section spad">
        <div class="container">
            <div class="row" style="width:100%">
                <div class="col-lg-9 order-1 order-lg-2" style="margin-left: 165px;">
                    <div class="row" >
                        <div class="col-lg-6 col-sm-6" v-for="(blog, index) in blogs" :key="`${index}-${blog.id}`"> 
                            <div class="blog-item">
                                <div class="bi-pic">
                                    <img :src="blog.image" alt="">
                                </div>
                                <div class="bi-text">
                                    <router-link :to="{ name: 'blog-detail', params: { slug: blog.slug} }">
                                        <h4>{{blog.title}}</h4>
                                    </router-link>
                                    <p>Xuân Nam <span>{{blog.created_at}}</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="loading-more">
                                <i class="icon_loading"></i>
                                <a href="#">
                                    Loading More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
    export default {
        name: "Blog",
        data() {
            return {
                blogs:[],
            }
        },
        methods: {
            getAllBlog() {
                axios.get('/api/getAllBlog/')
                .then(response => {
                    console.log(response.data.blog);
                    this.blogs = response.data.blog;
                })
            },
        
        },
        created() {
            this.getAllBlog();
            Fire.$on('onloadlistblog', ()=>{
                this.getAllBlog();
            });
        }
    }
</script>

<style scoped>

</style>
