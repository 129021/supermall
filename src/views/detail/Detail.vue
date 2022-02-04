<template>
  <div id="detail">
    <!-- 导航栏 -->
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages" />
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
  </div>
</template>

<script>
import DetailNavBar from "../detail/childComponents/DetailNavBar.vue";

import { getDetail, Goods ,Shop} from "../../network/detail";

import DetailSwiper from "./childComponents/DetailSwiper.vue";

import DetailBaseInfo from './childComponents/DetailBaseInfo.vue'

import DetailShopInfo from './childComponents/DetailShopInfo.vue'
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop:{},
      detailInfo:{}
    };
  },
  created() {
    this.iid = this.$route.params.iid;

    // 根据iid请求详细数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data=res.result;
      // 获取顶部的图片轮播数据
      this.topImages = data.itemInfo.topImages;

      // 获取商品信息
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)


      // 创建店铺信息的对象
      this.shop=new Shop(data.shopInfo)



      // 保存商品的详情数据
      this.detailInfo=data.detailInfo
    });
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  },
};
</script>

<style scoped>

#detail{
  position:relative;
  z-index:9;

}
</style>
