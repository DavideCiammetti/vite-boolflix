<script>
import InfoListFooter from './elementiFooter/InfoListFooter.vue';
import SocialList from './elementiFooter/SocialList.vue';
  export default{
    name: 'footer',
      components:{
        InfoListFooter,
        SocialList,
      }
  }
</script>

<template>
    <footer>
      <InfoListFooter/>
      <SocialList/>
    </footer>
</template>

<style scoped lang="scss">
    footer{
      background-color: aqua;
    }
</style>
