"use strict";(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[63407,63823,74689],{63407:function(t,r,e){e.r(r),e.d(r,{glue_tag:function(){return u}});var o=e(83458),n=e(74689),i=e(63823),l=".glue-tag{position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding:0 4px;color:#fff;font-size:12px;line-height:16px;border-radius:2px}.glue-tag--default{background-color:#969799}.glue-tag--default.glue-tag--plain{color:#969799}.glue-tag--danger{background-color:#ee0a24}.glue-tag--danger.glue-tag--plain{color:#ee0a24}.glue-tag--primary{background-color:#1989fa}.glue-tag--primary.glue-tag--plain{color:#1989fa}.glue-tag--success{background-color:#07c160}.glue-tag--success.glue-tag--plain{color:#07c160}.glue-tag--warning{background-color:#ff976a}.glue-tag--warning.glue-tag--plain{color:#ff976a}.glue-tag--plain{background-color:#fff}.glue-tag--plain::before{position:absolute;top:0;right:0;bottom:0;left:0;border:1px solid currentColor;border-radius:inherit;content:'';pointer-events:none}.glue-tag--medium{padding:2px 6px}.glue-tag--large{padding:4px 8px;font-size:14px;border-radius:4px}.glue-tag--mark{border-radius:0 999px 999px 0}.glue-tag--mark::after{display:block;width:2px;content:''}.glue-tag--round{border-radius:999px}.glue-tag__close{margin-left:2px;cursor:pointer}",a=(0,i.c)("glue-tag")[0],u=function(){function t(t){var r=this;(0,o.r)(this,t),this.glueIconClick=(0,o.c)(this,"glueIconClick",7),this.closeHandle=function(t){r.glueIconClick.emit(t)},this.getStyle=function(){return r.plain?{color:r.textColor||r.color}:{color:r.textColor,background:r.color}},this.first=void 0,this.size=void 0,this.mark=void 0,this.color=void 0,this.plain=void 0,this.round=void 0,this.textColor=void 0,this.closeable=void 0,this.type="default"}return t.prototype.render=function(){var t=this,r=t.type,e=t.mark,i=t.plain,l=t.round,u=t.size,c=t.closeable,g={mark:e,plain:i,round:l};u&&(g[u]=u);var s=c&&(0,o.h)("glue-icon",{name:"cross",class:(0,n.c)("glue-tag__close"),onClick:this.closeHandle,size:12});return(0,o.h)(o.H,{style:this.getStyle(),class:(0,n.c)("glue-tag",a([r,e,i,l,u]))},(0,o.h)("slot",null),s)},t}();u.style=l},63823:function(t,r,e){function o(t){return function(r){if("string"==typeof r)return"".concat(t,"__").concat(r);var e={};return r.forEach((function(r){if(r){var o="".concat(t,"--").concat(r);e[o]=!0}})),e}}function n(t){return[o(t)]}e.r(r),e.d(r,{c:function(){return n}})},74689:function(t,r,e){e.r(r),e.d(r,{c:function(){return i}});e(29045);function o(t,r,e){return e={path:r,exports:{},require:function(t,r){return n()}},t(e,e.exports),e.exports}function n(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var i=o((function(t){
/*!
      Copyright (c) 2018 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
(function(){var r={}.hasOwnProperty;function e(){for(var t=[],o=0;o<arguments.length;o++){var n=arguments[o];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)){if(n.length){var l=e.apply(null,n);l&&t.push(l)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var a in n)r.call(n,a)&&n[a]&&t.push(a)}}}return t.join(" ")}t.exports?(e.default=e,t.exports=e):window.classNames=e})()}))}}]);