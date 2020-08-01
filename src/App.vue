<template>
  <div>
    <NavBar />
    <div class="my-top">
      <SecondaryNav v-if="$route.meta.secondary != false" />
      <router-view />
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/navigation/NavBar';
  import SecondaryNav from '@/components/navigation/SecondaryNav';

  export default {
    name: 'App',
    components: {
      NavBar,
      SecondaryNav
    },
    data: () => ({
    }),

    created() {
      this.$store.dispatch('verifyLogin',)
        // .then(data => {
        //     console.log(data);
        // })
        .catch(data => {
          this.$router.push('/login?message=Login-Expire');

          console.log(data);
        })
    },
  };
</script>

<style>
  .my-top {
    margin-top: 72px;
  }

  @media (max-width: 991px) {
    .my-top {
      margin-top: 62px;
    }
  }

  .pure-material-progress-linear {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    height: 0.25em;
    width: 100%;
    color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    background-color: rgba(var(--pure-material-primary-rgb, 33, 150, 243), 0.12);
    font-size: 16px;
  }

  .pure-material-progress-linear::-webkit-progress-bar {
    background-color: transparent;
  }

  /* Determinate */
  .pure-material-progress-linear::-webkit-progress-value {
    background-color: currentColor;
    transition: all 0.2s;
  }

  .pure-material-progress-linear::-moz-progress-bar {
    background-color: currentColor;
    transition: all 0.2s;
  }

  .pure-material-progress-linear::-ms-fill {
    border: none;
    background-color: currentColor;
    transition: all 0.2s;
  }

  /* Indeterminate */
  .pure-material-progress-linear:indeterminate {
    background-size: 200% 100%;
    background-image: linear-gradient(to right, transparent 50%, currentColor 50%, currentColor 60%, transparent 60%, transparent 71.5%, currentColor 71.5%, currentColor 84%, transparent 84%);
    animation: pure-material-progress-linear 2s infinite linear;
  }

  .pure-material-progress-linear:indeterminate::-moz-progress-bar {
    background-color: transparent;
  }

  .pure-material-progress-linear:indeterminate::-ms-fill {
    animation-name: none;
  }

  @keyframes pure-material-progress-linear {
    0% {
      background-size: 200% 100%;
      background-position: left -31.25% top 0%;
    }

    50% {
      background-size: 800% 100%;
      background-position: left -49% top 0%;
    }

    100% {
      background-size: 400% 100%;
      background-position: left -102% top 0%;
    }
  }
</style>