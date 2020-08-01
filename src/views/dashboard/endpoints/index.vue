<template>
    <div class="container my-4">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header my-0 d-flex">
                        Project - {{  isData ? projects.data[id]['name'] : '...' }}
                        <router-link :to='eid+"/db"' class="btn btn-secondary ml-auto mr-2">
                            <span class="d-none d-sm-flex">Database</span>
                        </router-link>
                        <button @click="dialog = true" class="btn btn-secondary">
                            <span class="d-none d-sm-flex">Delete</span>
                        </button>
                    </div>

                    <div class="card-body" v-if="isData">

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
                            Supported Method :
                            {{ (Object.keys(projects.data[id]['endpoints'][eid]['methods']))}}
                        </p>

                    </div>

                </div>

                <div class="card my-4">
                    <div class="card-header">
                        Methods
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
                </div>
            </div>

        </div>
    </div>
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