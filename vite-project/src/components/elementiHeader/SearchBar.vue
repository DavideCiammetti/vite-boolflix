<script>
import { store } from '../../store';

  export default{
    name: 'searchbar',

        data(){
            return{
                store,
            };
        },
  };
</script>

<template>
      <div class="search">
            <div>
                <input type="text" v-model="this.store.search" >
            </div>
            <div class="button" @click="$emit('searchMovie')">
                <button>cerca</button>
            </div>
      </div>
</template>

<style scoped lang="scss">
@use '../style/partials/_variables.scss' as *;
    .search{
        display: flex;
        align-items: center;
        margin-right: 10%;
        input,
        button{
            border: none;
            outline: none;
            padding: 4px;
        }
        button,  input{
            border-top: 1px solid $grey;
            border-bottom: 1px solid $grey;
        }
        input{
            border-left: 1px solid $grey;
            border-bottom-left-radius: 4px;
            border-top-left-radius: 4px;
        }
        button{
            border-right: 1px solid $grey;
            border-bottom-right-radius: 4px;
            border-top-right-radius: 4px;
        }


    }
</style>
