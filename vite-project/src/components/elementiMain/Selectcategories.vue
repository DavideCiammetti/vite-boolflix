<script>
import {store} from '../../store';
import axios from 'axios';

  export default{
    name: 'categories',
        data(){
            return{
                store,
            };
        },
        methods:{
            movieCtegories(){
                axios.get(store.categoriesApi).then((response)=>{
                store.categories = response.data.genres;
                console.log( store.categories)
            });
            },
        },
        created(){
            this.movieCtegories();
        }
}
</script>

<template>
    <div class="categories-container">
        <label for="categorie">categorie</label>
        <select name="categorie" id="categories">
            <option value="start">Scegli la categoria</option>
            <option v-for="categ in store.categories " :value="categ.name" @click="$emit=('movieCategorie')">{{categ.name}}</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
.categories-container{
    text-align: start;
    margin: 5px 0 35px 20px;
        select{
            border: none;
        }
        label[for="categorie"]{
            display:none;
        }
}
</style>
