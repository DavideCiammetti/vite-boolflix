<script>
  export default{
    name: 'Social',
  }
</script>

<template>
    <div class="social-container-list">
         <ul class="li-container">
            <li class="social-list">
               <a href="#">
                <font-awesome-icon :icon="['fab', 'facebook']" class="ico-size"/>
               </a>
            </li>

            <li class="social-list">
                <a href="#">
                    <font-awesome-icon :icon="['fab', 'x-twitter']" class="ico-size"/>
                </a>
            </li>

            <li class="social-list">
                <a href="#">
                    <font-awesome-icon :icon="['fab', 'square-instagram']" class="ico-size"/>
                </a>
            </li>

            <li class="social-list">
               <a href="#">
                <font-awesome-icon :icon="['fab', 'youtube']" class="ico-size"/>
               </a>
            </li>

         </ul>
    </div>
</template>

<style scoped lang="scss">
.social-container-list{
    display: flex;
    align-items: center;
    margin-right: 70px;
    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        .social-list a{
                text-decoration: none;
                color: #a7a7a7;;
            }
    }
}

.social-list{
    margin: 15px 0;
    padding-right: 15px;
        a{
            text-decoration: none;
        }
        .ico-size{
            font-size: 27px;
        }
}
// responisvity
@media screen and (min-width: 768px){
    ul{
        flex-wrap: nowrap;
   }
 }
 .social-container-list{
    margin-right: 0;
 }
</style>
