(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2df94b7a"],{"1a88":function(t,e,o){},"2a61":function(t,e,o){"use strict";o("9056")},9056:function(t,e,o){},d7e3:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"demo-home"},[o("h1",{staticClass:"demo-home__title",class:{"demo-home__title--small":t.smallTitle}},[o("img",{attrs:{src:t.config.logo}}),o("span",[t._v(t._s(t.config.title))])]),t.config.description?o("h2",{staticClass:"demo-home__desc"},[t._v(" "+t._s(t.config.description)+" ")]):t._e(),t._l(t.config.nav,(function(e,n){return o("DemoHomeNav",{key:n,attrs:{lang:t.lang,type:t.type,group:e}})}))],2)},s=[],a=o("a49b"),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"demo-home-nav"},[o("div",{staticClass:"demo-home-nav__title"},[t._v(t._s(t.group.title))]),o("div",{staticClass:"demo-home-nav__group"},t._l(t.group.items,(function(e){return o("router-link",{key:e.path,staticClass:"demo-home-nav__block",attrs:{to:t.base+"/"+e.path}},[t._v(" "+t._s(e.title)+" "),o("arrow-right",{staticClass:"demo-home-nav__icon"})],1)})),1)])},i=[],c=(o("d86f"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{viewBox:"0 0 1024 1024"}},[o("path",{attrs:{fill:"#B6C3D2",d:"M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"}}),o("path",{attrs:{fill:"#B6C3D2",d:"M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"}})])}),r=[],u=o("2be6"),h={},g=Object(u["a"])(h,c,r,!1,null,null,null),m=g.exports,p={components:{ArrowRight:m},props:{lang:String,type:String,group:Object},data:function(){return{active:[]}},computed:{base:function(){return console.log(this.type,this.lang,"ahuhauhuahu"),"/".concat(this.type,"/").concat(this.lang)}}},d=p,f=(o("ddc8"),Object(u["a"])(d,l,i,!1,null,"e12e7c96",null)),_=f.exports,v={components:{DemoHomeNav:_},computed:{lang:function(){var t="zh-CN";return console.log(t,"lang"),t||""},type:function(){var t=this.$route.meta.type;return console.log(this.$route,"this.$routethis.$routethis.$route222"),console.log(t,"type"),t||"Vue2"},config:function(){var t=a["a"].site.locales;return console.log(t,"locales"),t?(console.log(t[this.lang],"locales[this.lang]"),t[this.lang]):a["a"].site},smallTitle:function(){return this.config.title.length>=8}}},b=v,C=(o("2a61"),Object(u["a"])(b,n,s,!1,null,"56663def",null));e["default"]=C.exports},ddc8:function(t,e,o){"use strict";o("1a88")}}]);