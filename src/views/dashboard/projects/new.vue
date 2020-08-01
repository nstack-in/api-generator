<template>
    <v-row>
        <v-col sm="12" md="8" lg="6">

            <v-alert type="error" v-if="error.status">
                {{ error.message }}
            </v-alert>

            <v-card>
                <v-toolbar color="primary" text elevation="0">
                    <v-toolbar-title class="white--text">
                        Create New Project
                    </v-toolbar-title>
                </v-toolbar>
                <progress class="pure-material-progress-linear" v-if="loading" />
                <v-card-text>
                    <v-col>
                        <v-text-field label="Name" v-model="project.name"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field label="Description" v-model="project.description"></v-text-field>
                    </v-col>
                    <!-- <v-col cols="12">
                        <v-radio-group v-model="row" row>
                            <v-radio label="Public" value="false"></v-radio>
                            <v-radio label="Private" value="true"></v-radio>
                        </v-radio-group>
                    </v-col>
                    <v-col cols="12">
                        <v-radio-group v-model="row" row>
                            <v-radio label="Secure" value="false"></v-radio>
                            <v-radio label="Un-Secure" value="true"></v-radio>
                        </v-radio-group>
                    </v-col>

                    <v-col cols="12">
                        <v-text-field auto-grow rows="4" row-height="30" label="API Key" name="key"
                            v-model="project.description" filled textarea></v-text-field>
                    </v-col> -->
                    <v-card-actions>
                        <div class="ml-auto">
                            <v-btn color="secondary" outlined @click="createProject">Create</v-btn>
                        </div>
                    </v-card-actions>
                </v-card-text>

            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                error: {
                    status: false,
                    message: "",

                },
                project: {
                    name: "",
                    description: "",
                    structure: ['structure', 'unstrucute'],
                    secure: false,
                    private: false,
                }
            }
        },
        methods: {
            createProject() {
                this.loading = true;
                this.$store.dispatch('createProject', this.project)
                    .then(e => {
                        this.projects = e;
                        this.loading = false;
                        this.$router.push('/projects');
                    }).catch(e => {
                        this.loading = false;
                        if (e.error.message == "Token Expired") {
                            this.$router.push('/login');
                        } else {
                            this.error = e.error;
                        }
                    });
            }
        },
    }
</script>