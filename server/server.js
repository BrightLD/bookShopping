let http=require("http");
let url=require("url");
let fs=require('fs');
//导入http.url,fs等模块
//导入图片的数据
let sliders=require("../mock/sliders");
//sliders为js文件，就是一个自定义模块可以采用上面的方式来引入，但是json格式的数据就不一样了，所以不能采用下面的方式来反馈给前台数据，此时我们引入了第三方模块fs文件读写系统模块
// let books=require("../mock/book.json");
function getBook(callback) {
  fs.readFile("../mock/book.json","utf8",function (err,data) {
    if(err || data.length===0)
      callback([]);
    else{
      callback(JSON.parse(data))
    }
  })
}
/*getbook(function (data) {
  console.log(data);
})*/
//向后台中添加数据
function writeBook(data,cb) {
  fs.writeFile("../mock/book.json",JSON.stringify(data),cb)
}
http.createServer(function (req,res) {
  let {query,pathname}=url.parse(req.url,true)
  if(pathname==="/api/sliders"){
    //api是必须要加的吗？url内置模块方法的理解？
    res.end(JSON.stringify(sliders))
  }
  else if(pathname==="/api/hot"){
    getBook(function (data) {
      res.end(JSON.stringify(data.reverse().slice(0,9)))
    })
  }
  else if(pathname==="/api/book"){
    let id=parseInt(query.id);
    switch (req.method){
      case "GET":
        if(id>=0){
          //  查询某一个
        }
        else{
          getBook(function (data) {
            res.end(JSON.stringify(data.reverse()))
          })
        }
        break;
      case "POST":
        let str='';
        req.on('data',function (chunk) {
          str+=chunk;
        });
        req.on('end',function () {
          let book=JSON.parse(str);
          getBook(function (data) {
            book.id=data.length?data[data.length-1].id+1:1;
            data.push(book);
            writeBook(data,function (book) {
              res.end(JSON.stringify(book))
            })
          })
        });
        break;



      case "DELETE":
        getBook(function (data) {
          data=data.filter(item=>item.id!==id)
          writeBook(data,function (data) {
            res.end(JSON.stringify({}))
          })
        });
      /*当用点击删除按钮的时候，发送post请求，首先通过getBook方法拿到数据，通过filter方法将不等于用户传来的那一项的从后台数据中过滤出去，将新的内容在写入后台的数据库中，就可以完成删除操作了。以上几种方法都是文件模块的fs，来对数据库中的内容进行读写操作的。


      /*/
      case "PUT":

    }
  }
}).listen(3000);
