(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef8785ee"],{6344:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d86f"),n("8f0b"),n("fa8c");function r(t){return function(e){if("string"==typeof e)return"".concat(t,"__").concat(e);var n={};return e.forEach((function(e){if(e){var r="".concat(t,"--").concat(e);n[r]=!0}})),n}}function i(t){return[r(t)]}},8081:function(t,e,n){var r=n("730c"),i=/"/g;t.exports=function(t,e,n,a){var o=String(r(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),c+">"+o+"</"+e+">"}},"9ceb":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("ef14");var r=n("e300");function i(t,e,n){return n={path:e,exports:{},require:function(t,e){return a()}},t(n,n.exports),n.exports}function a(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var o=i((function(t){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var e={}.hasOwnProperty;function n(){for(var t=[],i=0;i<arguments.length;i++){var a=arguments[i];if(a){var o=Object(r["a"])(a);if("string"===o||"number"===o)t.push(a);else if(Array.isArray(a)&&a.length){var c=n.apply(null,a);c&&t.push(c)}else if("object"===o)for(var u in a)e.call(a,u)&&a[u]&&t.push(u)}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()}))},b07c:function(t,e,n){var r=n("72df");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b2c2:function(t,e,n){"use strict";var r=n("6b1d"),i=n("8081"),a=n("b07c");r({target:"String",proto:!0,forced:a("fixed")},{fixed:function(){return i(this,"tt","","")}})},bafa:function(t,e,n){"use strict";function r(t){return t===window}n.d(e,"a",(function(){return i}));var i=function(t){if(r(t)){var e=t.innerWidth,n=t.innerHeight;return{top:0,left:0,right:e,bottom:n,width:e,height:n}}return t&&t.getBoundingClientRect?t.getBoundingClientRect():{top:0,left:0,right:0,bottom:0,width:0,height:0}}},ce37:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},d3ea:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return i})),n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return a})),n.d(e,"i",(function(){return l}));var r="#ee0a24",i="glue-hairline",a="".concat(i,"--left"),o="".concat(i,"--bottom"),c="".concat(i,"--surround"),u="".concat(i,"--top-bottom"),l="".concat(i,"-unset--top-bottom"),f=300,s="linear"},ff06:function(t,e,n){"use strict";n.r(e),n.d(e,"glue_nav_bar",(function(){return p}));n("b2c2");var r=n("ce37"),i=n("f5f2"),a=n("30c6"),o=n("cf28"),c=n("b8e1"),u=n("9ceb"),l=n("6344"),f=n("d3ea"),s=n("bafa"),g=".glue-nav-bar{position:relative;z-index:1;line-height:22px;text-align:center;background-color:#fff;user-select:none;display:block}.glue-nav-bar--fixed{position:fixed;top:0;left:0;width:100%}.glue-nav-bar--safe-area-inset-top{padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.glue-nav-bar .glue-icon{color:#1989fa}.glue-nav-bar__content{position:relative;display:flex;align-items:center;height:46px}.glue-nav-bar__arrow{margin-right:4px;font-size:16px}.glue-nav-bar__title{max-width:60%;margin:0 auto;color:#323233;font-weight:500;font-size:16px}.glue-nav-bar__left,.glue-nav-bar__right{position:absolute;top:0;bottom:0;display:flex;align-items:center;padding:0 16px;font-size:14px;cursor:pointer}.glue-nav-bar__left:active,.glue-nav-bar__right:active{opacity:0.7}.glue-nav-bar__left{left:0}.glue-nav-bar__right{right:0}.glue-nav-bar__text{color:#1989fa}",h=Object(l["a"])("glue-nav-bar"),b=Object(o["a"])(h,1),d=b[0],p=function(){function t(e){var n=this;Object(i["a"])(this,t),Object(c["g"])(this,e),this.glueLeft=Object(c["c"])(this,"glueLeft",7),this.glueRight=Object(c["c"])(this,"glueRight",7),this.border=!0,this.height=0,this.onClickLeft=function(t){n.glueLeft.emit(t)},this.renderPlaceholder=function(){if(n.fixed&&n.placeholder)return Object(c["e"])("div",{class:d("placeholder"),style:{height:n.height?"".concat(n.height,"px"):void 0}})},this.onClickRight=function(t){n.glueRight.emit(t)},this.renderLeft=function(){return"#slot"==n.leftText?Object(c["e"])("slot",{name:"left-text"}):[n.leftArrow&&Object(c["e"])("glue-icon",{class:"glue-nav-bar__arrow",name:"arrow-left"}),n.leftText&&Object(c["e"])("span",{class:"glue-nav-bar__text"},n.leftText)]},this.renderRight=function(){return"#slot"==n.rightText?Object(c["e"])("slot",{name:"right-text"}):Object(c["e"])("span",{class:"glue-nav-bar__text"},n.rightText)},this.renderNavBar=function(){var t=n.title,e=n.fixed,i=n.border,a={zIndex:n.zIndex},o=n.leftArrow||n.leftText,l=n.rightText;return Object(c["e"])("div",{ref:function(t){n.navBarRef=t},class:Object(u["a"])("safe-area-inset-top",d([e]),Object(r["a"])({"glue-nav-bar__safeAreaInsetTop":n.safeAreaInsetTop},f["g"],i)),style:a},Object(c["e"])("div",{class:"glue-nav-bar__content"},o&&Object(c["e"])("div",{class:"glue-nav-bar__left",onClick:n.onClickLeft},n.renderLeft()),Object(c["e"])("div",{class:"glue-nav-bar__title glue-ellipsis"},t),l&&Object(c["e"])("div",{class:"glue-nav-bar__right",onClick:n.onClickRight},n.renderRight())))}}return Object(a["a"])(t,[{key:"componentDidLoad",value:function(){var t=Object(s["a"])(this.navBarRef),e=t.height;console.log(e,this.navBarRef,"height"),this.height=e}},{key:"render",value:function(){return Object(c["e"])(c["a"],{class:"glue-nav-bar"},this.renderPlaceholder(),this.renderNavBar())}}]),t}();p.style=g}}]);