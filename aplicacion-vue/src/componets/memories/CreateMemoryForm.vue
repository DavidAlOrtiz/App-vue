<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Titulo:</ion-label>
        <ion-input type="text" required v-model="enteredTitle"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Imagen Url</ion-label>
        <ion-input type="url" required v-model="enteredImge"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Descripcion</ion-label>
        <ion-textarea rows="5"  required v-model="enteredDescription"></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block" fill="outline"> Guardar </ion-button>
  </form>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from "@ionic/vue";
export default {
    emits:['save-memory'],
    components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
  },
  data(){
    return{ 
      enteredTitle: '',
      enteredImge : '',
      enteredDescription: '' 
    }
  },
  methods:{
    submitForm(){
      const memoryData ={
        title: this.enteredTitle,
        image: this.enteredImge,
        description: this.enteredDescription
      }
      this.$emit('save-memory', memoryData);
    }
  }
};
</script>

<style>
</style>