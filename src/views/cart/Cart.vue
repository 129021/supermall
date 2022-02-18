<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>


    <!-- 商品的列表 -->
    <cart-list>

    </cart-list>


    <!-- 底部的汇总 -->

  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import CartList from './childComps/CartList.vue'

import CartListItem from './childComps/CartListItem.vue'
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartListItem,
  },
  computed:{
    cartLength(){
      return this.$store.state.cartLength.length
    }
  }
};
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color:#fff;
  font-weight: 700;
}
</style>
