<template>
    <div>
        <v-row>
            <v-col lg="4" md="6" sm="12" cols="sm" class="pb-2">
                <v-card style="min-height:150px">
                    <v-card-title>
                        Add New Project
                    </v-card-title>
                    <v-row class="no-gutters">
                        <div class="col-auto">
                            <div class="cyan fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4 red--text">
                            <h5 class="text-truncate text-uppercase">
                                You can't Create more projects
                            </h5>
                        </div>
                    </v-row>
                    <v-card-actions>
                        <v-btn text to="'projects/new">Upgrade Account</v-btn>
                    </v-card-actions>
                </v-card>

            </v-col>


            <v-col lg="4" md="6" sm="12" cols="sm" class="pb-2" v-for="(item, index) in projects" :key="index">

                <v-card style="min-height:150px">
                    <v-card-title>
                        {{item.name}}
                        <v-spacer></v-spacer>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn outlined text v-bind="attrs" v-on="on">
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item v-for="(option, index) in options" :key="index">
                                    <v-list-item-title>{{ option.name }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-card-title>
                    <v-row class="no-gutters">
                        <div class="col-auto">
                            <div class="cyan fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4 cyan--text">
                            <h5 class="text-truncate text-uppercase">{{item.name}}</h5>
                        </div>
                    </v-row>
                    <v-card-actions>
                        <v-btn outlined :to="'projects/'+item._id">Open</v-btn>
                    </v-card-actions>
                </v-card>

            </v-col>

        </v-row>

    </div>
</template>

<script>
    export default {
        name: "Projects",
        data() {
            return {
                projects: [],
                dialog: true,
                options: [
                    {
                        name: 'Delete'
                    },
                    {
                        name: 'Disable'
                    },
                    {
                        name: 'Settings'
                    },

                ]
            }
        },
        created: async function () {
            this.$store.dispatch('getProjects').then(e => {
                console.log({ e, 'l': 'lk' });
                this.projects = e;
            });

        },
    }
</script>