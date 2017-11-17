<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides" :key="slide">
      <img :src="slide" class="img">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
  export default {
    props: {swiperSlides: {type: Array, default: []}},
    data() {
      return {
        swiperOption: {
          loop: true,
          autoplay: 3500,
          autoplayDisableOnInteraction: false,
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          observeParents: true,
        }
      }
    }
  }
</script>
<style scoped>
  img {
    width: 100%;
  }
</style>
<!--当在某个时间内的状态（好像是由于自己的注意力不集中）不好时，效率低下的时候不防休息一下，等到自己状态好的时候，你就会觉得很多问题都不在是问题了。-->
