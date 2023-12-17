<script>
import Navbar from './elementiHeader/Navbar.vue'
import axios from 'axios';
import SearchBar from './elementiHeader/SearchBar.vue'
import {store} from '../store';

  export default{
    name: 'header',
      components:{
        Navbar,
        SearchBar,
      },

      data(){
        return{
            store,
        };
      },

      methods:{

        apiCall(apiUrl, typeOfSee, allListToSee){
        
            axios.get( apiUrl + this.store.search + '&page=' + this.store.totPage ).then((response)=>{
                typeOfSee = response.data.results;
                console.log( typeOfSee);

                typeOfSee.forEach((element)=>{
                    allListToSee.push(element);
                });
            });
            // condizioni che evitano l'invio nella ricerca di spazi vuoti 
            if( this.store.search.trim() !== '' ){
                this.store.seeSearchResult = false;
            }
            if(this.store.search.trim() === '' && this.store.seeSearchResult === false){
              this.store.seeSearchResult = true;
            }
        },

        // funzione chiama api e gestisce film e serie tv 
        newSearch(){
            for(let i = 0; i < 1; i++){

              this.store.allMovies = [];
              this.store.allSeries = [];

                this.store.totPage += 1;
            // movie 
                this.apiCall(this.store.apiURL, this.store.film, this.store.allMovies);

            // tv series
                this.apiCall(this.store.seriesApiURL, this.store.tvSeries, this.store.allSeries);
            }

            this.store.search = '';
        },

        created(){
            this.newSearch();
        },
    }
      
  }
</script>

<template>
  <header>
    <!-- menu -->
      <Navbar/>
      <!-- barra ricerca laterale -->
      <SearchBar @searchMovie="newSearch"/>
  </header>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
    header{
      display: flex;
      position: fixed;
      width: 100%;
      z-index: 999;
      justify-content: space-around;
      background-color: $header-col;
    }
</style>
