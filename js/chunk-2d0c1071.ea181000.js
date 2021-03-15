(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1071"],{"43fb":function(s,t,a){"use strict";a.r(t);var C=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("div",{domProps:{innerHTML:s._s(s.content)}})])},E=[],n=(a("8f0b"),a("33ef"),a("868d"),a("fa8c"),unescape("%3Ch1%3EPullRefresh%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22install%22%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20createApp%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20PullRefresh%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20app%20%3D%20createApp%28%29%3B%0Aapp.use%28PullRefresh%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22usage%22%3EUsage%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22basic-usage%22%3EBasic%20Usage%3C/h3%3E%0A%3Cp%3EThe%20%3Ccode%3Erefresh%3C/code%3E%20event%20will%20be%20Emitted%20when%20pull%20refresh%2C%20you%20should%20set%20%3Ccode%3Ev-model%3C/code%3E%20to%20%3Ccode%3Efalse%3C/code%3E%20to%20reset%20loading%20status%20after%20process%20refresh%20event.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-pull-refresh%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.loading%26quot%3B%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3Erefresh%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonRefresh%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ep%3C/span%3E%26gt%3B%3C/span%3ERefresh%20Count%3A%20%7B%7B%20state.count%20%7D%7D%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Ep%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-pull-refresh%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20reactive%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Toast%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20state%20%3D%20reactive%28%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecount%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eloading%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%2C%0A%20%20%20%20%7D%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onRefresh%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%29%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-built_in%22%3EsetTimeout%3C/span%3E%28%3Cspan%20class%3D%22hljs-function%22%3E%28%29%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20%20%20%20%20%20%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3BRefresh%20Success%26%23x27%3B%3C/span%3E%29%3B%0A%20%20%20%20%20%20%20%20state.loading%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%3B%0A%20%20%20%20%20%20%20%20state.count++%3B%0A%20%20%20%20%20%20%7D%2C%20%3Cspan%20class%3D%22hljs-number%22%3E1000%3C/span%3E%29%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20state%2C%0A%20%20%20%20%20%20onRefresh%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22success-tip%22%3ESuccess%20Tip%3C/h3%3E%0A%3Cp%3EUse%20%3Ccode%3Esuccess-text%3C/code%3E%20to%20set%20the%20success%20prompt%20after%20the%20refresh%20is%20successful%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-pull-refresh%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BisLoading%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Esuccess-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BRefresh%20success%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Erefresh%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonRefresh%26quot%3B%3C/span%3E%0A%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ep%3C/span%3E%26gt%3B%3C/span%3ERefresh%20Count%3A%20%7B%7B%20count%20%7D%7D%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Ep%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-pull-refresh%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22custom-tips%22%3ECustom%20Tips%3C/h3%3E%0A%3Cp%3EUse%20slots%20to%20custom%20tips.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-pull-refresh%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BisLoading%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ahead-height%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B80%26quot%3B%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3Erefresh%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonRefresh%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%20%23%3Cspan%20class%3D%22hljs-attr%22%3Epulling%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bprops%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eimg%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eclass%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bdoge%26quot%3B%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Esrc%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bhttps%3A//img01.yzcdn.cn/vant/doge.png%26quot%3B%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Astyle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%7B%20transform%3A%20%60scale%28%24%7Bprops.distance%20/%2080%7D%29%60%20%7D%26quot%3B%3C/span%3E%0A%20%20%20%20/%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%20%23%3Cspan%20class%3D%22hljs-attr%22%3Eloosing%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eimg%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eclass%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bdoge%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Esrc%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bhttps%3A//img01.yzcdn.cn/vant/doge.png%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%20%23%3Cspan%20class%3D%22hljs-attr%22%3Eloading%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eimg%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eclass%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bdoge%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Esrc%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bhttps%3A//img01.yzcdn.cn/vant/doge-fire.jpg%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ep%3C/span%3E%26gt%3B%3C/span%3ERefresh%20Count%3A%20%7B%7B%20count%20%7D%7D%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Ep%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-pull-refresh%3C/span%3E%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Estyle%3C/span%3E%26gt%3B%3C/span%3E%3Cspan%20class%3D%22css%22%3E%0A%20%20%3Cspan%20class%3D%22hljs-selector-class%22%3E.doge%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ewidth%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E140px%3C/span%3E%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Eheight%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E72px%3C/span%3E%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Emargin-top%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E8px%3C/span%3E%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Eborder-radius%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E4px%3C/span%3E%3B%0A%20%20%7D%0A%3C/span%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Estyle%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ev-model%3C/td%3E%0A%3Ctd%3ELoading%20status%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Epulling-text%3C/td%3E%0A%3Ctd%3EText%20to%20show%20when%20pulling%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EPull%20to%20refresh...%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eloosing-text%3C/td%3E%0A%3Ctd%3EText%20to%20show%20when%20loosing%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3ELoose%20to%20refresh...%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eloading-text%3C/td%3E%0A%3Ctd%3EText%20to%20show%20when%20loading%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3ELoading...%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esuccess-text%3C/td%3E%0A%3Ctd%3EText%20to%20show%20when%20loading%20success%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esuccess-duration%3C/td%3E%0A%3Ctd%3ESuccess%20text%20display%20duration%28ms%29%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E500%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eanimation-duration%3C/td%3E%0A%3Ctd%3EAnimation%20duration%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E300%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ehead-height%3C/td%3E%0A%3Ctd%3EHeight%20of%20head%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E50%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisabled%3C/td%3E%0A%3Ctd%3EWhether%20to%20disable%20pull%20refresh%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22events%22%3EEvents%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EParameters%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Erefresh%3C/td%3E%0A%3Ctd%3EEmitted%20after%20pulling%20refresh%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22slots%22%3ESlots%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3ESlotProps%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Edefault%3C/td%3E%0A%3Ctd%3EDefault%20slot%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Enormal%3C/td%3E%0A%3Ctd%3EContent%20of%20head%20when%20at%20normal%20status%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Epulling%3C/td%3E%0A%3Ctd%3EContent%20of%20head%20when%20at%20pulling%3C/td%3E%0A%3Ctd%3E%7B%20distance%20%7D%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eloosing%3C/td%3E%0A%3Ctd%3EContent%20of%20head%20when%20at%20loosing%3C/td%3E%0A%3Ctd%3E%7B%20distance%20%7D%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eloading%3C/td%3E%0A%3Ctd%3EContent%20of%20head%20when%20at%20loading%3C/td%3E%0A%3Ctd%3E%7B%20distance%20%7D%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esuccess%3C/td%3E%0A%3Ctd%3EContent%20of%20head%20when%20succeed%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22less-variables%22%3ELess%20Variables%3C/h3%3E%0A%3Cp%3EHow%20to%20use%3A%20%3Ca%20href%3D%22%23/en-US/theme%22%20target%3D%22_blank%22%3ECustom%20Theme%3C/a%3E.%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDefault%20Value%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E@pull-refresh-head-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E50px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@pull-refresh-head-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@font-size-md%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@pull-refresh-head-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-6%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")),l={components:{},data:function(){return{content:n}},mounted:function(){var s=this,t=[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5"));t.forEach((function(t){t.addEventListener("click",s.scrollToAnchor)}))},methods:{scrollToAnchor:function(s){s.target.id&&this.$router.push({name:this.$route.name,hash:"#"+s.target.id})}}},e=l,p=a("2be6"),d=Object(p["a"])(e,C,E,!1,null,null,null);t["default"]=d.exports}}]);