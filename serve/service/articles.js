const Articles = require('../models/articles');

module.exports = {
    //查询所有文章
    findAllArticles: async ( ctx ) => {
        let result = await Articles.find().populate('author').sort({createAt:-1});
        ctx.body = result
    },
    //分页 /:页码/:条目数
    findPageArticles: async ( ctx ) => {
        let { page, size } = ctx.params;
        page = parseInt( page );
        size = parseInt( size );
        let result = {
            data: null,
            total: 0
        };
        let articlesResult = await Articles.find();
        result.total = articlesResult.length;
        articlesResult = await Articles.find().populate('author').skip( page * size ).limit(  size  ).sort({createAt:-1});
        result.data = articlesResult;
        ctx.body = result;
    },
    //查找指定文章
    findArticle: async ( ctx ) => {
        let { id } = ctx.params;
        console.log(id);
        let result = {
            success: false,
            data: null,
            message: ""
        };
        let articleResult = await Articles.findById( id ).populate('author');
        articleResult.views ++;
        let articleResults = await articleResult.save();
        result.data = articleResults;
        result.success = true;
        result.message = "操作成功";
        ctx.body = result
    },
    //创建文章
    add: async ( ctx ) => {
        let article = ctx.request.body
        let result = {
            success: false,
            data: null,
            message: ""
        };
        let articleResult = await new Articles( article ).save();
        result.data = articleResult;
        result.success = true;
        result.message = "发布成功";
        ctx.body = result
    },
    //增加浏览量
    addViews: async ( ctx ) => {
        let { id } = ctx.request.body;
        let result = {
            success: false,
            data: null,
            message: ""
        };
        let articleResult = await Articles.update( {_id: id}, {$inc: {views: 1}} );
        result.success = true;
        result.data = articleResult;
        result.message = "操作成功";
        ctx.body = result;
    },
    //增加评论
    addComment: async ( ctx ) => {
        let { id, comment, user } = ctx.request.body;
        let result = {
            success: false,
            data: null,
            message: ""
        };
        let commentData = {
            content: comment,
            createAt: new Date,
            user
        }
        let articleResult = await Articles.findById(id).populate('author');
        articleResult.comment.push( commentData );
        let fn = await  articleResult.save();
        result.success = true;
        result.data = fn ;
        result.message = "操作成功";
        ctx.body = result;
    },
}