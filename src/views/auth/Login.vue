<template>
    <v-container class="fill-height primary" fluid>
        <v-row justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Login" v-model.trim="email" name="login" prepend-icon="mdi-account"
                                type="text">
                            </v-text-field>
                            <v-text-field id="password" v-model.trim="password" label="Password" name="password"
                                prepend-icon="mdi-lock" type="password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="handleLogin">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            handleLogin: function () {
                let email = this.email
                let password = this.password
                this.$store.dispatch('login', { email, password })
                    .then(() => this.$router.push('/dashboard'))
                    .catch(err => console.log(err))
            },
            handleGithubLogin: function () {

            }
        },
    }
</script>