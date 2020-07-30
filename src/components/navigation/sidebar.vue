<template>
    <div>
        <v-app-bar app color="primary" dark>

            <v-app-bar-nav-icon @click.stop="sidebarMenu = !sidebarMenu"></v-app-bar-nav-icon>
            <v-toolbar-title>Dashboard</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn to="/profile" color="primary" elevation="0">
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="sidebarMenu" app floating :permanent="sidebarMenu" :mini-variant.sync="mini"
                color="primary  darken-1">
                <v-list dense color="primary  darken-1" dark>
                    <v-list-item>
                        <v-list-item-action>
                            <v-icon @click="handleToggleMini">mdi-chevron-left</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                    <v-list-item v-for="item in navigations" :key="item.title" link :to="item.href">
                        <v-list-item-icon>
                            <v-icon color="white">{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
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
                    { title: "Logout", href: "/logout", icon: "mdi-account" },
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