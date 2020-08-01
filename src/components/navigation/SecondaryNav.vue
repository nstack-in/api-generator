<template>
    <div class="text-white " style="background-color: #31383c;">
        <div class="container py-4">
            <router-link to="/home" class="btn btn-secondary mr-4">Projects</router-link>
            <router-link to="/profile" class="btn btn-secondary mr-4">Profile</router-link>
            <router-link to="/dns" class="btn btn-secondary mr-4">DNS</router-link>
            <router-link to="/settings" class="btn btn-secondary mr-4">Settings</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sidebarMenu: true,
                toggleMini: false,
                navigations: [
                    { title: "Home", href: "/home", icon: "mdi-home-outline" },
                    { title: "Projects", href: "/projects", icon: "mdi-book" },
                    { title: "Profile", href: "/profile", icon: "mdi-account" },
                    { title: "Settings", href: "/settings", icon: "mdi-settings-outline" },
                ]
            }
        },
        methods: {
            handleToggleMini() {
                this.toggleMini = !this.toggleMini;
            }
        },
        computed: {
            mini() {
                let isSmall = this.$vuetify.breakpoint.smAndDown
                return isSmall || this.toggleMini
            },
        },
    }
</script>