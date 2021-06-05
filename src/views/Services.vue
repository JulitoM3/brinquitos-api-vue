<template>
  <div>
    <b-row>
      <ServicesComponent
        v-for="section in sections"
        :key="section.id"
        :section="section"
      />
    </b-row>
  </div>
</template>

<script>
import ServicesComponent from '@/components/ServicesComponent.vue'
import SectionService from '@/API-Services/SectionsService.js'
export default {
  name: 'Services',
  components: {
    ServicesComponent,
  },
  data() {
    return {
      sections: [],
    }
  },
  created() {
    SectionService.getSections()
      .then((response) => {
        this.sections = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>
