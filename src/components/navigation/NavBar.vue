<template>
    <nav class="navbar shadow fixed-top navbar-expand-lg navbar-dark bg-dark py-3">
        <div class="container">
            <router-link class="navbar-brand" to="/">API ON DEMAND</router-link>
            <ul class="navbar-nav ml-md-auto" style="flex-direction: row;">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home
                    </router-link>
                </li>
                <li class="nav-item active" v-if="$store.getters.isLoggedIn == false">
                    <router-link class="nav-link" style="padding-left:1rem;" to="/register">
                        Register
                    </router-link>
                </li>
                <li class="nav-item active" v-else>
                    <router-link class="nav-link" style="padding-left:1rem;" to="/dashboard">
                        Dashboard
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>


<script>
    export default {
        name: "NavBar",

    };
</script>