<template>
  <div class="container">
    <div class="header-main">
      <!-- <p> {{ width }} </p> -->
      <div class="left-menu">
          <div>
            <router-link to="/">
                <a class="logo-container" href="#">
                    <img class="school-logo" alt="school logo" :src="Img2" />
                    <span class="logo-text">ST. MONICA NKWERRE</span>
                </a>
            </router-link>
          </div>
          <div   class="menu-icon" >
            <font-awesome-icon @click="handleMenuClick()"  :icon="['fas', icon]"/>
          </div>
      </div>
      <div class="right-menu">
        <ul class="menu-collections">
            <li class="menu"> <router-link to="/admissions">Admissions</router-link></li>
            <li class="menu-with-submenu"  @mouseleave="swapAboutChevronDown()" @mouseover="swapAboutChevronUp()">About <font-awesome-icon :icon="['fas', chevronForAbout]"/>
                <ul class="submenu">
                  <li class="sub-menu-items"><router-link to="/welcome_message">Welcome Address</router-link></li>
                  <li class="sub-menu-items"><router-link to="/history">School History</router-link></li>
                  <li class="sub-menu-items"><router-link to="/staff">Staff Members</router-link></li>
                </ul>
            </li>
            <li class="menu"><router-link to="/contact">Contact</router-link></li>
            <li class="menu-with-submenu"  @mouseleave="swapPortalChevronDown()" @mouseover="swapPortalChevronUp()" >Portal <font-awesome-icon :icon="['fas', chevronForPortal]"/>
                <ul class="submenu">
                  <li class="sub-menu-items"><router-link to="/results">Check Result</router-link></li>
                  <li class="sub-menu-items"><router-link to="/admission_status">Check Admission Status</router-link></li>
                  <li class="sub-menu-items"><router-link to="/login">Login</router-link></li>
                </ul>
            </li>
            <li class="menu"><router-link to="/gallery">Gallery</router-link></li>
        </ul>
      </div>
      </div>
      <div v-show="factor" class="right-menu-mobile">
        <ul class="menu-collections-mobile">
            <li class="menu-mobile"><router-link to="/admissions">Admissions</router-link></li>
            <li class="menu-mobile"><router-link to="/contact">Contact</router-link></li>
            <li class="menu-mobile"><router-link to="/gallery">Gallery</router-link></li>
            <li class="menu-with-submenu-mobile" >About 
                <ul class="submenu-mobile">
                  <li class="sub-menu-items-mobile"><router-link to="/welcome_message">Welcome Address</router-link></li>
                  <li class="sub-menu-items-mobile"><router-link to="/history">School History</router-link></li>
                  <li class="sub-menu-items-mobile"><router-link to="/staff">Staff Members</router-link></li>
                </ul>
            </li>
            
            <li class="menu-with-submenu-mobile">Portal 
                <ul class="submenu-mobile">
                  <li class="sub-menu-items-mobile"><router-link to="/results">Check Result</router-link></li>
                  <li class="sub-menu-items-mobile"><router-link to="/admission_status">Check Admission Status</router-link></li>
                  <li class="sub-menu-items-mobile"><router-link to="/login">Login</router-link></li>
                </ul>
            </li>
           
        </ul>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted} from 'vue'
import Img2 from '../assets/images/miss-logo.png';
import { storeToRefs } from 'pinia'
import { useNavigationStore } from '@/stores/navigation'
const store =useNavigationStore()
const {icon} = storeToRefs(store)
const {invert} = store

const chevronForAbout=ref('chevron-down')
const chevronForPortal=ref('chevron-down')

const swapAboutChevronUp=()=>{
  chevronForAbout.value='chevron-up'
}

const swapAboutChevronDown=()=>{
  chevronForAbout.value='chevron-down'
}

const swapPortalChevronUp=()=>{
  chevronForPortal.value='chevron-up'
}

const swapPortalChevronDown=()=>{
  chevronForPortal.value='chevron-down'
}


const width =ref()

const resizeHandler =() => {
 width.value = window.innerWidth;
 if (width.value >= 1040){
    if (factor.value === true){
      factor.value = false
      invert()
    }
 }
}

onMounted(() => {
    window.addEventListener('resize',resizeHandler)
})
const factor=ref(false)

const handleMenuClick=()=>{
    factor.value = !factor.value
    invert()
}

</script>

<style lang="scss" scoped>
.container{
  display:flex;
  flex-direction: column;
  
}
.header-main {
    display: flex;
    align-items: center;
    padding: 5px;
    flex-basis:1;
}

.left-menu{
  display:flex;
  align-self:flex-start;
  align-items: flex-start;
  justify-content: space-between;
  gap:10px;
  flex-basis:40%;
}
.logo-container{
  display:flex;
  align-items: center;
  gap:3px;
  padding:3px;

  &:hover{
    background-color: hsla(165, 98%, 22%, 0.9);
    padding:3px;
    border-radius:15px;
  }
}

.logo-text{
  font-weight: bold;
  color:#000;
  font-size:20px;
}

.school-logo{
  height:50px;
  width:50px;
  border-radius:35px;
  margin-left:10px;
  border:5px solid white;
  padding:5px;
}

.menu-icon{
  display:none;
}

.right-menu{
  display:flex;
  justify-content: center;
  align-items: center;
  align-self:flex-end;
  flex-basis: 60%;
  padding:2px;

ul{
  list-style-type:none;
  
}

}



.menu{
  a{
  font-weight: bold;
  text-align: center;
  font-size:20px;
  padding:5px;
  color:#000;

  &.router-link-active{
    color:rgb(255, 104, 4);
    font-weight: bold;
    font-size:20px;
    &:hover{
      color:rgb(255, 104, 4);
    }
  }

  &:hover{
    background-color: #006970;
    padding:5px;
    color:#fff;
    border-radius:40px;
  }
  }
}

.sub-menu-items{
  font-size:12px;
  font-weight: bold;
  color:#000;
  cursor:pointer;
  text-align: center;

  &:hover{
   text-decoration: underline rgb(2, 99, 99) 2px;
  }
}
.right-menu>ul>li{
  float:left;
  margin:10px;
}


.menu-with-submenu{
  position:relative;
  font-weight: bold;
  text-align: center;
  font-size:20px;
  color:#000;
  z-index:100 !important;
}

.menu-with-submenu:hover {
  color:rgb(255, 185, 157);
.submenu{
  position:absolute;
  left:-50px;
  top:33px;
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  padding:10px;
  z-index:120 !important;
  background-color: white;
  border-top:7px solid rgb(255, 185, 157);
  width:190px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  a{
    font-weight: bold;
    text-align: center;
    font-size:14px;
    padding:3px;
    color:#000;
    margin-top:10px;

    &.router-link-active{
      color:rgb(255, 104, 4);
      font-weight: bold;
      font-size:14px;
      &:hover{
        color:rgb(255, 104, 4);
      }
    }

    &:hover{
      background-color: #006970;
      color:white;
      border-radius:40px;
    }
  }
}

}


.submenu{
 display:none;
}

.menu-collections{
  display: inline-block;
}

.right-menu-mobile{
  display:inline-flex;
  flex-direction: column;
  background-color:#000;
  flex-basis:100%;
  margin:0;
  padding:0;
  z-index:50;
  padding-bottom:10px;
  padding-top:10px;
  overflow: hidden;

  ul{
    list-style-type: none;
  }


  .menu-collections-mobile{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
  
    
    a {
      font-weight: bold;
      text-align: center;
      font-size:15px;
      color:#c3b3fd;
      padding:5px;
     
      &:hover{
        background-color: #006970;
        padding:5px;
        color:#fff;
        border-radius:40px;
      }
      &.router-link-active{
        color:rgb(255, 104, 4);
        font-weight: bold;
        font-size:15px;
        &:hover{
          color:rgb(255, 104, 4);
        }
      } 
    }
  }
  .menu-with-submenu-mobile{
    font-weight: bold;
    font-size:20px;
    color:#d9d6ff;
    padding-left:30px;
    
  }
  .sub-menu-items-mobile{
    font-weight: bold;
    font-size:20px;
    color:#fdfcfc;
  }

}




@media (max-width : 400px) {
  .logo-container{
    .logo-text{
      font-size: 16px;
    }
  }
}


@media (max-width: 1040px) {
  .logo-container{
    margin-left:2px;
  }
  .menu-icon{
    display: block;
    color:#000;
    font-size:20px;
    border-radius:30px;
    padding:8px;
    border: 4px solid rgb(1, 54, 63);
    transition:0.3s ease all;
    &:hover{
      transition: 0.50s;
      transform: rotate(180deg);
      cursor:pointer;
      border-right: 4px solid rgb(2, 195, 230);
      border-bottom: 4px solid rgb(2, 195, 230);
      //border: 4px solid rgb(2, 195, 230);
    }
  }
  .header-main {
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content: center;
    padding:0;
    margin:0;
}
.left-menu{
  display:flex;
  align-items: center;
  gap:5px;
  width:100%;
  padding-right:20px;
  padding-bottom: 10px;

}


.right-menu{
  display:none;
}

  }
    
</style>