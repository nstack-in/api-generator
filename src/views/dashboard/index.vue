<template>
    <v-app>
        <SideBar />
        <v-main class="px-4 py-0 ">
            <v-row>
                <v-col>
                    <transition name="slide">
                        <v-container>
                            <router-view></router-view>
                        </v-container>
                    </transition>
                </v-col>
            </v-row>
        </v-main>
        <!-- <v-footer>
            ...sdf
        </v-footer> -->
    </v-app>
</template>

<style>
    .slide-leave-active,
    .slide-enter-active {
        transition: 1s;
    }

    .slide-enter {
        transform: translate(100%, 0);
    }

    .slide-leave-to {
        transform: translate(-100%, 0);
    }
</style>

<script>
    import SideBar from "@/components/navigation/sidebar";
    export default {
        name: "Dashboard",
        components: {
            SideBar
        },
        created() {
            this.$store.dispatch('verifyLogin',)
                // .then(data => {
                //     console.log(data);
                // })
                .catch(data => {
                    this.$router.push('/login?message=Login-Expire');

                    console.log(data);
                })
        },
    }
</script>