<template>
  <div class="content">
    <MHeader>添加</MHeader>
    <label for="bookName">书名</label>
    <input type="text" id="bookName" v-model="book.bookName"><br/>
    <label for="bookCover">封面</label>
    <input type="text" id="bookCover" v-model="book.bookCover"><br/>
    <label for="bookInfo">详情</label>
    <input type="text" id="bookInfo" v-model="book.bookInfo"><br/>
    <label for="bookPrice">价格</label>
    <input type="text" id="bookPrice" v-model="book.bookPrice"><br/>
    <button @click="add">添加</button>
    <!--vue中的 添加是@事件名没有on ,@=v-on:onclick-->
  </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue'
  import axios from 'axios'

  export default {
    data() {
      return {
        book: {
          bookName: '',
          bookCover: '',
          bookInfo: '',
          bookPrice: ''
        }
      }
    },
    created() {
    },
    methods: {
      add() {
        axios.post("/api/book", this.book).then(res => {
//             请求成功后将输入框中的内容变为空
          this.book = {
            bookName: '',
            bookCover: '',
            bookInfo: '',
            bookPrice: ''
          }
          this.$router.push('/list')
        })
      }
    },
    computed: {},
    components: {MHeader}
  }
</script>
<style scoped>

</style>
