module.exports = {
  lintOnSave: false,
  devServer:{
    proxy:{
      "/api":{
        target:"http://v.juhe.cn",
        pathRewrite:{"^/api":""}
      }
    }
  }
}
