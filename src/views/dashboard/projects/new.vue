<template>
    <div class="container my-4">
        <div class="row">
            <div class="col-sm-12 col-md-8 col-md-6">

                <div class="alert alert-danger" v-if="error.status">
                    {{ error.message }}
                </div>

                <div class="card">
                    <div class="card-header">
                        Create New Project
                    </div>
                    <progress class="pure-material-progress-linear" v-if="loading" />
                    <div class="card-body">
                        <div class="mb-3">
                            <label for="name" class="form-label">Project Name</label>
                            <input id="name" class="form-control" v-model="project.name" type="text" />
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Project Description</label>
                            <textarea id="description" class="form-control" v-model="project.description"
                                type="text"></textarea>
                        </div>
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
                    </div>
                    <div class="card-footer d-flex">
                        <div class="ml-auto">
                            <button class="btn btn-secondary" @click="createProject">Create</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
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
                        let id = e.data._id;
                        this.$router.push(`/projects/${id}`);
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