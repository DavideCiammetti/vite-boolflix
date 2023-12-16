<script>
import Cards from './elementiMain/Cards.vue';
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
};
</script>

<template>
      <main>
      <div>
          <ul class="list-container">
            <!-- lista film -->
              <li  v-for="result in this.store.allMovies" class="list-movie">
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
          <ul class="list-container">
              <!-- lista serie tv -->
              <li  v-for="result in this.store.allSeries" class="list-movie">
                <!-- <h2>tv series</h2> -->
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
}
    .list-container{
      display: flex;
      flex-wrap: wrap;
        .list-movie{
          width: calc(100% / 5);
          list-style: none;
          position: relative;
        }
    }
</style>
