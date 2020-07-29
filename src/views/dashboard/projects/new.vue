<template>
    <div>

        <v-alert type="error" v-if="error.status">
            {{ error.message }}
        </v-alert>

        <v-card>
            <v-toolbar color="primary" text elevation="0">
                <v-toolbar-title class="white--text">
                    Create New Project
                </v-toolbar-title>
            </v-toolbar>
            <v-progress-linear v-if="loading" :size="30" color="secondary" indeterminate></v-progress-linear>

            <v-card-text>
                <v-col>
                    <v-text-field label="Name" v-model="project.name" filled></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-text-field auto-grow rows="4" row-height="30" label="Description" name="description"
                        v-model="project.description" filled textarea></v-text-field>
                </v-col>
                <v-card-actions>
                    <div class="ml-auto">
                        <v-btn color="secondary" outlined @click="createProject">Create</v-btn>
                    </div>
                </v-card-actions>
            </v-card-text>

        </v-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                error: {
                    status: false,
                    message: "",

                },
                project: {
                    name: "",
                    description: ""
                }
            }
        },
        methods: {
            createProject() {
                this.loading = true;
                this.$store.dispatch('createProject', this.project)
                    .then(e => {
                        this.projects = e;
                        this.loading = false;
                        console.log(e);

                    }).catch(e => {
                        this.loading = false;
                        this.error = e.error;
                        console.log(e);
                    });
            }
        },
    }
</script>