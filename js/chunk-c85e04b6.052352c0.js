(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c85e04b6"],{"28eb":function(t,e,n){"use strict";var r=n("6b1d"),i=n("98f3").left,u=n("7f8a"),c=n("ce71"),o=n("4fed"),a=n("f117"),s=u("reduce"),f=c("reduce",{1:0}),d=!a&&o>79&&o<83;r({target:"Array",proto:!0,forced:!s||!f||d},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"5d1f":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return c})),n.d(e,"i",(function(){return i})),n.d(e,"j",(function(){return f}));n("28eb");var r=n("e300");function i(){}var u="undefined"!==typeof window;function c(t){return void 0!==t&&null!==t}function o(t){return"function"===typeof t}function a(t){return null!==t&&"object"===Object(r["a"])(t)}function s(t){return a(t)&&o(t.then)&&o(t.catch)}function f(t,e){return e.reduce((function(e,n){return e[n]=t[n],e}),{})}var d=function(t){return null!=t.children?t.children:t.childNodes},h=function(t){return null!=t.parentElement?t.parentElement:t.parentNode},l=function(t,e){if(console.log(t.hasAttribute(e),t,"el.hasAttribute(prop)"),t.hasAttribute(e))return t.getAttribute(e)}},"904f":function(t,e,n){"use strict";n.r(e),n.d(e,"glue_swipe_item",(function(){return s}));n("d86f"),n("df26");var r=n("42c2"),i=n("f5f2"),u=n("30c6"),c=n("b8e1"),o=n("5d1f"),a=".glue-swipe-item{position:relative;flex-shrink:0;width:100%;height:100%}",s=function(){function t(e){var n=this;Object(i["a"])(this,t),Object(c["g"])(this,e),this.offset=0,this.inited=!1,this.mounted=!1,this.shouldRender=function(){if(!n.parentLazyRender||n.rendered)return!0;if(!n.mounted)return!1;var t=n.parentActiveIndicator,e=n.parentCount-1,r=0===t&&n.parentLoop?e:t-1,i=t===e&&n.parentLoop?0:t+1;console.log(r,i)},this.contentRender=function(){if(n.rendered)return Object(c["e"])("slot",null)}}return Object(u["a"])(t,[{key:"setOffset",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.offset=e;case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"componentDidLoad",value:function(){this.mounted=!0,this.getState()}},{key:"getState",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=Object(o["c"])(this.el),n=Object(o["c"])(e),console.log(n,"parentEl"),this.parentVertical=Object(o["g"])(n,"vertical"),t.next=6,n.getSize();case 6:return this.parentSize=t.sent,this.parentLoop=Object(o["g"])(n,"loop"),t.next=10,n.getActiveIndicator();case 10:return this.parentActiveIndicator=t.sent,this.parentLazyRender=Object(o["g"])(n,"lazy-render"),t.next=14,n.getCount();case 14:this.parentCount=t.sent,this.shouldRender();case 16:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"render",value:function(){var t={transform:"",height:"",width:""};return this.parentSize&&(t[this.parentVertical?"height":"width"]="".concat(this.parentSize,"px")),this.offset&&(t.transform="translate".concat(this.parentVertical?"Y":"X","(").concat(this.offset,"px)")),Object(c["e"])(c["a"],{class:"glue-swipe-item",style:t},this.contentRender())}},{key:"el",get:function(){return Object(c["d"])(this)}}]),t}();s.style=a},"98f3":function(t,e,n){var r=n("8697"),i=n("37d1"),u=n("83a6"),c=n("b495"),o=function(t){return function(e,n,o,a){r(n);var s=i(e),f=u(s),d=c(s.length),h=t?d-1:0,l=t?-1:1;if(o<2)while(1){if(h in f){a=f[h],h+=l;break}if(h+=l,t?h<0:d<=h)throw TypeError("Reduce of empty array with no initial value")}for(;t?h>=0:d>h;h+=l)h in f&&(a=n(a,f[h],h,s));return a}};t.exports={left:o(!1),right:o(!0)}}}]);