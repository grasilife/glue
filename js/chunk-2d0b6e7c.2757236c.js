(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6e7c"],{"1ec5":function(t,C,E){"use strict";E.r(C);var s=function(){var t=this,C=t.$createElement,E=t._self._c||C;return E("section",[E("div",{domProps:{innerHTML:t._s(t.content)}})])},e=[],a=(E("8f0b"),E("33ef"),E("868d"),E("fa8c"),unescape("%3Ch1%3EProgress%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22install%22%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20createApp%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Progress%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20app%20%3D%20createApp%28%29%3B%0Aapp.use%28Progress%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22usage%22%3EUsage%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22basic-usage%22%3EBasic%20Usage%3C/h3%3E%0A%3Cp%3EUse%20%3Ccode%3Epercentage%3C/code%3E%20prop%20to%20set%20current%20progress.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-progress%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Apercentage%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B50%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22stroke-width%22%3EStroke%20Width%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-progress%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Apercentage%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B50%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Estroke-width%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B8%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22inactive%22%3EInactive%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-progress%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Einactive%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Apercentage%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B50%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22custom-style%22%3ECustom%20Style%3C/h3%3E%0A%3Cp%3EUse%20%3Ccode%3Epivot-text%3C/code%3E%20to%20custom%20text%uFF0Cuse%20%3Ccode%3Ecolor%3C/code%3E%20to%20custom%20bar%20color.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-progress%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Epivot-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BOrange%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ecolor%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%23f2826a%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Apercentage%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B25%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-progress%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Epivot-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BRed%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ecolor%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%23ee0a24%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Apercentage%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B50%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-progress%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Apercentage%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B75%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Epivot-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BPurple%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Epivot-color%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%237232dd%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecolor%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Blinear-gradient%28to%20right%2C%20%23be99ff%2C%20%237232dd%29%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Epercentage%3C/td%3E%0A%3Ctd%3EPercentage%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Estroke-width%3C/td%3E%0A%3Ctd%3EStroke%20width%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E4px%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecolor%3C/td%3E%0A%3Ctd%3EColor%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%231989fa%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etrack-color%3C/td%3E%0A%3Ctd%3ETrack%20color%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%23e5e5e5%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Epivot-text%3C/td%3E%0A%3Ctd%3EPivot%20text%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3Epercentage%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Epivot-color%3C/td%3E%0A%3Ctd%3EPivot%20text%20background%20color%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3Einherit%20progress%20color%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etext-color%3C/td%3E%0A%3Ctd%3EPivot%20text%20color%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Ewhite%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Einactive%3C/td%3E%0A%3Ctd%3EWhether%20to%20be%20gray%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-pivot%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20text%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22methods%22%3EMethods%3C/h3%3E%0A%3Cp%3EUse%20%3Ca%20href%3D%22https%3A//vuejs.org/v2/api/%23ref%22%20target%3D%22_blank%22%3Eref%3C/a%3E%20to%20get%20Progress%20instance%20and%20call%20instance%20methods.%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EReturn%20value%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eresize%3C/td%3E%0A%3Ctd%3EResize%20Progress%20when%20container%20element%20resized%20or%20visibility%20changed%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22less-variables%22%3ELess%20Variables%3C/h3%3E%0A%3Cp%3EHow%20to%20use%3A%20%3Ca%20href%3D%22%23/en-US/theme%22%20target%3D%22_blank%22%3ECustom%20Theme%3C/a%3E.%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDefault%20Value%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E@progress-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E4px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@progress-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@blue%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@progress-background-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-3%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@progress-pivot-padding%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%205px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@progress-pivot-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@white%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@progress-pivot-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@font-size-xs%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@progress-pivot-line-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E1.6%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@progress-pivot-background-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@blue%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")),d={components:{},data:function(){return{content:a}},mounted:function(){var t=this,C=[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5"));C.forEach((function(C){C.addEventListener("click",t.scrollToAnchor)}))},methods:{scrollToAnchor:function(t){t.target.id&&this.$router.push({name:this.$route.name,hash:"#"+t.target.id})}}},r=d,o=E("2be6"),n=Object(o["a"])(r,s,e,!1,null,null,null);C["default"]=n.exports}}]);