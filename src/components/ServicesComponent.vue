<template>
  <b-col md="3">
    <b-card
      :title="section.name"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>

      <router-link
        :to="{ name: 'Services-Show', params: { name: section.name } }"
      >
        Más informacion
      </router-link>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    section: Object,
  },
}
</script>

<style scoped>
</style>