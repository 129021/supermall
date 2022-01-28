<template>
  <div class="wrapper" ref="aaa">
    <ul class="content">
      <li>scroll test1</li>
      <li>scroll test2</li>
      <li>scroll test3</li>
      <li>scroll test4</li>
      <li>scroll test5</li>
      <li>scroll test6</li>
      <li>scroll test7</li>
      <li>scroll test8</li>
      <li>scroll test9</li>
      <li>scroll test10</li>
      <li>scroll test11</li>
      <li>scroll test12</li>
      <li>scroll test13</li>
      <li>scroll test14</li>
      <li>scroll test15</li>
      <li>scroll test16</li>
      <li>scroll test17</li>
      <li>scroll test18</li>
      <li>scroll test19</li>
      <li>scroll test20</li>
      <li>scroll test21</li>
      <li>scroll test22</li>
      <li>scroll test23</li>
      <li>scroll test24</li>
      <li>scroll test25</li>
      <li>scroll test26</li>
      <li>scroll test27</li>
      <li>scroll test28</li>
      <li>scroll test29</li>
      <li>scroll test30</li>
      <li>scroll test31</li>
      <li>scroll test32</li>
      <li>scroll test33</li>
      <li>scroll test34</li>
      <li>scroll test35</li>
      <li>scroll test36</li>
      <li>scroll test37</li>
      <li>scroll test38</li>
      <li>scroll test39</li>
      <li>scroll test40</li>
      <li>scroll test41</li>
      <li>scroll test42</li>
      <li>scroll test43</li>
      <li>scroll test44</li>
      <li>scroll test45</li>
      <li>scroll test46</li>
      <li>scroll test47</li>
      <li>scroll test48</li>
      <li>scroll test49</li>
      <li>scroll test50</li>
      <li>scroll test51</li>
      <li>scroll test52</li>
      <li>scroll test53</li>
      <li>scroll test54</li>
      <li>scroll test55</li>
      <li>scroll test56</li>
      <li>scroll test57</li>
      <li>scroll test58</li>
      <li>scroll test59</li>
      <li>scroll test60</li>
      <li>scroll test61</li>
      <li>scroll test62</li>
      <li>scroll test63</li>
      <li>scroll test64</li>
      <li>scroll test65</li>
      <li>scroll test66</li>
      <li>scroll test67</li>
      <li>scroll test68</li>
      <li>scroll test69</li>
      <li>scroll test70</li>
      <li>scroll test71</li>
      <li>scroll test72</li>
      <li>scroll test73</li>
      <li>scroll test74</li>
      <li>scroll test75</li>
      <li>scroll test76</li>
      <li>scroll test77</li>
      <li>scroll test78</li>
      <li>scroll test79</li>
      <li>scroll test80</li>
      <li>scroll test81</li>
      <li>scroll test82</li>
      <li>scroll test83</li>
      <li>scroll test84</li>
      <li>scroll test85</li>
      <li>scroll test86</li>
      <li>scroll test87</li>
      <li>scroll test88</li>
      <li>scroll test89</li>
      <li>scroll test90</li>
      <li>scroll test91</li>
      <li>scroll test92</li>
      <li>scroll test93</li>
      <li>scroll test94</li>
      <li>scroll test95</li>
      <li>scroll test96</li>
      <li>scroll test97</li>
      <li>scroll test98</li>
      <li>scroll test99</li>
      <li>scroll test100</li>
    </ul>
  </div>
</template>



<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
  data() {    x
    return {
      scroll: null,
    };
  },
  created() {
    // this.scroll = new BScroll(".wrapper", {});
  },
  mounted(){
    // console.log(this.$refs.aaa);
    this.scroll= new BScroll(document.querySelector('.wrapper'),{
      probeType:3
    })

    this.scroll.on('scroll',(position)=>{
      console.log(position);
    })

    this.scroll.on('pullingUp',()=>{
      // '上拉加载更多'

    })
  }
};
</script>

<style scoped>
.wrapper {
  height: 100px;
  background-color: green;

  /* overflow: hidden; */
  /* overflow-y: scroll; */
}
</style>


// 2022-1-20 :not study
// 2022-1-28 not study
