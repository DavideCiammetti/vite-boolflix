<script>
  export default{
    name: 'cards',
        props:['originalTitle', 'title', 'originalLanguage', 'vote', 'img'],

        methods:{
            voteTransform(vote){
                return Math.ceil(vote * 5 / 10);
            }
        },      
  } 
</script>

<template>
   <div>
        <h3>titolo originale:  {{ originalTitle }}</h3>
        <div>
            <img :src="'http://image.tmdb.org/t/p/w342/' + img" alt="">
        </div>
        <h5> titolo :  {{ title }}</h5>
        <!-- gestione delle bandiere da mostrare su italia e gr -->
        <p v-if="originalLanguage === 'it'">
            lingua originale : {{originalLanguage }} 
            <img src="../../assets/img/flag-img/icons8-italy-48.png" alt="ita.img"> 
        </p>
        <p v-else-if="originalLanguage === 'en'">
            lingua originale :  {{originalLanguage }} 
            <img src="../../assets/img/flag-img/icons8-circolare-della-gran-bretagna-48.png" alt="gr.img"> 
        </p>
        <p v-else>
            lingua originale : {{originalLanguage }}
        </p>
         <!-- gestione delle bandiere da mostrare su italia e gr -->
        <p>   voto :  {{ voteTransform(vote)}} 
            <span v-for="n in voteTransform(vote)"> <font-awesome-icon :icon="['fas', 'star']" /></span>
            <span v-for="i in 5 - voteTransform(vote)"><font-awesome-icon :icon="['far', 'star']" /> </span>
        </p>

   </div>
</template>

<style scoped lang="scss">
    p img{
        vertical-align: middle;
        width: 20px;
    }
</style>
