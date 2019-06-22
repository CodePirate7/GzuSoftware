
let util = {};

util.setStorage =  ( key, value ) => {
    let curTime = new Date().getTime();
    let parse = {
        data: value,
        time: curTime
    };
    localStorage.setItem(key,JSON.stringify(parse));
};
util.getStorage = (key,exp) => {
    let data = JSON.parse(localStorage.getItem(key));
    let result = {
        data:null,
        success: false
    };

    if( !data ) return  result;

    if (new Date().getTime() - data.time <= exp) {
        result.data = data.data;
        result.success = true;
    }
    return result;
}


export default util;