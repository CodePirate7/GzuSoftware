const News = require('../models/news');
const mammoth = require("mammoth");
const fs = require('fs');

module.exports = {
    add: async ( ctx ) => {
        let {title,summary,file} = ctx.request.body;
        let n = 0;
        let cover = '';
        let options = {
            convertImage: mammoth.images.imgElement(function(image) {
                return image.read("base64").then(function(imageBuffer) {
                    let type = image.contentType;
                    let imgType = type.split('/');
                    let dataBuffer = Buffer.from(imageBuffer,'base64');
                    let filename = new Date().getTime() + '.' + imgType[1];
                    let imgPath ='./public/image/';
                    let filepath = imgPath + filename;
                    fs.writeFile(filepath,dataBuffer, err => {
                        if(err){
                            console.log(err);
                        }
                    });
                    let src = `http://localhost:3000/${filename}`;
                    if( !n ) cover = src;
                    n ++;
                    return {
                        src
                    };
                });
            })
        };
        let data = await mammoth.convertToHtml({buffer: file},options);
        let html = data.value;
        let result = {
            data: null,
            success: false,
            message: ""
        };
        let news = {
            title,
            summary,
            html,
            cover
        };
        let newsResult = await new News( news ).save();
        result.success = true;
        result.message = "上传成功";
        result.data = newsResult;
        ctx.body = result;
    },
    findAllNews: async ( ctx ) => {
        let result = await News.find().sort({createAt:-1});
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
    //删除新闻
    deleteOneByID: async ( ctx ) => {
        let { id } = ctx.params;
        let result = {
            success: false,
            data: null,
            message: ""
        };
        let newsResult = await News.remove( {_id: id} );
        result.data = newsResult;
        result.success = true;
        result.message = `操作成功,共删除 ${newsResult.n} 条数据`;
        ctx.body = result;
    }
}