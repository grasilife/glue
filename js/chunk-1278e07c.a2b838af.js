(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1278e07c","chunk-2d0f1139","chunk-2d229db8","chunk-2d21046b"],{3462:function(e,t,n){"use strict";n.r(t),n.d(t,"glue_list",(function(){return a}));n("ef1f"),n("d6de"),n("8d0f"),n("68b8"),n("f3b8"),n("918c"),n("f38f");var r=n("2964"),i=n("dede"),o=n("b6cd"),c=n("9ea8"),l=function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function c(e){try{u(r.next(e))}catch(e){o(e)}}function l(e){try{u(r["throw"](e))}catch(e){o(e)}}function u(e){e.done?n(e.value):i(e.value).then(c,l)}u((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,i,o,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(c)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,r=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(i=c.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){c.label=o[1];break}if(6===o[0]&&c.label<i[1]){c.label=i[1],i=o;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(o);break}i[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},s=".glue-list{display:block}.glue-list__loading,.glue-list__finished-text,.glue-list__error-text{color:#969799;font-size:14px;line-height:50px;text-align:center}.glue-list__placeholder{height:0;pointer-events:none}",a=function(){function e(e){var t=this;Object(r["r"])(this,e),this.glueLoad=Object(r["c"])(this,"glueLoad",7),this.glueUpdateLoad=Object(r["c"])(this,"glueUpdateLoad",7),this.glueUpdateError=Object(r["c"])(this,"glueUpdateError",7),this.error=!1,this.loading=!1,this.finished=!1,this.loadingText="加载中...",this.offset=300,this.direction="down",this.immediateCheck=!0,this._check=function(){if(console.log(t.root,t.placeholder,"ahgfyaufbabuf"),console.log(t.loading,t.finished,t.error,"this.loading"),!(t.loading||t.finished||t.error)){var e=t,n=e.offset,r=e.direction,l=Object(o["u"])(t.el),u=Object(i["u"])(l);if(!u.height||Object(c["i"])(t.root))return!1;var s=!1,a=Object(i["u"])(t.placeholder);console.log(u,a,r,"scrollParentRect"),console.log(a.bottom,u.bottom,a.bottom-u.bottom,"坐标"),s="up"===r?u.top-a.top<=n:a.bottom-u.bottom<=n,console.log(s,"isReachEdge"),s&&(t.loading=!0,t.glueUpdateLoad.emit(t.loading),t.glueLoad.emit())}},this.clickErrorTextHandle=function(){t.error=!1,t.glueUpdateError.emit(t.error),t._check()},this.renderErrorText=function(){if(console.log(t.error,t.loading,"this.error"),t.error){if("#slot"==t.errorText)return Object(r["h"])("slot",{name:"error-text"});var e=t.errorText;if(e)return Object(r["h"])("div",{class:"glue-list__error-text",onClick:t.clickErrorTextHandle},e)}},this.renderLoading=function(){if(t.loading&&!t.finished)return"#slot"==t.loadingText?Object(r["h"])("slot",{name:"loading-text"}):Object(r["h"])("div",{class:"glue-list__loading"},Object(r["h"])("glue-loading",{size:16,text:t.loadingText}))},this.renderDirection=function(){return"down"===t.direction?Object(r["h"])("slot",null):Object(r["h"])("div",{ref:function(e){return t.placeholder=e},class:"glue-list__placeholder"})},this.renderFinishedText=function(){if(t.finished){if("#slot"==t.finishedText)return Object(r["h"])("slot",{name:"finished-text"});var e=t.finishedText;if(e)return Object(r["h"])("div",{class:"glue-list__finished-text"},e)}}}return e.prototype.loadingHandle=function(){this._check()},e.prototype.finishedHandle=function(){this._check()},e.prototype.errorHandle=function(){this._check()},e.prototype.check=function(){return l(this,void 0,void 0,(function(){return u(this,(function(e){return this._check(),[2]}))}))},e.prototype.componentDidLoad=function(){var e=Object(o["u"])(this.el);e.addEventListener("scroll",this._check,{passive:!0}),this.immediateCheck&&this._check()},e.prototype.disconnectedCallback=function(){var e=Object(o["u"])(this.el);e.removeEventListener("scroll",this._check),this.loading=!this.loading},e.prototype.render=function(){var e=this,t=Object(r["h"])("slot",null),n=Object(r["h"])("div",{ref:function(t){return e.placeholder=t},class:"glue-list__placeholder"});return Object(r["h"])(r["H"],{ref:function(t){return e.root=t},role:"feed",class:"glue-list","aria-busy":this.loading},"down"===this.direction?t:n,this.renderLoading(),this.renderFinishedText(),this.renderErrorText(),"up"===this.direction?t:n)},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r["g"])(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{loading:["loadingHandle"],finished:["finishedHandle"],error:["errorHandle"]}},enumerable:!1,configurable:!0}),e}();a.style=s},"9ea8":function(e,t,n){"use strict";function r(e){if(!e)return!1;var t=window.getComputedStyle(e),n="none"===t.display,r=null===e.offsetParent&&"fixed"!==t.position;return n||r}n.r(t),n.d(t,"i",(function(){return r}))},b6cd:function(e,t,n){"use strict";n.r(t),n.d(t,"u",(function(){return c}));n("2aa5"),n("dee9");var r=/scroll|auto/i;function i(e){var t=1;return"HTML"!==e.tagName&&"BODY"!==e.tagName&&e.nodeType===t}function o(e,t){void 0===t&&(t=window);var n=e;while(n&&n!==t&&i(n)){var o=window.getComputedStyle(n).overflowY;if(r.test(o))return n;n=n.parentNode}return t}function c(e,t){void 0===t&&(t=window);var n=o(e,t);return n}},dede:function(e,t,n){"use strict";function r(e){return e===window}n.r(t),n.d(t,"u",(function(){return i}));var i=function(e){if(r(e)){var t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}return e&&e.getBoundingClientRect?e.getBoundingClientRect():{top:0,left:0,right:0,bottom:0,width:0,height:0}}}}]);