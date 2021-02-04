(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba157"],{3664:function(s,a,n){"use strict";n.r(a);var t=function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("section",[n("div",{domProps:{innerHTML:s._s(s.content)}})])},l=[],p=(n("8f0b"),n("33ef"),n("868d"),n("fa8c"),unescape("%3Ch1%3EQuickstart%3C/h1%3E%0A%3Ch2%20id%3D%22install%22%3EInstall%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22npm%22%3Enpm%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-bash%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%23%20Install%20Vant%202%20for%20Vue%202%20project%3C/span%3E%0Anpm%20i%20vant%20-S%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%23%20Install%20Vant%203%20for%20Vue%203%20project%3C/span%3E%0Anpm%20i%20vant@next%20-S%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22cdn%22%3ECDN%3C/h3%3E%0A%3Cp%3EThe%20easiest%20way%20to%20use%20Vant%20is%20to%20include%20a%20CDN%20link%20in%20the%20html%20file%2C%20after%20which%20you%20can%20access%20all%20components%20via%20the%20global%20variable%20%3Ccode%3Evant%3C/code%3E.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20import%20style%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Elink%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Erel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstylesheet%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ehref%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bhttps%3A//cdn.jsdelivr.net/npm/vant@next/lib/index.css%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20import%20script%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Escript%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Esrc%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bhttps%3A//cdn.jsdelivr.net/npm/vue@next%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Escript%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Escript%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Esrc%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bhttps%3A//cdn.jsdelivr.net/npm/vant@next/lib/vant.min.js%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Escript%3C/span%3E%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Escript%3C/span%3E%26gt%3B%3C/span%3E%3Cspan%20class%3D%22javascript%22%3E%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20Render%20the%20Button%20component%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20app%20%3D%20Vue.createApp%28%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etemplate%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%60%26lt%3Bvan-button%26gt%3BButton%26lt%3B/van-button%26gt%3B%60%3C/span%3E%2C%0A%20%20%7D%29%3B%0A%20%20app.use%28vant%29%3B%0A%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20Register%20Lazyload%20directive%3C/span%3E%0A%20%20app.use%28vant.Lazyload%29%3B%0A%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20Call%20function%20component%3C/span%3E%0A%20%20vant.Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3BMessage%26%23x27%3B%3C/span%3E%29%3B%0A%0A%20%20app.mount%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%23app%26%23x27%3B%3C/span%3E%29%3B%0A%3C/span%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Escript%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22cli%22%3ECLI%3C/h3%3E%0A%3Cp%3EWe%20recommend%20to%20use%20%3Ca%20href%3D%22https%3A//cli.vuejs.org/%22%20target%3D%22_blank%22%3EVue%20Cli%3C/a%3E%20to%20create%20a%20new%20project.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-bash%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%23%20Install%20Vue%20Cli%3C/span%3E%0Anpm%20install%20-g%20@vue/cli%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%23%20Create%20a%20project%3C/span%3E%0Avue%20create%20hello-world%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%23%20Open%20GUI%3C/span%3E%0Avue%20ui%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cimg%20src%3D%22https%3A//img01.yzcdn.cn/vant/vue-cli-demo-201809030812.png%22%20alt%3D%22%22%3E%3C/p%3E%0A%3Cp%3EIn%20the%20GUI%2C%20click%20on%20%27Dependencies%27%20-%26gt%3B%20%3Ccode%3EInstall%20Dependencies%3C/code%3E%20and%20add%20%3Ccode%3Evant%3C/code%3E%20to%20the%20dependencies.%3C/p%3E%0A%3C/div%3E%3Ch2%20id%3D%22usage%22%3EUsage%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%221.-import-on-demand%22%3E1.%20Import%20on%20demand%3C/h3%3E%0A%3Cp%3EUse%20%3Ca%20href%3D%22https%3A//github.com/ant-design/babel-plugin-import%22%20target%3D%22_blank%22%3Ebabel-plugin-import%3C/a%3E%20to%20import%20components%20on%20demand.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-bash%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%23%20Install%20plugin%3C/span%3E%0Anpm%20i%20babel-plugin-import%20-D%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E//%20set%20babel%20config%20in%20.babelrc%20or%20babel-loader%3C/span%3E%0A%3Cspan%20class%3D%22hljs-comment%22%3E//%20Note%3A%20Don%26%23x27%3Bt%20set%20libraryDirectory%20if%20you%20are%20using%20webpack%201.%3C/span%3E%0A%7B%0A%20%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bplugins%26quot%3B%3C/span%3E%3A%20%5B%0A%20%20%20%20%5B%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bimport%26quot%3B%3C/span%3E%2C%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BlibraryName%26quot%3B%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvant%26quot%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BlibraryDirectory%26quot%3B%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bes%26quot%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstyle%26quot%3B%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%0A%20%20%20%20%7D%5D%0A%20%20%5D%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E//%20For%20users%20who%20use%20babel7%2C%20that%20can%20be%20configured%20in%20babel.config.js%3C/span%3E%0A%3Cspan%20class%3D%22hljs-built_in%22%3Emodule%3C/span%3E.exports%20%3D%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplugins%3C/span%3E%3A%20%5B%0A%20%20%20%20%5B%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bimport%26%23x27%3B%3C/span%3E%2C%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3ElibraryName%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3ElibraryDirectory%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bes%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Estyle%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%0A%20%20%20%20%7D%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%5D%0A%20%20%5D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E//%20Then%20you%20can%20import%20components%20from%20vant%3C/span%3E%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Button%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%3B%0A%3C/code%3E%3C/pre%3E%0A%3Cblockquote%3E%0A%3Cp%3EIf%20you%20are%20using%20TypeScript%uFF0Cplease%20use%20%3Ca%20href%3D%22https%3A//github.com/Brooooooklyn/ts-import-plugin%22%20target%3D%22_blank%22%3Ets-import-plugin%3C/a%3E%20instead.%3C/p%3E%0A%3C/blockquote%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%222.-manually-import%22%3E2.%20Manually%20import%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20Button%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant/lib/button%26%23x27%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant/lib/button/style%26%23x27%3B%3C/span%3E%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%223.-import-all-components%22%3E3.%20Import%20all%20components%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20createApp%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20Vant%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant/lib/index.css%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20app%20%3D%20createApp%28%29%3B%0Aapp.use%28Vant%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Cblockquote%3E%0A%3Cp%3EIf%20you%20configured%20babel-plugin-import%2C%20you%20won%27t%20be%20allowed%20to%20import%20all%20components.%3C/p%3E%0A%3C/blockquote%3E%0A%3C/div%3E")),e={components:{},data:function(){return{content:p}},mounted:function(){var s=this,a=[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5"));a.forEach((function(a){a.addEventListener("click",s.scrollToAnchor)}))},methods:{scrollToAnchor:function(s){s.target.id&&this.$router.push({name:this.$route.name,hash:"#"+s.target.id})}}},C=e,E=n("2be6"),c=Object(E["a"])(C,t,l,!1,null,null,null);a["default"]=c.exports}}]);