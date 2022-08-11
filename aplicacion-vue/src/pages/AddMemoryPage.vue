<template>
  <BaseLayout pageTitle="Juan" page-default-back-link="/">
    <CreateMemoryForm @save-memory="saveMemory" />
    <h2>Agregamos un recuerdo</h2>
  </BaseLayout>
</template>

<script>
import BaseLayout from "../componets/base/BaseLayout.vue";
import CreateMemoryForm from "../componets/memories/CreateMemoryForm.vue"

export default {
  components: {
    BaseLayout,
    CreateMemoryForm
  },
  methods: {
    saveMemory(memoryData){
      this.$store.dispatch('addMemory', memoryData)
      this.$router.replace('/');
    },
  }
};
</script>

<style>
</style>