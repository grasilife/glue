(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72352cd0"],{"16e8":function(t,e,n){},"7d02":function(t,e,n){"use strict";n("9177")},9177:function(t,e,n){},d7e3:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-home"},[n("h1",{staticClass:"demo-home__title",class:{"demo-home__title--small":t.smallTitle}},[n("img",{attrs:{src:t.config.logo}}),n("span",[t._v(t._s(t.config.title))])]),t.config.description?n("h2",{staticClass:"demo-home__desc"},[t._v(" "+t._s(t.config.description)+" ")]):t._e(),t._l(t.config.nav,(function(e,o){return n("DemoHomeNav",{key:o,attrs:{lang:t.lang,group:e}})}))],2)},s=[],l=n("a49b"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-home-nav"},[n("div",{staticClass:"demo-home-nav__title"},[t._v(t._s(t.group.title))]),n("div",{staticClass:"demo-home-nav__group"},t._l(t.group.items,(function(e){return n("router-link",{key:e.path,staticClass:"demo-home-nav__block",attrs:{to:t.base+"/"+e.path}},[t._v(" "+t._s(e.title)+" "),n("arrow-right",{staticClass:"demo-home-nav__icon"})],1)})),1)])},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{viewBox:"0 0 1024 1024"}},[n("path",{attrs:{fill:"#B6C3D2",d:"M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"}}),n("path",{attrs:{fill:"#B6C3D2",d:"M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"}})])},r=[],u=n("2be6"),m={},g=Object(u["a"])(m,c,r,!1,null,null,null),_=g.exports,h={components:{ArrowRight:_},props:{lang:String,group:Object},data:function(){return{active:[]}},computed:{base:function(){return this.lang?"/".concat(this.lang):""}}},d=h,f=(n("ece7"),Object(u["a"])(d,a,i,!1,null,"3d85f296",null)),p=f.exports,v={components:{DemoHomeNav:p},computed:{lang:function(){var t="zh-CN";return console.log(t,"lang"),t||""},config:function(){var t=l["a"].site.locales;return console.log(t,"locales"),t?(console.log(t[this.lang],"locales[this.lang]"),t[this.lang]):l["a"].site},smallTitle:function(){return this.config.title.length>=8}}},b=v,C=(n("7d02"),Object(u["a"])(b,o,s,!1,null,"196333ee",null));e["default"]=C.exports},ece7:function(t,e,n){"use strict";n("16e8")}}]);