/**
  *
  * 腾讯文智关键词提取API
  * by soonfy
  *
  * 输入参数
  * TITLE参数传递新闻标题
  * TYPE参数传递新闻分类
  * CONTENT参数新闻句子
  *
  * 输出参数
  * keywords
    * keyword，关键词提取服务对文本标记的标签
    * score，关键词权重
    * type，值为keyword，表示文中出现的关键词。值为topic，表示话题
  * code，0表示成功，非0表示失败
  * message，失败时候的错误信息，成功则无该字段
*/

var function_textKeywords = function(title, type, content){
  var Capi = require('qcloudapi-sdk') ;

  console.log('TextKeywords test start.') ;

  //传递密钥和服务类型，构造qcloudapi对象
  //密钥需要在腾讯云免费申请
  //API请求域名为wenzhi.api.qcloud.com，API文档定义标准
  //API基础域名为api.qcloud.com，API内部默认
  //API服务类型 = 请求域名 - 基础域名，需要传递参数
  var capi = new Capi({
    SecretId : 'AKIDCSv87KDBqLU7zRCOzWWui5NFR6OcuQzj' ,
    SecretKey : '腾讯文智密钥' ,
    serviceType : 'wenzhi'
  }) ;

  //传递接口和接口参数，调用对象的request请求方法
  //区域参数：bj，gz，sh，hk，ca
  //接口名参数：TextKeywords
  //特定接口参数
  capi.request({
    Region : 'bj' ,
    Action : 'TextKeywords' ,
    title : title ,                                         //title参数使用
    channel : type ,                                  //type参数使用
    content : content                               //content参数使用
  } , function(err, data){
    if(!err){
      console.log(data) ;
      console.log('TextKeywords test suc.') ;
    }else{
      console.log(err) ;
      console.log('TextKeywords test err.') ;
    }
  }) ;
} ;

exports.interface_textKeywords = function(title, type, content){
  function_textKeywords(title, type, content) ;
} ;
