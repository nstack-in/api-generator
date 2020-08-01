<template>
    <div class="d-flex justify-content-center">
        <div style="max-width:450px;" class="my-4">
            <div>

                <div class="alert alert-danger" v-if="error.status">
                    {{error.message}}
                </div>

                <div class="card">

                    <div class=" card-header" style="min-width:450px;">
                        Login form
                    </div>

                    <progress class="pure-material-progress-linear" v-if="loading" />
                    <div class="card-body">

                        <div class="mb-3">
                            <label for="name" class="form-label">Your Name</label>
                            <input id="name" class="form-control" v-model.trim="name" name="name" type="text" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input id="email" class="form-control" v-model.trim="email" name="login" type="text" />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Your Password</label>

                            <input id="password" class="form-control" v-model.trim="password" name="password"
                                type="password" />
                        </div>
                        <button class="btn btn-block btn-primary" :disabled="loading"
                            @click="handleLogin">Register</button>
                    </div>


                </div>
                <p class="text-center my-4">
                    I am already registered user
                </p>

                <div class="mt-4">
                    <router-link class="btn btn-secondary btn-block" to="/login">Already Account! Login</router-link>
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
                name: "Nitish Kumar",
                email: "admini@gmail.com",
                password: "admin",
                loading: false,
                error: {
                    status: false,
                    message: null
                },
            }
        },
        methods: {
            handleLogin: function () {
                this.loading = true;
                let name = this.name
                let email = this.email
                let password = this.password
                this.$store.dispatch('register', { name, email, password })
                    .then(() => {
                        this.loading = false;
                        this.$router.push('/login?register=success');
                    })
                    .catch((err) => {

                        this.loading = false;
                        if (err)
                            this.error = true
                    })
            },
            handleGithubLogin: function () {

            }
        },
    }
</script>