"use strict";(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[89901,91146,74088,74689],{91146:function(t,e,n){n.r(e),n.d(e,{a:function(){return f},b:function(){return i},c:function(){return a},d:function(){return h},e:function(){return u},f:function(){return l},g:function(){return s},i:function(){return r},n:function(){return o},p:function(){return c}});n(29045);function o(){}var i="undefined"!==typeof window;function r(t){return void 0!==t&&null!==t}function l(t){return"function"===typeof t}function a(t){return null!==t&&"object"===typeof t}function u(t){return a(t)&&l(t.then)&&l(t.catch)}function c(t,e){return e.reduce((function(e,n){return e[n]=t[n],e}),{})}var s=function(t,e){var n=[];function o(t){var i=null!=t.children?t.children:t.childNodes;if(i)for(var r=0;r<i.length;r++){var l=i[r];console.log(l.tagName,e,"tagNametagName"),l.tagName===e?(console.log(l,"hujijijij"),n.push(l)):o(l)}}return o(t),n},f=function(t,e){var n=null;function o(t){var i=null!=t.parentElement?t.parentElement:t.parentNode;console.log(i,"parent"),i.tagName===e&&null===n?n=i:o(i)}return o(t),console.log(n,"targetParent"),n},h=function(t,e){if(console.log(t,"el.hasAttribute(prop)"),t.hasAttribute(e))return t.getAttribute(e)}},74088:function(t,e,n){n.r(e),n.d(e,{B:function(){return l},D:function(){return s},E:function(){return f},R:function(){return o},a:function(){return i},b:function(){return u},c:function(){return r},d:function(){return a},e:function(){return c}});var o="#ee0a24",i="glue-hairline",r="".concat(i,"--left"),l="".concat(i,"--bottom"),a="".concat(i,"--surround"),u="".concat(i,"--top-bottom"),c="".concat(i,"-unset--top-bottom"),s=300,f="linear"},89901:function(t,e,n){n.r(e),n.d(e,{glue_tabbar:function(){return s},glue_tabbar_item:function(){return h}});n(29045);var o=n(83458),i=n(74689),r=n(74088),l=n(91146),a=function(t,e,n,o){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function l(t){try{u(o.next(t))}catch(t){r(t)}}function a(t){try{u(o["throw"](t))}catch(t){r(t)}}function u(t){t.done?n(t.value):i(t.value).then(l,a)}u((o=o.apply(t,e||[])).next())}))},u=function(t,e){var n,o,i,r,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(t){return function(e){return u([t,e])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(r&&(r=0,a[0]&&(l=0)),l)try{if(n=1,o&&(i=2&a[0]?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,o=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(i=l.trys,!(i=i.length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){l.label=a[1];break}if(6===a[0]&&l.label<i[1]){l.label=i[1],i=a;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(a);break}i[2]&&l.ops.pop(),l.trys.pop();continue}a=e.call(t,l)}catch(t){a=[6,t],o=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},c=".glue-tabbar{z-index:1;display:-ms-flexbox;display:flex;-webkit-box-sizing:content-box;box-sizing:content-box;width:100%;height:50px;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);background-color:#fff}.glue-tabbar--fixed{position:fixed;bottom:0;left:0}.glue-tabbar--unfit{padding-bottom:0}",s=function(){function t(t){var e=this;(0,o.r)(this,t),this.glueChange=(0,o.c)(this,"glueChange",7),this.isUnfit=function(){return(0,l.i)(e.safeAreaInsetBottom)?!e.safeAreaInsetBottom:!e.fixed},this.renderTabbar=function(){var t,n=e,l=n.fixed,a=n.zIndex,u=n.border,c=e.isUnfit();return console.log(l,c,u,r.b,"fixed"),(0,o.h)("div",{ref:function(t){e.root=t},style:{zIndex:a},class:(0,i.c)((t={"glue-tabbar--fixed":l,"glue-tabbar--unfit":c},t[r.b]=u,t))},(0,o.h)("slot",null))},this.zIndex=void 0,this.placeholder=void 0,this.activeColor=void 0,this.beforeChange=void 0,this.inactiveColor=void 0,this.modelValue=void 0,this.border=!1,this.fixed=!1,this.children=void 0,this.safeAreaInsetBottom=void 0}return t.prototype.watchModelValue=function(){this.children=(0,l.g)(this.el,"GLUE-TABBAR-ITEM"),console.log(this.children,"this.children");for(var t=0;t<this.children.length;t++){var e=this.children[t],n=e.name;console.log(e,n,"namenamename"),n?this.modelValue===n?(console.log(e.setValue,"element.setValue"),e.setValue("selected",!0)):e.setValue("selected",!1):(console.log(this.modelValue,t,"jigjiajigjia"),this.modelValue===t?(console.log(e.setValue,"element.setValue"),e.setValue("selected",!0),e.setValue("index",t)):(e.setValue("selected",!1),e.setValue("index",t)))}},t.prototype.setValue=function(t,e){return a(this,void 0,void 0,(function(){return u(this,(function(n){return console.log(t,e,"hhijioa"),this[t]=e,[2]}))}))},t.prototype.componentWillLoad=function(){this.watchModelValue()},t.prototype.render=function(){var t,e=this,n=this,l=n.fixed,a=n.zIndex,u=n.border,c=this.isUnfit();return(0,o.h)(o.H,{ref:function(t){e.root=t},style:{zIndex:a},class:(0,i.c)("glue-tabbar",(t={"glue-tabbar--fixed":l,"glue-tabbar--unfit":c},t[r.b]=u,t))},(0,o.h)("slot",null))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{modelValue:["watchModelValue"]}},enumerable:!1,configurable:!0}),t}();s.style=c;var f=".glue-tabbar-item{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:#646566;font-size:12px;line-height:1;cursor:pointer}.glue-tabbar-item__icon{margin-bottom:4px;font-size:22px}.glue-tabbar-item__icon .glue-icon{display:block}.glue-tabbar-item__icon img{display:block;height:20px}.glue-tabbar-item--active{color:#1989fa;background-color:#fff}.glue-tabbar-item .glue-badge{margin-top:4px}",h=function(){function t(t){var e=this;(0,o.r)(this,t),this.glueClick=(0,o.c)(this,"glueClick",7),this.onClick=function(){var t=(0,l.a)(e.el,"GLUE-TABBAR");if(console.log(t.tagName,"parent.tagName"),"GLUE-TABBAR"===t.tagName){var n=e,o=n.name,i=n.index;o?t.setValue("modelValue",o):t.setValue("modelValue",i),e.glueClick.emit()}},this.renderIcon=function(){return"#slot"==e.icon?(0,o.h)("slot",{name:"icon"}):e.icon?(0,o.h)("glue-icon",{name:e.icon,classPrefix:e.iconPrefix,size:24}):void 0},this.dot=void 0,this.icon=void 0,this.name=void 0,this.gtitle=void 0,this.badge=void 0,this.iconPrefix=void 0,this.parentActiveColor=void 0,this.parentInactiveColor=void 0,this.parentModelValue=void 0,this.selected=void 0,this.parentEl=void 0,this.index=void 0}return t.prototype.componentDidLoad=function(){this.parentEl=(0,l.a)(this.el,"GLUE-TABBAR"),this.parentActiveColor=(0,l.d)(this.parentEl,"active-color"),this.parentInactiveColor=(0,l.d)(this.parentEl,"inactive-color"),this.parentModelValue=(0,l.d)(this.parentEl,"model-value"),this.selected=this.parentModelValue==this.name,console.log(this.parentActiveColor,this.parentActiveColor,this.parentModelValue,"this.parentModelValue22")},t.prototype.setValue=function(t,e){return a(this,void 0,void 0,(function(){return u(this,(function(n){return console.log(t,e,"hhijioa"),this[t]=e,[2]}))}))},t.prototype.render=function(){var t=this,e=this,n=e.dot,r=e.badge,l=e.parentActiveColor,a=e.parentInactiveColor,u=this.selected?l:a;return(0,o.h)(o.H,{class:(0,i.c)("glue-tabbar-item",{"glue-tabbar-item--active":this.selected}),style:{color:u},onClick:function(){t.onClick()}},(0,o.h)("glue-badge",{dot:n,content:r,class:"glue-tabbar-item__icon"},this.renderIcon()),(0,o.h)("div",{class:"glue-tabbar-item__text"},this.gtitle))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.g)(this)},enumerable:!1,configurable:!0}),t}();h.style=f},74689:function(t,e,n){n.r(e),n.d(e,{c:function(){return r}});n(29045);function o(t,e,n){return n={path:e,exports:{},require:function(t,e){return i()}},t(n,n.exports),n.exports}function i(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var r=o((function(t){
/*!
      Copyright (c) 2018 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
(function(){var e={}.hasOwnProperty;function n(){for(var t=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var r=typeof i;if("string"===r||"number"===r)t.push(i);else if(Array.isArray(i)){if(i.length){var l=n.apply(null,i);l&&t.push(l)}}else if("object"===r){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){t.push(i.toString());continue}for(var a in i)e.call(i,a)&&i[a]&&t.push(a)}}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()}))}}]);