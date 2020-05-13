<template>
    <div>
        <!-- Breadcrumb Section Begin -->
        <div class="breacrumb-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-text">
                            <a href="#"><i class="fa fa-home"></i> Home</a>
                            <span>Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Breadcrumb Form Section Begin -->

        <!-- Register Section Begin -->
        <div class="register-login-section spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="login-form">
                            <h2>Login</h2>
                            <form @submit.prevent="login">
                                <div class="group-input">
                                    <label for="username">Username or email address *</label>
                                    <input type="email" id="username" name="email" v-model="form.email">
                                </div>
                                <div class="group-input">
                                    <label for="pass">Password *</label>
                                    <input type="password" id="pass" name="password" v-model="form.password">
                                </div>
                                <div class="group-input gi-check">
                                    <div class="gi-more">
                                        <label for="save-pass">
                                            Save Password
                                            <input type="checkbox" id="save-pass">
                                            <span class="checkmark"></span>
                                        </label>
                                        <router-link to="/admin/email" style="margin-left: 300px;">Forget your Password</router-link>
                                    </div>
                                </div>
                                <button type="submit" class="site-btn login-btn">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginAdmin",
        data() {
            return {
                form: new Form({
                    email:'',
                    password:'',
                }),
            }
        },
        methods: {
            login() {
                var current = this;
                 axios.post('/api/login', this.form)
                .then(response => {
                    console.log(response.data.data);
                    let auth = response.data.data;
                    
                    if (!auth || auth.length === 0) {
                            Toast.fire({
                            icon: 'error',
                            title: response.data.message
                        });
                    }else{
                        this.$store.commit('login', auth);
                        Toast.fire({
                        icon: 'success',
                        title: response.data.message
                     });
                     current.$router.push({path:'/admin/dashboard'});
                    }
                    $('#exampleModal').modal('hide');
                    Fire.$emit('afterSaveChange');
                })
                .catch(function (error) {
                    console.log(error);
                })
            },
        },

        created() {
        }
    }
</script>

<style scoped>

</style>