/**
  *
  * 腾讯文智接口demo
  * by soonfy
  *
*/
var LexicalAnalysis = require('./lexicalAnalysis.js');
var TextSentiment = require('./textSentiment.js');
var TextKeywords = require('./textKeywords.js');

/**
  *
  * 分词接口demo
  *
*/
//分词接口用户传递字段
//分词粒度
//0为基础粒度版分词，倾向于将句子切分的更细，在搜索场景使用为佳。
//1为混合粒度版分词，倾向于保留更多基本短语不被切分开。
var TYPE = 1 ;
//需要分词的句子段落
var CONTENT = '词法分析已经为应用宝搜索、微信公共账号搜索等业务提供支持，均取得了良好的效果。' ;

var demo_lexicalAnalysis = function(type, content){
  LexicalAnalysis.interface_lexicalAnalysis(type, content) ;
} ;

demo_lexicalAnalysis(TYPE, CONTENT) ;

/**
  *
  *情感分析接口demo
  *
*/
//情感分析接口用户传递字段
//分类
//1：电商；2：APP；3：美食；4：酒店和其他
var TYPE = 1 ;
//需要情感分析的句子段落
var CONTENT = '词法分析已经为应用宝搜索、微信公共账号搜索等业务提供支持，均取得了良好的效果。' ;

var demo_textSentiment = function(type, content){
  TextSentiment.interface_textSentiment(type, content) ;
} ;

demo_textSentiment(TYPE, CONTENT) ;

/**
  *
  *关键词提取demo
  *
*/
//关键词提取接口用户传递字段
//新闻标题
var TITLE = '自然语言处理' ;
//新闻分类
//CHnews_news_sports  体育新闻
//CHnews_news_ent 娱乐新闻
//CHnews_news_astro 星座新闻
//CHnews_news_auto  汽车新闻
//CHnews_news_cul 文化新闻
//CHnews_news_digi  数码新闻
//CHnews_news_finance 财经新闻
//CHnews_news_game  游戏新闻
//CHnews_news_house 房产新闻
//CHnews_news_lad 时尚新闻
//CHnews_news_mil 军事新闻
//CHnews_news_ssh 社会新闻
//CHnews_news_tech  科技新闻
//CHnews_news_others  其它
var TYPE = 'CHnews_news_tech' ;
//关键词提取的句子段落
var CONTENT = '词法分析已经为应用宝搜索、微信公共账号搜索等业务提供支持，均取得了良好的效果。' ;

var demo_textKeywords = function(title, type, content){
  TextKeywords.interface_textKeywords(title, type, content) ;
} ;

demo_textKeywords(TITLE, TYPE, CONTENT) ;
