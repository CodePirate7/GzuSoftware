const News = require('../models/news');
const mammoth = require("mammoth");

module.exports = {
    add: async ( ctx ) => {
        let {title,summary,file} = ctx.request.body;
        let data = await  mammoth.convertToHtml({buffer: file});
        let html = data.value;
        let reg = /<img([^>]*[^/])>/;
        let img = reg.exec(html);
        console.log( img );
        let result = {
            data: null,
            success: false,
            message: ""
        };
        let news = {
            title,
            summary,
            html
        };
        let newsResult = await new News( news ).save();
        result.success = true;
        result.message = "上传成功";
        result.data = newsResult;
        ctx.body = result;

    },
    findAllNews: async ( ctx ) => {
        let result = await News.find({},{title: 1,createAt: 1}).sort({createAt:-1});
        ctx.body = result
    },
    findNewsById: async ( ctx ) => {
        let { id } = ctx.params;
        let result = {
            success: false,
            data: null,
            message: ""
        };
        let newsResult = await News.findById( id );
        newsResult.views ++;
        await newsResult.save();
        result.data = newsResult;
        result.success = true;
        result.message = "操作成功";
        ctx.body = result
    },
}