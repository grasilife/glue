(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4afc1eea"],{4688:function(t,e,n){"use strict";n.r(e),n.d(e,"glue_tabbar",(function(){return d}));var r=n("42c2"),i=n("ce37"),u=n("f5f2"),o=n("30c6"),c=(n("df26"),n("b2c2"),n("666b")),a=n("780b"),f=n("d3ea"),s=n("8e11"),l=".glue-tabbar{z-index:1;display:flex;box-sizing:content-box;width:100%;height:50px;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);background-color:#fff}.glue-tabbar--fixed{position:fixed;bottom:0;left:0}.glue-tabbar--unfit{padding-bottom:0}",d=function(){function t(e){var n=this;Object(u["a"])(this,t),Object(c["g"])(this,e),this.glueChange=Object(c["c"])(this,"glueChange",7),this.border=!1,this.fixed=!1,this.isUnfit=function(){return Object(s["h"])(n.safeAreaInsetBottom)?!n.safeAreaInsetBottom:!n.fixed},this.renderTabbar=function(){var t=n.fixed,e=n.zIndex,r=n.border,u=n.isUnfit();return console.log(t,u,r,f["e"],"fixed"),Object(c["e"])("div",{ref:function(t){n.root=t},style:{zIndex:e},class:Object(a["a"])(Object(i["a"])({"glue-tabbar--fixed":t,"glue-tabbar--unfit":u},f["e"],r))},Object(c["e"])("slot",null))}}return Object(o["a"])(t,[{key:"setActive",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(this.modelValue=e,console.log(e,"activeactive"),this.glueChange.emit(e),n=Object(s["d"])(this.el),r=0;r<n.length;r++)console.log(n[r],this.modelValue,"children[i]"),n[r].setActive(this.modelValue);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getActive",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.modelValue);case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"render",value:function(){var t=this,e=this.fixed,n=this.zIndex,r=this.border,u=this.isUnfit();return Object(c["e"])(c["a"],{ref:function(e){t.root=e},style:{zIndex:n},class:Object(a["a"])("glue-tabbar",Object(i["a"])({"glue-tabbar--fixed":e,"glue-tabbar--unfit":u},f["e"],r))},Object(c["e"])("slot",null))}},{key:"el",get:function(){return Object(c["d"])(this)}}]),t}();d.style=l},"780b":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("e300");n("f38f"),n("ef1f"),n("0d9f"),n("ef14");function i(t,e,n){return n={path:e,exports:{},require:function(t,e){return u()}},t(n,n.exports),n.exports}function u(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var o=i((function(t){
/*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var e={}.hasOwnProperty;function n(){for(var t=[],i=0;i<arguments.length;i++){var u=arguments[i];if(u){var o=Object(r["a"])(u);if("string"===o||"number"===o)t.push(u);else if(Array.isArray(u)){if(u.length){var c=n.apply(null,u);c&&t.push(c)}}else if("object"===o)if(u.toString===Object.prototype.toString)for(var a in u)e.call(u,a)&&u[a]&&t.push(a);else t.push(u.toString())}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()}))},8081:function(t,e,n){var r=n("70b7"),i=n("730c"),u=n("2a3e"),o=/"/g,c=r("".replace);t.exports=function(t,e,n,r){var a=u(i(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+c(u(r),o,"&quot;")+'"'),f+">"+a+"</"+e+">"}},"8e11":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return b})),n.d(e,"h",(function(){return o})),n.d(e,"i",(function(){return i})),n.d(e,"j",(function(){return s}));var r=n("e300");n("ef1f");function i(){}var u="undefined"!==typeof window;function o(t){return void 0!==t&&null!==t}function c(t){return"function"===typeof t}function a(t){return null!==t&&"object"===Object(r["a"])(t)}function f(t){return a(t)&&c(t.then)&&c(t.catch)}function s(t,e){return e.reduce((function(e,n){return e[n]=t[n],e}),{})}var l=function(t){return null!=t.children?t.children:t.childNodes},d=function(t){return null!=t.parentElement?t.parentElement:t.parentNode},b=function(t,e){if(console.log(t,"el.hasAttribute(prop)"),t.hasAttribute(e))return t.getAttribute(e)}},b07c:function(t,e,n){var r=n("72df");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b2c2:function(t,e,n){"use strict";var r=n("6b1d"),i=n("8081"),u=n("b07c");r({target:"String",proto:!0,forced:u("fixed")},{fixed:function(){return i(this,"tt","","")}})},ce37:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},d3ea:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return i})),n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return f}));var r="#ee0a24",i="glue-hairline",u="".concat(i,"--left"),o="".concat(i,"--bottom"),c="".concat(i,"--surround"),a="".concat(i,"--top-bottom"),f="".concat(i,"-unset--top-bottom"),s=300,l="linear"}}]);