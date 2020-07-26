<template>
  <div id="app" class=" leading-normal tracking-normal text-white gradient"
    style="font-family: 'Source Sans Pro', sans-serif;">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
  import NavBar from "@/components/navigation/NavBar.vue";

  export default {
    name: "App",
    components: {
      NavBar,
    },
  };
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>