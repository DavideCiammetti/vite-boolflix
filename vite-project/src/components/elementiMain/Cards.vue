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
    <div class="image-container">
        <div class="movie-image">
            <img :src="'http://image.tmdb.org/t/p/w342/' + img" alt="">
        </div>
        <div class="card-container">
            <div class="movie-info">
                <h3>titolo originale:  {{ originalTitle }}</h3>
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
                    <span v-for="n in voteTransform(vote)" class="yellow-star"> <font-awesome-icon :icon="['fas', 'star']" /></span>
                    <span v-for="i in 5 - voteTransform(vote)" ><font-awesome-icon :icon="['far', 'star']" /> </span>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card-container{
    text-align: center;
    height: 100%;
    position: absolute;

        p, h3, h5{
            color: white;
            padding: 7px 0;
        }
        .yellow-star{
            color: yellow;
        }
}
.movie-info{
    background-color: #010101;
    filter: opacity(0.8);
    position: relative;
    bottom: 93%;
    height: 93%;
    z-index: 1;
    left: 18px;
    border-radius: 15px;
    width: 216px;
    margin: 0 auto;

}
.image-container{
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
            }
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
