import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    addCart(state,payload){
      // payload新添加的商品
      let oldProduct=null;
      for (let item of state.cartList){
        if(item.iid===payload.iid){
          oldProduct=item;
        }
      }


      // 2. 判断oldProduct
      
      state.cartList.push(payload)

    }
  },
  actions: {
  },
  modules: {
  }
})
