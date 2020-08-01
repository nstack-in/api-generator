<template>
    <div class="container my-4">
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
    }
</script>