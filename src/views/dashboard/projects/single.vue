<template>
<div>
        <v-row>

                <v-card style="min-height:250px" >
                    <v-card-title>
                    Nmae
                    </v-card-title>
                
                </v-card>

            
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