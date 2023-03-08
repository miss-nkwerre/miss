<template>
    <div class="header-main">
        <div >
          <a class="logo-container" href="#">
              <img class="school-logo" alt="school logo" :src="Img2" />
              <span class="logo-text">ST. MONICA NKWERRE</span>
          </a>
        </div>
        <div  @click.prevent="invert()"  class="menu-bar" >
          <font-awesome-icon :icon="['fas', icon]"/>
          <!-- <font-awesome-icon :icon="['fas', 'bars']"  /> -->
        </div>
      </div>
</template>

<script setup>
import { ref} from 'vue'
import Img2 from '../assets/images/miss-logo.png';
import { storeToRefs } from 'pinia'
import { useNavigationStore } from '@/stores/navigation'
const store =useNavigationStore()
const { iconShowing,icon} = storeToRefs(store)
const {invert} = store

</script>

<style lang="scss" scoped>
.header-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
}

.logo-container{
  display:flex;
  align-items: center;
  gap:3px;
}

.logo-text{
  font-weight: bold;
  color:#000;
  font-size:18px;
}

.school-logo{
  height:50px;
  width:50px;
  border-radius:35px;
  margin-left:10px;
  border:5px solid white;
  padding:5px;
}

.menu-bar{
  color:black;
  font-size:40px;
  margin-right:30px;
  border-radius:30px;
  padding:3px;
  border: 5px solid white;
}


.header-main .nav-menu {
    // background-color: rgb(0, 255, 136);
    padding: 0 10px;
}
.header-main .menu > .menu-item {
    display: inline-block;
    margin-left: 30px;
    // position: relative;
}
.header-main .menu > .menu-item > a {
    display: block;
    padding: 10px 0;
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 600;
    color: white;
    transition: all 0.3s ease;
}
.header-main .menu > .menu-item > a .plus {
    display: inline-block;
    height: 15px;
    width: 15px;
    // background-color: red;
    position: relative;
}
.header-main .menu > .menu-item > a .plus::before,
.header-main .menu > .menu-item > a .plus::after
{
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: black;
    height: 2px;
    width: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
}
// .header-main .menu > .menu-item:hover > a .plus::before,
// .header-main .menu > .menu-item:hover > a .plus::after{

// }
.header-main .menu > .menu-item > a .plus::after {
    transform: translate(-50%, -50%) rotate(-90deg);
}
.header-main .menu > .menu-item > .sub-menu {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 220px;
    position: absolute;
    left: 0;
    top: 100%;
    background-color: white;
    padding: 10px 0;
    border-top: 3px solid red;
    transform: translateY(10px);
    transition: all 0.3s ease;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;

}
.header-main .menu > .menu-item > .sub-menu > .menu-item > a {
    display: block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;
    color: #000;
    transition: all 0.3s ease;
    text-transform: capitalize;
}
.header-main .open-nav-menu {
    height: 34px;
    width: 40px;
    margin-right: 15px;
    // display: flex;
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.header-main .open-nav-menu span {
    display: block;
    height: 3px;
    width: 24px;
    background-color: #000;
    position: relative;
}
.header-main .open-nav-menu span::before,
.header-main .open-nav-menu span::after{
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;   
}
.header-main .open-nav-menu span::before{
    top: -7px;
}
.header-main .open-nav-menu span::after{
    top: 7px;
}
.header-main .close-nav-menu {
    width: 40px;
    height: 40px;
    background-color: #fff;
    margin: 0 0 15px 15px;
    cursor: pointer;
    // display: flex;
    display: none;
    justify-content: center;
    align-items: center;

}
.header-main .close-nav-menu i{
    color: red;
    
}
@media (min-width: 992px) {
.header-main .menu > .menu-item-has-children:hover > .sub-menu {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
}
.header-main .menu > .menu-item:hover > a .plus::after {
    transform: translate(-50%, -50%) rotate(0deg);
}
}
@media (max-width: 1023px) {
    .header-main .nav-menu {
        // display: none;
        position: fixed;
        visibility: hidden;
        right: -280;
        width: 280px;
        height: 100%;
        top: 0;
        overflow-y: auto;
        background-color: #222;
        z-index: 1000;
        padding: 15px 0;
        transition: all 0.5s ease;

    }
    // open class for the siderbarrrrrrrrrrrrrrrrrrrrrrrrr
    .header-main .nav-menu .open{
        visibility: visible;
        right: 0px;
    }
    .header-main .menu .menu-item{
        display: block;
        margin: 0;
    }
    .header-main .menu > .menu-item > a{
        color: white;
        padding: 12px 15px;
        border-bottom: 1px solid #333;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header-main .menu > .menu-item:first-child > a {
        border-top: 1px solid #333 ;
    }
    .header-main .menu > .menu-item >  .sub-menu {
        width: 100%;
        position: relative;
        opacity: 1;
        visibility: visible;
        border: none;
        background-color: transparent;
        box-shadow: none;
        transform: translateY(0px);
        padding: 0px;
        left: auto;
        top: auto;  
        max-height: 0;
        overflow: hidden;     
    }
    .header-main .menu > .menu-item > .sub-menu > .menu-item > a {
        padding: 12px 45px;
        color: #fff;
        border-bottom: 1px solid #333;
    }
    .header-main .menu > .menu-item-has-children:hover > .sub-menu {
        transform: translateY(0);
        // opacity: 1;
        // visibility: visible;
        max-height: 220px
    }
    .header-main .menu > .menu-item:hover > a .plus::after {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    
    .header-main .close-nav-menu, 
    .header-main .open-nav-menu{
        display: flex;
    }
    
}
</style>