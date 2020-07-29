<template>
  
            <div class="row">
                <div class="col-md-4 col-sm-6" v-for="product in groupedProducts">
                    <div class="card my-2 border-0 shadow-sm">
                        <div class="card-header bg-white ">
                            <h5 class="text-primary">{{product.name}}</h5>
                        </div>
                        <div class="card-body">
                            <img :src="product.image" alt="" class="img-fluid">
                          
                            <p>{{product.description}}</p>
                            
                        </div>
                        <div class="card-footer bg-white">
                           <p><span class="text-danger">${{product.price}}</span></p>
                        </div>
                    </div>
                </div>
                
            </div>
        
</template>

<script>

 import {mapGetters} from 'vuex';
 import {mapActions} from 'vuex';
 import Product from './Product';
 
export default {
   
  
   mounted(){
       
   },
   computed:{
       groupedProducts() {
                    return _.chunk(this.$store.getters.products, 4);
                },
                ...mapGetters([
                    'products'
                ])
   },
   components:{
       Product,
   }
}
</script>

<style lang="scss" scoped>
    .card{
        height: 400px !important;
        & .card-header{
            border-bottom: 1px dashed #ddd;
            h5{
                font-weight: bold;
            }
        }

        & .card-body{
            overflow-y: scroll;
        }

        & .card-footer{
            border-top: 1px dashed #dddddd;
            p{
                font-weight: bold;
                font-size: 20px;
            }
        }
    }
</style>
