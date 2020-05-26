<template>
    <div>
        {{blogs.content}}
    </div>
</template>

<script>
    export default {
        name: "Blog",
        data() {
            return {
                blogs:'',
            }
        },
        methods: {
            getBlogBySlug() {
                Fire.$emit('onloadblog');
                this.isLoading = true;
                // var myCookie = document.cookie;
                // console.log("myCookie" + myCookie);
                var slug = this.$route.params.slug;
                axios.get('/api/getBlogBySlug/' + slug)
                .then(response => {
                    console.log(response.data.blog);
                    this.blogs = response.data.blog;
                })
            },
        
        },
        created() {
            this.getBlogBySlug();
            Fire.$on('onloadblog', ()=>{
                this.getBlogBySlug();
            });
        }
    }
</script>

<style scoped>

</style>
