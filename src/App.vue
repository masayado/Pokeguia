<template>
  <div id="app">
    {{message}}
    <poke-guia></poke-guia>
  </div>
</template>

<script>
  import Pokeguia from "./components/Pokeguia.vue";
  export default {
    data() {
      return {
        message: 'Hola en Vue',
      };
    },
    components:{
      'poke-guia': Pokeguia,
    }
  }
</script>

<style scoped>
  #app {
    font-size: 25px;
    font-family: "Calibri", sans-serif;
  }
</style>
