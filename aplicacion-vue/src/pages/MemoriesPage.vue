<template>
  <base-layout pageTitle="Mis memorias">
   <template v-slot:action-end>
    <ion-button router-link="/memories/add" >
      <ion-icon slot="icon-only" :icon="add"></ion-icon>
    </ion-button>
   </template>
    <MemoriesList :memories="memories" ></MemoriesList>
  </base-layout>
</template>

<script>
//import { IonList, IonItem, IonImg, IonLabel, IonThumbnail } from "@ionic/vue";
import {IonButton, IonIcon} from '@ionic/vue'
import {add} from 'ionicons/icons'
import MemoriesList from '../componets/memories/MemoriesList.vue'
export default {
  components: {
   MemoriesList,
   IonButton,
   IonIcon
  },
  data(){
    return {
      add
    }
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

