const Koa = require('koa'); // http服务
const logger = require('koa-logger'); //打印请求信息
const cors = require('koa2-cors'); //设置跨域
const bodyParser = require('koa-bodyparser'); //处理post参数格式
const mongoose = require('mongoose'); //mongoose
const static = require('koa-static');
// const koajwt = require('koa-jwt');

const { name, port,db:{host,database}} = require('./config');
const { router } = require('./api/api');

const app = new Koa();

app.use(static(__dirname + '/public/image'));
app.use(logger());
app.use(cors());
app.use(bodyParser({
    formLimit:"1mb",
    jsonLimit:"20mb",
    textLimit:"1mb"
}));
// app.use(bodyParser());

//验证token
// app.use((ctx, next) => {
//   return next().catch((err) => {
//       if(err.status === 401){
//           ctx.status = 401;
//           ctx.body = 'Protected resource, use Authorization header to get access\n';
//       }else{
//           throw err;
//       }
//   })
// });

//设置那些路径需要token验证
// app.use(koajwt({
// 	secret: 'my_token'
// }).unless({
// 	path: [
//     '/reg',
//     '/login',
//         '/user'
//   ]
// }));

//加载路由
app.use(router.routes());

//链接数据库 启动http服务
mongoose.connect(`mongodb://${host}/${database}`,{useNewUrlParser:true},(err)=>{
    if( err ){
        console.log('数据库链接失败~~');
        return;
    }
    console.log(`[${name}] 数据库连接成功,端口: 27017 `);
    app.listen(port,() => {
      console.log(`[${name}] 后台启动成功,端口: ${port} `)
    });
});