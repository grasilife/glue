(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f22f8fa"],{"28eb":function(t,n,e){"use strict";var r=e("6b1d"),o=e("98f3").left,c=e("7f8a"),i=e("ce71"),u=e("4fed"),f=e("f117"),a=c("reduce"),s=i("reduce",{1:0}),d=!f&&u>79&&u<83;r({target:"Array",proto:!0,forced:!a||!s||d},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},5934:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return o}));var r=e("95d6");function o(){return!!r["b"]&&/android/.test(navigator.userAgent.toLowerCase())}function c(){return!!r["b"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}},6693:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a}));var r=e("5934");function o(t){var n="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(n,0)}function c(t,n){"scrollTop"in t?t.scrollTop=n:t.scrollTo(t.scrollX,n)}function i(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function u(t){c(window,t),c(document.body,t)}var f=Object(r["a"])();function a(){f&&u(i())}},"89dd":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));e("d86f"),e("8f0b"),e("fa8c");var r=e("e300");function o(t){return function(n){if(console.log(n,Object(r["a"])(n),"typeof el"),"string"==typeof n)return"".concat(t,"__").concat(n);var e={};return n.forEach((function(n){var r="".concat(t,"--").concat(n);e[r]=!0})),e}}function c(t){return[o(t)]}},"95d6":function(t,n,e){"use strict";e.d(n,"a",(function(){return f})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return u})),e.d(n,"e",(function(){return i})),e.d(n,"f",(function(){return o})),e.d(n,"g",(function(){return s}));e("28eb");var r=e("e300");function o(){}var c="undefined"!==typeof window;function i(t){return void 0!==t&&null!==t}function u(t){return"function"===typeof t}function f(t){return null!==t&&"object"===Object(r["a"])(t)}function a(t){return f(t)&&u(t.then)&&u(t.catch)}function s(t,n){return n.reduce((function(n,e){return n[e]=t[e],n}),{})}},"98f3":function(t,n,e){var r=e("8697"),o=e("37d1"),c=e("83a6"),i=e("b495"),u=function(t){return function(n,e,u,f){r(e);var a=o(n),s=c(a),d=i(a.length),l=t?d-1:0,h=t?-1:1;if(u<2)while(1){if(l in s){f=s[l],l+=h;break}if(l+=h,t?l<0:d<=l)throw TypeError("Reduce of empty array with no initial value")}for(;t?l>=0:d>l;l+=h)l in s&&(f=e(f,s[l],l,a));return f}};t.exports={left:u(!1),right:u(!0)}},a598:function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return o})),e.d(n,"e",(function(){return c}));var r="#ee0a24",o="glue-hairline",c="".concat(o,"--left"),i="".concat(o,"--bottom"),u="".concat(o,"--surround")},ce37:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return r}))},ed25:function(t,n,e){"use strict";e.r(n),e.d(n,"glue_index_anchor",(function(){return g}));var r=e("ce37"),o=e("f5f2"),c=e("30c6"),i=e("cf28"),u=e("341b"),f=(e("95d6"),e("fe56")),a=e("a598"),s=e("89dd"),d=(e("5934"),e("6693")),l=".glue-index-anchor{z-index:1;box-sizing:border-box;padding:0 16px;color:#323233;font-weight:500;font-size:14px;line-height:32px;background-color:transparent}.glue-index-anchor--sticky{position:fixed;top:0;right:0;left:0;color:#ee0a24;background-color:#fff}",h=Object(s["a"])("glue-index-anchor"),p=Object(i["a"])(h,1),b=p[0],g=function(){function t(n){var e=this;Object(o["a"])(this,t),Object(u["g"])(this,n),this.top=0,this.left=null,this.rect={top:0,height:0},this.width=null,this.active=!1,this.isSticky=function(){return e.active},this.anchorStyle=function(){if(e.isSticky())return{left:e.left?"".concat(e.left,"px"):null,width:e.width?"".concat(e.width,"px"):null,transform:e.top?"translate3d(0, ".concat(e.top,"px, 0)"):null}},this.getRect=function(t,n){var r=e.root;return e.rect.height=r.offsetHeight,t===window||t===document.body?e.rect.top=r.offsetTop+Object(d["b"])():e.rect.top=r.offsetTop+Object(d["a"])(t)-n.top,e.rect}}return Object(c["a"])(t,[{key:"render",value:function(){var t=this,n=this.isSticky();return Object(u["e"])("div",{ref:function(n){t.root=n},style:{height:n?"".concat(this.rect.height,"px"):void 0}},Object(u["e"])("div",{style:this.anchorStyle(),class:Object(f["a"])(Object(r["a"])({},"glue-index-anchor__"+a["c"],n),b([n]))},this.index))}}]),t}();g.style=l},fe56:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));e("ef14");var r=e("e300");function o(t,n,e){return e={path:n,exports:{},require:function(t,n){return c()}},t(e,e.exports),e.exports}function c(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var i=o((function(t){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var n={}.hasOwnProperty;function e(){for(var t=[],o=0;o<arguments.length;o++){var c=arguments[o];if(c){var i=Object(r["a"])(c);if("string"===i||"number"===i)t.push(c);else if(Array.isArray(c)&&c.length){var u=e.apply(null,c);u&&t.push(u)}else if("object"===i)for(var f in c)n.call(c,f)&&c[f]&&t.push(f)}}return t.join(" ")}t.exports?(e.default=e,t.exports=e):window.classNames=e})()}))}}]);