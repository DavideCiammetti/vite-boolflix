<script>
  export default{
    name: 'logo',
  }
</script>

<template>
    <div class="logo">
        <img src="../../assets/logo.img/681e747fe6634ffa824d726f3a9942a0.png" alt="">
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
@use '../style/partials/_responsive.scss' as *;
.logo {
  display: none;
    width: 70px;
    margin: 5px;
    margin-left: 13px;
  img{
    width: 100%;
    display: block;
  }
}
  
</style>
