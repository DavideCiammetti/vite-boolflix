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
    <div class="info-container">
        <!-- immagini -->
        <div class="movie-image">
            <img :src="'http://image.tmdb.org/t/p/w342/' + img" alt="">
        </div>
    <!-- immagini -->
        <div class="movie-info">
            <h3>Titolo Originale:  {{ originalTitle }}</h3>
            <h5> Titolo :  {{ title }}</h5>

            <!-- gestione delle bandiere da mostrare su italia e gr -->

                <!-- se italiano -->
            <p v-if="originalLanguage === 'it'">
                Lingua Originale : {{originalLanguage }} 
                <img src="../../assets/img/flag-img/icons8-italy-48.png" alt="ita.img"> 
            </p>
            <!-- se inglese -->
            <p v-else-if="originalLanguage === 'en'">
                Lingua Originale :  {{originalLanguage }} 
                <img src="../../assets/img/flag-img/icons8-circolare-della-gran-bretagna-48.png" alt="gr.img"> 
            </p>
                <!-- se non inglese e non italiano -->
            <p v-else>
                Lingua Originale : {{originalLanguage }}
            </p>
            <!-- gestione delle bandiere da mostrare su italia e gr -->

            <!-- gestione del voto e delle stelle  -->
            <p>   voto :  {{ voteTransform(vote)}} 
                <span v-for="n in voteTransform(vote)" class="yellow-star"> <font-awesome-icon :icon="['fas', 'star']" /></span>
                <span v-for="i in 5 - voteTransform(vote)" ><font-awesome-icon :icon="['far', 'star']" /> </span>
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
p, h3, h5{
    color: white;
    padding: 7px 0;
}
.yellow-star{
    color: yellow;
}
.info-container{
    position: relative;
    height: 93%;
    .movie-image{
            width: 85%;
            margin: 0 auto;
            height: 100%;
            position: relative;
            z-index: 2;
            img{
                width: 100%;
                display: block;
                border-radius: 15px;
                height: 100%;
                box-shadow: 10px 10px 7px black;
            }
        }
        .movie-info{
            background-color: #010101;
            filter: opacity(0.8);
            position: absolute;
            bottom: 0%;
            height: 100%;
            z-index: 1;
            left: 7%;
            border-radius: 15px;
            width: 86%;
            margin: 0 auto;
        }
    }
    p img{
        vertical-align: middle;
        width: 20px;
    }
    .movie-image:hover{
       z-index: 0;
       transition: 2s;
    }
</style>
