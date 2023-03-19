<template>
    <div class="header-top">
        <div >
          <ul class="header-top-left">
            <li>
              <font-awesome-icon :icon="['fas', 'phone']"/>  +234-902-907-3463
            </li>
            <li>
              <a href = "mailto: sr.mmasichi@gmail.com"><font-awesome-icon :icon="['fas', 'envelope']"/>  sr.mmasichi@gmail.com
              </a>
            </li>
            <li>
             <font-awesome-icon :icon="['fa', 'clock']"/>  MON-FRI  ( 8:00am to 6:00pm )
            </li>
          </ul>
        </div>
        <div >
          <ul class="header-top-right">
              <li class="text-white">
                <router-link to="/e-learn">E-learn</router-link>
              </li>
              <li class="text-white">
                <router-link to="/alumni">Alumni</router-link>
              </li>
              <li class="text-white">
                <router-link to="/login">Login</router-link>
              </li>
          </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Info",
        data() {
            return {
                
            }
        },
    }
</script>

<style lang="scss" scoped>
.header-top {
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 15px;
    width:100%;
}

.header-top-left{
  display:flex;
  gap:10px;
  color:rgb(248, 211, 189);
  font-weight: bold;
  font-size: 17px;
}

.header-top-left > li> a{
  color:rgb(248, 211, 189);
  font-size: 17px;
  padding:5px;
}

.header-top-left > li> a:hover{
  border-radius:10px;
  background-color: rgb(2, 48, 85);
  padding:5px;
}

.fa{
  margin:5px;
  color:rgb(243, 10, 146);
  font-weight: bold;
}

.header-top ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    padding: 0 3em;
}

.header-top-right{
  display:flex;
  gap:10px;
  
}
.header-top-right> li> a{
  color: rgb(169, 215, 252);
  font-weight: bold;
  font-size: 17px;
  border-left: 5px dotted #F2AA4C;
  padding:5px;
  &.router-link-active{
    color:rgb(255, 104, 4);
    font-weight: bold;
    font-size:17px;
  }
}
.header-top-right> li> a:hover{
  border-left: none;
  border-radius:10px;
  background-color: rgb(249, 255, 255);
  padding:5px;
}


@media (max-width: 1120px){
  .header-top {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    margin-bottom:5px;
}
.header-top-left{
  display:flex;
  font-size: 15px;
}

.header-top-left > li> a{
  color:rgb(248, 211, 189);
  font-size: 15px;
}

.header-top-left > li> a:hover{
  border-radius:10px;
  background-color: rgb(2, 48, 85);
  padding:3px;
}

.header-top-right> li> a{
  font-size: 15px;
  margin-top:10px;
  border-left:none;
  padding:4px;
  border-radius:10px;

  &:hover{
    padding:4px;
  }
}

}

</style>