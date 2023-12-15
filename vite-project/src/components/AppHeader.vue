<script>
import Navbar from './elementiHeader/Navbar.vue'
import SearchBar from './elementiHeader/SearchBar.vue'
  export default{
    name: 'header',
      components:{
        Navbar,
        SearchBar,
      }
  }
</script>

<template>
  <header>
      <Navbar/>
      <SearchBar/>
  </header>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
    header{
      display: flex;
      justify-content: space-around;
      background-color: $header-col;
    }
</style>
