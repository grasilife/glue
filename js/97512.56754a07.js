"use strict";(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[97512,74689],{97512:function(t,e,i){i.r(e),i.d(e,{glue_tab_demo:function(){return s}});var n=i(83458),o=i(74689),r="glue-tab-demo{margin-bottom:80vh}glue-tab-demo .glue-tab__panel{padding:24px 20px;background-color:#fff}glue-tab-demo .glue-tabs--card .glue-tab__pane{background-color:transparent}",s=function(){function t(t){(0,n.r)(this,t),this.basicUsage="基础用法",this.matchByName="通过名称匹配",this.title2="标签栏滚动",this.title3="禁用标签",this.title4="样式风格",this.title5="点击事件",this.title6="粘性布局",this.title7="自定义标签",this.title8="切换动画",this.title9="滑动切换",this.title10="滚动导航",this.beforeChangeTitle="异步切换",this.tab="标签",this.content="内容",this.active=2,this.activeName="b",this.tabs=[1,2,3,4]}return t.prototype.glueDisabled=function(t){console.log(t,"glueDisabled")},t.prototype.onGlueClick=function(t){console.log(t,"onGlueClick")},t.prototype.render=function(){var t=this;return(0,n.h)("div",{class:(0,o.c)("cunstom")},(0,n.h)("glue-doc-section",null,(0,n.h)("glue-doc-block",{gtitle:this.basicUsage},(0,n.h)("glue-tabs",{active:this.active},this.tabs.map((function(e,i){return(0,n.h)("glue-tab",{gtitle:t.tab+i,key:i},t.content+i)}))))))},t}();s.style=r},74689:function(t,e,i){i.r(e),i.d(e,{c:function(){return r}});i(29045);function n(t,e,i){return i={path:e,exports:{},require:function(t,e){return o()}},t(i,i.exports),i.exports}function o(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var r=n((function(t){
/*!
      Copyright (c) 2018 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
(function(){var e={}.hasOwnProperty;function i(){for(var t=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var r=typeof o;if("string"===r||"number"===r)t.push(o);else if(Array.isArray(o)){if(o.length){var s=i.apply(null,o);s&&t.push(s)}}else if("object"===r){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){t.push(o.toString());continue}for(var u in o)e.call(o,u)&&o[u]&&t.push(u)}}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):window.classNames=i})()}))}}]);