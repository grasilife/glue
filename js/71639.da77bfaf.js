"use strict";(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[71639,46912,24515],{46912:function(n,t,e){e.r(t),e.d(t,{c:function(){return a},d:function(){return s},i:function(){return o},r:function(){return c}});var o="undefined"!==typeof window,r=globalThis,i=Date.now();function u(n){var t=Date.now(),e=Math.max(0,16-(t-i)),o=setTimeout(n,e);return i=t+e,o}function c(n){var t=r.requestAnimationFrame||u;return t.call(r,n)}function a(n){var t=r.cancelAnimationFrame||r.clearTimeout;t.call(r,n)}function s(n){c((function(){c(n)}))}},71639:function(n,t,e){e.r(t),e.d(t,{glue_count_down:function(){return w}});e(29045);var o=e(83458),r=e(24515),i=e(46912),u=function(n,t,e,o){function r(n){return n instanceof e?n:new e((function(t){t(n)}))}return new(e||(e=Promise))((function(e,i){function u(n){try{a(o.next(n))}catch(n){i(n)}}function c(n){try{a(o["throw"](n))}catch(n){i(n)}}function a(n){n.done?e(n.value):r(n.value).then(u,c)}a((o=o.apply(n,t||[])).next())}))},c=function(n,t){var e,o,r,i,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(n){return function(t){return a([n,t])}}function a(c){if(e)throw new TypeError("Generator is already executing.");while(i&&(i=0,c[0]&&(u=0)),u)try{if(e=1,o&&(r=2&c[0]?o["return"]:c[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,o=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(r=u.trys,!(r=r.length>0&&r[r.length-1])&&(6===c[0]||2===c[0])){u=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){u.label=c[1];break}if(6===c[0]&&u.label<r[1]){u.label=r[1],r=c;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(c);break}r[2]&&u.ops.pop(),u.trys.pop();continue}c=t.call(n,u)}catch(n){c=[6,n],o=0}finally{e=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};function a(n,t){var e=t.days,o=t.hours,i=t.minutes,u=t.seconds,c=t.milliseconds;if(-1===n.indexOf("DD")?o+=24*e:n=n.replace("DD",(0,r.p)(e)),-1===n.indexOf("HH")?i+=60*o:n=n.replace("HH",(0,r.p)(o)),-1===n.indexOf("mm")?u+=60*i:n=n.replace("mm",(0,r.p)(i)),-1===n.indexOf("ss")?c+=1e3*u:n=n.replace("ss",(0,r.p)(u)),-1!==n.indexOf("S")){var a=(0,r.p)(c,3);n=-1!==n.indexOf("SSS")?n.replace("SSS",a):-1!==n.indexOf("SS")?n.replace("SS",a.slice(0,2)):n.replace("S",a.charAt(0))}return n}var s=1e3,l=60*s,f=60*l,h=24*f;function m(n){var t=Math.floor(n/h),e=Math.floor(n%h/f),o=Math.floor(n%f/l),r=Math.floor(n%l/s),i=Math.floor(n%s);return{total:n,days:t,hours:e,minutes:o,seconds:r,milliseconds:i}}function d(n,t){return Math.floor(n/1e3)===Math.floor(t/1e3)}function p(n){var t,e,o,r=n.time,u=function(){return m(r)},c=function(){o=!1,(0,i.c)(t)},a=function(){return Math.max(e-Date.now(),0)},s=function(t){var e;r=t,console.log(r,"remain111"),null===(e=n.onChange)||void 0===e||e.call(n,u()),0===t&&c()},l=function(){t=(0,i.r)((function(){console.log(11111),o&&(s(a()),r>0&&l())}))},f=function(){t=(0,i.r)((function(){if(console.log("开始渲染"),o){var n=a();console.log(n,"remainRemain"),d(n,r)&&0!==n||s(n),r>0&&f()}}))},h=function(){i.i&&(n.millisecond?l():f())},p=function(){e=Date.now()+r,console.log(e,"endTime"),o=!0,h()},v=function(t){void 0===t&&(t=n.time),c(),r=t,s(r),console.log(r,"remainremainremain")};return{start:p,pause:c,reset:v,current:u}}var v=".glue-count-down{color:#323233;font-size:14px;line-height:20px}",w=function(){function n(n){var t=this;(0,o.r)(this,n),this.glueChange=(0,o.c)(this,"glueChange",7),this.glueFinish=(0,o.c)(this,"glueFinish",7),this.useCountDown=function(){var n=t;return p({time:+n.time,millisecond:n.millisecond,onChange:function(t){console.log(t,"current2121"),n.currentTime=t},onFinish:function(){n.glueFinish.emit()}})},this.timeText=function(n){return a(t.format,n)},this.changeHandle=function(n){t.glueChange.emit(n)},this.renderTime=function(){return t.custom?(0,o.h)("slot",null):t.formatCurrentTime},this.millisecond=void 0,this.custom=void 0,this.time=0,this.format="HH:mm:ss",this.autoStart=!1,this.currentTime=void 0,this.formatCurrentTime=void 0,this.countDownVm=void 0}return n.prototype.currentHandle=function(n){console.log(434343),this.formatCurrentTime=this.timeText(n),this.changeHandle({currentTime:this.currentTime,formatCurrentTime:this.formatCurrentTime})},n.prototype.start=function(){return u(this,void 0,void 0,(function(){return c(this,(function(n){return this.countDownVm.start(),[2]}))}))},n.prototype.pause=function(){return u(this,void 0,void 0,(function(){return c(this,(function(n){return this.countDownVm.pause(),[2]}))}))},n.prototype.reset=function(){return u(this,void 0,void 0,(function(){return c(this,(function(n){return this.countDownVm.reset(this.time),this.autoStart&&this.countDownVm.start(),[2]}))}))},n.prototype.componentWillLoad=function(){this.countDownVm=this.useCountDown(),this.currentTime=this.countDownVm.current(),this.autoStart&&this.countDownVm.start()},n.prototype.componentDidLoad=function(){},n.prototype.render=function(){return console.log(this,"hauhauhfu"),(0,o.h)(o.H,{class:"glue-count-down"},this.renderTime())},Object.defineProperty(n,"watchers",{get:function(){return{currentTime:["currentHandle"]}},enumerable:!1,configurable:!0}),n}();w.style=v},24515:function(n,t,e){function o(n,t){void 0===t&&(t=2);var e=n+"";while(e.length<t)e="0"+e;return e}e.r(t),e.d(t,{p:function(){return o}})}}]);