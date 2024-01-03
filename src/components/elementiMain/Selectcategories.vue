<script>
import {store} from '../../store';
import axios from 'axios';

  export default{
    name: 'categories',
        data(){
            return{
                store,
                cat: [],
            };
        },
        methods:{
            // chiamata axios per prendere i valori di ogni genere 
            movieCtegories(){
                axios.get(this.store.categoriesApi).then((response)=>{
                this.store.categories = response.data.genres;
                console.log(this.store.categories);
            });
            },
        },
        created(){
            this.movieCtegories();
        }
}
</script>

<template>
    <div class="categories-container" @click="$emit('movieCategorie')">
        <label for="categorie">categorie</label>
        <select name="categorie" id="categories" v-model="this.store.newCat">
            <option value="start">home</option>
            <option v-for="categ in this.store.categories " :value="categ.id">{{categ.name}}</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
.categories-container{
    text-align: start;
    margin: 5px 0 35px 20px;
        select{
            border: none;
            width: 17%;
            padding: 4px;
            border-radius: 14px;
        }
        label[for="categorie"]{
            display:none;
        }
}
</style>
