<template>
    <div class="container my-4">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/projects">Home</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Settings</li>
        </ol>
        <div class="card">
            <div class="card-header">
                Settings
            </div>
            <div class="card-body">
                <div class="btn btn-danger" @click="deleteAccount">Delete Account</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            deleteAccount() {
                alert('Coming soon');
            }
        },
    }
</script>