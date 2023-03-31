<script setup >
import { ref} from 'vue'
import logo from '../assets/images/miss-logo.png'
import img1 from '../assets/images/carousel-images/carousel1.jpg'
import img2 from '../assets/images/carousel-images/carousel2.jpg'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
const direction=ref('rtl')

</script>

<template>
  <div class="container">
    <carousel :dir="direction" :wrap-around="true" :snap-align="center-even" :items-to-show="1" :transition="800" :autoplay="2500"  >
      <slide  :key="0">
        <div class="carousel__item"><img class='carousel-img' :src="logo" alt="logo"/></div>
      </slide>
      <slide  :key="1">
        <div class="carousel__item"><img class='carousel-img' :src="img1" alt="logo"/></div>
      </slide>
      <slide  :key="2">
        <div class="carousel__item"><img class='carousel-img' :src="img2" alt="logo"/></div>
      </slide>
      <slide  :key="3">
        <div class="carousel__item"><img class='carousel-img' :src="logo" alt="logo"/></div>
      </slide>
      <slide  :key="4">
        <div class="carousel__item"><img class='carousel-img'  :src="img1" alt="logo"/></div>
      </slide>
      <slide  :key="5">
        <div class="carousel__item"><img class='carousel-img' :src="img2" alt="logo"/></div>
      </slide>
    </carousel>
</div>
</template>

<style lang="scss">
.container{
  width:100vw;
  overflow-x:clip;
  overflow-clip-margin: border-box;

}

@media (max-width: 1040px) {

.container{
  width:100%;
  overflow:hidden !important;
}

  
}


.carousel__item {
  height: 500px;
  width:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  
 


  & .carousel-img{
    width:100%;
    height:100%;
    
   

  }

}
</style>