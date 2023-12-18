<script>
import { store } from '../../store';
import Cards from './Cards.vue';

  export default{
    name: 'app',
        components: {
            Cards,
        },

        data(){
            return{
                store,
            };
        },
};
</script>

<template>
    <div v-show="store.seeSearchResult" class="movie-container">
      <!-- <h2 class="title">Movies and TV series</h2> -->
        <ul class="list-container">
          <!-- lista film -->
            <li  v-for="result in this.store.allMovies" class="list-movie">
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
      <div class="movie-container" v-show="store.seeSearchResult" >
          <ul class="list-container">
              <!-- lista serie tv -->
              <li  v-for="result in this.store.allSeries" class="list-movie">
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
// responsivity
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
