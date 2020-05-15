<template>
    <div id="public">
        <!-- Page Preloder -->
        <!--<div id="preloder">-->
            <!--<div class="loader"></div>-->
        <!--</div>-->
        <LoginAdmin></LoginAdmin>
    </div>
</template>

<script>
    import LoginAdmin from "../admin/auth/LoginAdmin";


    export default {
        name: "FormLogin",
        components: {LoginAdmin}
    }
</script>

<style scoped>

</style>
