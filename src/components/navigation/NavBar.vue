<template>
    <nav class="navbar shadow fixed-top navbar-expand-lg navbar-dark bg-dark py-3">
        <div class="container">
            <div class="container-md">
                <router-link class="navbar-brand" to="/">API ON DEMAND</router-link>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-md-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item active border border-dark rounded" v-if="$store.getters.isLoggedIn == false">
                        <router-link class="nav-link px-4" to="/register">
                            Register
                        </router-link>
                    </li>
                    <li class="nav-item active border border-dark rounded" v-else>
                        <router-link class="nav-link px-4" to="/dashboard">
                            Dashboard
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script>
    export default {
        name: "NavBar",

    };
</script>