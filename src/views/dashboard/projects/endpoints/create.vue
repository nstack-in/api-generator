<template>
    <v-row justify="center">
        <v-col sm="12" md="8" lg="6">

            <v-alert type="error" v-if="error.status">
                {{ error.message }}
            </v-alert>

            <v-card>
                <v-toolbar color="primary" text elevation="0">
                    <v-toolbar-title class="white--text">
                        Create New Endpoint
                    </v-toolbar-title>
                </v-toolbar>
                <v-progress-linear v-if="loading" :size="30" color="secondary" indeterminate></v-progress-linear>

                <v-card-text>
                    <v-col>
                        <v-text-field label="Name" v-model="endpoint.name" solo></v-text-field>
                    </v-col>

                    <!-- <v-col>
                        <v-select v-model="enabledMethods" :items="methods" attach chips label="Chips" multiple solo>
                        </v-select>
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
                methods: ['GET', 'GET_ALL', 'POST', 'PUT', 'DELETE'],
                enabledMethods: [],
                loading: false,
                error: {
                    status: false,
                    message: "",

                },
                endpoint: {
                    name: "",
                    methods: {
                        GET: { 'secure': false, 'enabled': true },
                        GET_ALL: { 'secure': false, 'enabled': true },
                        PATCH: { 'secure': false, 'enabled': true },
                        DELETE: { 'secure': false, 'enabled': true },
                        POST: { 'secure': false, 'enabled': true },
                    },
                    structured: true,
                    models: []
                }
            }
        },
        methods: {
            createProject() {
                this.loading = true;
                let _id = this.$route.params.id;
                let data = JSON.parse(JSON.stringify(this.endpoint))
                if (data.models.length == 0)
                    delete data['models']

                this.$store.dispatch('createEndpoint', { _id, data: this.endpoint })
                    .then(e => {
                        this.endpointData = e;
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