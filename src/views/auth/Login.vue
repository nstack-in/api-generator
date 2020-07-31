<template>
    <v-container class="fill-height primary" fluid>
        <v-row justify="center">
            <v-col cols="12" sm="10" md="6" lg=4>

                <v-alert type="error" v-if="error">
                    Invalid Login Credential
                </v-alert>

                <v-alert v-if="successRegister">
                    Account Crated Successfully, Please Login
                </v-alert>
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark text>
                        <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>
                    <v-progress-linear v-if="loading" :size="30" color="secondary" indeterminate></v-progress-linear>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Login" v-model.trim="email" name="login" prepend-icon="mdi-account"
                                type="text">
                            </v-text-field>
                            <v-text-field id="password" v-model.trim="password" label="Password" name="password"
                                prepend-icon="mdi-lock" type="password"></v-text-field>
                        </v-form>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" :disabled="loading" @click="handleLogin">Login</v-btn>
                        </v-card-actions>
                    </v-card-text>

                </v-card>


                <div class="mt-4">
                    <v-btn block to="/register"> I am New! Login</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                email: "nitishk73@gmail.cmo",
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
                        this.$router.push('/dashboard');
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
            }
        },
    }
</script>