<template>
    <div>
        <v-row>

            <v-card width="100%">
                <v-card-title>

                    Name : {{project.name}}
                    <v-spacer></v-spacer>
                    <v-btn @click="handleProjectEdit">
                        <v-icon>mdi-pencil</v-icon>
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
                    <v-btn @click="handleProjectEdit">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-row justify="center">
                        <v-expansion-panels popout>
                            <v-expansion-panel v-for="(item,i) in 5" :key="i">
                                <v-expansion-panel-header>Item</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-row>
                </v-card-text>

            </v-card>

        </v-row>

    </div>
</template>

<script>
    export default {
        name: "Projects",
        data() {
            return {
                project: {
                    name: null,
                    _id: null,
                    createOn: null
                },
            }
        },
        methods: {
            handleProjectEdit() {

            }
        },
        created: async function () {
            let id = this.$route.params.id;
            this.$store.dispatch('getProjectDetail', id).then(e => this.project = e);
        },
    }
</script>