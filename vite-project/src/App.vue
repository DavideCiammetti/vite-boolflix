<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';

  export default{
    name: 'app',
    components:{
        AppMain,
        AppHeader,
    }

};
</script>

<template>
    <AppHeader/>
    <AppMain/>
</template>

<style scoped lang="scss">
</style>
