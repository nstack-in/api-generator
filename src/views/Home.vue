<template>
  <div>
    <div class="bg-dark text-white py-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-6 col-sm-12 py-4">
            <div>
              <p class="uppercase tracking-loose w-full">Are you a developer?</p>
              <h1 class="my-4 text-5xl font-bold leading-tight">
                Get API without coding
              </h1>
              <p class="leading-normal text-2xl mb-8">
                Tell us your requirement and we will build one for you.
              </p>

              <a class="btn btn-primary" hred="/register">
                Sign Up
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <img class="w-100" src="@/assets/images/wesbite/undraw_start_building_vqhd.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
<script>

  export default {
    name: "Home",
    created() {
      console.log(this.$route);
    },
  };
</script>