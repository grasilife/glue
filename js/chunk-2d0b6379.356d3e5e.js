(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6379"],{"1be7":function(E,C,t){"use strict";t.r(C);var s=function(){var E=this,C=E.$createElement,t=E._self._c||C;return t("section",[t("div",{domProps:{innerHTML:E._s(E.content)}})])},d=[],u=(t("8f0b"),t("33ef"),t("868d"),t("fa8c"),unescape("%3Ch1%3EAddressList%20%u5730%u5740%u5217%u8868%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22jie-shao%22%3E%u4ECB%u7ECD%3C/h3%3E%0A%3Cp%3E%u5C55%u793A%u6536%u8D27%u5730%u5740%u5217%u8868%u3002%3C/p%3E%0A%3C/div%3E%3Ch2%20id%3D%22dai-ma-yan-shi%22%3E%u4EE3%u7801%u6F14%u793A%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22ji-chu-yong-fa%22%3E%u57FA%u7840%u7528%u6CD5%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-address-list%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BchosenAddressId%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Alist%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Blist%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Adisabled-list%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BdisabledList%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edisabled-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u4EE5%u4E0B%u5730%u5740%u8D85%u51FA%u914D%u9001%u8303%u56F4%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edefault-tag-text%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%u9ED8%u8BA4%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eadd%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonAdd%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eedit%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonEdit%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Toast%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20chosenAddressId%20%3D%20ref%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B1%26%23x27%3B%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20list%20%3D%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B1%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u5F20%u4E09%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etel%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B13000000000%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eaddress%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6D59%u6C5F%u7701%u676D%u5DDE%u5E02%u897F%u6E56%u533A%u6587%u4E09%u8DEF%20138%20%u53F7%u4E1C%u65B9%u901A%u4FE1%u5927%u53A6%207%20%u697C%20501%20%u5BA4%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EisDefault%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B2%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u674E%u56DB%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etel%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B1310000000%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eaddress%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6D59%u6C5F%u7701%u676D%u5DDE%u5E02%u62F1%u5885%u533A%u83AB%u5E72%u5C71%u8DEF%2050%20%u53F7%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20disabledList%20%3D%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B3%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u738B%u4E94%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etel%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B1320000000%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eaddress%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u6D59%u6C5F%u7701%u676D%u5DDE%u5E02%u6EE8%u6C5F%u533A%u6C5F%u5357%u5927%u9053%2015%20%u53F7%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onAdd%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%29%20%3D%26gt%3B%3C/span%3E%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u65B0%u589E%u5730%u5740%26%23x27%3B%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onEdit%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%3Cspan%20class%3D%22hljs-params%22%3Eitem%2C%20index%3C/span%3E%29%20%3D%26gt%3B%3C/span%3E%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u7F16%u8F91%u5730%u5740%3A%26%23x27%3B%3C/span%3E%20+%20index%29%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20list%2C%0A%20%20%20%20%20%20onAdd%2C%0A%20%20%20%20%20%20onEdit%2C%0A%20%20%20%20%20%20disabledList%2C%0A%20%20%20%20%20%20chosenAddressId%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ev-model%3C/td%3E%0A%3Ctd%3E%u5F53%u524D%u9009%u4E2D%u5730%u5740%u7684%20id%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Elist%3C/td%3E%0A%3Ctd%3E%u5730%u5740%u5217%u8868%3C/td%3E%0A%3Ctd%3E%3Cem%3EAddress%5B%5D%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisabled-list%3C/td%3E%0A%3Ctd%3E%u4E0D%u53EF%u914D%u9001%u5730%u5740%u5217%u8868%3C/td%3E%0A%3Ctd%3E%3Cem%3EAddress%5B%5D%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisabled-text%3C/td%3E%0A%3Ctd%3E%u4E0D%u53EF%u914D%u9001%u63D0%u793A%u6587%u6848%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eswitchable%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5141%u8BB8%u5207%u6362%u5730%u5740%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eadd-button-text%3C/td%3E%0A%3Ctd%3E%u5E95%u90E8%u6309%u94AE%u6587%u5B57%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%u65B0%u589E%u5730%u5740%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edefault-tag-text%3C/td%3E%0A%3Ctd%3E%u9ED8%u8BA4%u5730%u5740%u6807%u7B7E%u6587%u5B57%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22events%22%3EEvents%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u56DE%u8C03%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eadd%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u65B0%u589E%u6309%u94AE%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eedit%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u7F16%u8F91%u6309%u94AE%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Eitem%3A%20%u5730%u5740%u5BF9%u8C61%uFF0Cindex%3A%20%u7D22%u5F15%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eselect%3C/td%3E%0A%3Ctd%3E%u5207%u6362%u9009%u4E2D%u7684%u5730%u5740%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Eitem%3A%20%u5730%u5740%u5BF9%u8C61%uFF0Cindex%3A%20%u7D22%u5F15%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eedit-disabled%3C/td%3E%0A%3Ctd%3E%u7F16%u8F91%u4E0D%u53EF%u914D%u9001%u7684%u5730%u5740%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Eitem%3A%20%u5730%u5740%u5BF9%u8C61%uFF0Cindex%3A%20%u7D22%u5F15%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eselect-disabled%3C/td%3E%0A%3Ctd%3E%u9009%u4E2D%u4E0D%u53EF%u914D%u9001%u7684%u5730%u5740%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Eitem%3A%20%u5730%u5740%u5BF9%u8C61%uFF0Cindex%3A%20%u7D22%u5F15%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclick-item%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u4EFB%u610F%u5730%u5740%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Eitem%3A%20%u5730%u5740%u5BF9%u8C61%uFF0Cindex%3A%20%u7D22%u5F15%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22address-shu-ju-jie-gou%22%3EAddress%20%u6570%u636E%u7ED3%u6784%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u952E%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eid%3C/td%3E%0A%3Ctd%3E%u6BCF%u6761%u5730%u5740%u7684%u552F%u4E00%u6807%u8BC6%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ename%3C/td%3E%0A%3Ctd%3E%u6536%u8D27%u4EBA%u59D3%u540D%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etel%3C/td%3E%0A%3Ctd%3E%u6536%u8D27%u4EBA%u624B%u673A%u53F7%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eaddress%3C/td%3E%0A%3Ctd%3E%u6536%u8D27%u5730%u5740%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EisDefault%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u4E3A%u9ED8%u8BA4%u5730%u5740%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22slots%22%3ESlots%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Edefault%3C/td%3E%0A%3Ctd%3E%u5728%u5217%u8868%u4E0B%u65B9%u63D2%u5165%u5185%u5BB9%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etop%3C/td%3E%0A%3Ctd%3E%u5728%u9876%u90E8%u63D2%u5165%u5185%u5BB9%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eitem-bottom%3C/td%3E%0A%3Ctd%3E%u5728%u5217%u8868%u9879%u5E95%u90E8%u63D2%u5165%u5185%u5BB9%3C/td%3E%0A%3Ctd%3E%u5217%u8868%u9879%u7684%u503C%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yang-shi-bian-liang%22%3E%u6837%u5F0F%u53D8%u91CF%3C/h3%3E%0A%3Cp%3E%u7EC4%u4EF6%u63D0%u4F9B%u4E86%u4E0B%u5217%20Less%20%u53D8%u91CF%uFF0C%u53EF%u7528%u4E8E%u81EA%u5B9A%u4E49%u6837%u5F0F%uFF0C%u4F7F%u7528%u65B9%u6CD5%u8BF7%u53C2%u8003%3Ca%20href%3D%22%23/zh-CN/theme%22%20target%3D%22_blank%22%3E%u4E3B%u9898%u5B9A%u5236%3C/a%3E%u3002%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u63CF%u8FF0%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-padding%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@padding-sm%20@padding-sm%2080px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-disabled-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-6%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-disabled-text-padding%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@padding-base%20*%205%200%20@padding-md%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-disabled-text-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@font-size-md%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-disabled-text-line-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@line-height-md%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-add-button-z-index%3C/td%3E%0A%3Ctd%3E%3Ccode%3E999%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-item-padding%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@padding-sm%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-item-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@text-color%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-item-disabled-text-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@gray-5%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-item-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E13px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-item-line-height%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@line-height-sm%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-item-radio-icon-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@red%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-list-edit-icon-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E20px%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")),A={components:{},data:function(){return{content:u}},mounted:function(){var E=this,C=[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5"));C.forEach((function(C){C.addEventListener("click",E.scrollToAnchor)}))},methods:{scrollToAnchor:function(E){E.target.id&&this.$router.push({name:this.$route.name,hash:"#"+E.target.id})}}},a=A,e=t("2be6"),n=Object(e["a"])(a,s,d,!1,null,null,null);C["default"]=n.exports}}]);