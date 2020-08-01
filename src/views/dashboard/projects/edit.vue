<template>
    <div class="container my-4">

        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/projects">Project</router-link>
                </li>
                <li class="breadcrumb-item">
                    <router-link :to="'/projects/'+id">{{id}}</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Edit</li>
            </ol>
        </nav>

        <div class="row">
            <div class="col-sm-12 col-md-8 col-md-6">

                <div class="card">
                    <div class="card-header">
                        Edit Project
                    </div>
                    <div class="card">

                        <progress class="pure-material-progress-linear" v-if="loading" />
                        <div class="card-body">
                            <div class="mb-3">
                                <label for="name" class="form-label">Project Name</label>
                                <input id="name" class="form-control" v-model="project.name" type="text" />
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">Project Description</label>
                                <textarea id="description" class="form-control" v-model="project.description"
                                    type="text"></textarea>
                            </div>
                        </div>
                        <div class="card-footer d-flex">
                            <div class="ml-auto">
                                <button class="btn btn-secondary" @click="handleUpdate">Update</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: mapGetters(['projects']),
        created() {
            this.id = this.$route.params.id;
            let _id = this.$route.params.id;
            let un = this.projects.data[_id];
            console.log(un);
            this.project = {
                name: un && un['name'],
                description: un && un['description']
            };
        },
        data() {
            return {
                id: null,
                loading: false,
                error: {
                    status: false,
                    message: "",
                },
            }
        },
        methods: {
            handleUpdate() {
                let _id = this.$route.params.id;
                this.loading = true;
                let update = this.project;
                this.$store.dispatch('updateProjectDetail', { _id, update }).then(() => {
                    this.loading = false;
                });
            }
        },
    }
</script>