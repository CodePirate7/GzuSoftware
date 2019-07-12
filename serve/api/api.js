const userService = require('../service/users');
const articleService = require('../service/articles');
const newsService = require('../service/news');
const Router = require('koa-router');
const router = Router();

//------------------用户表-------------------//
//获取所有用户信息
router.get('/user',userService.showAllUsers);

//通过 name 获取指定用户信息
router.get('/user/:name',userService.findOneByName);

//删除 name 指定用户
router.delete('/user/:name',userService.deleteOneByName)

//注册
router.post( '/reg', userService.reg );

//登录
router.post('/login', userService.login);

//------------------文章表-------------------//

//获取所有文章
router.get('/article', articleService.findAllArticles);

//通过id查找文章
router.get('/article/:id', articleService.findArticle);

//文章分页
router.get('/article/:page/:size', articleService.findPageArticles);

//增加文章
router.post('/article/addarticle', articleService.add);

//增加浏览量
router.post('/article/addviews', articleService.addViews);

//增加评论
router.post('/article/addcomment', articleService.addComment);

//------------------文章表-------------------//

//获取所有新闻
router.get('/news', newsService.findAllNews);

//增加新闻
router.post('/news/add',newsService.add);

//通过ID查找新闻
router.get('/news/:id', newsService.findNewsById);




module.exports = {
  router
};
