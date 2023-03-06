<template>
    <div class="header-top">
        <div class="header-top-left">
          <ul>
            <li>
              <a class="text-white" href="#">
                <i class="fa fa-phone text-white">+234902-907-3463</i>
                </a>
            </li>
            <li>
              <i class="fa fa-clock-o text-white">Mon-Fri 8:00am to 6:00pm</i>
            </li>
            <li>
              <a class="text-white" href="#"> <i class="fa fa-envelope-o text-white">sr.mmasichi@gmail.com</i> 
              </a>
            </li>
          </ul>
        </div>
        <div class="header-top-right">
          <ul>
            <li class="text-white">|</li>
              <li>
                <a href="#" class="text-white">e-learn</a>
              </li>
              <li class="text-white">|</li>
              <li>
                <a href="#" class="text-white">Join Alumni</a>
              </li>
              <li class="text-white">|</li>
              <li><a href="#" class="text-white">Portal</a>
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
    // background-color: var(--vt-c-green);
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
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
.header-top a,
i,
.text-white {
    padding: 0 1em;
    color: var(--vt-c-white);
}

</style>