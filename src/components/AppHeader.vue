<script>
import Navbar from './elementiHeader/Navbar.vue'
import axios from 'axios';
import SearchBar from './elementiHeader/SearchBar.vue'
import SearchNotFoundAlert from './elementiMain/SearchNotFoundAlert.vue';
import {store} from '../store';

  export default{
    name: 'header',
      components:{
        Navbar,
        SearchBar,
        SearchNotFoundAlert,
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
                console.log('sono film e serie');
                console.log( typeOfSee);

                typeOfSee.forEach((element)=>{
                    allListToSee.push(element);
                });
            });
        },
       
        // funzione chiama api e gestisce film e serie tv 
        newSearch(){
            for(let i = 0; i < 1; i++){

              this.store.allMovies = [];
              this.store.allSeries = [];
              this.store.pushAllMovies = [];
              this.store.pushAllTvs = [];

              this.store.totPage += 1;
            // movie 
                this.apiCall(this.store.apiURL, this.store.film, this.store.allMovies);

            // tv series
                this.apiCall(this.store.seriesApiURL, this.store.tvSeries, this.store.allSeries);
            }

            //candizione per controllare i risultati della ricerca
            if( this.store.search.trim().length === 0){
                this.store.search = '';

                // array di tutti i film e serie tv
                this.apiCall(store.movieDiscoverUrl, store.takeAllMovies, store.pushAllMovies);
                this.apiCall(store.tvDiscoverUrl, store.takeAllTvs, store.pushAllTvs);
                console.log('= 0');
                
                this.store.searchVal += 1;

                  if( this.store.searchVal > 3){
                    this.store.searchVal -= 1;
                  }else if(this.store.searchVal < 1){
                    this.store.searchVal += 2;
                  }

                // per gestire la visualizzazione 
                return this.store.seeSearchResult = true;

                }else if(this.store.search.trim().length > 0 ){
                  this.store.search = '';
                  this.store.searchVal -= 1;

                  if( this.store.searchVal < 0){
                    this.store.searchVal += 1000;
                  }

                  return this.store.seeSearchResult = false;
                }

          
        },
    },
    created(){
            this.newSearch();
        },
      
  }
</script>

<template>
  <header>
    <!-- menu -->
      <Navbar/>
      <!-- barra ricerca laterale -->
      <SearchBar @searchMovie="newSearch"/>
      <SearchNotFoundAlert></SearchNotFoundAlert>
  </header>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
@use '../style/partials/_responsive.scss' as *;
    header{
      display: flex;
      position: fixed;
      width: 100%;
      z-index: 999;
      justify-content: space-between;
      background-color: $header-col;
    }
</style>
