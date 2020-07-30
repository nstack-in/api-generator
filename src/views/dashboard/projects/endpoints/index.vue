<template>
    <v-row justify="center">
        <v-col sm="12">
            <v-card>
                <v-toolbar color="primary" text elevation="0">
                    <v-toolbar-title class="white--text">
                        Endpoint Details
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn @click="dialog = true" outlined class="white--text">
                        <v-icon>mdi-delete</v-icon>
                        <span class="d-none d-sm-flex">Delete</span>
                    </v-btn>
                </v-toolbar>
                <v-card-text class="body-1">
                    <p>
                        Endpoint : {{endpoint}}
                    </p>
                    <p>
                        Name : {{projects.data[id]['name']}}
                    </p>
                    <p>
                        Description : {{projects.data[id]['description']}}
                    </p>
                    <p>
                        Endpoint ID : {{eid}}
                    </p>
                    <p>
                        Full Endpoint : {{endpoint}}/api/{{id}}/{{eid}}
                    </p>

                </v-card-text>

            </v-card>
        </v-col>
        <v-col sm="12">

            <h1 class="font-weight-light">Database</h1>
        </v-col>
        <v-col sm="12">
            <v-card>
                <v-data-table :headers="headers" :items="reportItems" item-key="id">
                    <template v-slot:item="{ item }">
                        <tr>
                            <td>{{item.name}}</td>
                            <td>{{item.sales}}</td>
                            <td>{{item.customers}}</td>
                            <td>{{item.items}}</td>
                        </tr>
                    </template>

                </v-data-table>
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
        computed: mapState(['projects']),
        data() {
            return {
                dialog: false,
                id: null,
                eid: null,
                endpoint: null,
                headers: [
                    {
                        text: "Product",
                        align: "left",
                        sortable: false,
                        value: "name"
                    },
                    { text: "Sales", value: "sales" },
                    { text: "Customers", value: "customers" },
                    { text: "Items", value: "items" },
                ],
                reportItems: [
                    {
                        id: 1,
                        name: "N95 Mask",
                        sales: 2062,
                        customers: 102,
                        items: 8029,
                        available: null
                    },
                    {
                        id: 2,
                        name: "Safety gloves",
                        sales: 62,
                        customers: 12,
                        items: 70,
                        available: null
                    },
                    {
                        id: 3,
                        name: "Widget 2",
                        sales: 262,
                        customers: 32,
                        items: 1020,
                        available: null
                    },
                    {
                        id: 4,
                        name: "Widget 4",
                        sales: 362,
                        customers: 12,
                        items: 190,
                        available: null
                    },
                    {
                        id: 4,
                        name: "Widget 4",
                        sales: 362,
                        customers: 12,
                        items: 190,
                        available: null
                    },
                    {
                        id: 19,
                        name: "Widget ABC",
                        sales: 62,
                        customers: 5,
                        items: 17,
                        available: null
                    },
                    {
                        id: 12,
                        name: "Widget 12",
                        sales: 262,
                        customers: 22,
                        items: 199,
                        available: null
                    },
                ]
            }
        },
        methods: {
            handleDelete() {
                let _id = this.$route.params.id;
                let _eid = this.$route.params.eid;

                this.$store.dispatch('deleteEndpoint', { _id, _eid })
                    .then(() => {
                        this.dialog = false;
                        this.$router.push('/projects');
                    })
            }
        },
        created() {
            let _id = this.$route.params.id;
            let _eid = this.$route.params.eid;

            this.id = _id;
            this.eid = _eid;
            this.endpoint = process.env['VUE_APP_ENDPOINT']
        },
    }
</script>