<template>
    <div>

        <div class="container my-4">
            <div class="card">
                <div class="card-header d-flex">
                    <h4>Project Details</h4>
                    <div class="ml-auto">
                        <button @click="dialog = true" class="btn btn-secondary white--text">
                            <span class="d-none d-sm-flex">Edit</span>
                        </button>
                        <router-link class="btn btn-secondary ml-4 white--text" :to="project._id + '/settings'"
                            outlined>
                            <span class="d-none d-sm-flex">Settings</span>
                        </router-link>
                    </div>
                </div>

                <progress class="pure-material-progress-linear" v-if="loadingProject" />

                <div class="card-body">
                    <p class="body-1">
                        Name : {{project.name}}
                    </p>
                    <p>
                        ID : {{project._id}}
                    </p>
                    <p>
                        Description : {{project.description}}
                    </p>
                    <p>
                        Created On : {{  project.createdAt == null ? '' :new Date(project.createdAt).toLocaleString()}}
                    </p>
                </div>

            </div>

            <div class="my-4">
                <div class="card-title d-flex">
                    <h4>Endpoints</h4>
                    <div class="ml-auto">
                        <router-link :to="project._id + '/new'" class="btn btn-secondary">
                            <span class="d-none d-sm-flex">
                                Add Endpoint
                            </span>

                        </router-link>
                    </div>
                </div>
            </div>

            <progress class="pure-material-progress-linear" v-if="loadingProject" />

            <div class="card" v-for="(endpoint,i) in project.endpoints" :key="i">
                <div class="card-header">
                    {{endpoint.name.toUpperCase()}}
                </div>
                <div class="card-body">
                    <table class="table table-striped table-bordered">
                        <tr>
                            <th>Method</th>
                            <th>Enabled</th>
                            <th>Secure</th>
                        </tr>
                        <tr v-for="(method,key) of endpoint.methods" :key="key">
                            <td>{{key}} </td>
                            <td>{{method.enabled}} </td>
                            <td>{{method.secure}} </td>
                        </tr>
                    </table>
                </div>
                <div class="card-footer">
                    <router-link class="btn btn-secondary" :to="'/projects/' + project._id +'/'+endpoint.endpoint_id">
                        Explore
                    </router-link>
                </div>
            </div>

        </div>

        <!-- <div class="text-center">
            <div class="text-center ma-2">
                <v-dialog v-model="dialog" width="500">

                    <v-card>
                        <v-card-title class="primary">
                            <span class="white--text">Edit Project</span>
                            <v-spacer></v-spacer>
                            <v-btn outlined color="white" @click="dialog = false">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-progress-linear v-if="updateLoading" :size="30" color="secondary" indeterminate>
                        </v-progress-linear>

                        <v-card-text>
                            <v-text-field label="Project ID" disabled v-model="projectUpdate._id"></v-text-field>
                            <v-text-field label="Name" v-model="projectUpdate.name"></v-text-field>
                            <v-text-field label="Description" v-model="projectUpdate.description">
                            </v-text-field>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" outlined @click="handleUpdate">
                                Update
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-snackbar v-model="snackbar" top right>
                    {{ snackbarData.text }}
                    <template v-slot:action="{ attrs }">
                        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
                            Close
                        </v-btn>
                    </template>
                </v-snackbar>
            </div>
        </div> -->
    </div>
</template>

<script>
    export default {
        name: "Projects",
        data() {
            return {
                loadingProject: false,
                dialog: false,
                timeout: 2000,
                snackbar: false,
                snackbarData: {
                    text: "Updated",
                    enable: true,
                },

                project: {
                    name: null,
                    description: null,
                    _id: null,
                    createOn: null,
                    endpoints: [],
                },
                projectUpdate: {
                    _id: null,
                    name: null,
                    description: null,
                },
                updateLoading: false,
            }
        },
        methods: {
            handleProjectEdit() {

            },
            handleUpdate() {
                this.updateLoading = true;
                let update = this.projectUpdate;
                let _id = this.$route.params.id;
                this.$store.dispatch('updateProjectDetail', { _id, update }).then(e => {
                    this.dialog = false;
                    this.snackbar = true;
                    this.project = e.data;
                    this.projectUpdate = JSON.parse(JSON.stringify(e.data));
                    this.updateLoading = false;
                });
            }
        },
        created: async function () {
            let _id = this.$route.params.id;
            if (this.project.name == null) {
                this.loadingProject = true
                this.$store.dispatch('getProjectDetail', _id).then(e => {
                    this.loadingProject = false;
                    this.project = e.data;
                    this.projectUpdate = JSON.parse(JSON.stringify(e.data));
                });
            }
            // this.$store.dispatch('listEndpoint', _id).then(e => {
            //     this.loadingEndpoint = false;
            //     this.endpoints = (e.data);
            // });

        },
    }
</script>