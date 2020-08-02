<template>
    <div class="container my-4">
        <progress class="pure-material-progress-linear" v-if="user._id == null && user.id == null" />
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/projects">Home</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Profile</li>
        </ol>
        <div class="card">

            <div primary-title class="card-header">
                Your Profile
            </div>
            <div class="card-body mt-2">
                <p>
                    Name : {{user.name}}
                </p>
                <p>
                    Email : {{user.email}}
                </p>

                <button class="btn btn-danger" @click="handleLogout">Logout</button>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    export default {
        name: "Profile",
        computed: mapState(['user']),
        methods: {
            handleLogout() {
                this.$store.dispatch('logout').then(() => {
                    this.$router.push('/');
                });
            }
        },
    }
</script>