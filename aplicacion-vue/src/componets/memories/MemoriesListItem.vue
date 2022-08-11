<template>
   <ion-item :router-link="`/memories/${m.id}`">
      <ion-thumbnail slot="start">
        <ion-img :src="m.image" :alt="m.title"></ion-img>
      </ion-thumbnail>
      <ion-label>
        {{ m.title }}
      </ion-label>
    </ion-item>
</template>

<script>
import {IonItem, IonThumbnail, IonImg, IonLabel} from "@ionic/vue";
export default {
    props:["m"],
    components: {
        IonItem,
        IonThumbnail,
        IonImg,
        IonLabel
    }
}
</script>

<style>

</style>