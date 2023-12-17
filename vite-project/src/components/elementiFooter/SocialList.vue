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
    ul{
        list-style: none;
        display: flex;
        .social-list a{
                text-decoration: none;
                color: #a7a7a7;;
            }
            .social-list{
                padding-right: 15px;
                    a{
                        text-decoration: none;
                    }
                    .ico-size{
                        font-size: 27px;
                    }
            }

    }
}
</style>
