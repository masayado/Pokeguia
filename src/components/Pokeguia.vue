<template>
<div class="contenedor">
    <nav class="navbar navbar-light bg-danger">
        <a class="navbar-brand text-white">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png" width="30" height="30" class="d-inline-block align-top" alt="">
        Pokeguía
        </a>
    </nav>

    <h1 class="display-4 text-center text-danger p-4">Busca a tu Pokémon</h1>

    <div class="d-flex flex-row justify-content-center">
       <input type="text" class="form-control text-center" placeholder="Ingrese el nombre" style="max-width: 18rem;">
    </div>
    <div class="d-flex flex-row justify-content-center">
       <button type="button" class="btn btn-danger btn-block m-2" style="max-width: 18rem;" @click.prevent="fetchPersonaje">Buscar</button>
    </div>

    <div class="d-flex flex-row justify-content-center">
        <div class="card border-danger mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png" width="30" height="30" class="pokebola" alt="">
        </div>
        <div class="card-body text-danger">
            <center><img class="pokeimagen" src="" alt="Imagen Pokémon"></center>
            <br>
            <h5 class="card-title text-center">Habilidades</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            <h5 class="card-title text-center">Movimientos</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
    </div>
    <br>
</div>
</template>

<script>
export default {
    name: 'pokeguia-component',
    // props: {},
    data: function(){
        return {
            titulo:"Pokeguía",
            pj:{
                nombre:"",
                movimiento:"",
                movimientos:[],
                habilidad:"",
                habilidades:[],
                sprites:{
                    front_default:"",
                },
            },
        }
    },
    computed:{
        image(){
            
        },
        movimientos(){

        },
        habilidades(){

        }
    },
    methods: {
        fetchPersonaje(){
           // alert("Buscando el pokemon")
        }
    },

    //components: {},
}
</script>

<style scoped>

nav{
    height: 80px;
}

h1{
    font-size:35px;
}

.pokebola{
    display: block; 
    margin-left: auto;
    margin-right: auto;
}
</style>