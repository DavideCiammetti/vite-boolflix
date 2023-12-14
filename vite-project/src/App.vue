<script>
import axios from 'axios';
import {store} from './store';
  export default{
    name: 'app',
    data(){
        return{
            store,
        };
    },

    methods:{
        // funzione per la ricerca del film restituisce tutti i film cercati 
        newSearch(){
            for(let i = 0; i < 20; i++){
                
                this.store.totPage += 1;
                console.log('sono pagina corrente' + this.store.totPage);

                axios.get( this.store.apiURL + this.store.search + '&page=' + this.store.totPage ).then((response)=>{
                this.store.film = response.data.results;
                console.log('sono film', this.store.film );

                this.store.film.forEach((element)=>{
                    this.store.allMovies.push(element);
                });
            });
        }
        },
        created(){

            this.newSearch();
        },
    },
};
</script>

<template>
    <div class="search">
        <input type="text" v-model="this.store.search" >
    </div>
    <div class="button" @click="newSearch">
        <button>cerca</button>
    </div>
    <div>
        <ul>
            <li  v-for="(result, i) in this.store.allMovies">
                n: {{ i + 1 }} <br>
                titolo originale:  {{ result.original_title }},<br>
                titolo :  {{ result.title}}, <br>
                lingua originale :  {{ result.original_language }}, <br>
                voto :  {{ result.vote_average }} 
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
    button{
        border: none;
        border: 1px solid black;
        margin-top: 10px;
    }
    li{
        list-style: none;
    }
</style>
