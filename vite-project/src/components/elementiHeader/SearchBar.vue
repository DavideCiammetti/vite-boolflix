<script>
import { store } from '../../store';
import axios from 'axios';

  export default{
    name: 'searchbar',

        data(){
            return{
                store,
            };
        },

        methods:{
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
                    this.store.totPage += 1;
                // movie 
                    this.apiCall(this.store.apiURL, this.store.film,  this.store.allMovies);

                // tv series
                    this.apiCall(this.store.seriesApiURL, this.store.tvSeries, this.store.allSeries);
                }
                this.store.search = '';
            },

            created(){
                this.newSearch();
                },
            }
  }
</script>

<template>
      <div class="search">
            <div>
                <input type="text" v-model="this.store.search" >
            </div>
            <div class="button" @click="newSearch">
                <button>cerca</button>
            </div>
      </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
    .search{
        display: flex;
        align-items: center;
        margin-right: 10%;
        input,
        button{
            border: none;
            outline: none;
            padding: 4px;
        }
        button,  input{
            border-top: 1px solid $grey;
            border-bottom: 1px solid $grey;
        }
        input{
            border-left: 1px solid $grey;
            border-bottom-left-radius: 4px;
            border-top-left-radius: 4px;
        }
        button{
            border-right: 1px solid $grey;
            border-bottom-right-radius: 4px;
            border-top-right-radius: 4px;
        }


    }
</style>
