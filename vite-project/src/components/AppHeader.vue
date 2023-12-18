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

          store.seeAlert = false;
          console.log('sono false');
            axios.get( apiUrl + store.search + '&page=' + store.totPage ).then((response)=>{
                typeOfSee = response.data.results;
                console.log('sono film e serie');
                console.log( typeOfSee);

                typeOfSee.forEach((element)=>{
                    allListToSee.push(element);
                });
                store.seeAlert === true;
                console.log('sono true');
            });
        },
       
        // funzione chiama api e gestisce film e serie tv 
        newSearch(){
            for(let i = 0; i < 1; i++){

              store.allMovies = [];
              store.allSeries = [];
              store.pushAllMovies = [];
              store.pushAllTvs = [];

              store.totPage += 1;
            // movie 
                this.apiCall(store.apiURL, store.film, store.allMovies);

            // tv series
                this.apiCall(store.seriesApiURL, store.tvSeries, store.allSeries);

            }
            store.search = '';
            
            if( store.seeAlert === false){
                this.apiCall(store.movieDiscoverUrl, store.takeAllMovies, store.pushAllMovies);
                this.apiCall(store.tvDiscoverUrl, store.takeAllTvs, store.pushAllTvs);
                store.seeAlert === true;
            }


        },

        showAllMenu(){
        
        },
        // created
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
