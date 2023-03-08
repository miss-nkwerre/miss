<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import Navigation from './components/Navigation.vue';
  import Info from './components/Info.vue';
  import Footer from './components/Footer.vue';
 
</script>

<template>
  <header>
    <div class="container">
              <!--INFO TOP  -->
      <Info/>
            <!-- HEADER MAIN BEGIN -->
      <Navigation/>
      </div>
  </header>

  <RouterView />
  <Footer/>
</template>
<style lang="scss" scoped>
@import './assets/style.scss';


</style>
