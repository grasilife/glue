"use strict";(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[69250],{69250:function(E,C,t){t.r(C),t.d(C,{default:function(){return A}});var u=function(){var E=this,C=E._self._c;return C("section",[C("div",{domProps:{innerHTML:E._s(E.content)}})])},s=[];t(29045);const a=unescape("%3Ch1%3ENumberKeyboard%20%u6570%u5B57%u952E%u76D8%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22jie-shao%22%3E%u4ECB%u7ECD%3C/h3%3E%0A%3Cp%3E%u865A%u62DF%u6570%u5B57%u952E%u76D8%uFF0C%u53EF%u4EE5%u914D%u5408%3Ca%20href%3D%22%23/zh-CN/password-glueInput%22%20target%3D%22_blank%22%3E%u5BC6%u7801%u8F93%u5165%u6846%u7EC4%u4EF6%3C/a%3E%u6216%u81EA%u5B9A%u4E49%u7684%u8F93%u5165%u6846%u7EC4%u4EF6%u4F7F%u7528%u3002%3C/p%3E%0A%3C/div%3E%3Ch2%20id%3D%22dai-ma-yan-shi%22%3E%u4EE3%u7801%u6F14%u793A%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22mo-ren-yang-shi%22%3E%u9ED8%u8BA4%u6837%u5F0F%3C/h3%3E%0A%3Cp%3E%u6570%u5B57%u952E%u76D8%u63D0%u4F9B%u4E86%20%3Ccode%3EglueInput%3C/code%3E%u3001%3Ccode%3EglueDelete%3C/code%3E%u3001%3Ccode%3EglueBlur%3C/code%3E%20%u4E8B%u4EF6%uFF0C%u5206%u522B%u5BF9%u5E94%u8F93%u5165%u5185%u5BB9%u3001%u5220%u9664%u5185%u5BB9%u548C%u5931%u53BB%u7126%u70B9%u7684%u52A8%u4F5C%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eglue-cell%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3Eclick%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bshow%20%3D%20true%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%u5F39%u51FA%u9ED8%u8BA4%u952E%u76D8%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Eglue-cell%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eglue-number-keyboard%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ashow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bshow%26quot%3B%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueBlur%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bshow%20%3D%20false%26quot%3B%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueInput%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonInput%26quot%3B%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueDelete%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonDelete%26quot%3B%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvue%26quot%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Toast%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bgluet%26quot%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20show%20%3D%20ref%28%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onInput%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3Evalue%3C/span%3E%20%3D%26gt%3B%3C/span%3E%20Toast%28value%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onDelete%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%29%20%3D%26gt%3B%3C/span%3E%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u5220%u9664%26quot%3B%3C/span%3E%29%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20show%2C%0A%20%20%20%20%20%20onInput%2C%0A%20%20%20%20%20%20onDelete%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3Cblockquote%3E%0A%3Cp%3E%u70B9%u51FB%u952E%u76D8%u4EE5%u5916%u7684%u533A%u57DF%u65F6%uFF0C%u952E%u76D8%u4F1A%u81EA%u52A8%u6536%u8D77%uFF0C%u901A%u8FC7%u963B%u6B62%u5143%u7D20%u4E0A%u7684%20touchstart%20%u4E8B%u4EF6%u5192%u6CE1%u53EF%u4EE5%u907F%u514D%u952E%u76D8%u6536%u8D77%u3002%3C/p%3E%0A%3C/blockquote%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22dai-you-ce-lan-de-jian-pan%22%3E%u5E26%u53F3%u4FA7%u680F%u7684%u952E%u76D8%3C/h3%3E%0A%3Cp%3E%u5C06%20theme%20%u5C5E%u6027%u8BBE%u7F6E%u4E3A%20%3Ccode%3Ecustom%3C/code%3E%20%u6765%u5C55%u793A%u952E%u76D8%u7684%u53F3%u4FA7%u680F%uFF0C%u5E38%u7528%u4E8E%u8F93%u5165%u91D1%u989D%u7684%u573A%u666F%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eglue-number-keyboard%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ashow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bshow%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etheme%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bcustom%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eextra-key%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B.%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eclose-button-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u5B8C%u6210%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueBlur%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bshow%20%3D%20false%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueInput%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonInput%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueDelete%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonDelete%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22shen-fen-zheng-hao-jian-pan%22%3E%u8EAB%u4EFD%u8BC1%u53F7%u952E%u76D8%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%20%3Ccode%3Eextra-key%3C/code%3E%20%u5C5E%u6027%u53EF%u4EE5%u8BBE%u7F6E%u5DE6%u4E0B%u89D2%u6309%u952E%u5185%u5BB9%uFF0C%u6BD4%u5982%u9700%u8981%u8F93%u5165%u8EAB%u4EFD%u8BC1%u53F7%u65F6%uFF0C%u53EF%u4EE5%u5C06%20%3Ccode%3Eextra-key%3C/code%3E%20%u8BBE%u7F6E%u4E3A%20%3Ccode%3EX%3C/code%3E%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eglue-cell%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eplain%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bprimary%26quot%3B%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3Etouchstart.stop%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bshow%20%3D%20true%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%u5F39%u51FA%u8EAB%u4EFD%u8BC1%u53F7%u952E%u76D8%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Eglue-cell%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eglue-number-keyboard%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ashow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bshow%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eextra-key%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BX%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eclose-button-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u5B8C%u6210%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueBlur%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bshow%20%3D%20false%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueInput%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonInput%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueDelete%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonDelete%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22jian-pan-biao-ti%22%3E%u952E%u76D8%u6807%u9898%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%20%3Ccode%3Etitle%3C/code%3E%20%u5C5E%u6027%u53EF%u4EE5%u8BBE%u7F6E%u952E%u76D8%u6807%u9898%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eglue-cell%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eplain%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bprimary%26quot%3B%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3Etouchstart.stop%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bshow%20%3D%20true%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%u5F39%u51FA%u5E26%u6807%u9898%u7684%u952E%u76D8%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Eglue-cell%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eglue-number-keyboard%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ashow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bshow%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etitle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u952E%u76D8%u6807%u9898%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eextra-key%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B.%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eclose-button-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u5B8C%u6210%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueBlur%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bshow%20%3D%20false%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueInput%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonInput%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueDelete%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonDelete%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22pei-zhi-duo-ge-an-jian%22%3E%u914D%u7F6E%u591A%u4E2A%u6309%u952E%3C/h3%3E%0A%3Cp%3E%u5F53%20theme%20%u4E3A%20%3Ccode%3Ecustom%3C/code%3E%20%u65F6%uFF0C%u652F%u6301%u4EE5%u6570%u7EC4%u7684%u5F62%u5F0F%u914D%u7F6E%u4E24%u4E2A%20%3Ccode%3Eextra-key%3C/code%3E%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eglue-cell%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eplain%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bprimary%26quot%3B%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3Etouchstart.stop%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bshow%20%3D%20true%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%u5F39%u51FA%u914D%u7F6E%u591A%u4E2A%u6309%u952E%u7684%u952E%u76D8%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Eglue-cell%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eglue-number-keyboard%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ashow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bshow%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aextra-key.prop%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%5B%26%23x27%3B00%26%23x27%3B%2C%20%26%23x27%3B.%26%23x27%3B%5D%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eclose-button-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u5B8C%u6210%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueBlur%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bshow%20%3D%20false%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueInput%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonInput%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueDelete%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonDelete%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22sui-ji-shu-zi-jian-pan%22%3E%u968F%u673A%u6570%u5B57%u952E%u76D8%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%20%3Ccode%3Erandom-key-order%3C/code%3E%20%u5C5E%u6027%u53EF%u4EE5%u968F%u673A%u6392%u5E8F%u6570%u5B57%u952E%u76D8%uFF0C%u5E38%u7528%u4E8E%u5B89%u5168%u7B49%u7EA7%u8F83%u9AD8%u7684%u573A%u666F%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eglue-cell%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3Etouchstart.stop%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bshow%20%3D%20true%26quot%3B%3C/span%3E%26gt%3B%3C/span%3E%20%u5F39%u51FA%u914D%u7F6E%u968F%u673A%u6570%u5B57%u7684%u952E%u76D8%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Eglue-cell%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eglue-number-keyboard%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ashow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bshow%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Erandom-key-order%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueBlur%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bshow%20%3D%20false%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueInput%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonInput%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueDelete%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonDelete%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ev-model%3C/td%3E%0A%3Ctd%3E%u5F53%u524D%u8F93%u5165%u503C%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u952E%u76D8%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Egtitle%3C/td%3E%0A%3Ctd%3E%u952E%u76D8%u6807%u9898%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etheme%3C/td%3E%0A%3Ctd%3E%u6837%u5F0F%u98CE%u683C%uFF0C%u53EF%u9009%u503C%u4E3A%20%3Ccode%3Ecustom%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Edefault%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emaxlength%3C/td%3E%0A%3Ctd%3E%u8F93%u5165%u503C%u6700%u5927%u957F%u5EA6%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etransition%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5F00%u542F%u8FC7%u573A%u52A8%u753B%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ez-index%3C/td%3E%0A%3Ctd%3E%u952E%u76D8%20z-index%20%u5C42%u7EA7%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E100%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eextra-key%3C/td%3E%0A%3Ctd%3E%u5E95%u90E8%u989D%u5916%u6309%u952E%u7684%u5185%u5BB9%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%20%7C%20string%5B%5D%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%27%27%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclose-button-text%3C/td%3E%0A%3Ctd%3E%u5173%u95ED%u6309%u94AE%u6587%u5B57%uFF0C%u7A7A%u5219%u4E0D%u5C55%u793A%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EglueDelete-button-text%3C/td%3E%0A%3Ctd%3E%u5220%u9664%u6309%u94AE%u6587%u5B57%uFF0C%u7A7A%u5219%u5C55%u793A%u5220%u9664%u56FE%u6807%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclose-button-loading%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5C06%u5173%u95ED%u6309%u94AE%u8BBE%u7F6E%u4E3A%u52A0%u8F7D%u4E2D%u72B6%u6001%uFF0C%u4EC5%u5728%20%3Ccode%3Etheme%3D%26quot%3Bcustom%26quot%3B%3C/code%3E%20%u65F6%u6709%u6548%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-glueDelete-key%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5C55%u793A%u5220%u9664%u56FE%u6807%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EglueBlur-on-close%20%3Ccode%3Ev3.0.6%3C/code%3E%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5728%u70B9%u51FB%u5173%u95ED%u6309%u94AE%u65F6%u89E6%u53D1%20glueBlur%20%u4E8B%u4EF6%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ehide-on-click-outside%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5728%u70B9%u51FB%u5916%u90E8%u65F6%u6536%u8D77%u952E%u76D8%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eteleport%3C/td%3E%0A%3Ctd%3E%u6307%u5B9A%u6302%u8F7D%u7684%u8282%u70B9%uFF0C%3Ca%20href%3D%22%23/zh-CN/popup%23zhi-ding-gua-zai-wei-zhi%22%20target%3D%22_blank%22%3E%u7528%u6CD5%u793A%u4F8B%3C/a%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%20%7C%20Element%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esafe-area-inset-bottom%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5F00%u542F%3Ca%20href%3D%22%23/zh-CN/adglueced-usage%23di-bu-an-quan-qu-gua-pei%22%20target%3D%22_blank%22%3E%u5E95%u90E8%u5B89%u5168%u533A%u9002%u914D%3C/a%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Erandom-key-order%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5C06%u901A%u8FC7%u968F%u673A%u987A%u5E8F%u5C55%u793A%u6309%u952E%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22events%22%3EEvents%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u56DE%u8C03%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3EglueInput%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u6309%u952E%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Ekey%3A%20%u6309%u952E%u5185%u5BB9%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EglueDelete%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u5220%u9664%u952E%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EglueClose%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u5173%u95ED%u6309%u94AE%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EglueBlur%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u5173%u95ED%u6309%u94AE%u6216%u975E%u952E%u76D8%u533A%u57DF%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow%3C/td%3E%0A%3Ctd%3E%u952E%u76D8%u5B8C%u5168%u5F39%u51FA%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ehide%3C/td%3E%0A%3Ctd%3E%u952E%u76D8%u5B8C%u5168%u6536%u8D77%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22slots%22%3ESlots%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3EglueDelete%3C/td%3E%0A%3Ctd%3E%u81EA%u5B9A%u4E49%u5220%u9664%u6309%u952E%u5185%u5BB9%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eextra-key%3C/td%3E%0A%3Ctd%3E%u81EA%u5B9A%u4E49%u5DE6%u4E0B%u89D2%u6309%u952E%u5185%u5BB9%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etitle-left%3C/td%3E%0A%3Ctd%3E%u81EA%u5B9A%u4E49%u6807%u9898%u680F%u5DE6%u4FA7%u5185%u5BB9%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yang-shi-bian-liang%22%3E%u6837%u5F0F%u53D8%u91CF%3C/h3%3E%0A%3Cp%3E%u7EC4%u4EF6%u63D0%u4F9B%u4E86%u4E0B%u5217%20Less%20%u53D8%u91CF%uFF0C%u53EF%u7528%u4E8E%u81EA%u5B9A%u4E49%u6837%u5F0F%uFF0C%u4F7F%u7528%u65B9%u6CD5%u8BF7%u53C2%u8003%3Ca%20href%3D%22%23/zh-CN/theme%22%20target%3D%22_blank%22%3E%u4E3B%u9898%u5B9A%u5236%3C/a%3E%u3002%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u63CF%u8FF0%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E@number-keyboard-background-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-2%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@number-keyboard-key-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E48px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@number-keyboard-key-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E28px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@number-keyboard-key-active-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-3%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@number-keyboard-glueDelete-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@font-size-lg%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@number-keyboard-title-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-7%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@number-keyboard-title-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E34px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@number-keyboard-title-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@font-size-lg%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@number-keyboard-close-padding%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%20@padding-md%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@number-keyboard-close-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@text-link-color%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@number-keyboard-close-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@font-size-md%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@number-keyboard-button-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@white%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@number-keyboard-button-background-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@blue%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@number-keyboard-cursor-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@text-color%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@number-keyboard-cursor-width%3C/td%3E%0A%3Ctd%3E%3Ccode%3E1px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@number-keyboard-cursor-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E40%25%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@number-keyboard-cursor-animation-duration%3C/td%3E%0A%3Ctd%3E%3Ccode%3E1s%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@number-keyboard-z-index%3C/td%3E%0A%3Ctd%3E%3Ccode%3E100%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Ch2%20id%3D%22chang-jian-wen-ti%22%3E%u5E38%u89C1%u95EE%u9898%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22zai-zhuo-mian-duan-wu-fa-cao-zuo-zu-jian%22%3E%u5728%u684C%u9762%u7AEF%u65E0%u6CD5%u64CD%u4F5C%u7EC4%u4EF6%uFF1F%3C/h3%3E%0A%3Cp%3E%u53C2%u89C1%3Ca%20href%3D%22%23/zh-CN/adglueced-usage%23zhuo-mian-duan-gua-pei%22%20target%3D%22_blank%22%3E%u684C%u9762%u7AEF%u9002%u914D%3C/a%3E%u3002%3C/p%3E%0A%3C/div%3E");var e={components:{},data(){return{content:a}},mounted(){const E=[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5"));E.forEach((E=>{E.addEventListener("click",this.scrollToAnchor)}))},methods:{scrollToAnchor(E){E.target.id&&this.$router.push({name:this.$route.name,hash:"#"+E.target.id})}}},n=e,d=t(41902),l=(0,d.Z)(n,u,s,!1,null,null,null),A=l.exports}}]);