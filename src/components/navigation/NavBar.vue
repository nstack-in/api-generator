<template>
    <v-app-bar app color="primary" dark>
        <v-container>
            <v-app-bar elevation="0" color="primary">
                <v-btn to="/" text>
                    <!-- <v-img alt="Vuetify Logo" class="shrink mr-2" contain
                        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition"
                        width="40" /> -->
                    API ON DEMAND
                    <!-- <v-img alt="API ON DEMAND" class="shrink mt-1 hidden-sm-and-down" contain min-width="100"
                        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" /> -->
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn to="/login" text>
                    <span class="mr-2">Login </span>
                    <v-icon>mdi-account-circle</v-icon>
                </v-btn>
            </v-app-bar>
        </v-container>
    </v-app-bar>
</template>


<script>
    export default {
        name: "NavBar",
    };
</script>