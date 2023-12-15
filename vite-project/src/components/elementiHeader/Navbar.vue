<script>
import Logo from './Logo.vue';
  export default{
    name: 'navbar',
    components:{
            Logo,
        } 
  }
</script>

<template>
    <div class="menu-container">
        <Logo/>
        <!-- <div class="container-hamburger-menu">
            <font-awesome-icon :icon="['fas', 'bars']" class="hamburger-menu"/>
        </div> -->
            <nav class="navbar">
            <ul class="menu">
                <li class="list">
                    <a href="#">Home</a>
                </li>
                <li class="list">
                    <a href="#">Serie tv</a>
                </li>
                <li class="list">
                    <a href="#">Film</a>
                </li>
                <li class="list">
                    <a href="#">La mia lista</a>
                </li>
            </ul>
        </nav>
        </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
.menu-container{
    display: flex;
    margin-right: auto;
    .navbar{
        margin-left: 60px;
        line-height: 2.7;
        .menu{
        display: flex;
        list-style: none;
        .list{
            margin-right: 30px;
            font-size: 25px;
                a{
                    text-decoration: none;
                    color: $nav-col;
                }
        }
}
    }
}
// parte di mobile first 

.container-hamburger-menu{
    padding: 15px;
    .hamburger-menu{
            color: $nav-col;
            font-size: 20px;
        }
}
</style>
