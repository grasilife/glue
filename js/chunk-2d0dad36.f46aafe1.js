(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dad36"],{"6cf9":function(s,E,C){"use strict";C.r(E);var a=function(){var s=this,E=s.$createElement,C=s._self._c||E;return C("section",[C("div",{domProps:{innerHTML:s._s(s.content)}})])},t=[],n=(C("8f0b"),C("33ef"),C("868d"),C("fa8c"),unescape("%3Ch1%3EPopover%20%u6C14%u6CE1%u5F39%u51FA%u6846%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22jie-shao%22%3E%u4ECB%u7ECD%3C/h3%3E%0A%3Cp%3E%u5F39%u51FA%u5F0F%u7684%u6C14%u6CE1%u83DC%u5355%u3002%3C/p%3E%0A%3C/div%3E%3Ch2%20id%3D%22dai-ma-yan-shi%22%3E%u4EE3%u7801%u6F14%u793A%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22ji-chu-yong-fa%22%3E%u57FA%u7840%u7528%u6CD5%3C/h3%3E%0A%3Cp%3E%u5F53%20Popover%20%u5F39%u51FA%u65F6%uFF0C%u4F1A%u57FA%u4E8E%20%3Ccode%3Ereference%3C/code%3E%20%u63D2%u69FD%u7684%u5185%u5BB9%u8FDB%u884C%u5B9A%u4F4D%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-popover%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3Ashow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowPopover%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aactions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bactions%26quot%3B%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3Eselect%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonSelect%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%20%23%3Cspan%20class%3D%22hljs-attr%22%3Ereference%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bprimary%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%u6D45%u8272%u98CE%u683C%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-popover%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Toast%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20showPopover%20%3D%20ref%28%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%29%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u901A%u8FC7%20actions%20%u5C5E%u6027%u6765%u5B9A%u4E49%u83DC%u5355%u9009%u9879%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20actions%20%3D%20%5B%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u9009%u9879%u4E00%26%23x27%3B%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u9009%u9879%u4E8C%26%23x27%3B%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u9009%u9879%u4E09%26%23x27%3B%3C/span%3E%20%7D%2C%0A%20%20%20%20%5D%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onSelect%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%3Cspan%20class%3D%22hljs-params%22%3Eaction%3C/span%3E%29%20%3D%26gt%3B%3C/span%3E%20Toast%28action.text%29%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20actions%2C%0A%20%20%20%20%20%20onSelect%2C%0A%20%20%20%20%20%20showPopover%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22shen-se-feng-ge%22%3E%u6DF1%u8272%u98CE%u683C%3C/h3%3E%0A%3Cp%3EPopover%20%u652F%u6301%u6D45%u8272%u548C%u6DF1%u8272%u4E24%u79CD%u98CE%u683C%uFF0C%u9ED8%u8BA4%u4E3A%u6D45%u8272%u98CE%u683C%uFF0C%u5C06%20%3Ccode%3Etheme%3C/code%3E%20%u5C5E%u6027%u8BBE%u7F6E%u4E3A%20%3Ccode%3Edark%3C/code%3E%20%u53EF%u5207%u6362%u4E3A%u6DF1%u8272%u98CE%u683C%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-popover%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3Ashow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowPopover%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etheme%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bdark%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aactions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bactions%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%20%23%3Cspan%20class%3D%22hljs-attr%22%3Ereference%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bprimary%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%u6DF1%u8272%u98CE%u683C%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-popover%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20showPopover%20%3D%20ref%28%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20actions%20%3D%20%5B%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u9009%u9879%u4E00%26%23x27%3B%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u9009%u9879%u4E8C%26%23x27%3B%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u9009%u9879%u4E09%26%23x27%3B%3C/span%3E%20%7D%2C%0A%20%20%20%20%5D%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20actions%2C%0A%20%20%20%20%20%20showPopover%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22dan-chu-wei-zhi%22%3E%u5F39%u51FA%u4F4D%u7F6E%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%20%3Ccode%3Eplacement%3C/code%3E%20%u5C5E%u6027%u6765%u63A7%u5236%u6C14%u6CE1%u7684%u5F39%u51FA%u4F4D%u7F6E%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-popover%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eplacement%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Btop%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Ccode%3Eplacement%3C/code%3E%20%u652F%u6301%u4EE5%u4E0B%u503C%uFF1A%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-bash%22%3Etop%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%23%20%u9876%u90E8%u4E2D%u95F4%u4F4D%u7F6E%3C/span%3E%0Atop-start%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%23%20%u9876%u90E8%u5DE6%u4FA7%u4F4D%u7F6E%3C/span%3E%0Atop-end%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%23%20%u9876%u90E8%u53F3%u4FA7%u4F4D%u7F6E%3C/span%3E%0Aleft%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%23%20%u5DE6%u4FA7%u4E2D%u95F4%u4F4D%u7F6E%3C/span%3E%0Aleft-start%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%23%20%u5DE6%u4FA7%u4E0A%u65B9%u4F4D%u7F6E%3C/span%3E%0Aleft-end%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%23%20%u5DE6%u4FA7%u4E0B%u65B9%u4F4D%u7F6E%3C/span%3E%0Aright%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%23%20%u53F3%u4FA7%u4E2D%u95F4%u4F4D%u7F6E%3C/span%3E%0Aright-start%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%23%20%u53F3%u4FA7%u4E0A%u65B9%u4F4D%u7F6E%3C/span%3E%0Aright-end%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%23%20%u53F3%u4FA7%u4E0B%u65B9%u4F4D%u7F6E%3C/span%3E%0Abottom%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%23%20%u5E95%u90E8%u4E2D%u95F4%u4F4D%u7F6E%3C/span%3E%0Abottom-start%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%23%20%u5E95%u90E8%u5DE6%u4FA7%u4F4D%u7F6E%3C/span%3E%0Abottom-end%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%23%20%u5E95%u90E8%u53F3%u4FA7%u4F4D%u7F6E%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22zhan-shi-tu-biao%22%3E%u5C55%u793A%u56FE%u6807%3C/h3%3E%0A%3Cp%3E%u5728%20%3Ccode%3Eactions%3C/code%3E%20%u6570%u7EC4%u4E2D%uFF0C%u53EF%u4EE5%u901A%u8FC7%20%3Ccode%3Eicon%3C/code%3E%20%u5B57%u6BB5%u6765%u5B9A%u4E49%u9009%u9879%u7684%u56FE%u6807%uFF0C%u652F%u6301%u4F20%u5165%3Ca%20href%3D%22%23/zh-CN/icon%22%20target%3D%22_blank%22%3E%u56FE%u6807%u540D%u79F0%3C/a%3E%u6216%u56FE%u7247%u94FE%u63A5%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-popover%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3Ashow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowPopover%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aactions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bactions%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%20%23%3Cspan%20class%3D%22hljs-attr%22%3Ereference%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bprimary%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%u5C55%u793A%u56FE%u6807%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-popover%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20showPopover%20%3D%20ref%28%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20actions%20%3D%20%5B%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u9009%u9879%u4E00%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Eicon%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Badd-o%26%23x27%3B%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u9009%u9879%u4E8C%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Eicon%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bmusic-o%26%23x27%3B%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u9009%u9879%u4E09%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Eicon%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bmore-o%26%23x27%3B%3C/span%3E%20%7D%2C%0A%20%20%20%20%5D%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20actions%2C%0A%20%20%20%20%20%20showPopover%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22jin-yong-xuan-xiang%22%3E%u7981%u7528%u9009%u9879%3C/h3%3E%0A%3Cp%3E%u5728%20%3Ccode%3Eactions%3C/code%3E%20%u6570%u7EC4%u4E2D%uFF0C%u53EF%u4EE5%u901A%u8FC7%20%3Ccode%3Edisabled%3C/code%3E%20%u5B57%u6BB5%u6765%u7981%u7528%u67D0%u4E2A%u9009%u9879%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-popover%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3Ashow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowPopover%26quot%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aactions%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bactions%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%20%23%3Cspan%20class%3D%22hljs-attr%22%3Ereference%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bprimary%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%u7981%u7528%u9009%u9879%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-popover%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20showPopover%20%3D%20ref%28%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20actions%20%3D%20%5B%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u9009%u9879%u4E00%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Edisabled%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u9009%u9879%u4E8C%26%23x27%3B%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Edisabled%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%20%7D%2C%0A%20%20%20%20%20%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u9009%u9879%u4E09%26%23x27%3B%3C/span%3E%20%7D%2C%0A%20%20%20%20%5D%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20actions%2C%0A%20%20%20%20%20%20showPopover%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22zi-ding-yi-nei-rong%22%3E%u81EA%u5B9A%u4E49%u5185%u5BB9%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%u9ED8%u8BA4%u63D2%u69FD%uFF0C%u53EF%u4EE5%u5728%20Popover%20%u5185%u90E8%u653E%u7F6E%u4EFB%u610F%u5185%u5BB9%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-popover%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3Ashow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowPopover%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-grid%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Esquare%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eclickable%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aborder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bfalse%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecolumn-num%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B3%26quot%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Estyle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bwidth%3A%20240px%3B%26quot%3B%3C/span%3E%0A%20%20%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-grid-item%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-for%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bi%20in%206%26quot%3B%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Akey%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bi%26quot%3B%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u9009%u9879%26quot%3B%3C/span%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eicon%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bphoto-o%26quot%3B%3C/span%3E%0A%20%20%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eclick%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BshowPopover%20%3D%20false%26quot%3B%3C/span%3E%0A%20%20%20%20/%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-grid%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%20%23%3Cspan%20class%3D%22hljs-attr%22%3Ereference%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bprimary%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%u81EA%u5B9A%u4E49%u5185%u5BB9%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-button%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-popover%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20showPopover%20%3D%20ref%28%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%20showPopover%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ev-model%3Ashow%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5C55%u793A%u6C14%u6CE1%u5F39%u51FA%u5C42%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eactions%3C/td%3E%0A%3Ctd%3E%u9009%u9879%u5217%u8868%3C/td%3E%0A%3Ctd%3E%3Cem%3EAction%5B%5D%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eplacement%3C/td%3E%0A%3Ctd%3E%u5F39%u51FA%u4F4D%u7F6E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Ebottom%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etheme%3C/td%3E%0A%3Ctd%3E%u4E3B%u9898%u98CE%u683C%uFF0C%u53EF%u9009%u503C%u4E3A%20%3Ccode%3Edark%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Elight%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etrigger%3C/td%3E%0A%3Ctd%3E%u89E6%u53D1%u65B9%u5F0F%uFF0C%u53EF%u9009%u503C%u4E3A%20%3Ccode%3Emanual%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eclick%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eoffset%3C/td%3E%0A%3Ctd%3E%u51FA%u73B0%u4F4D%u7F6E%u7684%u504F%u79FB%u91CF%3C/td%3E%0A%3Ctd%3E%3Cem%3E%5Bnumber%2C%20number%5D%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B0%2C%208%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eoverlay%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u906E%u7F69%u5C42%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclose-on-click-action%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5728%u70B9%u51FB%u9009%u9879%u540E%u5173%u95ED%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclose-on-click-outside%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5728%u70B9%u51FB%u5916%u90E8%u5143%u7D20%u540E%u5173%u95ED%u83DC%u5355%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eteleport%3C/td%3E%0A%3Ctd%3E%u6307%u5B9A%u6302%u8F7D%u7684%u8282%u70B9%uFF0C%3Ca%20href%3D%22%23/zh-CN/popup%23zhi-ding-gua-zai-wei-zhi%22%20target%3D%22_blank%22%3E%u7528%u6CD5%u793A%u4F8B%3C/a%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%20%7C%20Element%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Ebody%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22action-shu-ju-jie-gou%22%3EAction%20%u6570%u636E%u7ED3%u6784%3C/h3%3E%0A%3Cp%3E%3Ccode%3Eactions%3C/code%3E%20%u5C5E%u6027%u662F%u4E00%u4E2A%u7531%u5BF9%u8C61%u6784%u6210%u7684%u6570%u7EC4%uFF0C%u6570%u7EC4%u4E2D%u7684%u6BCF%u4E2A%u5BF9%u8C61%u914D%u7F6E%u4E00%u5217%uFF0C%u5BF9%u8C61%u53EF%u4EE5%u5305%u542B%u4EE5%u4E0B%u503C%uFF1A%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u952E%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Etext%3C/td%3E%0A%3Ctd%3E%u9009%u9879%u6587%u5B57%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eicon%3C/td%3E%0A%3Ctd%3E%u6587%u5B57%u5DE6%u4FA7%u7684%u56FE%u6807%uFF0C%u652F%u6301%u4F20%u5165%3Ca%20href%3D%22%23/zh-CN/icon%22%20target%3D%22_blank%22%3E%u56FE%u6807%u540D%u79F0%3C/a%3E%u6216%u56FE%u7247%u94FE%u63A5%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisabled%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u4E3A%u7981%u7528%u72B6%u6001%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EclassName%3C/td%3E%0A%3Ctd%3E%u4E3A%u5BF9%u5E94%u9009%u9879%u6DFB%u52A0%u989D%u5916%u7684%u7C7B%u540D%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%20%7C%20Array%20%7C%20object%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22events%22%3EEvents%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u56DE%u8C03%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eselect%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u9009%u9879%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E%3Cem%3Eaction%3A%20Action%2C%20index%3A%20number%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eopen%3C/td%3E%0A%3Ctd%3E%u6253%u5F00%u83DC%u5355%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclose%3C/td%3E%0A%3Ctd%3E%u5173%u95ED%u83DC%u5355%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eopened%3C/td%3E%0A%3Ctd%3E%u6253%u5F00%u83DC%u5355%u4E14%u52A8%u753B%u7ED3%u675F%u540E%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclosed%3C/td%3E%0A%3Ctd%3E%u5173%u95ED%u83DC%u5355%u4E14%u52A8%u753B%u7ED3%u675F%u540E%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22slots%22%3ESlots%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Edefault%3C/td%3E%0A%3Ctd%3E%u81EA%u5B9A%u4E49%u83DC%u5355%u5185%u5BB9%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ereference%3C/td%3E%0A%3Ctd%3E%u89E6%u53D1%20Popover%20%u663E%u793A%u7684%u5143%u7D20%u5185%u5BB9%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yang-shi-bian-liang%22%3E%u6837%u5F0F%u53D8%u91CF%3C/h3%3E%0A%3Cp%3E%u7EC4%u4EF6%u63D0%u4F9B%u4E86%u4E0B%u5217%20Less%20%u53D8%u91CF%uFF0C%u53EF%u7528%u4E8E%u81EA%u5B9A%u4E49%u6837%u5F0F%uFF0C%u4F7F%u7528%u65B9%u6CD5%u8BF7%u53C2%u8003%3Ca%20href%3D%22%23/zh-CN/theme%22%20target%3D%22_blank%22%3E%u4E3B%u9898%u5B9A%u5236%3C/a%3E%u3002%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u63CF%u8FF0%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E@popover-arrow-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E6px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@popover-border-radius%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@border-radius-lg%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@popover-action-width%3C/td%3E%0A%3Ctd%3E%3Ccode%3E128px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@popover-action-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E44px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@popover-action-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@font-size-md%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@popover-action-line-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@line-height-md%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@popover-action-icon-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E20px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@popover-light-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@text-color%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@popover-light-background-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@white%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@popover-light-action-disabled-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-5%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@popover-dark-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@white%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@popover-dark-background-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%234a4a4a%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@popover-dark-action-disabled-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-6%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")),u={components:{},data:function(){return{content:n}},mounted:function(){var s=this,E=[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5"));E.forEach((function(E){E.addEventListener("click",s.scrollToAnchor)}))},methods:{scrollToAnchor:function(s){s.target.id&&this.$router.push({name:this.$route.name,hash:"#"+s.target.id})}}},l=u,p=C("2be6"),e=Object(p["a"])(l,a,t,!1,null,null,null);E["default"]=e.exports}}]);