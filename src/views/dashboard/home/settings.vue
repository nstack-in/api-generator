<template>
    <div class="container my-4">
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