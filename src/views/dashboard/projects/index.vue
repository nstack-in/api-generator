<template>
<div>
        <v-row>
            <v-col lg="4" md="6" sm="12" cols="sm" class="pb-2" v-for="(item, index) in projects" :key="index">
                   
                <v-card style="min-height:250px" >
                    <v-card-title>
                    {{item.name}}
                    </v-card-title>
                    <v-row class="no-gutters">
                        <div class="col-auto">
                            <div class="cyan fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4 cyan--text">
                            <h5 class="text-truncate text-uppercase">{{item.name}}</h5>
                            <h1>53</h1>
                        </div>
                    </v-row>
                    <v-card-actions>
                    <v-btn text :to="'projects/'+item._id">Open</v-btn>
                    </v-card-actions>
                </v-card>

            </v-col>
            
        </v-row>
        
    </div>
</template>

<script>
export default {
    name:"Projects",
    data() {
        return {
            projects :[]
        }
    },
    created: async function ()  {
        this.$store.dispatch('getProjects').then(e=> this.projects = e);
        
    },
}
</script>