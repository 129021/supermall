<template>
  <swiper class="lunbo">
    <swiper-item
      class="swiper-item"
      v-for="item in topImages"
      :key="item.index"
    >
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";

export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
.lunbo {
  height: 300px;
  overflow: hidden;
}
</style>
