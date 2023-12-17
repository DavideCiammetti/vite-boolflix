<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

  export default{
    name: 'app',
    components:{
        AppMain,
        AppHeader,
        AppFooter,
    }

};
</script>

<template>
    <AppHeader/>
    <AppMain/>
    <AppFooter/>
</template>

<style scoped lang="scss">
</style>
