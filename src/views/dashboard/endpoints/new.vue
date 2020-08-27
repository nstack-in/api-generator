<template>
  <div class="container my-4">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/projects">Project</router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link :to="'/projects/' + id">{{ id }}</router-link>
      </li>
      <li class="breadcrumb-item active" aria-current="page">new</li>
    </ol>

    <div class="row">
      <div class="col-sm-12">
        <div class="alert alert-danger" v-if="error.status">
          {{ error.message }}
        </div>
        <div class="card">
          <div class="card-header">
            Create New Endpoint
          </div>
          <progress class="pure-material-progress-linear" v-if="loading" />
          <div class="card-body">
            <div class="mb-3">
              <label for="name" class="form-label">Endpoint Name</label>
              <input
                id="name"
                class="form-control"
                v-model="endpoint.name"
                name="name"
                type="text"
              />
            </div>
            <div class="mb-3">
              <label for="name" class="form-label"
                >Select Endpoint Data Nature</label
              >
              <select class="custom-select" v-model="endpoint.structured">
                <option value="false">Un-Structured</option>
                <option value="true">Structured</option>
              </select>
            </div>

            <div v-if="endpoint.structured == 'true'">
              <h4 class="ml-2">
                Define Structure
              </h4>
              <div
                class="row"
                v-for="(item, index) in endpoint.models"
                :key="index"
              >
                <div class="col-sm-6" style="padding-right:10px">
                  <div class="mb-3">
                    <input
                      class="form-control"
                      v-model="item.name"
                      type="text"
                      placeholder="Column Name"
                    />
                  </div>
                </div>

                <div class="col-sm-2" style="padding-right:10px">
                  <select
                    class="custom-select"
                    v-model="item.type"
                    placeholder="Select Data Type"
                  >
                    <option
                      :value="item"
                      v-for="(item, index) in supportedTypes"
                      :key="index"
                    >
                      {{ item }}
                    </option>
                  </select>
                </div>
                <div class="col-sm-2" style="padding-right:10px">
                  <div class="mb-3">
                    <input
                      class="form-control"
                      v-model="item.max"
                      type="number"
                      placeholder="Max Length"
                    />
                  </div>
                </div>
                <div class="form-check col-sm-2">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    v-model="item.required"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >Required</label
                  >
                </div>
              </div>
              <button class="btn btn-secondary" @click="add">
                Add More Columns
              </button>
            </div>
          </div>

          <div class="card-footer d-flex">
            <div class="ml-auto">
              <button class="btn btn-secondary" @click="createProject">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    id: function() {
      return this.$route.params.id;
    },
  },
  data() {
    return {
      methods: ["GET", "GET_ALL", "POST", "PATCH", "DELETE"],
      enabledMethods: [],
      supportedTypes: ["STRING", "NUMBER", "OBJECT", "ARRAY"],
      loading: false,
      error: {
        status: false,
        message: "",
      },
      endpoint: {
        name: "",
        methods: {
          GET: { secure: false, enabled: true },
          GET_ALL: { secure: false, enabled: true },
          PATCH: { secure: false, enabled: true },
          DELETE: { secure: false, enabled: true },
          POST: { secure: false, enabled: true },
        },
        structured: false,
        models: [
          {
            name: null,
            type: "STRING",
            max: null,
            required: true,
          },
        ],
      },
    };
  },
  methods: {
    add() {
      this.endpoint.models.push({
        name: null,
        type: "STRING",
        max: null,
        required: true,
      });
    },
    createProject() {
      this.loading = true;
      let models = [];
      let _id = this.$route.params.id;
      let data = JSON.parse(JSON.stringify(this.endpoint));
      data.models.forEach((element) => {
        if (element.name != null) models.push(element);
      });

      data["models"] = models;
      if (models.length == 0) {
        delete data["models"];
      }

      this.enabledMethods.forEach((element) => {
        this.endpoint.methods[element].enabled = true;
      });

      this.$store
        .dispatch("createEndpoint", { _id, data })
        .then((e) => {
          this.endpointData = e;
          this.loading = false;
          this.$router.push(`/projects/${_id}`);
        })
        .catch((e) => {
          this.loading = false;
          if (e.err.code == 11000) {
            this.error = {
              status: true,
              message: "Endpoint ID already exits in this project",
            };
          } else if (e.error.message == "Token Expired") {
            this.$router.push("/login");
          } else {
            this.error = e.error;
          }
        });
    },
  },
};
</script>
