<script>
import Cards from './elementiHeader/Cards.vue';
import axios from 'axios';
import {store} from '../store';

  export default{
    name: 'mian',
    // componenti inclusi in questo file
    components: {
        Cards,
    },

    data(){
        return{
            store,
        };
    },
    // ininzio funzioni 
    methods:{

        // funzione per la chiamata api 
        //come usarla
        // ----> apiUrl = indirizzo url per api
        //----> typeOfSee = array vuoto da riempire con array tot
        //----> allListToSee = array vuoto per prendere più pagine 
        apiCall(apiUrl, typeOfSee, allListToSee){
         
            axios.get( apiUrl + this.store.search + '&page=' + this.store.totPage ).then((response)=>{
                  typeOfSee = response.data.results;
                  console.log( typeOfSee);

                  typeOfSee.forEach((element)=>{
                    allListToSee.push(element);
                  });
              });
        },

        // funzione chiama api e gestisce film e serie tv 
        newSearch(){
            for(let i = 0; i < 1; i++){
              // movie 
                this.store.totPage += 1;
                this.apiCall(this.store.apiURL, this.store.film,  this.store.allMovies);

              // tv series
                this.store.totSeriesPage += 1;
                this.apiCall(this.store.seriesApiURL, this.store.tvSeries, this.store.allSeries);
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
          <!-- lista film -->
            <li  v-for="result in this.store.allMovies">
              <h2>movies</h2>
                <Cards  
                :img="result.poster_path"
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
            <!-- lista serie tv -->
            <li  v-for="result in this.store.allSeries">
              <h2>tv series</h2>
                <Cards  
                :img="result.poster_path"
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
