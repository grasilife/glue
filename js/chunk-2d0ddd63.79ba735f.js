(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddd63"],{"82a4":function(s,E,C){"use strict";C.r(E);var a=function(){var s=this,E=s.$createElement,C=s._self._c||E;return C("section",[C("div",{domProps:{innerHTML:s._s(s.content)}})])},u=[],t=(C("8f0b"),C("33ef"),C("868d"),C("fa8c"),unescape("%3Ch1%3EPasswordInput%20%u5BC6%u7801%u8F93%u5165%u6846%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22jie-shao%22%3E%u4ECB%u7ECD%3C/h3%3E%0A%3Cp%3E%u5E26%u7F51%u683C%u7684%u8F93%u5165%u6846%u7EC4%u4EF6%uFF0C%u53EF%u4EE5%u7528%u4E8E%u8F93%u5165%u5BC6%u7801%u3001%u77ED%u4FE1%u9A8C%u8BC1%u7801%u7B49%u573A%u666F%uFF0C%u901A%u5E38%u4E0E%3Ca%20href%3D%22%23/zh-CN/number-keyboard%22%20target%3D%22_blank%22%3E%u6570%u5B57%u952E%u76D8%3C/a%3E%u7EC4%u4EF6%u914D%u5408%u4F7F%u7528%u3002%3C/p%3E%0A%3C/div%3E%3Ch2%20id%3D%22dai-ma-yan-shi%22%3E%u4EE3%u7801%u6F14%u793A%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22ji-chu-yong-fa%22%3E%u57FA%u7840%u7528%u6CD5%3C/h3%3E%0A%3Cp%3E%u642D%u914D%u6570%u5B57%u952E%u76D8%u7EC4%u4EF6%u6765%u5B9E%u73B0%u5BC6%u7801%u8F93%u5165%u529F%u80FD%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20%u5BC6%u7801%u8F93%u5165%u6846%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-password-input%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Avalue%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Afocused%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowKeyboard%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Efocus%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowKeyboard%20%3D%20true%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20%u6570%u5B57%u952E%u76D8%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-number-keyboard%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ashow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowKeyboard%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eblur%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowKeyboard%20%3D%20false%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20value%20%3D%20ref%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B123%26%23x27%3B%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20showKeyboard%20%3D%20ref%28%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%29%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20value%2C%0A%20%20%20%20%20%20showKeyboard%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22zi-ding-yi-chang-du%22%3E%u81EA%u5B9A%u4E49%u957F%u5EA6%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%20%3Ccode%3Elength%3C/code%3E%20%u5C5E%u6027%u6765%u8BBE%u7F6E%u5BC6%u7801%u957F%u5EA6%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-password-input%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Avalue%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Alength%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B4%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Afocused%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowKeyboard%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Efocus%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowKeyboard%20%3D%20true%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22ge-zi-jian-ju%22%3E%u683C%u5B50%u95F4%u8DDD%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%20%3Ccode%3Egutter%3C/code%3E%20%u5C5E%u6027%u6765%u8BBE%u7F6E%u683C%u5B50%u4E4B%u95F4%u7684%u95F4%u8DDD%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-password-input%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Avalue%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Agutter%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B10%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Afocused%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowKeyboard%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Efocus%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowKeyboard%20%3D%20true%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22ming-wen-zhan-shi%22%3E%u660E%u6587%u5C55%u793A%3C/h3%3E%0A%3Cp%3E%u5C06%20%3Ccode%3Emask%3C/code%3E%20%u8BBE%u7F6E%u4E3A%20%3Ccode%3Efalse%3C/code%3E%20%u53EF%u4EE5%u660E%u6587%u5C55%u793A%u8F93%u5165%u7684%u5185%u5BB9%uFF0C%u9002%u7528%u4E8E%u77ED%u4FE1%u9A8C%u8BC1%u7801%u7B49%u573A%u666F%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-password-input%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Avalue%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Amask%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bfalse%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Afocused%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowKeyboard%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Efocus%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowKeyboard%20%3D%20true%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22ti-shi-xin-xi%22%3E%u63D0%u793A%u4FE1%u606F%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%20%3Ccode%3Einfo%3C/code%3E%20%u5C5E%u6027%u8BBE%u7F6E%u63D0%u793A%u4FE1%u606F%uFF0C%u901A%u8FC7%20%3Ccode%3Eerror-info%3C/code%3E%20%u5C5E%u6027%u8BBE%u7F6E%u9519%u8BEF%u63D0%u793A%uFF0C%u4F8B%u5982%u5F53%u8F93%u5165%u516D%u4F4D%u65F6%u63D0%u793A%u5BC6%u7801%u9519%u8BEF%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-password-input%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Avalue%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Einfo%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u5BC6%u7801%u4E3A%206%20%u4F4D%u6570%u5B57%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aerror-info%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BerrorInfo%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Afocused%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowKeyboard%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Efocus%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowKeyboard%20%3D%20true%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-number-keyboard%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ashow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowKeyboard%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eblur%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowKeyboard%20%3D%20false%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%2C%20watch%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20value%20%3D%20ref%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B123%26%23x27%3B%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20errorInfo%20%3D%20ref%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%26%23x27%3B%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20showKeyboard%20%3D%20ref%28%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%29%3B%0A%0A%20%20%20%20watch%28value%2C%20%3Cspan%20class%3D%22hljs-function%22%3E%28%3Cspan%20class%3D%22hljs-params%22%3EnewVal%3C/span%3E%29%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C/span%3E%20%28newVal.length%20%3D%3D%3D%20%3Cspan%20class%3D%22hljs-number%22%3E6%3C/span%3E%20%26amp%3B%26amp%3B%20newVal%20%21%3D%3D%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B123456%26%23x27%3B%3C/span%3E%29%20%7B%0A%20%20%20%20%20%20%20%20errorInfo.value%20%3D%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u5BC6%u7801%u9519%u8BEF%26%23x27%3B%3C/span%3E%3B%0A%20%20%20%20%20%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Eelse%3C/span%3E%20%7B%0A%20%20%20%20%20%20%20%20errorInfo.value%20%3D%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%26%23x27%3B%3C/span%3E%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%29%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20value%2C%0A%20%20%20%20%20%20errorInfo%2C%0A%20%20%20%20%20%20showKeyboard%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Evalue%3C/td%3E%0A%3Ctd%3E%u5BC6%u7801%u503C%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%27%27%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Einfo%3C/td%3E%0A%3Ctd%3E%u8F93%u5165%u6846%u4E0B%u65B9%u6587%u5B57%u63D0%u793A%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eerror-info%3C/td%3E%0A%3Ctd%3E%u8F93%u5165%u6846%u4E0B%u65B9%u9519%u8BEF%u63D0%u793A%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Elength%3C/td%3E%0A%3Ctd%3E%u5BC6%u7801%u6700%u5927%u957F%u5EA6%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E6%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Egutter%3C/td%3E%0A%3Ctd%3E%u8F93%u5165%u6846%u683C%u5B50%u4E4B%u95F4%u7684%u95F4%u8DDD%uFF0C%u5982%20%3Ccode%3E20px%3C/code%3E%20%3Ccode%3E2em%3C/code%3E%uFF0C%u9ED8%u8BA4%u5355%u4F4D%u4E3A%3Ccode%3Epx%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emask%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u9690%u85CF%u5BC6%u7801%u5185%u5BB9%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Efocused%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5DF2%u805A%u7126%uFF0C%u805A%u7126%u65F6%u4F1A%u663E%u793A%u5149%u6807%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22events%22%3EEvents%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u56DE%u8C03%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Efocus%3C/td%3E%0A%3Ctd%3E%u8F93%u5165%u6846%u805A%u7126%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yang-shi-bian-liang%22%3E%u6837%u5F0F%u53D8%u91CF%3C/h3%3E%0A%3Cp%3E%u7EC4%u4EF6%u63D0%u4F9B%u4E86%u4E0B%u5217%20Less%20%u53D8%u91CF%uFF0C%u53EF%u7528%u4E8E%u81EA%u5B9A%u4E49%u6837%u5F0F%uFF0C%u4F7F%u7528%u65B9%u6CD5%u8BF7%u53C2%u8003%3Ca%20href%3D%22%23/zh-CN/theme%22%20target%3D%22_blank%22%3E%u4E3B%u9898%u5B9A%u5236%3C/a%3E%u3002%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u63CF%u8FF0%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E@password-input-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E50px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@password-input-margin%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%20@padding-md%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@password-input-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E20px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@password-input-border-radius%3C/td%3E%0A%3Ctd%3E%3Ccode%3E6px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@password-input-background-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@white%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@password-input-info-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-6%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@password-input-info-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@font-size-md%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@password-input-error-info-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@red%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@password-input-dot-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E10px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@password-input-dot-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@black%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")),n={components:{},data:function(){return{content:t}},mounted:function(){var s=this,E=[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5"));E.forEach((function(E){E.addEventListener("click",s.scrollToAnchor)}))},methods:{scrollToAnchor:function(s){s.target.id&&this.$router.push({name:this.$route.name,hash:"#"+s.target.id})}}},d=n,l=C("2be6"),e=Object(l["a"])(d,a,u,!1,null,null,null);E["default"]=e.exports}}]);