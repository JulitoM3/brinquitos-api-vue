<template>
  <div id="title" v-on:click="goHome">
            <div class="circle">
              <h1>
                <span>Brinquitos</span>
              </h1>
            </div>
  </div>    
</template>

<script>
export default {
methods:{
    goHome(){
        this.$router.push({
            name: 'Home'
        })
    }
}
}
</script>

<style>
#title {
  font-family: 'Lobster', cursive;
}
.circle {
  height: 100px;
  width: 100px;
  cursor: pointer;
}
h1 {
  color: #d5e2d6;
  margin-left: -8px;
  line-height: 80px;
  margin-top: -204px;

  /*-----------------------*/
  text-shadow: 1px 1px #4a744d, 2px 2px #4a744d, 3px 3px #4a744d,
    4px 4px #4a744d, 5px 5px #4a744d, 6px 6px #4a744d, 7px 7px #4a744d,
    8px 8px #4a744d, 9px 9px #4a744d, 10px 10px #4a744d, 11px 11px #4a744d,
    12px 12px #4a744d, 13px 13px #4a744d, 14px 14px #4a744d, 15px 15px #4a744d,
    16px 16px #4a744d, 17px 17px #4a744d, 18px 18px #4a744d, 19px 19px #4a744d,
    20px 20px #4a744d, 21px 21px #4a744d, 22px 22px #4a744d, 23px 23px #4a744d,
    24px 24px #4a744d, 25px 25px #4a744d, 26px 26px 6px #06520c;
}

span:nth-child(1) {
  font-size: 80px;
}
</style>