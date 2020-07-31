<template>
    <v-row>
        <v-col v-if="projects.length == 3 " lg="6" sm="12" cols="sm" class="pb-2">
            <v-card style="min-height:150px">
                <v-card-title class="warning white--text">
                    Upgrade to Create More Projects
                </v-card-title>
                <v-card-text>
                    <v-row class="no-gutters">
                        <div class="col-auto">
                            <div class="cyan fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4">
                            <h3>
                                We can't offer more for free, please upgrade to get more.
                            </h3>
                        </div>
                    </v-row>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="primary" to="upgrade">Upgrade Account</v-btn>
                    </v-card-actions>
                </v-card-text>

            </v-card>

        </v-col>

        <v-col v-else lg="6" sm="12" cols="sm" class="pb-2">
            <v-card style="min-height:150px">

                <v-card-title class="primary white--text">
                    Add New Project
                </v-card-title>
                <v-card-text>
                    <v-row class="no-gutters">
                        <div class="col-auto">
                            <div class="cyan fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4 black--text">
                            <h3 class="text-truncate text-uppercase">
                                Your awesome projects 🚀
                            </h3>
                        </div>
                    </v-row>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" to="projects/new">Create New Project</v-btn>
                    </v-card-actions>
                </v-card-text>

            </v-card>

        </v-col>


        <v-col lg="6" sm="12" cols="sm" class="pb-2" v-for="(item, index) in projects" :key="index">

            <v-card style="min-height:150px">
                <v-card-title class="primary white--text">
                    {{item.name}}
                    <v-spacer></v-spacer>
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="white" text v-bind="attrs" v-on="on">
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item>
                                <v-btn text block>Delete</v-btn>
                            </v-list-item>
                            <v-list-item>
                                <v-btn text block :to="'projects/' + item._id + '/settings'">Settings</v-btn>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-card-title>
                <v-card-text>
                    <v-row class="no-gutters">
                        <div class="col-auto">
                            <div class="cyan fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4">
                            {{item.description}}
                        </div>
                    </v-row>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn outlined color="primary" :to="'projects/'+item._id">Explore</v-btn>
                    </v-card-actions>
                </v-card-text>

            </v-card>

        </v-col>

    </v-row>

</template>

<script>
    export default {
        name: "Projects",
        data() {
            return {
                projects: [],
                dialog: true,
            }
        },
        created: async function () {
            this.$store.dispatch('getProjects').then(e => {
                this.projects = e;
            });

        },
    }
</script>