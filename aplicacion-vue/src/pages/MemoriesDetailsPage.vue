<template>

  <base-layout :pageTitle="loadedMemory ? loadedMemory.title : 'loading..' " page-default-back-link="/">
    <h2 v-if="!loadedMemory">No se encontro info de ese id {{loadedMemory}}</h2>
    <!-- <h1 v-else>Pagina principañ</h1> -->
    <MemoriOver v-else :title="loadedMemory.title" :image="loadedMemory.image" 
     :descripcion="loadedMemory.description"></MemoriOver>
  </base-layout>
</template>

<script>
import MemoriOver from '../componets/memories/MemoriOver.vue'
export default {
  components:{
    MemoriOver
  },
  data(){
    return{
      memoriId : this.$route.params.id
    }
  },
  computed:{
    loadedMemory(){
      return this.$store.getters.memorie(this.memoriId)
    }
  },
  watch:{
    '$route'(currentRoute){
      this.memoriId = currentRoute.params.id
      console.log(this.memoriId)
    }
  }
}
</script>

<style>
</style>