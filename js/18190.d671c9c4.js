"use strict";(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[18190,74689],{18190:function(e,t,i){i.r(t),i.d(t,{glue_sidebar_demo:function(){return o}});var s=i(83458),l=i(74689),r=".glue-sidebar-demo{background-color:#fff}.glue-sidebar-demo .van-sidebar{margin-left:16px}.glue-sidebar-demo-title{margin-bottom:16px;color:#969799;font-weight:normal;font-size:14px}",o=function(){function e(e){(0,s.r)(this,e),this.basicUsage="基础用法",this.title="标签名",this.showBadge="徽标提示",this.disabled="禁用选项",this.changeEvent="监听切换事件",this.selectTip="你切换到了",this.activeKey1=0,this.activeKey2=0,this.activeKey3=0,this.activeKey4=0}return e.prototype.onChange=function(e){console.log(e.detail,"onChange")},e.prototype.render=function(){var e=this;return(0,s.h)("div",{class:(0,l.c)("glue-sidebar-demo")},(0,s.h)("glue-doc-section",null,(0,s.h)("glue-grid",{columnNum:2,border:!1},(0,s.h)("glue-grid-item",{custom:"#slot"},(0,s.h)("h3",{class:"demo-sidebar-title"},this.basicUsage),(0,s.h)("glue-sidebar",{modelValue:this.activeKey1},(0,s.h)("glue-sidebar-item",{gtitle:this.title}),(0,s.h)("glue-sidebar-item",{gtitle:this.title}),(0,s.h)("glue-sidebar-item",{gtitle:this.title}))),(0,s.h)("glue-grid-item",{custom:"#slot"},(0,s.h)("h3",{class:"demo-sidebar-title"},this.showBadge),(0,s.h)("glue-sidebar",{modelValue:this.activeKey2},(0,s.h)("glue-sidebar-item",{gtitle:this.title,dot:!0}),(0,s.h)("glue-sidebar-item",{gtitle:this.title,badge:"5"}),(0,s.h)("glue-sidebar-item",{gtitle:this.title,badge:"99+"}))),(0,s.h)("glue-grid-item",{custom:"#slot"},(0,s.h)("h3",{class:"demo-sidebar-title"},this.disabled),(0,s.h)("glue-sidebar",{modelValue:this.activeKey3},(0,s.h)("glue-sidebar-item",{gtitle:this.title}),(0,s.h)("glue-sidebar-item",{gtitle:this.title,disabled:!0}),(0,s.h)("glue-sidebar-item",{gtitle:this.title}))),(0,s.h)("glue-grid-item",{custom:"#slot"},(0,s.h)("h3",{class:"demo-sidebar-title"},this.changeEvent),(0,s.h)("glue-sidebar",{modelValue:this.activeKey3,onGlueChange:function(t){e.onChange(t)}},(0,s.h)("glue-sidebar-item",{gtitle:this.title+1}),(0,s.h)("glue-sidebar-item",{gtitle:this.title+2}),(0,s.h)("glue-sidebar-item",{gtitle:this.title+3}))))))},e}();o.style=r},74689:function(e,t,i){i.r(t),i.d(t,{c:function(){return r}});i(29045);function s(e,t,i){return i={path:t,exports:{},require:function(e,t){return l()}},e(i,i.exports),i.exports}function l(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var r=s((function(e){
/*!
      Copyright (c) 2018 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
(function(){var t={}.hasOwnProperty;function i(){for(var e=[],s=0;s<arguments.length;s++){var l=arguments[s];if(l){var r=typeof l;if("string"===r||"number"===r)e.push(l);else if(Array.isArray(l)){if(l.length){var o=i.apply(null,l);o&&e.push(o)}}else if("object"===r){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var a in l)t.call(l,a)&&l[a]&&e.push(a)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):window.classNames=i})()}))}}]);