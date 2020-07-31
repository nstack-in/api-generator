<template>
    <v-row justify="center">
        <v-col sm="12">
            <v-card>
                <v-toolbar color="primary" text elevation="0">
                    <v-toolbar-title class="white--text">
                        Project {{  isData ? projects.data[id]['name'] : '...' }}
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn @click="dialog = true" outlined class="white--text">
                        <v-icon>mdi-delete</v-icon>
                        <span class="d-none d-sm-flex">Delete</span>
                    </v-btn>
                </v-toolbar>
                <v-card-text class="body-1" v-if="isData">

                    <p>
                        Endpoint ID : {{projects.data[id]['endpoints'][eid]['endpoint_id']}}
                    </p>
                    <p>
                        Project Name : {{projects.data[id]['endpoints'][eid]['name']}}
                    </p>

                    <p>
                        Full Endpoint : http://{{id}}.nstack.in/{{eid}}
                    </p>

                    <p>
                        Supported Method : {{Object.keys(projects.data[id]['endpoints'][eid]['methods'])}}
                    </p>

                </v-card-text>

            </v-card>
        </v-col>
        <v-col sm="12">

            <h1 class="font-weight-light">How to send Request?</h1>
        </v-col>
        <v-col sm="12">
            <v-card>
                <v-alert>
                    GET http://{{id}}.nstack.in/{{eid}}
                </v-alert>
            </v-card>
        </v-col>

        <v-dialog v-model="dialog" width="500">

            <v-card>
                <v-card-title class="headline grey lighten-2">
                    Privacy Policy
                </v-card-title>

                <v-card-text class="body-1">
                    Are you sure ?
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" text @click="handleDelete">
                        Delete
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        computed: {
            ...mapState(['projects']),
            isData() {
                return this.projects && this.projects.data[this.id] != undefined;
            }
        },
        data() {
            return {
                dialog: false,
                id: null,
                eid: null,
                endpoint: null,
            }
        },
        methods: {
            handleDelete() {
                let _id = this.$route.params.id;
                let _eid = this.$route.params.eid;

                this.$store.dispatch('deleteEndpoint', { _id, _eid })
                    .then(() => {
                        this.dialog = false;
                        this.$router.push(`/projects/${_id}`);
                    })
            }
        },
        created() {
            let _id = this.$route.params.id;
            let _eid = this.$route.params.eid;

            this.id = _id;
            this.eid = _eid;
            this.endpoint = process.env['VUE_APP_ENDPOINT'];
            this.$store.dispatch('getProjects')
        },
    }
</script>