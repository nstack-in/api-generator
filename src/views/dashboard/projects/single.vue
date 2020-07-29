<template>
    <div>
        <v-row>
            <v-card width="100%">
                <v-card-title>
                    Name : {{project.name}}
                    <v-spacer></v-spacer>
                    <v-btn @click="dialog = true" outlined>
                        <v-icon>mdi-pencil</v-icon>
                        <span class="d-none d-sm-flex">Edit</span>
                    </v-btn>
                    <v-btn class="ml-4" :to="project._id + '/settings'" outlined>
                        <v-icon>mdi-settings</v-icon>

                        <span class="d-none d-sm-flex">Settings</span>

                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <p>
                        ID : {{project._id}}
                    </p>
                    <p>
                        Description : {{project.description}}
                    </p>
                    <p>
                        Created On : {{  project.createdAt == null ? '' :new Date(project.createdAt).toLocaleString()}}
                    </p>
                </v-card-text>

            </v-card>

            <v-card width="100%" class="mt-4" elevation="0">
                <v-card-title>
                    Endpoints
                    <v-spacer></v-spacer>
                    <v-btn :to="project._id + '/new'" outlined>
                        <v-icon>mdi-plus</v-icon>
                        <span class="d-none d-sm-flex">
                            Add Endpoint
                        </span>

                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-row justify="center">
                        <v-expansion-panels>
                            <v-expansion-panel v-for="(endpoint,i) in endpoints" :key="i">
                                <v-expansion-panel-header>{{endpoint.name}}</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-divider></v-divider>
                                    <v-col>
                                        Methods :
                                        <v-chip class="ma-2" outlined label v-for="(method,key) of endpoint.methods"
                                            :key="key">
                                            {{key}}
                                        </v-chip>
                                    </v-col>
                                    <v-col>
                                        <v-btn class="primary" :to="'/projects/' + project._id +'/'+endpoint._id">
                                            Explore</v-btn>
                                    </v-col>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-row>
                </v-card-text>

            </v-card>

        </v-row>
        <div class="text-center">
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
        </div>
    </div>
</template>

<script>
    export default {
        name: "Projects",
        data() {
            return {
                loadingEndpoint: false,
                dialog: false,
                timeout: 2000,
                snackbar: false,
                snackbarData: {
                    text: "Updated",
                    enable: true,
                },
                endpoints: {},
                project: {
                    name: null,
                    description: null,
                    _id: null,
                    createOn: null
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
            this.$store.dispatch('getProjectDetail', _id).then(e => {
                this.project = e.data;
                this.projectUpdate = JSON.parse(JSON.stringify(e.data));
            });
            this.$store.dispatch('listEndpoint', _id).then(e => {
                this.endpoints = (e.data);
            });

        },
    }
</script>