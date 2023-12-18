<script>
import AllMoviesCard from './elementiMain/AllMoviesCard.vue';
import ListMovieTvSeries from './elementiMain/ListMovieTvSeries.vue';
import {store} from '../store';

  export default{
    name: 'mian',
    // componenti inclusi in questo file
    components: {
        AllMoviesCard,
        ListMovieTvSeries,
    },
    data(){
        return{
            store,
        };
      },
      methods:{
        notFound(){
          return this.store.boolNotFound;
        }
      }
};
</script>

<template>
      <main>
        <!-- ritorna tutti i film e serie tv senza filtri -->
        <AllMoviesCard/>
          <!-- ritorna tutti i film e serie tv filtrati in base alla ricerca -->
        <ListMovieTvSeries/>
      </main>
</template>

<style scoped lang="scss">

main{
  padding-top: 13%;
  padding-bottom: 45px;
  text-align: center;
    h5{
      color: white;
    }
}

</style>