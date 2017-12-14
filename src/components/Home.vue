<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
      <!--热销图书-->
      <h4>热销图书</h4>

      <ul class="hot" v-if="books.length">
        <li v-for="book in books">
          <img :src="book.bookCover" alt="">
          <span>{{book.bookName}}</span>
          <span>{{book.bookInfo}}</span>
        </li>
      </ul>
      <Loading v-else></Loading>
    </div>
  </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue'
  import Loading from '../base/Loading.vue'//导入
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
          setTimeout(()=> this.books = res.data,2000)
          //  这里我们设置一个定时器来模拟数据没有立刻请求到，从而显示我们的动画效果。
        }))
      },

    },

    computed: {},
    components: {MHeader, Swiper,Loading}//注册
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
