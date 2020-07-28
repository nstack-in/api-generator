<template>

    <section class="bg-gray-100 py-8">

        <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
            <h2 class="display-2 text-center">
                Pricing
            </h2>
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <v-row>
                <v-col>
                    <v-card>
                        <v-card-title>Free</v-card-title>

                        <v-card-content>
                            <ul>
                                <v-list-item>2 Projects</v-list-item>
                                <v-list-item>7 days data persistent</v-list-item>
                                <v-list-item>free up-to 100 records</v-list-item>
                                <v-list-item>500 request per day</v-list-item>
                            </ul>
                        </v-card-content>
                        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                                $0 <span class="text-base"> for lifetime</span>
                            </div>

                        </div>
                        <v-card-actions>
                            <v-btn flat color="primary" width="100%">
                                Sign Up
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>

                <v-col>
                    <v-card>
                        <v-card-title>
                            Basic
                        </v-card-title>
                        <v-card-content>
                            <ul class="w-full text-center text-base font-bold">
                                <v-list-item>10 Projects</v-list-item>
                                <v-list-item>lifetime *</v-list-item>
                                <v-list-item>10,000 records</v-list-item>
                                <v-list-item>10,000 request per day</v-list-item>
                            </ul>
                        </v-card-content>
                        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div class="w-full pt-6 text-4xl font-bold text-center">
                                $9.99 <span class="text-base">/ per months</span>
                            </div>

                        </div>
                        <v-card-actions>
                            <v-btn flat color="primary" width="100%">
                                Sign Up
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>

                <v-col>
                    <v-card>
                        <v-card-title>
                            PRO
                        </v-card-title>
                        <v-card-content>
                            <ul>

                                <v-list-item>50 Projects</v-list-item>
                                <v-list-item>lifetime *</v-list-item>
                                <v-list-item>100,000 records</v-list-item>
                                <v-list-item>100,000 request per day</v-list-item>

                            </ul>
                        </v-card-content>
                        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                                $24.99 <span class="text-base">/ per months</span>
                            </div>
                        </div>
                        <v-card-actions>
                            <v-btn flat color="primary" width="100%">
                                Sign Up
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </section>

</template>

<script>
    export default {
        name: "Pricing"
    }
</script>