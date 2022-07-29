<template>
  <base-layout pageTitle="Mis memorias">
    <MemoriesList />
  </base-layout>
</template>

<script>
//import { IonList, IonItem, IonImg, IonLabel, IonThumbnail } from "@ionic/vue";
import MemoriesList from '../componets/memories/MemoriesListItem.vue'
export default {
  components: {
   MemoriesList
  },
  computed:{ 
    memories(){
      return this.$store.getters.memories;
    },
  }
};
</script>

<style >
</style>>

