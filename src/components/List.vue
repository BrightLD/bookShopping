<template>
  <div class="content">
    <MHeader>列表</MHeader>
    <ul>
      <li v-for="book in books">
        <img :src="book.bookCover" alt="">
        <div>
          <h4>{{book.bookName}}</h4>
          <p>{{book.bookInfo}}</p>
          <div>
            <a href="#" @click="remove(book.id)">删除</a>
            <a href="#" @click="addCollect(book.id)">加入收藏</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue'
  import axios from 'axios'

  export default {
    data() {
      return {msg: '列表', books: []}
    },
    created() {
      this.getBooks()
    },
    activated() {
      this.getBooks()
    },
    methods: {
      getBooks() {
        axios.get('/api/book').then((res) => {
          this.books = res.data;
        })
//            promise,请求成功后返回调用then方法
      },
      remove(id) {
        axios.delete('/api/book?id=' + id).then(res => {
          this.books = this.books.filter(item => item.id != id)
        })
      }
    },

    computed: {},
    components: {MHeader},
  }
</script>
<style scoped lang="less">
  ul {
    width: 100%;
    li {
      display: flex;
      padding: 5px;
      border-bottom: 1px solid lightgray;
      img {
        width: 90px;
        height: 100px;
      }
      div {
        display: flex;
        flex-direction: column;
        div {
          display: flex;
          flex-direction: row;
          a {
            padding: 5px;
          }
        }
      }

    }

  }
</style>
