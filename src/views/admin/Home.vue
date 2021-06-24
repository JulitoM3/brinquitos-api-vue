<template>
  <div class="">
desde el admin
  </div>
</template>

<script>
export default {
beforeCreate(){
   
    if(!localStorage.getItem('token')){
        this.$router.push({name:'Home'})
    }
}
}
</script>

<style>

</style>