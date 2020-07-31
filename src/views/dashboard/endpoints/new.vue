<template>
    <v-row>
        <v-col sm="12">

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
                        <v-text-field label="Name" v-model="endpoint.name"></v-text-field>
                    </v-col>

                    <v-select v-model="enabledMethods" :items="methods" chips label="Allowed Methods" multiple>
                    </v-select>


                    <v-col cols="12">
                        <v-radio-group v-model="endpoint.structured" row>
                            <v-radio label="Un-Structured" :value="false"></v-radio>
                            <v-radio label="Structured" :value="true"></v-radio>
                        </v-radio-group>
                    </v-col>


                    <v-col v-if="endpoint.structured">
                        <v-container>
                            <v-layout v-for="(item, index) in [1,2,3]" :key="index">
                                <v-flex sm6 style="padding-right:10px">
                                    <v-text-field label="Field Name" required autocomplete="disable"></v-text-field>
                                </v-flex>
                                <v-flex sm3 style="padding-right:10px">
                                    <v-select :items="supportedTypes" label="Data Type">
                                    </v-select>
                                </v-flex>
                                <v-flex sm3 style="padding-right:10px">
                                    <v-text-field label="Max Length" required></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-col>

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
                supportedTypes: ['Text', 'NUMBER', 'URI', 'EMAIL'],
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
                    structured: false,
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
                        this.$router.push(`/projects/${_id}`);
                    }).catch(e => {
                        this.loading = false;
                        if (e.err.code == 11000) {
                            console.log(e.err.code);
                            this.error = {
                                status: true,
                                message: "Endpoint ID already exits in this project"
                            }
                        } else if (e.error.message == "Token Expired") {
                            this.$router.push('/login');
                        } else {
                            this.error = e.error;
                        }
                    });
            }
        },
    }
</script>