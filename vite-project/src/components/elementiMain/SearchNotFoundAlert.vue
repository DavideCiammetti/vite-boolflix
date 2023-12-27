<script>
import {store} from '../../store';

  export default{
    name: 'SearchNotFound',

    data(){
        return{
            store,
            errorMex: 'your search has not produced results, do another search'
        };
      },
      methods:{
        // funzione che valuta se la ricerca è stata effettuata o meno 
        AlertShow(){
            if(this.store.searchVal > 1 && (this.store.allMovies.length === 0 && this.store.allSeries.length === 0)){   
                return true;

            }else if(this.store.allMovies.length > 0 && this.store.allSeries.length > 0){
                this.store.searchVal = 1;
                return false;
            }
        },
      }
      
};
</script>

<template>
    <div v-show="this.AlertShow()" class="mex-container" >
        <h4>{{ errorMex }}</h4>
    </div>  
</template>

<style scoped lang="scss">
    .mex-container{
        width: 216px;
        background-color: #7b00ff;
        padding: 10px;
        position: absolute;
        border-radius: 15px;
        top: 57px;
        right: 43px;
            h4{
                color: white;
            }
    }
</style>
