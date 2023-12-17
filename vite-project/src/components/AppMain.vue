<script>
import AllMoviesCard from './elementiMain/AllMoviesCard.vue';
import ListMovieTvSeries from './elementiMain/ListMovieTvSeries.vue';

  export default{
    name: 'mian',
    // componenti inclusi in questo file
    components: {
        AllMoviesCard,
        ListMovieTvSeries,
    },
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
  padding-top: 90px;
  height: 100%;
  text-align: center;
    h5{
      color: white;
    }
}

</style>
