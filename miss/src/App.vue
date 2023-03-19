<script setup>
  import { RouterView } from 'vue-router';
  import Navigation from './components/Navigation.vue';
  import Info from './components/Info.vue';
 
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
</template>
<style lang="scss" scoped>
@import './assets/style.scss';


</style>
