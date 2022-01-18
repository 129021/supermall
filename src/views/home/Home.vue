<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control
      :titles="['流行', '新款', '精选']" @tabClick="tabClick"
      class="tab-control"
    ></tab-control>
    <goods-list :goods="goods[currentType].list"></goods-list>

    <ul>
      <li>占空使能滚动1</li>
      <li>占空使能滚动2</li>
      <li>占空使能滚动3</li>
      <li>占空使能滚动4</li>
      <li>占空使能滚动5</li>
      <li>占空使能滚动6</li>
      <li>占空使能滚动7</li>
      <li>占空使能滚动8</li>
      <li>占空使能滚动9</li>
      <li>占空使能滚动10</li>
      <li>占空使能滚动11</li>
      <li>占空使能滚动12</li>
      <li>占空使能滚动13</li>
      <li>占空使能滚动14</li>
      <li>占空使能滚动15</li>
      <li>占空使能滚动16</li>
      <li>占空使能滚动17</li>
      <li>占空使能滚动18</li>
      <li>占空使能滚动19</li>
      <li>占空使能滚动20</li>
      <li>占空使能滚动21</li>
      <li>占空使能滚动22</li>
      <li>占空使能滚动23</li>
      <li>占空使能滚动24</li>
      <li>占空使能滚动25</li>
      <li>占空使能滚动26</li>
      <li>占空使能滚动27</li>
      <li>占空使能滚动28</li>
      <li>占空使能滚动29</li>
      <li>占空使能滚动30</li>
      <li>占空使能滚动31</li>
      <li>占空使能滚动32</li>
      <li>占空使能滚动33</li>
      <li>占空使能滚动34</li>
      <li>占空使能滚动35</li>
      <li>占空使能滚动36</li>
      <li>占空使能滚动37</li>
      <li>占空使能滚动38</li>
      <li>占空使能滚动39</li>
      <li>占空使能滚动40</li>
      <li>占空使能滚动41</li>
      <li>占空使能滚动42</li>
      <li>占空使能滚动43</li>
      <li>占空使能滚动44</li>
      <li>占空使能滚动45</li>
      <li>占空使能滚动46</li>
      <li>占空使能滚动47</li>
      <li>占空使能滚动48</li>
      <li>占空使能滚动49</li>
      <li>占空使能滚动50</li>
      <li>占空使能滚动51</li>
      <li>占空使能滚动52</li>
      <li>占空使能滚动53</li>
      <li>占空使能滚动54</li>
      <li>占空使能滚动55</li>
      <li>占空使能滚动56</li>
      <li>占空使能滚动57</li>
      <li>占空使能滚动58</li>
      <li>占空使能滚动59</li>
      <li>占空使能滚动60</li>
      <li>占空使能滚动61</li>
      <li>占空使能滚动62</li>
      <li>占空使能滚动63</li>
      <li>占空使能滚动64</li>
      <li>占空使能滚动65</li>
      <li>占空使能滚动66</li>
      <li>占空使能滚动67</li>
      <li>占空使能滚动68</li>
      <li>占空使能滚动69</li>
      <li>占空使能滚动70</li>
      <li>占空使能滚动71</li>
      <li>占空使能滚动72</li>
      <li>占空使能滚动73</li>
      <li>占空使能滚动74</li>
      <li>占空使能滚动75</li>
      <li>占空使能滚动76</li>
      <li>占空使能滚动77</li>
      <li>占空使能滚动78</li>
      <li>占空使能滚动79</li>
      <li>占空使能滚动80</li>
      <li>占空使能滚动81</li>
      <li>占空使能滚动82</li>
      <li>占空使能滚动83</li>
      <li>占空使能滚动84</li>
      <li>占空使能滚动85</li>
      <li>占空使能滚动86</li>
      <li>占空使能滚动87</li>
      <li>占空使能滚动88</li>
      <li>占空使能滚动89</li>
      <li>占空使能滚动90</li>
      <li>占空使能滚动91</li>
      <li>占空使能滚动92</li>
      <li>占空使能滚动93</li>
      <li>占空使能滚动94</li>
      <li>占空使能滚动95</li>
      <li>占空使能滚动96</li>
      <li>占空使能滚动97</li>
      <li>占空使能滚动98</li>
      <li>占空使能滚动99</li>
      <li>占空使能滚动100</li>
    </ul>
  </div>
</template>

<script>
// import NavBar from 'components/common/navbar/NavBar'
import NavBar from "../../components/common/navbar/NavBar.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import { getHomeMultidata, getHomeGoods } from "network/home";
import FeatureView from "./childComps/FeatureView.vue";
// import TabControl from '../../components/content/tabControl/TabControl.vue';
import TabControl from "../../components/content/tabControl/TabControl.vue";
import GoodsList from '../../components/content/goods/GoodsList.vue';
// import RecommendView from './childComps/RecommendView.vue';
// import HomeSwiper from "./childComps/HomeSwiper.vue";
// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'components/common/swiper/SwiperItem'

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      // result: null,
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType:'pop',

    };
  },
  created() {
    // 1.  请求多个数据
    this.getHomeMultidata();

    // 2. 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    // 事件监听相关方法
    tabClick(index){
      // console.log(index);
      switch(index){
        case 0:
          this.currentType="pop"
          break
        case 1:
          this.currentType='new'
          break
        case 2:
          this.currentType="sell"
          break

      }

    },

    // 网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
}
</style>
