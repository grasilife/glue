(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cbe55"],{"4c2b":function(t,C,s){"use strict";s.r(C);var E=function(){var t=this,C=t.$createElement,s=t._self._c||C;return s("section",[s("div",{domProps:{innerHTML:t._s(t.content)}})])},a=[],e=(s("8f0b"),s("33ef"),s("868d"),s("fa8c"),unescape("%3Ch1%3EPagination%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22install%22%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20createApp%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Pagination%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20app%20%3D%20createApp%28%29%3B%0Aapp.use%28Pagination%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22usage%22%3EUsage%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22basic-usage%22%3EBasic%20Usage%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-pagination%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BcurrentPage%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Atotal-items%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B24%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aitems-per-page%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B5%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20currentPage%20%3D%20ref%28%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%20currentPage%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22simple-mode%22%3ESimple%20mode%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-pagination%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BcurrentPage%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Apage-count%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B12%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Emode%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bsimple%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22show-ellipses%22%3EShow%20ellipses%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-pagination%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BcurrentPage%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Atotal-items%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B125%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ashow-page-size%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B3%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eforce-ellipses%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22custom-button%22%3ECustom%20Button%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-pagination%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BcurrentPage%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Atotal-items%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B50%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ashow-page-size%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B5%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%20%23%3Cspan%20class%3D%22hljs-attr%22%3Eprev-text%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-icon%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Barrow-left%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%20%23%3Cspan%20class%3D%22hljs-attr%22%3Enext-text%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-icon%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Barrow%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%20%23%3Cspan%20class%3D%22hljs-attr%22%3Epage%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%7B%20text%20%7D%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%7B%7B%20text%20%7D%7D%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-pagination%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ev-model%3C/td%3E%0A%3Ctd%3ECurrent%20page%20number%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emode%3C/td%3E%0A%3Ctd%3EMode%2C%20can%20be%20set%20to%20%3Ccode%3Esimple%3C/code%3E%20%3Ccode%3Emulti%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Emulti%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eprev-text%3C/td%3E%0A%3Ctd%3EPrevious%20text%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EPrevious%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Enext-text%3C/td%3E%0A%3Ctd%3ENext%20text%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENext%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etotal-items%3C/td%3E%0A%3Ctd%3ETotal%20items%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eitems-per-page%3C/td%3E%0A%3Ctd%3EItem%20number%20per%20page%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E10%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Epage-count%3C/td%3E%0A%3Ctd%3EThe%20total%20number%20of%20pages%2C%20if%20not%20set%2C%20will%20be%20calculated%20based%20on%20%3Ccode%3Etotal-items%3C/code%3E%20and%20%3Ccode%3Eitems-per-page%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E-%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-page-size%3C/td%3E%0A%3Ctd%3ECount%20of%20page%20size%20to%20show%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E5%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eforce-ellipses%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20ellipses%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22events%22%3EEvents%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EArguments%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Echange%3C/td%3E%0A%3Ctd%3EEmitted%20when%20current%20page%20changed%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22slots%22%3ESlots%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3ESlotProps%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Epage%3C/td%3E%0A%3Ctd%3ECustom%20pagination%20item%3C/td%3E%0A%3Ctd%3E%3Cem%3E%7B%20number%3A%20number%2C%20text%3A%20string%2C%20active%3A%20boolean%20%7D%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eprev-text%3C/td%3E%0A%3Ctd%3ECustom%20prev%20text%3C/td%3E%0A%3Ctd%3E%3Ccode%3E-%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Enext-text%3C/td%3E%0A%3Ctd%3ECustom%20next%20text%3C/td%3E%0A%3Ctd%3E%3Ccode%3E-%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22less-variables%22%3ELess%20Variables%3C/h3%3E%0A%3Cp%3EHow%20to%20use%3A%20%3Ca%20href%3D%22%23/en-US/theme%22%20target%3D%22_blank%22%3ECustom%20Theme%3C/a%3E.%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EName%3C/th%3E%0A%3Cth%3EDefault%20Value%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E@pagination-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E40px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@pagination-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@font-size-md%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@pagination-item-width%3C/td%3E%0A%3Ctd%3E%3Ccode%3E36px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@pagination-item-default-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@blue%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@pagination-item-disabled-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-7%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@pagination-item-disabled-background-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@background-color%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@pagination-background-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@white%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@pagination-desc-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-7%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@pagination-disabled-opacity%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@disabled-opacity%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")),n={components:{},data:function(){return{content:e}},mounted:function(){var t=this,C=[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5"));C.forEach((function(C){C.addEventListener("click",t.scrollToAnchor)}))},methods:{scrollToAnchor:function(t){t.target.id&&this.$router.push({name:this.$route.name,hash:"#"+t.target.id})}}},d=n,l=s("2be6"),p=Object(l["a"])(d,E,a,!1,null,null,null);C["default"]=p.exports}}]);