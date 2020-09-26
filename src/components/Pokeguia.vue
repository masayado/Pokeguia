<template>
<div class="contenedor">
    <nav class="navbar navbar-light bg-danger">
        <a class="navbar-brand text-white">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png" width="30" height="30" class="d-inline-block align-top" alt="">
        {{titulo}}
        </a>
    </nav>

    <h1 class="display-4 text-center text-danger p-4">Busca a tu Pokémon</h1>

    <div class="d-flex flex-row justify-content-center">
       <input type="text" class="form-control text-center" placeholder="Ingrese el nombre" style="max-width: 18rem;" @keyup.enter="fetchPersonaje" v-model="pj.nombre">
    </div>
    <div class="d-flex flex-row justify-content-center">
       <button type="button" class="btn btn-danger btn-block m-2" style="max-width: 18rem;" @click.prevent="fetchPersonaje">Buscar</button>
    </div>

    <div class="d-flex flex-row justify-content-center">
        <div class="card border-danger mb-3" style="width: 18rem;">
        <div class="card-header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png" width="30" height="30" class="pokebola" alt="">
            <h5 class="text-center mb-0">{{pj.name}}</h5>
        </div>
        <div class="card-body text-danger">
            <center><img class="pokeimagen m-0" :src="img.front_default" alt="Imagen Pokémon"></center>
            <br>
            <h5 class="card-title text-center">Habilidades</h5>
            <p class="card-text mb-0 text-center" v-for="(habilidad, index) in habilidades" :key="index">{{habilidad.ability.name}}</p>
            <br>
            <h5 class="card-title text-center">Movimientos</h5>
            <p class="card-text mb-0 text-center" v-for="(movimiento, index) in movimientos" :key="index">{{movimiento.move.name}}</p>
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
        img(){
            return this.pj.sprites;
        },
        movimientos(){
            return this.pj.moves;
        },
        habilidades(){
            return this.pj.abilities;
        }
    },
    methods: {
        fetchPersonaje:function(){
            //alert("Buscando el pokemon")
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.pj.nombre}`)
            .then (response=> response.json())
            .then(json=>{
                console.log(json)
                this.pj=json;
            })
            .catch(error=>{
                alert("Input inválido // Personaje no encontrado")
                console.log(error)
            })
        }
    },
    created:function(){
        this.fetchPersonaje;
    },
    mounted:function(){
        this.pj.nombre="pikachu"
        this.fetchPersonaje();
    }

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