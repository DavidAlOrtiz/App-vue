<template>
    <section>
        <ion-img :src="image" :alt="title"></ion-img>
         <h1 class="ion-text-center">{{title}}</h1>
         <p class="ion-text-center">{{descripcion}}</p>
    </section>
    
   
</template>

<script>
import { IonImg } from "@ionic/vue";
export default {
  props: ["title", "image", "descripcion"],
  components: {
    IonImg,
  },
};
</script>

<style>
</style>