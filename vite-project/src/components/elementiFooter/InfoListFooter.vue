<script>
  export default{
    name: 'listFooterInfo',
  }
</script>

<template>
   <div class="info-list-container">
        <div class="list-container">
            <ul>
                <li class="info-item-title">
                    <h4>
                        <a href="#">community</a>
                    </h4>
                </li>

                <li class="info-item">
                    <a href="#">Linee guida</a>
                </li>

                <li class="info-item">
                    <a href="#">Discussioni</a>
                </li>

                <li class="info-item">
                    <a href="#">Classifica</a>
                </li>
            </ul>
        </div>
        <div class="list-container">
            <ul>
                <li class="info-item-title">
                    <h4>
                        <a href="#">legale</a>
                    </h4>
                </li>

                <li class="info-item">
                    <a href="#">Policy</a>
                </li>

                <li class="info-item">
                   <a href="#">Politica Privacy</a>
                </li>
            </ul>
        </div>
        <div class="list-container">
            <ul>
                <li class="info-item-title">
                    <h4>
                        <a href="#">contatti</a>
                    </h4>
                </li>

                <li class="info-item">
                    <a href="#">Come Contattrci</a>
                </li>

                <li class="info-item">
                 <a href="#">Domande Frequenti</a>
                </li>

                <li class="info-item">
                 <a href="#">StreamingEvent</a>
                </li>
            </ul>
        </div>
   </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
    .info-list-container{
        display: flex;
        margin-left: 40px;
            .list-container{
                margin: 0 35px;
                padding: 10px 0;
            }
            ul{
                list-style: none;
                    .info-item a{
                        color: $nav-col;
                    }
                    .info-item{
                        margin: 4px 0;
                    }
                    a{
                        text-decoration: none;
                    }
                    h4 a{
                        font-size: 21px;
                        color: white;
                        text-transform: uppercase;
                    }
                    h4{
                        margin: 15px 0;
                    }
            }
    }
</style>
