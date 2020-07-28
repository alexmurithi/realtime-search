import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export const store  = new Vuex.Store({
    state:{
       products:[]
    },
    getters:{
      products:state=>{
        return state.products
      }
    },
    mutations:{
        SET_PRODUCTS:(state,products)=>{
           state.products=products
        }

    }, 
    actions:{
        SEARCH_PRODUCTS:({commit},query)=>{
           let params ={query};

           Axios.get(`/api/search`,{params})
             .then(res=>{
                 if(res.data==='ok')
                 console.log('request made successfully')
             })
             .catch(err=>{
                 console.log(err)
             })
        },
        GET_PRODUCTS:({commit})=>{
            Axios.get(`/api/products`)
              .then(res=>{
                  commit('SET_PRODUCTS',res.data)
              })
              .catch(err=>{
                  console.log(err)
              })
        }

    } 
})