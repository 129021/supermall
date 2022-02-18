import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {

  },
  actions: {
    addCart(context,payload){
      // payload新添加的商品
      let oldProduct=context.state.cartList.find(item=>item.iid===payload.iid)



      // 2. 判断oldProduct
      if(oldProduct){
        oldProduct.count+=1

      }else{
        payload.count=1
        context.state.cartList.push(payload)
      }

      // state.cartList.push(payload)

    }
  },
  modules: {
  }
})
