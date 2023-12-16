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
                    console.log(allListToSee);
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
                    this.apiCall(this.store.tvDiscoverUrl, this.store.takeAllmovie, this.store. pushAllTvs);
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
    <ul>
        <li v-for="movie in this.store.pushAllMovies">
          film {{  movie.title }}
        </li>
        <li v-for="movie in this.store. pushAllTvs">
          serie tv  {{  movie.original_name }}
        </li>
    </ul>
</template>

<style scoped lang="scss">
</style>
