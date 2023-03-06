<template>
    <div class="header-main">
        <div class="logo">
          <a href="#">
              <img alt="MISS logo" :src="img" width="80" height="80" />
          </a>
          <a href="#"><h5>{{ logoTextone }} <br/> {{ logoTExttwo }}</h5></a>
        </div>
        <div class="open-nav-menu" :class="{'open': showMobileNav}" @click.prevent="showMobileNav = !showMobileNav">
          <span></span>
        </div>
        <div class="menu-overlay"></div>
        <!-- NAVIGATION START -->
        <nav class="nav-menu"  :class="{'open': showMobileNav}">>
        <div class="close-nav-menu" >
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
          <ul class="menu">
            <li class="menu-item">
              <RouterLink to="/about">home</RouterLink>
            </li> 
            <li class="menu-item menu-item-has-children">
              <RouterLink to="/">foundation<i class="plus"></i></RouterLink>
                <ul class="sub-menu">
                  <li class="menu-item">
                    <RouterLink to="/">Home</RouterLink>
                  </li>
                  <li class="menu-item">
                    <RouterLink to="/">Home1</RouterLink>
                  </li>
                  <li class="menu-item">
                    <RouterLink to="/">Home2</RouterLink>
                  </li>
                  <li class="menu-item">
                    <RouterLink to="/">Home3</RouterLink>
                  </li>
                </ul>
            </li>
            <li class="menu-item menu-item-has-children">
              <RouterLink to="/">education<i class="plus"></i></RouterLink>
                <ul class="sub-menu">
                  <li class="menu-item">
                    <RouterLink to="/">Home</RouterLink>
                  </li>
                  <li class="menu-item">
                    <RouterLink to="/">Home1</RouterLink>
                  </li>
                  <li class="menu-item">
                    <RouterLink to="/">Home2</RouterLink>
                  </li>
                  <li class="menu-item">
                    <RouterLink to="/">Home3</RouterLink>
                  </li>
                </ul>
            </li> 
            <li class="menu-item">
              <RouterLink to="/">gallery</RouterLink>
            </li>
            <li class="menu-item menu-item-has-children">
              <RouterLink to="/">activities<i class="plus"></i></RouterLink>
                <ul class="sub-menu">
                  <li class="menu-item">
                    <RouterLink to="/">Home</RouterLink>
                  </li>
                  <li class="menu-item">
                    <RouterLink to="/">Home1</RouterLink>
                  </li>
                  <li class="menu-item">
                    <RouterLink to="/">Home2</RouterLink>
                  </li>
                  <li class="menu-item">
                    <RouterLink to="/">Home3</RouterLink>
                  </li>
                </ul>
            </li>
            <li class="menu-item menu-item-has-children">
              <RouterLink to="/">resource<i class="plus"></i></RouterLink>
                <ul class="sub-menu">
                  <li class="menu-item">
                    <RouterLink to="/">Home</RouterLink>
                  </li>
                  <li class="menu-item">
                    <RouterLink to="/">Home1</RouterLink>
                  </li>
                  <li class="menu-item">
                    <RouterLink to="/">Home2</RouterLink>
                  </li>
                  <li class="menu-item">
                    <RouterLink to="/">Home3</RouterLink>
                  </li>
                </ul>
            </li>
            <li class="menu-item menu-item-has-children">
              <RouterLink to="/">portal<i class="plus"></i></RouterLink>
                <ul class="sub-menu">
                  <li class="menu-item">
                    <RouterLink to="/">Home</RouterLink>
                  </li>
                  <li class="menu-item">
                    <RouterLink to="/">Home1</RouterLink>
                  </li>
                  <li class="menu-item">
                    <RouterLink to="/">Home2</RouterLink>
                  </li>
                  <li class="menu-item">
                    <RouterLink to="/">Home3</RouterLink>
                  </li>
                </ul>
            </li>
          </ul>
        </nav>
      </div>
</template>

<script>
import Img2 from '../assets/images/miss-logo.png';
    export default {
        name: 'Navigation',
        data() {
    return {
      isOpen: 'open',
      isActive: 'active',
      hideScrolling: 'hidden-scrolling',
      logoTextone: `ST.MONICA'S INTERNATIONAL `,
      logoTExttwo: 'secondary school nkwerre, imo state',
      img: Img2,
      showMobileNav: false,
    }
  },
    // methods: {
      
    // },
    }
</script>

<style lang="scss" scoped>
// HEADER MAIN START
.header-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    
}
.header-main .logo a {
    display: inline-block;
    margin-left: 15px;
    font-size: 20px;
    text-transform: capitalize;
    
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