<script>
import axios from 'axios';
import { store } from '../../store';
import Cards from './Cards.vue';

  export default{
    name: 'AllMOvies',
        components:{
            Cards,
        },

        data(){
            return{
                store,
            }
        },

        methods:{
            
            apiCall(apiUrl, typeOfSee, allListToSee){
            
                axios.get( apiUrl + '&page=' + this.store.totalPage ).then((response)=>{
                    typeOfSee = response.data.results;
                    console.log( typeOfSee);

                    typeOfSee.forEach((element)=>{
                        allListToSee.push(element);
                    });
                });
            },

            // funzione chiama api e gestisce film e serie tv 
            showAllMovies(){
                for(let i = 0; i < 1; i++){
                    this.store.totalPage += 1;
                // movie 
                    this.apiCall(this.store.movieDiscoverUrl, this.store.takeAllMovies,  this.store.pushAllMovies);
                    console.log(this.store.pushAllMovies);

                // tv series
                    this.apiCall(this.store.tvDiscoverUrl, this.store.takeAllTvs, this.store.pushAllTvs);
                    console.log(this.store.pushAllmovie);
                }
            },
    },
    created(){
            this.showAllMovies();
        },
};
</script>

<template>
     <div v-show="this.store.seeSearchResult" class="movie-container">
        <!-- <h2 class="title">Movies and TV series</h2> -->
          <ul class="list-container">
            <!-- lista film -->
              <li  v-for="result in this.store.pushAllMovies" class="list-movie">
                <h5>movie</h5>
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
      <div v-show="this.store.seeSearchResult" class="movie-container">
        <ul class="list-container">
            <!-- lista serie tv -->
            <li v-for="result in this.store.pushAllTvs" class="list-movie">
              <h5>tv serie</h5>
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

    h5{
      color: white;
    }
.movie-container{
  .list-container{
      display: flex;
      flex-wrap: wrap;
        .list-movie{
          width: calc(100% / 5);
          list-style: none;
          position: relative;
        }
    }

}
</style>
