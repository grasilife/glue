"use strict";(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[82425,91146,74689],{91146:function(e,t,n){n.r(t),n.d(t,{a:function(){return d},b:function(){return i},c:function(){return u},d:function(){return g},e:function(){return l},f:function(){return o},g:function(){return s},i:function(){return c},n:function(){return r},p:function(){return a}});n(29045);function r(){}var i="undefined"!==typeof window;function c(e){return void 0!==e&&null!==e}function o(e){return"function"===typeof e}function u(e){return null!==e&&"object"===typeof e}function l(e){return u(e)&&o(e.then)&&o(e.catch)}function a(e,t){return t.reduce((function(t,n){return t[n]=e[n],t}),{})}var s=function(e,t){var n=[];function r(e){var i=null!=e.children?e.children:e.childNodes;if(i)for(var c=0;c<i.length;c++){var o=i[c];console.log(o.tagName,t,"tagNametagName"),o.tagName===t?(console.log(o,"hujijijij"),n.push(o)):r(o)}}return r(e),n},d=function(e,t){var n=null;function r(e){var i=null!=e.parentElement?e.parentElement:e.parentNode;console.log(i,"parent"),i.tagName===t&&null===n?n=i:r(i)}return r(e),console.log(n,"targetParent"),n},g=function(e,t){if(console.log(e,"el.hasAttribute(prop)"),e.hasAttribute(t))return e.getAttribute(t)}},82425:function(e,t,n){n.r(t),n.d(t,{glue_card:function(){return u}});var r=n(83458),i=n(74689),c=n(91146),o=".glue-card{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:8px 16px;color:#323233;font-size:12px;background-color:#fafafa}.glue-card:not(:first-child){margin-top:8px}.glue-card__header{display:-ms-flexbox;display:flex}.glue-card__thumb{position:relative;-ms-flex:none;flex:none;width:88px;height:88px;margin-right:8px}.glue-card__thumb img{border-radius:8px}.glue-card__content{position:relative;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;min-width:0;min-height:88px}.glue-card__content--centered{-ms-flex-pack:center;justify-content:center}.glue-card__title,.glue-card__desc{word-wrap:break-word}.glue-card__title{max-height:32px;font-weight:500;line-height:16px}.glue-card__desc{max-height:20px;color:#646566;line-height:20px}.glue-card__bottom{line-height:20px}.glue-card__price{display:inline-block;color:#323233;font-weight:500;font-size:12px}.glue-card__price-integer{font-size:16px;font-family:Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif}.glue-card__price-decimal{font-family:Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif}.glue-card__origin-price{display:inline-block;margin-left:5px;color:#969799;font-size:10px;text-decoration:line-through}.glue-card__num{float:right;color:#969799}.glue-card__tag{position:absolute;top:2px;left:0}.glue-card__footer{-ms-flex:none;flex:none;text-align:right}.glue-card__footer .glue-button{margin-left:5px}",u=function(){function e(e){var t=this;(0,r.r)(this,e),this.glueClick=(0,r.c)(this,"glueClick",7),this.clickThumb=function(e){t.glueClick.emit(e)},this.renderTitle=function(){if(t.gtitle)return(0,r.h)("div",{class:(0,i.c)("glue-card__title","glue-multi-ellipsis--l2")},t.gtitle)},this.renderThumbTag=function(){if(t.tag)return(0,r.h)("div",{class:(0,i.c)("glue-card__tag")},(0,r.h)("glue-tag",{mark:!0,type:"danger"},t.tag))},this.renderThumbImage=function(){},this.renderThumb=function(){if(t.thumb)return(0,r.h)("a",{href:t.thumbLink,class:(0,i.c)("glue-card__thumb"),onClick:t.clickThumb},t.renderThumbImage(),t.renderThumbTag())},this.renderDesc=function(){if(t.desc)return(0,r.h)("div",{class:(0,i.c)("glue-card__desc","glue-ellipsis")},t.desc)},this.renderPriceText=function(){var e=t.price.toString().split(".");return(0,r.h)("div",null,(0,r.h)("span",{class:(0,i.c)("glue-card__price-currency")},t.currency),(0,r.h)("span",{class:(0,i.c)("glue-card__price-integer")},e[0]),".",(0,r.h)("span",{class:(0,i.c)("glue-card__price-decimal")},e[1]))},this.tag=void 0,this.desc=void 0,this.thumb=void 0,this.gtitle=void 0,this.centered=void 0,this.lazyLoad=void 0,this.thumbLink=void 0,this.num=void 0,this.price=void 0,this.originPrice=void 0,this.currency="¥"}return e.prototype.render=function(){var e=(0,c.i)(this.num),t=(0,c.i)(this.price),n=(0,c.i)(this.originPrice),o=e||t||n,u=t&&(0,r.h)("div",{class:(0,i.c)("glue-card__price")},this.renderPriceText()),l=n&&(0,r.h)("div",{class:(0,i.c)("glue-card__origin-price")},"".concat(this.currency," ").concat(this.originPrice)),a=e&&(0,r.h)("div",{class:(0,i.c)("glue-card__num")},"x".concat(this.num)),s=(0,r.h)("div",{class:(0,i.c)("glue-card__footer")},"1111"),d=o&&(0,r.h)("div",{class:(0,i.c)("glue-card__bottom")},u,l,a);return(0,r.h)(r.H,{class:(0,i.c)("glue-card")},(0,r.h)("div",{class:(0,i.c)("glue-card__header")},this.renderThumb(),(0,r.h)("div",{class:((0,i.c)("glue-card__content"),{" glue-card__centered":this.centered})},(0,r.h)("div",null,this.renderTitle(),this.renderDesc()),d)),s)},e}();u.style=o},74689:function(e,t,n){n.r(t),n.d(t,{c:function(){return c}});n(29045);function r(e,t,n){return n={path:t,exports:{},require:function(e,t){return i()}},e(n,n.exports),n.exports}function i(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var c=r((function(e){
/*!
      Copyright (c) 2018 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
(function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var c=typeof i;if("string"===c||"number"===c)e.push(i);else if(Array.isArray(i)){if(i.length){var o=n.apply(null,i);o&&e.push(o)}}else if("object"===c){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){e.push(i.toString());continue}for(var u in i)t.call(i,u)&&i[u]&&e.push(u)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}))}}]);