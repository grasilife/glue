(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22973e"],{de07:function(s,C,E){"use strict";E.r(C);var t=function(){var s=this,C=s.$createElement,E=s._self._c||C;return E("section",[E("div",{domProps:{innerHTML:s._s(s.content)}})])},a=[],u=(E("33ef"),E("ef1f"),E("fa8c"),E("868d"),unescape("%3Ch1%3ECircle%20%u73AF%u5F62%u8FDB%u5EA6%u6761%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22jie-shao%22%3E%u4ECB%u7ECD%3C/h3%3E%0A%3Cp%3E%u5706%u73AF%u5F62%u7684%u8FDB%u5EA6%u6761%u7EC4%u4EF6%uFF0C%u652F%u6301%u8FDB%u5EA6%u6E10%u53D8%u52A8%u753B%u3002%3C/p%3E%0A%3C/div%3E%3Ch2%20id%3D%22dai-ma-yan-shi%22%3E%u4EE3%u7801%u6F14%u793A%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22ji-chu-yong-fa%22%3E%u57FA%u7840%u7528%u6CD5%3C/h3%3E%0A%3Cp%3E%3Ccode%3Erate%3C/code%3E%20%u5C5E%u6027%u8868%u793A%u8FDB%u5EA6%u6761%u7684%u76EE%u6807%u8FDB%u5EA6%uFF0C%3Ccode%3Ecurrent-rate%3C/code%3E%20%u8868%u793A%u52A8%u753B%u8FC7%u7A0B%u4E2D%u7684%u5B9E%u65F6%u8FDB%u5EA6%u3002%u5F53%20%3Ccode%3Erate%3C/code%3E%20%u53D1%u751F%u53D8%u5316%u65F6%uFF0C%3Ccode%3Ecurrent-rate%3C/code%3E%20%u4F1A%u4EE5%20%3Ccode%3Espeed%3C/code%3E%20%u7684%u901F%u5EA6%u53D8%u5316%uFF0C%u76F4%u81F3%u8FBE%u5230%20%3Ccode%3Erate%3C/code%3E%20%u8BBE%u5B9A%u7684%u503C%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eglue-circle%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Acurrent-rate%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BcurrentRate1%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Arate%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Brate%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aspeed%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B100%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3EglueChange%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bchange%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Atext%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BcurrentRate1.toFixed%280%29%20+%20%26%23x27%3B%25%26%23x27%3B%26quot%3B%3C/span%3E%0A%26gt%3B%3C/span%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Eglue-circle%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%26lt%3Bscript%26gt%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20format%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3Erate%3C/span%3E%20%3D%26gt%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3EMath%3C/span%3E.min%28%3Cspan%20class%3D%22hljs-built_in%22%3EMath%3C/span%3E.max%28rate%2C%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%29%2C%20%3Cspan%20class%3D%22hljs-number%22%3E100%3C/span%3E%29%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Edata%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EaddText%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u589E%u52A0%26quot%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EdecreaseText%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u51CF%u5C11%26quot%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EbasicUsage%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u57FA%u7840%u7528%u6CD5%26quot%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Egradient%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u6E10%u53D8%u8272%26quot%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EcustomSize%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u5927%u5C0F%u5B9A%u5236%26quot%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EcustomStyle%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u6837%u5F0F%u5B9A%u5236%26quot%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EcustomColor%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u989C%u8272%u5B9A%u5236%26quot%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EcustomWidth%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u5BBD%u5EA6%u5B9A%u5236%26quot%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EcounterClockwise%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u9006%u65F6%u9488%26quot%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Erate%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E70%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EcurrentRate1%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E70%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EcurrentRate2%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E70%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EcurrentRate3%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E70%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EcurrentRate4%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E70%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EgradientColor%3C/span%3E%3A%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B0%25%26quot%3B%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%233fecff%26quot%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B100%25%26quot%3B%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%236149f6%26quot%3B%3C/span%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Eadd%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-built_in%22%3Ethis%3C/span%3E.rate%20%3D%20format%28%3Cspan%20class%3D%22hljs-built_in%22%3Ethis%3C/span%3E.rate%20+%20%3Cspan%20class%3D%22hljs-number%22%3E20%3C/span%3E%29%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Echange%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3Evalue%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-built_in%22%3Econsole%3C/span%3E.log%28value%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvalue%26quot%3B%3C/span%3E%29%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-built_in%22%3Ethis%3C/span%3E.currentRate1%20%3D%20value.detail%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Ereduce%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-built_in%22%3Ethis%3C/span%3E.rate%20%3D%20format%28%3Cspan%20class%3D%22hljs-built_in%22%3Ethis%3C/span%3E.rate%20-%20%3Cspan%20class%3D%22hljs-number%22%3E20%3C/span%3E%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%3B%0A%26lt%3B/script%26gt%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22kuan-du-ding-zhi%22%3E%u5BBD%u5EA6%u5B9A%u5236%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%20%3Ccode%3Estroke-width%3C/code%3E%20%u5C5E%u6027%u6765%u63A7%u5236%u8FDB%u5EA6%u6761%u5BBD%u5EA6%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eglue-circle%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Acurrent-rate%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BcurrentRate3%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Arate%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Brate%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aspeed%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B100%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Astroke-width%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B60%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Atext%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BcustomWidth%26quot%3B%3C/span%3E%0A%26gt%3B%3C/span%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Eglue-circle%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yan-se-ding-zhi%22%3E%u989C%u8272%u5B9A%u5236%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%20%3Ccode%3Ecolor%3C/code%3E%20%u5C5E%u6027%u6765%u63A7%u5236%u8FDB%u5EA6%u6761%u989C%u8272%uFF0C%3Ccode%3Elayer-color%3C/code%3E%20%u5C5E%u6027%u6765%u63A7%u5236%u8F68%u9053%u989C%u8272%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eglue-circle%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Acurrent-rate%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BcurrentRate3%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eline-color%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%23ee0a24%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Arate%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Brate%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Elayer-color%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%23ebedf0%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aspeed%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B100%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Atext%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BcustomColor%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22jian-bian-se%22%3E%u6E10%u53D8%u8272%3C/h3%3E%0A%3Cp%3E%3Ccode%3Ecolor%3C/code%3E%20%u5C5E%u6027%u652F%u6301%u4F20%u5165%u5BF9%u8C61%u683C%u5F0F%u6765%u5B9A%u4E49%u6E10%u53D8%u8272%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eglue-circle%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Acurrent-rate%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BcurrentRate2%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Arate%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Brate%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aspeed%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B100%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aline-color%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BgradientColor%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Atext%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bgradient%26quot%3B%3C/span%3E%0A%26gt%3B%3C/span%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Eglue-circle%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22ni-shi-zhen-fang-xiang%22%3E%u9006%u65F6%u9488%u65B9%u5411%3C/h3%3E%0A%3Cp%3E%u5C06%20%3Ccode%3Eclockwise%3C/code%3E%20%u8BBE%u7F6E%u4E3A%20%3Ccode%3Efalse%3C/code%3E%uFF0C%u8FDB%u5EA6%u4F1A%u4ECE%u9006%u65F6%u9488%u65B9%u5411%u5F00%u59CB%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eglue-circle%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Acurrent-rate%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BcurrentRate4%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eline-color%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%2307c160%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Arate%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Brate%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aspeed%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B100%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aclockwise%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Btrue%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Atext%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BcounterClockwise%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Estyle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bmargin-top%3A%2015px%3B%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22da-xiao-ding-zhi%22%3E%u5927%u5C0F%u5B9A%u5236%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%20%3Ccode%3Esize%3C/code%3E%20%u5C5E%u6027%u8BBE%u7F6E%u5706%u73AF%u76F4%u5F84%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eglue-circle%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Acurrent-rate%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BcurrentRate4%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eline-color%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%237232dd%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Arate%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Brate%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aspeed%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B100%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Esize%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B120px%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aclockwise%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Btrue%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Atext%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BcustomSize%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Estyle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bmargin-top%3A%2015px%3B%26quot%3B%3C/span%3E%0A%26gt%3B%3C/span%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Eglue-circle%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ecurrent-rate%3C/td%3E%0A%3Ctd%3E%u5F53%u524D%u8FDB%u5EA6%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Erate%3C/td%3E%0A%3Ctd%3E%u76EE%u6807%u8FDB%u5EA6%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E100%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esize%3C/td%3E%0A%3Ctd%3E%u5706%u73AF%u76F4%u5F84%uFF0C%u9ED8%u8BA4%u5355%u4F4D%u4E3A%20%3Ccode%3Epx%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E100px%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecolor%3C/td%3E%0A%3Ctd%3E%u8FDB%u5EA6%u6761%u989C%u8272%uFF0C%u4F20%u5165%u5BF9%u8C61%u683C%u5F0F%u53EF%u4EE5%u5B9A%u4E49%u6E10%u53D8%u8272%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%20%7C%20object%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%231989fa%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Elayer-color%3C/td%3E%0A%3Ctd%3E%u8F68%u9053%u989C%u8272%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Ewhite%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Efill%3C/td%3E%0A%3Ctd%3E%u586B%u5145%u989C%u8272%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Enone%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Espeed%3C/td%3E%0A%3Ctd%3E%u52A8%u753B%u901F%u5EA6%uFF08%u5355%u4F4D%u4E3A%20rate/s%uFF09%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etext%3C/td%3E%0A%3Ctd%3E%u6587%u5B57%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Estroke-width%3C/td%3E%0A%3Ctd%3E%u8FDB%u5EA6%u6761%u5BBD%u5EA6%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E40%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Estroke-linecap%3C/td%3E%0A%3Ctd%3E%u8FDB%u5EA6%u6761%u7AEF%u70B9%u7684%u5F62%u72B6%uFF0C%u53EF%u9009%u503C%u4E3A%20%3Ccode%3Esqaure%3C/code%3E%20%3Ccode%3Ebutt%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eround%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclockwise%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u987A%u65F6%u9488%u589E%u52A0%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22slots%22%3ESlots%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Edefault%3C/td%3E%0A%3Ctd%3E%u81EA%u5B9A%u4E49%u6587%u5B57%u5185%u5BB9%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yang-shi-bian-liang%22%3E%u6837%u5F0F%u53D8%u91CF%3C/h3%3E%0A%3Cp%3E%u7EC4%u4EF6%u63D0%u4F9B%u4E86%u4E0B%u5217%20Less%20%u53D8%u91CF%uFF0C%u53EF%u7528%u4E8E%u81EA%u5B9A%u4E49%u6837%u5F0F%uFF0C%u4F7F%u7528%u65B9%u6CD5%u8BF7%u53C2%u8003%3Ca%20href%3D%22%23/zh-CN/theme%22%20target%3D%22_blank%22%3E%u4E3B%u9898%u5B9A%u5236%3C/a%3E%u3002%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u63CF%u8FF0%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E@circle-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E100px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@circle-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@blue%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@circle-layer-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@white%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@circle-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@text-color%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@circle-text-font-weight%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@font-weight-bold%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@circle-text-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@font-size-md%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@circle-text-line-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@line-height-md%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")),n={components:{},data:function(){return{content:u}},mounted:function(){var s=this,C=[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5"));C.forEach((function(C){C.addEventListener("click",s.scrollToAnchor)}))},methods:{scrollToAnchor:function(s){s.target.id&&this.$router.push({name:this.$route.name,hash:"#"+s.target.id})}}},l=n,e=E("2be6"),c=Object(e["a"])(l,t,a,!1,null,null,null);C["default"]=c.exports}}]);