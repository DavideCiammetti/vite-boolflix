<script>
import Logo from './Logo.vue';
  export default{
    name: 'navbar',
    components:{
            Logo,
        }, 
        data(){
            return{
                navShow: false,
            }
        },
      methods:{
        clickMenu(){
            return this.navShow = !this.navShow;
        }
      },
  }
</script>

<template>
    <div class="menu-icon">
        <font-awesome-icon :icon="['fas', 'bars']"  class="ico-burger-menu" @click="clickMenu"/>
    </div>
    <Logo/>
    <div  :class="navShow === true? 'd-block':'' " class="menu-container">
        <nav class="navbar">
            <ul class="menu">
                <li class="list">
                    <a href="#">Home</a>
                </li>
                <li class="list">
                    <a href="#">Tv Series</a>
                </li>
                <li class="list">
                    <a href="#">Movies</a>
                </li>
                <li class="list">
                    <a href="#">My list</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
@use '../style/partials/_responsive.scss' as *;
.menu-container{
    margin-right: auto;
    display: none;
}
.menu{
    display: flex;
    list-style: none;
    flex-wrap: wrap;
        .list{
            margin-right: 1.875rem;
                a{
                    text-decoration: none;
                    color: $nav-col;
                }
        }
}
    .d-block{
        display: block;
    }
// hamburger menu

.menu-icon{
    margin: 1.25rem;
    .ico-burger-menu{
        font-size: 1.25rem;
        color: $nav-col;
        }
}

// responsivity
@media screen and (min-width: 992px){
    .menu{
        flex-wrap: nowrap;
    }
    a{
        font-size: 20px;
    }
   .menu-container{
       display: flex;
      }
      .navbar{
        margin-left: 3.75rem;
        line-height: 2.7;
      }
      .menu-icon{
         display: none;
      }
   }

//click sul menu hambuerger
.menu-icon:hover .menu-container{
       display: flex;
       line-height: 0;
       font-size: 12px;
}
</style>
