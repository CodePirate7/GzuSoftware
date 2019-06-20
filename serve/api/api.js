const UserService = require('../service/users');
const Router = require('koa-router');
const router = Router();

//获取所有用户信息
router.get('/user',UserService.user);

//通过 name 或 id 获取指定用户信息
router.get('/user/:name',UserService.findOneByName);


router.post( '/reg', UserService.reg );

router.post('/login', UserService.login);


module.exports = {
  router
};
