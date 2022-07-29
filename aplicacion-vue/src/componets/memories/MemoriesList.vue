<template>
  <ion-list>
   <MemoriesListItem />
   <h1>Memories</h1>
  </ion-list>
</template>

<script>
import {IonList} from '@ionic/vue';
import MemoriesListItem from './MemoriesListItem.vue'
export default {
  props:["memories"],
  components: {
    IonList,
    MemoriesListItem
  }
};
</script>

<style>
</style>