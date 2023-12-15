<script>
  export default{
    name: 'cards',
        props:['originalTitle', 'title', 'originalLanguage', 'vote'],
  }
</script>

<template>
   <div>
        <h3>titolo originale:  {{ originalTitle }}</h3>
        <h5> titolo :  {{ title }}</h5>
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

        <p>voto :  {{ vote }}</p> 
   </div>
</template>

<style scoped lang="scss">
    p img{
        vertical-align: middle;
        width: 20px;
    }
</style>
