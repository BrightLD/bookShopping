<template>
  <div>
    <MHeader>首页</MHeader>

    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
      <!--热销图书-->
      <h4>热销图书</h4>
      <ul class="hot">
        <li v-for="book in books">
          <img :src="book.bookCover" alt="">
          <span>{{book.bookName}}</span>
          <span>{{book.bookInfo}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue'
  import Swiper from '../base/Swiper.vue'
  import axios from 'axios'

  export default {
    data() {
      return {
        sliders: [],
        books: []
      }
    },
    created() {
      this.getSliders();
      this.getBooks();
    },
    activated() {
      this.getBooks();
    },
    methods: {
      getSliders() {
        axios.get("/api/sliders").then((res) => {
            this.sliders = res.data
          }
        )
      },
      getBooks() {
        axios.get("/api/hot").then((res => {
          this.books = res.data;
        }))
      }
    },

    computed: {},
    components: {MHeader, Swiper}
  }
</script>
<style scoped lang="less">
  h4 {
    margin-left: 10px;
  }

  .hot {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 33.33%;
      padding: 5px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        width: 100%;
        height: 80px;
      }
      span {
        font-size: 14px;
        text-align: center;
      }

    }
  }
</style>
