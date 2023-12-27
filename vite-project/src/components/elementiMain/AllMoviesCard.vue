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
                    console.log('sono tuuutti film e serie');
                    console.log(typeOfSee);

                    typeOfSee.forEach((element)=>{
                        allListToSee.push(element);
                    });
                });

            },

            // funzione chiama api e gestisce film e serie tv 
            showAllMovies(){
                for(let i = 0; i < 1; i++){
                  this.store.pushAllMovies = [];
                  this.store.pushAllTvs = [];
                    this.store.totalPage += 1;
                // movie 
                    this.apiCall(store.movieDiscoverUrl, store.takeAllMovies, store.pushAllMovies);
                    console.log(store.pushAllMovies);

                // tv series
                    this.apiCall(store.tvDiscoverUrl, store.takeAllTvs, store.pushAllTvs);
                    console.log(this.store.pushAllTvs);
                }  
            },
            // rivedere questa serve per la ricerca in base a genere 
            // movieCategorie(){
            //   for(let i = 0; i < 1; i++){

            //       this.store.pushAllMovies = [];
            //       this.store.pushAllTvs = [];

            //       this.store.totalPage += 1;

            //        axios.get( apiUrl + '&page=' + this.store.totalPage + '&with_genres=' + ).then((response)=>{
            //         typeOfSee = response.data.results;
            //         console.log('sono tuuutti film e serie');
            //         console.log(typeOfSee);

            //         typeOfSee.forEach((element)=>{
            //             allListToSee.push(element);
            //         });
            //     });
            //     }  
            // },

        },
        
        created(){
          this.showAllMovies();
        },
};
</script>

<template>
    <div v-show="store.seeSearchResult" class="movie-container">
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
    <div v-show="store.seeSearchResult" class="movie-container">
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
@use '../style/partials/_responsive.scss' as *;

    h5{
      color: white;
      font-size: 33px;
    }
.movie-container{
  .list-container{
      display: flex;
      flex-wrap: wrap;
    }
}
.list-movie{
          width: 100%;
          list-style: none;
          position: relative;
        }

  @media screen and (min-width: 578px){
   .list-movie{
     width: calc(100% / 2);
   }
   h5{
    font-size: 14px;
   }
 }
  @media screen and (min-width: 768px){
   .list-movie{
     width: calc(100% / 3);
   }
 }

@media screen and (min-width: 992px){
   .list-movie{
     width: calc(100% / 5);
   }
 }
</style>
