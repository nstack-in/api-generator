<template>
    <div class="container my-4">
        <div class="row">
            <progress class="pure-material-progress-linear" v-if="loading" />

            <div class="col-sm-12 col-md-6 my-2" v-for="(data, index) in records" :key="index">
                <div class="card">
                    <div class="card-header">
                        {{data['_id']}}
                    </div>
                    <table class="table table-striped table-bordered m-0">
                        <tr>
                            <th>Column Name</th>
                            <th>Column Value</th>
                        </tr>
                        <tr v-for="(item, index) in data" :key="index">
                            <td> {{index}} </td>
                            <td>{{item}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
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