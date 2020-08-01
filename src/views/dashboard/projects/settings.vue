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
                <li class="breadcrumb-item active" aria-current="page">Settings</li>
            </ol>
        </nav>

        <div class="card">
            <div class="card-header">
                Project Settings
            </div>
            <div class="card-body">
                <div class="btn btn-danger" @click="deleteProjects">Delete Project</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProjectSettings",
        data() {
            return {
                id: null,
            }
        },
        methods: {
            deleteProjects() {
                let _id = this.$route.params.id;
                this.$store.dispatch('deleteProject', { _id })
                    .then(() => {
                        this.$router.push('/home');
                    });
            }
        },
        created() {
            this.id = this.$route.params.id;
        },
    }
</script>