<template>
    <div>
        <v-btn color="error" @click="deleteProjects">Delete Project</v-btn>
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
                        this.$router.push('/projects');
                    });
            }
        },
    }
</script>