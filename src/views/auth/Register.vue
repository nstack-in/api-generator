<template>
    <v-container class="fill-height primary" fluid>
        <v-row justify="center">
            <v-col cols="12" sm="10" md="6" lg=4>

                <v-alert type="error" v-if="error.status">
                    {{error.message}}
                </v-alert>
                <v-card class="elevation-6">
                    <v-toolbar color="primary" class="elevation-0" dark text>
                        <v-toolbar-title>Register form</v-toolbar-title>
                    </v-toolbar>
                    <v-progress-linear v-if="loading" :size="30" color="secondary" indeterminate></v-progress-linear>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Name" v-model.trim="name" name="login" prepend-icon="mdi-account"
                                type="text">
                            </v-text-field>
                            <v-text-field label="E-Mail" v-model.trim="email" name="login" prepend-icon="mdi-email"
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
                    <v-btn block to="/login"> Already account Login</v-btn>
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
                name: "Nitish Kumar",
                email: "nitishk73@gmail.cmo",
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
                        console.log("sd")
                    })
                    .catch((err) => {
                        console.log("sdd")

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