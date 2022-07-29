<template>

  <base-layout :pageTitle="loadedMemory ? loadedMemory.title : 'loading..' " page-default-back-link="/">
    <h2 v-if="!loadedMemory">No se encontro info de ese id {{loadedMemory}}</h2>
    <h1 v-else>Pagina principañ</h1>
  </base-layout>
</template>

<script>
export default {
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