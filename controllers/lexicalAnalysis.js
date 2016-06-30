/**
  *
  * 腾讯文智分词API
  * by soonfy
  *
  * 输入参数
  * type参数传递分词粒度，0为基础粒度版分词，倾向于将句子切分的更细，在搜索场景使用为佳；1为混合粒度版分词，倾向于保留更多基本短语不被切分开。
  * content参数传递句子
  *
  * 输出参数
  * tokens
    * word，切分出来的基础词
    * pos，该基础词在文本中的起始位置
    * wtype，该基础词的词性
    * wlen，该基础词的长度
    * wtype_pos，该基础词词性的ID
  * combtokens
    * word，实体词
    * pos，该实体在文本中的起始位置
    * wlen，该实体词的长度
    * cls，人名，地名，机构名 
  * code，0表示成功，非0表示失败
  * message，失败时候的错误信息，成功则无该字段
*/

var function_lexicalAnalysis = function(type, content){

  var Capi = require('qcloudapi-sdk') ;

  console.log('LexicalAnalysis test start.') ;

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
  //接口名参数：LexicalAnalysis
  //特定接口参数
  capi.request({
    Region : 'bj' ,
    Action : 'LexicalAnalysis' ,
    code : 2097152 ,
    text : content ,              //content参数使用
    type : type                    //type参数使用
  } , function(err, data){
    if(!err){
      console.log(data) ;
      console.log('LexicalAnalysis test suc.') ;
    }else{
      console.log(err) ;
      console.log('LexicalAnalysis test err.') ;
    }
  }) ;
} ;

//lexicalAnalysis对外接口
exports.interface_lexicalAnalysis = function(type, content){
  function_lexicalAnalysis(type, content) ;
} ;
