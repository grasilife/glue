(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4aee"],{"90ef":function(s,E,C){"use strict";C.r(E);var a=function(){var s=this,E=s.$createElement,C=s._self._c||E;return C("section",[C("div",{domProps:{innerHTML:s._s(s.content)}})])},t=[],n=(C("8f0b"),C("33ef"),C("868d"),C("fa8c"),unescape("%3Ch1%3ESlider%20%u6ED1%u5757%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22jie-shao%22%3E%u4ECB%u7ECD%3C/h3%3E%0A%3Cp%3E%u6ED1%u52A8%u8F93%u5165%u6761%uFF0C%u7528%u4E8E%u5728%u7ED9%u5B9A%u7684%u8303%u56F4%u5185%u9009%u62E9%u4E00%u4E2A%u503C%u3002%3C/p%3E%0A%3C/div%3E%3Ch2%20id%3D%22dai-ma-yan-shi%22%3E%u4EE3%u7801%u6F14%u793A%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22ji-chu-yong-fa%22%3E%u57FA%u7840%u7528%u6CD5%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-slider%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3Echange%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonChange%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Toast%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20value%20%3D%20ref%28%3Cspan%20class%3D%22hljs-number%22%3E50%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onChange%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%3Cspan%20class%3D%22hljs-params%22%3Evalue%3C/span%3E%29%20%3D%26gt%3B%3C/span%3E%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u5F53%u524D%u503C%uFF1A%26%23x27%3B%3C/span%3E%20+%20value%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20value%2C%0A%20%20%20%20%20%20onChange%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22shuang-hua-kuai%22%3E%u53CC%u6ED1%u5757%3C/h3%3E%0A%3Cp%3E%u6DFB%u52A0%20%3Ccode%3Erange%3C/code%3E%20%u5C5E%u6027%u5C31%u53EF%u4EE5%u5F00%u542F%u53CC%u6ED1%u5757%u6A21%u5F0F%uFF0C%u786E%u4FDD%20%3Ccode%3Evalue%3C/code%3E%20%u7684%u503C%u662F%u4E00%u4E2A%u6570%u7EC4%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-slider%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Erange%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3Echange%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonChange%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Toast%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u53CC%u6ED1%u5757%u6A21%u5F0F%u65F6%uFF0C%u503C%u5FC5%u987B%u662F%u6570%u7EC4%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20value%20%3D%20ref%28%5B%3Cspan%20class%3D%22hljs-number%22%3E10%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E50%3C/span%3E%5D%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onChange%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%3Cspan%20class%3D%22hljs-params%22%3Evalue%3C/span%3E%29%20%3D%26gt%3B%3C/span%3E%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u5F53%u524D%u503C%uFF1A%26%23x27%3B%3C/span%3E%20+%20value%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20value%2C%0A%20%20%20%20%20%20onChange%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22zhi-ding-xuan-ze-fan-wei%22%3E%u6307%u5B9A%u9009%u62E9%u8303%u56F4%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-slider%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Amin%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B-50%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Amax%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B50%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22jin-yong%22%3E%u7981%u7528%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-slider%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Edisabled%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22zhi-ding-bu-chang%22%3E%u6307%u5B9A%u6B65%u957F%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-slider%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Astep%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B10%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22zi-ding-yi-yang-shi%22%3E%u81EA%u5B9A%u4E49%u6837%u5F0F%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-slider%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ebar-height%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B4px%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eactive-color%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%23ee0a24%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22zi-ding-yi-an-niu%22%3E%u81EA%u5B9A%u4E49%u6309%u94AE%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-slider%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eactive-color%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%23ee0a24%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%20%23%3Cspan%20class%3D%22hljs-attr%22%3Ebutton%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ediv%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eclass%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bcustom-button%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%7B%7B%20value%20%7D%7D%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Ediv%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-slider%3C/span%3E%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Estyle%3C/span%3E%26gt%3B%3C/span%3E%3Cspan%20class%3D%22css%22%3E%0A%20%20%3Cspan%20class%3D%22hljs-selector-class%22%3E.custom-button%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ewidth%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E26px%3C/span%3E%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ecolor%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E%23fff%3C/span%3E%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Efont-size%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E10px%3C/span%3E%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Eline-height%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E18px%3C/span%3E%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Etext-align%3C/span%3E%3A%20center%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ebackground-color%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E%23ee0a24%3C/span%3E%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Eborder-radius%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E100px%3C/span%3E%3B%0A%20%20%7D%0A%3C/span%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Estyle%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22chui-zhi-fang-xiang%22%3E%u5782%u76F4%u65B9%u5411%3C/h3%3E%0A%3Cp%3E%u8BBE%u7F6E%20%3Ccode%3Evertical%3C/code%3E%20%u5C5E%u6027%u540E%uFF0C%u6ED1%u5757%u4F1A%u5782%u76F4%u5C55%u793A%uFF0C%u4E14%u9AD8%u5EA6%u4E3A%20100%25%20%u7236%u5143%u7D20%u9AD8%u5EA6%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ediv%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Astyle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%7B%20height%3A%20%26%23x27%3B150px%26%23x27%3B%20%7D%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-slider%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Evertical%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3Echange%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonChange%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-slider%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue2%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Erange%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evertical%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Estyle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bmargin-left%3A%20100px%3B%26quot%3B%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Echange%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonChange%26quot%3B%3C/span%3E%0A%20%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Ediv%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Toast%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20value%20%3D%20ref%28%3Cspan%20class%3D%22hljs-number%22%3E50%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20value2%20%3D%20ref%28%5B%3Cspan%20class%3D%22hljs-number%22%3E10%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E50%3C/span%3E%5D%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onChange%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%3Cspan%20class%3D%22hljs-params%22%3Evalue%3C/span%3E%29%20%3D%26gt%3B%3C/span%3E%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u5F53%u524D%u503C%uFF1A%26%23x27%3B%3C/span%3E%20+%20value%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20value%2C%0A%20%20%20%20%20%20value2%2C%0A%20%20%20%20%20%20onChange%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ev-model%3C/td%3E%0A%3Ctd%3E%u5F53%u524D%u8FDB%u5EA6%u767E%u5206%u6BD4%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20number%5B%5D%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emax%3C/td%3E%0A%3Ctd%3E%u6700%u5927%u503C%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E100%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emin%3C/td%3E%0A%3Ctd%3E%u6700%u5C0F%u503C%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Estep%3C/td%3E%0A%3Ctd%3E%u6B65%u957F%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E1%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebar-height%3C/td%3E%0A%3Ctd%3E%u8FDB%u5EA6%u6761%u9AD8%u5EA6%uFF0C%u9ED8%u8BA4%u5355%u4F4D%u4E3A%3Ccode%3Epx%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E2px%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebutton-size%3C/td%3E%0A%3Ctd%3E%u6ED1%u5757%u6309%u94AE%u5927%u5C0F%uFF0C%u9ED8%u8BA4%u5355%u4F4D%u4E3A%3Ccode%3Epx%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E24px%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eactive-color%3C/td%3E%0A%3Ctd%3E%u8FDB%u5EA6%u6761%u6FC0%u6D3B%u6001%u989C%u8272%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%231989fa%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Einactive-color%3C/td%3E%0A%3Ctd%3E%u8FDB%u5EA6%u6761%u975E%u6FC0%u6D3B%u6001%u989C%u8272%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%23e5e5e5%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Erange%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5F00%u542F%u53CC%u6ED1%u5757%u6A21%u5F0F%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisabled%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u7981%u7528%u6ED1%u5757%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ereadonly%20%3Ccode%3Ev3.0.5%3C/code%3E%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u4E3A%u53EA%u8BFB%u72B6%u6001%uFF0C%u53EA%u8BFB%u72B6%u6001%u4E0B%u65E0%u6CD5%u4FEE%u6539%u6ED1%u5757%u7684%u503C%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Evertical%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5782%u76F4%u5C55%u793A%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22events%22%3EEvents%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u56DE%u8C03%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eupdate%3Amodel-value%3C/td%3E%0A%3Ctd%3E%u8FDB%u5EA6%u53D8%u5316%u65F6%u5B9E%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Evalue%3A%20%u5F53%u524D%u8FDB%u5EA6%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Echange%3C/td%3E%0A%3Ctd%3E%u8FDB%u5EA6%u53D8%u5316%u4E14%u7ED3%u675F%u62D6%u52A8%u540E%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Evalue%3A%20%u5F53%u524D%u8FDB%u5EA6%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edrag-start%3C/td%3E%0A%3Ctd%3E%u5F00%u59CB%u62D6%u52A8%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edrag-end%3C/td%3E%0A%3Ctd%3E%u7ED3%u675F%u62D6%u52A8%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22slots%22%3ESlots%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ebutton%3C/td%3E%0A%3Ctd%3E%u81EA%u5B9A%u4E49%u6ED1%u52A8%u6309%u94AE%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yang-shi-bian-liang%22%3E%u6837%u5F0F%u53D8%u91CF%3C/h3%3E%0A%3Cp%3E%u7EC4%u4EF6%u63D0%u4F9B%u4E86%u4E0B%u5217%20Less%20%u53D8%u91CF%uFF0C%u53EF%u7528%u4E8E%u81EA%u5B9A%u4E49%u6837%u5F0F%uFF0C%u4F7F%u7528%u65B9%u6CD5%u8BF7%u53C2%u8003%3Ca%20href%3D%22%23/zh-CN/theme%22%20target%3D%22_blank%22%3E%u4E3B%u9898%u5B9A%u5236%3C/a%3E%u3002%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u63CF%u8FF0%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E@slider-active-background-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@blue%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@slider-inactive-background-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-3%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@slider-disabled-opacity%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@disabled-opacity%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@slider-bar-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E2px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@slider-button-width%3C/td%3E%0A%3Ctd%3E%3Ccode%3E24px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@slider-button-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E24px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@slider-button-border-radius%3C/td%3E%0A%3Ctd%3E%3Ccode%3E50%25%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@slider-button-background-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@white%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@slider-button-box-shadow%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%201px%202px%20rgba%280%2C%200%2C%200%2C%200.5%29%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")),u={components:{},data:function(){return{content:n}},mounted:function(){var s=this,E=[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5"));E.forEach((function(E){E.addEventListener("click",s.scrollToAnchor)}))},methods:{scrollToAnchor:function(s){s.target.id&&this.$router.push({name:this.$route.name,hash:"#"+s.target.id})}}},l=u,e=C("2be6"),d=Object(e["a"])(l,a,t,!1,null,null,null);E["default"]=d.exports}}]);