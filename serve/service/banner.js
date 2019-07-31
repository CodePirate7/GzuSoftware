const Banner = require('../models/banner');

module.exports = {
    add: async ( ctx ) => {
        let url = ctx.req.file.filename;
        let banner = {
            url
        };
        let result = {
            success: false,
            data: null,
            message: "",
        };
        let bannerResult = await new Banner( banner ).save();
        result.data = bannerResult;
        result.success = true;
        result.message = "上传成功";
        ctx.body = result;
    },
    //查询所有轮播图
    showAllBanner: async ( ctx ) => {
        let result = await Banner.find().sort({createAt:-1});
        ctx.body = result
    }
}