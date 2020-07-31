<template>
    <v-row>
        <v-progress-linear v-if="loading" :size="30" color="primary" indeterminate></v-progress-linear>
        <v-col sm="12" md="6" v-for="(data, index) in records" :key="index">
            <v-card>
                <v-toolbar color="primary" dark class="elevation-0">
                    {{data['_id']}}
                </v-toolbar>
                <v-card-text>
                    <p v-for="(item, index) in data" :key="index">
                        <span v-if="index != '_id'">
                            {{index}} : {{item}}</span>
                    </p>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "EndpointDatabase",
        data() {
            return {
                records: [],
                loading: true
            }
        },
        created() {
            let _id = this.$route.params.id;
            let _eid = this.$route.params.eid;
            let endpoint = `https://fierce-headland-06778.herokuapp.com/v1/api/${_id}/${_eid}`;
            axios({
                url: endpoint,
                method: 'GET'
            }).then(e => {
                this.records = e.data.data;
                this.loading = false;
            })
        },
    }
</script>