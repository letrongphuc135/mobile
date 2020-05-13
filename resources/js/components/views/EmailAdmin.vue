<template>
    <div id="public">
        <!-- Page Preloder -->
        <!--<div id="preloder">-->
            <!--<div class="loader"></div>-->
        <!--</div>-->
        <EmailAdmin></EmailAdmin>
    </div>
</template>

<script>
    import EmailAdmin from "../admin/auth/EmailAdmin";


    export default {
        name: "EmailAdmin",
        components: {EmailAdmin}
    }
</script>

<style scoped>

</style>
