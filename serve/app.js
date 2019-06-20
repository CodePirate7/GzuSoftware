//导入模块
const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
//跨域
const cors = require('koa2-cors');
//处理post参数
const bodyParser = require('koa-bodyparser');
//jwt鉴权
const koajwt = require('koa-jwt');

const { name, port} = require('./config');

const {router} = require('./api/api');
const app = new Koa();

app.use(logger());
app.use(cors());
app.use(bodyParser());

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
//
// //设置那些路径需要token验证
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

//启动http服务
app.listen(port,() => {
  console.log(`[${name}] 启动成功,端口: ${port} `)
});