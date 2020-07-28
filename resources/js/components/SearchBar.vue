<template>
  
    
      <form action="" class="form-inline">
       <div class="row my-2">

          <div class="form-group">
         <div class="col-md-10">
           <input type="text" class="form-control" v-model="query" name="query">
         </div>
       </div>
         
          <div class="form-group">
         <div class="col-md-2">
           <input type="submit" class="btn btn-primary" value="Seach" @click.prevent="searchProducts" @keyup.enter="searchProducts">
         </div>
       </div>
       </div>

      
        
       
    </form>
   

    
 
</template>

<script>
export default {
    data:function (){
      return{
        query:''
      }
    },
    methods:{
      searchProducts() {
                    this.$store.dispatch('SEARCH_PRODUCTS', this.query)
                }
    }
    ,
            watch: {
                query: {
                    handler: _.debounce(function () {
                        this.searchProducts()
                    }, 100)
                }
            }
}
</script>

<style>

</style>