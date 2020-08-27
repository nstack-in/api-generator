<template>
  <div class="container">
    <progress class="pure-material-progress-linear" v-if="loading" />
    <div class="my-4" v-if="!loading">
      <div class=" row">
        <div
          class="col-lg-6 col-sm-12 pb-2"
          v-if="Object.keys(projects.data).length == 3"
          lg="6"
          sm="12"
          cols="sm"
        >
          <div class="card" style="min-height:150px">
            <div class="card-header">
              <div style="font-size: 20px;">
                Upgrade to Create More Projects
              </div>
            </div>
            <div class="card-body">
              <div class="row no-gutters">
                <div class="col-auto">
                  <div class="cyan fill-height">&nbsp;</div>
                </div>
                <div class="col pa-3 py-4">
                  <div>
                    We can't offer more for free, please upgrade to get more.
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <router-link class="btn btn-warning" to="upgrade"
                >Upgrade Account</router-link
              >
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-sm-12 pb-2" v-else>
          <div class="card" style="min-height:150px">
            <div class="card-header">
              <div style="font-size: 20px;">
                Add New Project
              </div>
            </div>
            <div class="card-body">
              <div class="row no-gutters">
                <div class="col-auto">
                  <div class="cyan fill-height">&nbsp;</div>
                </div>
                <div class="col pa-3 py-4 black--text">
                  <h6 class="text-truncate text-uppercase">
                    Your awesome projects 🚀
                  </h6>
                </div>
              </div>
            </div>

            <div class="card-footer">
              <router-link class="btn btn-primary" to="/projects/new"
                >Create New Projects</router-link
              >
            </div>
          </div>
        </div>

        <div
          class="col-lg-6 col-sm-12 pb-2"
          v-for="(item, index) in projects.data"
          :key="index"
        >
          <div class="card" style="min-height:150px">
            <div class="card-header">
              <div class="card-title d-flex mb-0 text-uppercase">
                <span style="font-size: 20px; ">
                  {{ item.name }}
                </span>

                <router-link
                  class="ml-auto btn btn-secondary"
                  :to="'/projects/' + item._id + '/settings'"
                >
                  <b-icon-gear></b-icon-gear>
                </router-link>
              </div>
            </div>
            <div class="card-body">
              <div class="row no-gutters">
                <div class="col-auto">
                  <div class="cyan fill-height">&nbsp;</div>
                </div>

                <div class="col pa-3 py-4">
                  {{ item.description }}
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-between">
                <router-link
                  class="btn btn-primary"
                  :to="'projects/' + item._id"
                  >Explore
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Projects",
  computed: mapState(["projects"]),
  data() {
    return {
      loading: true,
      dialog: true,
    };
  },
  created: async function() {
    this.$store.dispatch("getProjects").then(() => {
      this.loading = false;
    });
  },
};
</script>
