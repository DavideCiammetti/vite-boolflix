<script>
import Cards from './elementiHeader/Cards.vue';
import axios from 'axios';
import {store} from '../store';

  export default{
    name: 'mian',

    components: {
        Cards,
    },

    data(){
        return{
            store,
        };
    },

    methods:{
        // funzione per la ricerca del film restituisce tutti i film cercati 
        newSearch(){
            for(let i = 0; i < 1; i++){
                
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
          // tv series
          for(let i = 0; i < 1; i++){
            this.store.totSeriesPage += 1;

            axios.get( this.store.seriesApiURL + this.store.search + '&page=' + this.store.totSeriesPage ).then((response)=>{
                this.store.tvSeries = response.data.results;
                console.log('sono tv', this.store.tvSeries );

                this.store.tvSeries.forEach((element)=>{
                    this.store.allSeries.push(element);
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
            <li  v-for="result in this.store.allMovies">
              <h2>movies</h2>
                <Cards  
                :originalTitle="result.original_title"
                :title="result.title"
                :originalLanguage="result.original_language"
                :vote="result.vote_average "
                />
            </li>
        </ul>
    </div>
    <div>
        <ul>
            <li  v-for="result in this.store.allSeries">
              <h2>tv series</h2>
                <Cards  
                :originalTitle="result.original_name"
                :title="result.name"
                :originalLanguage="result.original_language"
                :vote="result.vote_average "
                />
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
  
</style>
