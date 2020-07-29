<template>
    <div class="container">
        <SearchBar/>
        <Products/>
       
    </div>
</template>

<script>
import Product from './Product';
import Products from './Products';
import SearchBar from './SearchBar';
import {store} from '../store';
    export default {
        store,
        mounted() {
         //disptach action by name 'GET_PRODUCTS'//
           this.$store.dispatch('GET_PRODUCTS')

        /* tell echo to subscribe to our channel(search) then listen to 
          our searchResults event, then call mutation 'SET_PRODUCTS' and passes products as
          an argument/parameter to the mutation */
                Echo.channel('search')
                    .listen('.searchResults', (e) => {
                        this.$store.commit('SET_PRODUCTS', e.products)
                    })
        },
        components:{
            Product,
            Products,
            SearchBar
        }
    }
</script>
