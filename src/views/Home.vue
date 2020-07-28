<template>
  <div>
    <div class="primary white--text">
      <v-container>
        <v-row>
          <v-col lg="8" md="6" sm="12" cols="sm" class="pb-2">
            <div>
              <p class="uppercase tracking-loose w-full">Are you a developer?</p>
              <h1 class="my-4 text-5xl font-bold leading-tight">
                Get API without coding
              </h1>
              <p class="leading-normal text-2xl mb-8">
                Tell us your requirement and we will build one for you.
              </p>

              <v-btn large text elevation="1" class="white--text" to="/register">
                Sign Up
              </v-btn>
            </div>
          </v-col>
          <v-col lg="4" md="6" sm="12" cols="sm">
            <v-img src="@/assets/images/wesbite/undraw_start_building_vqhd.svg" />
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Features -->
    <Features />
    <!-- Features Ends -->


    <!-- Testimonial -->
    <Testimonial />
    <!-- Testimonial Ends -->


    <!-- Pricing -->
    <Pricing />
    <!-- Pricing Ends -->
  </div>
</template>

<style>

</style>
<script>
  import Pricing from "@/components/landing/Pricing.vue";
  import Testimonial from "@/components/landing/Testimonial.vue";
  import Features from "@/components/landing/Features.vue";

  export default {
    name: "Home",
    components: {
      Pricing,
      Testimonial,
      Features
    }
  };
</script>