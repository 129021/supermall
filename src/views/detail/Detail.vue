<template>
  <div id="detail">
    <!-- 导航栏 -->
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages" />
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
    <detial-goods-info :detail-info="detailInfo" />
    <detail-param-info :param-info="parmaInfo" />
    <detail-comment-info :comment-info="commentInfo"/>
    <goods-list :goods="recommends"/>
    <detail-bottom-bar @addCart="addToCart"/>
  </div>
</template>

<script>
import DetailNavBar from "../detail/childComponents/DetailNavBar.vue";

import { getDetail, Goods ,Shop,GoodsParam,getRecommend} from "../../network/detail";

import DetailSwiper from "./childComponents/DetailSwiper.vue";

import DetailBaseInfo from './childComponents/DetailBaseInfo.vue'

import DetailShopInfo from './childComponents/DetailShopInfo.vue'

import DetialGoodsInfo from './childComponents/DetailGoodsInfo.vue'
import DetailParamInfo from './childComponents/DetailParamInfo.vue'

import DetailCommentInfo from './childComponents/DetailCommentInfo.vue'

import GoodsList from '../../components/content/goods/GoodsList.vue'

import DetailBottomBar from './childComponents/DetailBottomBar.vue'
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo:{},
      goods: {},
      shop:{},
      detailInfo:{},
      itemParams:{},
      commentInfo:{},
      recommends:[]
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

      // 获取参数信息
      this.parmaInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)


      // 取出评论信息
      if(data.rate.cRate!==0){
        this.commentInfo=data.rate.list[0]
      }
    });



    // 请求推荐数据
    getRecommend().then(res=>{
      // console.log(res);
      this.recommends=res.data.list
    })
  },
  mounted() {
    this.$bus.$on('itemImageLoad',()=>{

    })
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetialGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar

  },
  methods: {
    addToCart(){
      // console.log('-----------');
      // 1. 获取购物车需要展示的信息
      const product={}
      product.image=this.topImages[0];
      product.title=this.goodsInfo.title;
      product.desc=this.goodsInfo.desc;
      product.price=this.goodsInfo.newPrice;
      product.iid=this.iid;



      // 2.将商品添加到购物车里面
      // this.$store.commit('addCart',product)
      this.$store.dispatch('addCart',product)


    }
  },
};
</script>

<style scoped>

#detail{
  position:relative;
  z-index:9;

}

.content{
  background-color: #fff;
  height: calc(100%-44px-49px);
}
</style>



// 又是没学习的一天
