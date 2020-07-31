<template>
    <v-container>
        <v-card>
            <v-card-title primary-title class="primary white--text">
                Your Profile
            </v-card-title>
            <v-card-text class="mt-4">
                <p>
                    Name : {{user.name}}
                </p>
                <p>
                    Email : {{user.email}}
                </p>

                <v-btn color="warning" @click="handleLogout">Logout</v-btn>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
    import { mapState } from 'vuex';
    export default {
        name: "Profile",
        computed: mapState(['user']),
        methods: {
            handleLogout() {
                localStorage.removeItem('token');
                this.$router.push('/');

            }
        },
    }
</script>