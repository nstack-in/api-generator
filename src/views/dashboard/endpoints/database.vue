<template>
    <div class="container my-4">

        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/projects">Project</router-link>
            </li>
            <li class="breadcrumb-item">
                <router-link :to="'/projects/'+id">{{id}}</router-link>
            </li>
            <li class="breadcrumb-item">
                <router-link :to="'/projects/'+id+'/'+eid">{{eid}}</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">database</li>
        </ol>
        <div class="alert alert-danger" v-if="this.error.code">
            {{this.error.message }}
        </div>
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
                loading: true,
                id: null,
                eid: null,
                error: {
                    code: null,
                    message: null,
                }
            }
        },
        created() {
            let _id = this.$route.params.id;
            let _eid = this.$route.params.eid;
            this.id = _id;
            this.eid = _eid;
            let endpoint = `https://fierce-headland-06778.herokuapp.com/v1/api/${_id}/${_eid}`;
            axios({
                url: endpoint,
                method: 'GET'
            }).then(e => {
                console.log({ ed: e })
                this.records = e.data.data;
                this.loading = false;
            }).catch(e => {
                this.loading = false;
                this.error.message = e.response.data.error.code == 7 ? 'Invalid Endpoint' : 'unknown error';
                this.error.code = 7;
            })
        },
    }
</script>