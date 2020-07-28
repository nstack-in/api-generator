<template>
    <div>
        <v-row>
            <v-card width="100%">
                <v-card-title>
                    Name : {{project.name}}
                    <v-spacer></v-spacer>
                    <v-btn @click="dialog = true" outlined>
                        <v-icon>mdi-pencil</v-icon>
                        Edit Project
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <p>
                        ID : {{project._id}}
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
                    <v-btn @click="handleProjectEdit" outlined>
                        <v-icon>mdi-plus</v-icon>
                        Add Endpoint
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-row justify="center">
                        <v-expansion-panels>
                            <v-expansion-panel v-for="(endpoint,i) in endpoints" :key="i">
                                <v-expansion-panel-header>{{endpoint.name}}</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-divider></v-divider>
                                    <v-row>
                                        <v-col sm="12">
                                            Methods :
                                            <v-chip class="ma-2" outlined label v-for="(method,i) in endpoint.methods"
                                                :key="i">
                                                {{ method }}
                                            </v-chip>
                                        </v-col>
                                        <v-col sm="12">
                                            <v-btn class="primary">Explore</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-row>
                </v-card-text>

            </v-card>

        </v-row>
        <div class="text-center">
            <v-dialog v-model="dialog" width="500">

                <v-card>
                    <v-card-title class="primary">
                        <span class="white--text">Edit Project</span>
                        <v-spacer></v-spacer>
                        <v-btn outlined color="white" @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-card-title>

                    <v-card-text>
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
        </div>
    </div>
</template>

<script>
    export default {
        name: "Projects",
        data() {
            return {
                dialog: false,
                endpoints: [
                    {
                        name: "Books",
                        methods: [
                            'GET', 'POST', 'DELETE'
                        ]
                    },
                    {
                        name: "User",
                        methods: [
                            'GET', 'POST', 'UPDATE'
                        ]

                    },
                    {
                        name: "Purchase",
                        methods: [
                            'GET', 'POST', 'PATCH'
                        ]

                    },
                    {
                        name: "Settings",
                        methods: [
                            'GET', 'POST'
                        ]
                    }
                ],
                project: {
                    name: null,
                    description: null,
                    _id: null,
                    createOn: null
                },
                projectUpdate: {
                    name: null,
                    description: null,
                    _id: null,
                    createOn: null
                },
            }
        },
        methods: {
            handleProjectEdit() {

            },
            handleUpdate() {
                console.log(this.projectUpdate);
            }
        },
        created: async function () {
            let id = this.$route.params.id;
            this.$store.dispatch('getProjectDetail', id).then(e => {
                this.project = e;
                this.projectUpdate = JSON.parse(JSON.stringify(e));
            });
        },
    }
</script>