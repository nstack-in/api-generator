<template>
    <div class="d-flex justify-content-center ">
        <div style="max-width:450px;" class="my-4">
            <div>

                <div class="alert alert-danger" v-if="error">
                    Invalid Login Credential
                </div>

                <div class="alert alert-danger" v-if="getMessage">
                    {{ this.$route.query['message'] }}
                </div>

                <div class="alert alert-success" v-if="successRegister">
                    Account Crated Successfully, Please Login
                </div>
                <div class="card " style="max-width:450px;">

                    <div class="card-header" style="min-width:450px;">
                        Login form

                    </div>
                    <progress class="pure-material-progress-linear" v-if="loading" />
                    <div class="card-body">

                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input id="email" class="form-control" v-model.trim="email" name="login" type="text" />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Your Password</label>

                            <input id="password" class="form-control" v-model.trim="password" name="password"
                                type="password" />
                        </div>
                        <button class="ml-auto btn-block btn btn-primary" :disabled="loading"
                            @click="handleLogin">Login</button>
                    </div>

                </div>

                <p class="text-center my-4">
                    I am new here
                </p>
                <div class="mt-4">
                    <router-link class="btn btn-secondary btn-block" to="/register"> I am New! Login</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                email: "admini@gmail.com",
                password: "admin",
                loading: false,
                error: false,
            }
        },
        methods: {
            handleLogin: function () {
                this.loading = true;
                let email = this.email
                let password = this.password
                this.$store.dispatch('login', { email, password })
                    .then(() => {
                        this.loading = false;
                        this.$router.push('/home');
                    })
                    .catch((err) => {
                        this.loading = false;
                        if (err)
                            this.error = true
                    })
            },
            handleGithubLogin: function () {
            },

        },

        computed: {
            successRegister() {
                return this.$route.query['register'] == "success";
            },
            getMessage() {
                return this.$route.query['message'] !=null ;
            }
        },
    }
</script>