<template>
  <div id="app">
    <poke-guia></poke-guia>
  </div>
</template>

<script>
  import Pokeguia from "./components/Pokeguia.vue";
  export default {
    data() {
      return {
        message: 'Pokeguia',
      };
    },
    components:{
      'poke-guia': Pokeguia,
    }
  }
</script>

<style>
  #app {

  }
</style>
