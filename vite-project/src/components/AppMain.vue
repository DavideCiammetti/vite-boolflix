<script>
import Cards from './elementiMain/Cards.vue';
import {store} from '../store';
import AllMoviesCard from './elementiMain/AllMoviesCard.vue';

  export default{
    name: 'mian',
    // componenti inclusi in questo file
    components: {
        Cards,
        AllMoviesCard,
    },

    data(){
        return{
            store,
        };
    },
};
</script>

<template>
      <main>

        <AllMoviesCard/>

      <div v-show=" !this.store.seeSearchResult" class="movie-container">
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
     <div class="movie-container">
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
      </main>
</template>

<style scoped lang="scss">

main{
  padding-top: 90px;
  height: 100%;
  text-align: center;
    h5{
      color: white;
    }
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
