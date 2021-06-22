<template>
  <div>
    <b-card
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    text-variant="white"
    :title="title"
    class="text-center">
    <b-card-text>
      {{ message }}
    </b-card-text>
    <b-row>
    </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data(){
    return{
    'title': "Brinquitos",
    'message': ""
    }
  },
  created(){

  }
}
</script>

