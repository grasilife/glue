(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e55a1"],{"93b3":function(s,C,E){"use strict";E.r(C);var a=function(){var s=this,C=s.$createElement,E=s._self._c||C;return E("section",[E("div",{domProps:{innerHTML:s._s(s.content)}})])},t=[],n=(E("8f0b"),E("33ef"),E("868d"),E("fa8c"),unescape("%3Ch1%3ETreeSelect%20%u5206%u7C7B%u9009%u62E9%3C/h1%3E%0A%3Ch2%20id%3D%22dai-ma-yan-shi%22%3E%u4EE3%u7801%u6F14%u793A%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22dan-xuan-mo-shi%22%3E%u5355%u9009%u6A21%u5F0F%3C/h3%3E%0A%3Cp%3E%3Ccode%3Eitem%3C/code%3E%20%u4E3A%u5206%u7C7B%u663E%u793A%u6240%u9700%u7684%u6570%u636E%uFF0C%u6570%u636E%u683C%u5F0F%u89C1%u4E0B%u65B9%u793A%u4F8B%u3002%3Ccode%3Emain-active-index%3C/code%3E%20%u8868%u793A%u5DE6%u4FA7%u9AD8%u4EAE%u9009%u9879%u7684%u7D22%u5F15%uFF0C%3Ccode%3Eactive-id%3C/code%3E%20%u8868%u793A%u53F3%u4FA7%u9AD8%u4EAE%u9009%u9879%u7684%20id%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-tree-select%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3Aactive-id%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.activeId%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3Amain-active-index%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.activeIndex%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aitems%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bitems%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20reactive%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20state%20%3D%20reactive%28%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EactiveId%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EactiveIndex%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%0A%20%20%20%20%7D%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20items%20%3D%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6D59%u6C5F%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Echildren%3C/span%3E%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u676D%u5DDE%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6E29%u5DDE%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E2%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6C5F%u82CF%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Echildren%3C/span%3E%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u5357%u4EAC%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E5%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u65E0%u9521%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E6%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20state%2C%0A%20%20%20%20%20%20items%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22duo-xuan-mo-shi%22%3E%u591A%u9009%u6A21%u5F0F%3C/h3%3E%0A%3Cp%3E%3Ccode%3Eactive-id%3C/code%3E%20%u4E3A%u6570%u7EC4%u683C%u5F0F%u65F6%uFF0C%u53EF%u4EE5%u9009%u4E2D%u591A%u4E2A%u53F3%u4FA7%u9009%u9879%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-tree-select%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3Aactive-id%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.activeIds%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3Amain-active-index%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bstate.activeIndex%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aitems%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bitems%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20reactive%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20state%20%3D%20reactive%28%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EactiveId%3C/span%3E%3A%20%5B%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E2%3C/span%3E%5D%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EactiveIndex%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%0A%20%20%20%20%7D%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20items%20%3D%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6D59%u6C5F%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Echildren%3C/span%3E%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u676D%u5DDE%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6E29%u5DDE%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E2%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6C5F%u82CF%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Echildren%3C/span%3E%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u5357%u4EAC%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E5%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u65E0%u9521%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E6%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20state%2C%0A%20%20%20%20%20%20items%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22zi-ding-yi-nei-rong%22%3E%u81EA%u5B9A%u4E49%u5185%u5BB9%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%20%3Ccode%3Econtent%3C/code%3E%20%u63D2%u69FD%u53EF%u4EE5%u81EA%u5B9A%u4E49%u53F3%u4FA7%u533A%u57DF%u7684%u5185%u5BB9%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-tree-select%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3Amain-active-index%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BactiveIndex%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eheight%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B55vw%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aitems%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bitems%26quot%3B%3C/span%3E%0A%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%20%23%3Cspan%20class%3D%22hljs-attr%22%3Econtent%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-image%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-if%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BactiveIndex%20%3D%3D%3D%200%26quot%3B%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Esrc%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bhttps%3A//img01.yzcdn.cn/vant/apple-1.jpg%26quot%3B%3C/span%3E%0A%20%20%20%20/%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-image%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-if%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BactiveIndex%20%3D%3D%3D%201%26quot%3B%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Esrc%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bhttps%3A//img01.yzcdn.cn/vant/apple-2.jpg%26quot%3B%3C/span%3E%0A%20%20%20%20/%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-tree-select%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20activeIndex%20%3D%20ref%28%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20activeIndex%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eitems%3C/span%3E%3A%20%5B%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u5206%u7EC4%201%26%23x27%3B%3C/span%3E%20%7D%2C%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u5206%u7EC4%202%26%23x27%3B%3C/span%3E%20%7D%5D%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22hui-biao-ti-shi%22%3E%u5FBD%u6807%u63D0%u793A%3C/h3%3E%0A%3Cp%3E%u8BBE%u7F6E%20%3Ccode%3Edot%3C/code%3E%20%u5C5E%u6027%u540E%uFF0C%u4F1A%u5728%u56FE%u6807%u53F3%u4E0A%u89D2%u5C55%u793A%u4E00%u4E2A%u5C0F%u7EA2%u70B9%uFF1B%u8BBE%u7F6E%20%3Ccode%3Ebadge%3C/code%3E%20%u5C5E%u6027%u540E%uFF0C%u4F1A%u5728%u56FE%u6807%u53F3%u4E0A%u89D2%u5C55%u793A%u76F8%u5E94%u7684%u5FBD%u6807%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-tree-select%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3Amain-active-index%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BactiveIndex%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eheight%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B55vw%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aitems%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bitems%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20activeIndex%20%3D%20ref%28%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20activeIndex%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eitems%3C/span%3E%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6D59%u6C5F%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Echildren%3C/span%3E%3A%20%5B%5D%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Edot%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6C5F%u82CF%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Echildren%3C/span%3E%3A%20%5B%5D%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Ebadge%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E5%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eitems%3C/td%3E%0A%3Ctd%3E%u5206%u7C7B%u663E%u793A%u6240%u9700%u7684%u6570%u636E%3C/td%3E%0A%3Ctd%3E%3Cem%3EItem%5B%5D%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eheight%3C/td%3E%0A%3Ctd%3E%u9AD8%u5EA6%uFF0C%u9ED8%u8BA4%u5355%u4F4D%u4E3A%3Ccode%3Epx%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E300%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emain-active-index%3C/td%3E%0A%3Ctd%3E%u5DE6%u4FA7%u9009%u4E2D%u9879%u7684%u7D22%u5F15%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eactive-id%3C/td%3E%0A%3Ctd%3E%u53F3%u4FA7%u9009%u4E2D%u9879%u7684%20id%uFF0C%u652F%u6301%u4F20%u5165%u6570%u7EC4%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%20%7C%3Cbr%3E%28number%20%7C%20string%29%5B%5D%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emax%3C/td%3E%0A%3Ctd%3E%u53F3%u4FA7%u9879%u6700%u5927%u9009%u4E2D%u4E2A%u6570%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EInfinity%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eselected-icon%3C/td%3E%0A%3Ctd%3E%u81EA%u5B9A%u4E49%u53F3%u4FA7%u680F%u9009%u4E2D%u72B6%u6001%u7684%u56FE%u6807%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Esuccess%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22events%22%3EEvents%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u56DE%u8C03%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eclick-nav%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u5DE6%u4FA7%u5BFC%u822A%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Eindex%uFF1A%u88AB%u70B9%u51FB%u7684%u5BFC%u822A%u7684%u7D22%u5F15%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclick-item%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u53F3%u4FA7%u9009%u62E9%u9879%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Edata%3A%20%u8BE5%u70B9%u51FB%u9879%u7684%u6570%u636E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22slots%22%3ESlots%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Econtent%3C/td%3E%0A%3Ctd%3E%u81EA%u5B9A%u4E49%u53F3%u4FA7%u533A%u57DF%u5185%u5BB9%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22item-shu-ju-jie-gou%22%3EItem%20%u6570%u636E%u7ED3%u6784%3C/h3%3E%0A%3Cp%3E%3Ccode%3Eitems%3C/code%3E%20%u6574%u4F53%u4E3A%u4E00%u4E2A%u6570%u7EC4%uFF0C%u6570%u7EC4%u5185%u5305%u542B%u4E00%u7CFB%u5217%u63CF%u8FF0%u5206%u7C7B%u7684%u5BF9%u8C61%uFF0C%u6BCF%u4E2A%u5206%u7C7B%u91CC%uFF0C%3Ccode%3Etext%3C/code%3E%u8868%u793A%u5F53%u524D%u5206%u7C7B%u7684%u540D%u79F0%uFF0C%3Ccode%3Echildren%3C/code%3E%u8868%u793A%u5206%u7C7B%u91CC%u7684%u53EF%u9009%u9879%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%5B%0A%20%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u5BFC%u822A%u540D%u79F0%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6240%u6709%u57CE%u5E02%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%08%u5BFC%u822A%u540D%u79F0%u53F3%u4E0A%u89D2%u5FBD%u6807%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebadge%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E3%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u662F%u5426%u5728%u5BFC%u822A%u540D%u79F0%u53F3%u4E0A%u89D2%u663E%u793A%u5C0F%u7EA2%u70B9%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edot%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u5BFC%u822A%u8282%u70B9%u989D%u5916%u7C7B%u540D%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EclassName%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bmy-class%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u8BE5%u5BFC%u822A%u4E0B%u6240%u6709%u7684%u53EF%u9009%u9879%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Echildren%3C/span%3E%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u540D%u79F0%3C/span%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6E29%u5DDE%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20id%uFF0C%u4F5C%u4E3A%u5339%u914D%u9009%u4E2D%u72B6%u6001%u7684%u6807%u8BC6%u7B26%3C/span%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u7981%u7528%u9009%u9879%3C/span%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edisabled%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u676D%u5DDE%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E2%3C/span%3E%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%7D%2C%0A%5D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yang-shi-bian-liang%22%3E%u6837%u5F0F%u53D8%u91CF%3C/h3%3E%0A%3Cp%3E%u7EC4%u4EF6%u63D0%u4F9B%u4E86%u4E0B%u5217%20Less%20%u53D8%u91CF%uFF0C%u53EF%u7528%u4E8E%u81EA%u5B9A%u4E49%u6837%u5F0F%uFF0C%u4F7F%u7528%u65B9%u6CD5%u8BF7%u53C2%u8003%3Ca%20href%3D%22%23/zh-CN/theme%22%20target%3D%22_blank%22%3E%u4E3B%u9898%u5B9A%u5236%3C/a%3E%u3002%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u63CF%u8FF0%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E@tree-select-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@font-size-md%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@tree-select-nav-background-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@background-color%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@tree-select-content-background-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@white%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@tree-select-nav-item-padding%3C/td%3E%0A%3Ctd%3E%3Ccode%3E14px%20@padding-sm%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@tree-select-item-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E48px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@tree-select-item-active-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@red%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@tree-select-item-disabled-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-5%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@tree-select-item-selected-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E16px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")),u={components:{},data:function(){return{content:n}},mounted:function(){var s=this,C=[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5"));C.forEach((function(C){C.addEventListener("click",s.scrollToAnchor)}))},methods:{scrollToAnchor:function(s){s.target.id&&this.$router.push({name:this.$route.name,hash:"#"+s.target.id})}}},l=u,e=E("2be6"),p=Object(e["a"])(l,a,t,!1,null,null,null);C["default"]=p.exports}}]);