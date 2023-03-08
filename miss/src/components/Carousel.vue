<template>
    <main id="main">
      <div class="fill-screen">
        <div
          v-for="card in cards"
          class="img"
          :key="card.id"
          :style="{ display: active_card.id != card.id ? 'none' : '' }">
          <img :src="card.img" />
        </div>
        <div class="dots">
          <span
            :class="{ dot: true, active: dot.id == active_slide }"
            v-for="dot in cards"
            :key="dot"
            @click="this.activate(dot.id)"
          >
          </span>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import Img2 from '../assets/images/carousel-images/carousel1.jpg';
  import Img3 from '../assets/images/carousel-images/carousel2.jpg';
  export default {
    created() {
      console.log("here");
      if (this.auto_animate) {
        this.interval = setInterval(() => {
          this.active_slide =
            this.active_slide == this.cards.length
              ? 1
              : (this.active_slide + 1) % (this.cards.length + 1);
        }, 5000);
      }
    },
    data() {
      return {
        auto_animate: true,
        cards: [
          {
            img:
              Img2,
            id: 1
          },
          {
            img:
            Img3,
            id: 2
          },
          {
            img:
            Img2,
            id: 3
          },
          {
            img:
            Img3,
            id: 4
          },
          {
            img:
            Img2,
            id: 5
          }
        ],
        active_slide: 1
      };
    },
    methods: {
      activate(id) {
        this.active_slide = id;
      }
    },
    computed: {
      active_card: function () {
        return this.cards.filter((card) => card.id == this.active_slide)[0];
      }
    }
  };
  </script>
  
  <!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
  <style lang="scss" scoped>
  .fill-screen {
    position: relative;
  }
  .dots {
    position: absolute;
    bottom: 15px;
    left: 50%;
    padding: 10px;
    /* background: #777777aa; */
    border-radius: 25px;
  }
  .dot.active {
    /* width: 20px; */
    background: green;
    /* border-radius: 8px; */
  }
  
  .dot {
    width: 8px;
    height: 8px;
    background: lightgray;
    display: inline-block;
    margin: 0 4px;
    border-radius: 8px;
    transition: width 1.1s ease-in;
    box-shadow: 1px 1px 9px 2px grey;
    cursor: pointer;
  }
  img{
    width: 100%;
    height: 100vh;
    transition: opacity 0.5s ease;
  }
  .img img {
    width: 100%;
    height: 100vh;
  }
  
  </style>
  