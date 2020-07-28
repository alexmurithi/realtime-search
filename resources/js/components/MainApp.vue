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

           this.$store.dispatch('GET_PRODUCTS')

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
