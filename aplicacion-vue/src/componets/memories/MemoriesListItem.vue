<template>
   <ion-item
      v-for="m in memories"
      :key="m.id"
      :router-link="`/memoriesa/${m.id}`"
    >
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
    props:["memories"],
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