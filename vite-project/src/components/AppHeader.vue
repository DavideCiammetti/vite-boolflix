<script>
  export default{
    name: 'header',
  }
</script>

<template>
   <div>
        n: {{ i + 1 }} <br>
        titolo originale:  {{ result.original_title }},<br>
        titolo :  {{ result.title}}, <br>
        lingua originale :  {{ result.original_language }}, <br>
        voto :  {{ result.vote_average }} 
   </div>
</template>

<style scoped lang="scss">
  
</style>
