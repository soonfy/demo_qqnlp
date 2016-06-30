/**
  *
  * 腾讯文智情感分析API
  * by soonfy
  *
  *输入参数
  *type参数传递分类，1：电商；2：APP；3：美食；4：酒店和其他
  *content参数传递句子
  *
  * 输出参数
  * positive，正面情感概率
  * negative，负面情感概率
  * code，0表示成功，非0表示失败
  * message，失败时候的错误信息，成功则无该字段
  *
*/

var function_textSentiment = function(type, content){
  var Capi = require('qcloudapi-sdk') ;

  console.log('TextSentiment test start.') ;

  //传递密钥和服务类型，构造qcloudapi对象
  //密钥需要在腾讯云免费申请
  //API请求域名为wenzhi.api.qcloud.com，API文档定义标准
  //API基础域名为api.qcloud.com，API内部默认
  //API服务类型 = 请求域名 - 基础域名，需要传递参数
  var capi = new Capi({
    SecretId : 'AKIDCSv87KDBqLU7zRCOzWWui5NFR6OcuQzj' ,
    SecretKey : 'O8fMpzdxtjBUNRTVh9jRz2AeIVHCzRbz' ,
    serviceType : 'wenzhi'
  }) ;

  //传递接口和接口参数，调用对象的request请求方法
  //区域参数：bj，gz，sh，hk，ca
  //接口名参数：TextSentiment
  //特定接口参数
  capi.request({
    Region : 'bj' ,
    Action : 'TextSentiment' ,
    content : content ,                     //content参数使用
    type : type                                 //type参数使用
  } , function(err, data){
    if(!err){
      console.log(data) ;
      console.log('TextSentiment test suc.') ;
    }else{
      console.log(err) ;
      console.log('TextSentiment test err.') ;
    }
  }) ;
} ;

exports.interface_textSentiment = function(type, content){
  function_textSentiment(type, content) ;
} ;