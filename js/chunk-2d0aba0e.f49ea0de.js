(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aba0e"],{"15a5":function(E,C,t){"use strict";t.r(C);var u=function(){var E=this,C=E.$createElement,t=E._self._c||C;return t("section",[t("div",{domProps:{innerHTML:E._s(E.content)}})])},d=[],A=(t("8f0b"),t("33ef"),t("868d"),t("fa8c"),unescape("%3Ch1%3EAddressEdit%20%u5730%u5740%u7F16%u8F91%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22jie-shao%22%3E%u4ECB%u7ECD%3C/h3%3E%0A%3Cp%3E%u6536%u8D27%u5730%u5740%u7F16%u8F91%u7EC4%u4EF6%uFF0C%u7528%u4E8E%u65B0%u5EFA%u3001%u66F4%u65B0%u3001%u5220%u9664%u6536%u8D27%u5730%u5740%u3002%3C/p%3E%0A%3C/div%3E%3Ch2%20id%3D%22dai-ma-yan-shi%22%3E%u4EE3%u7801%u6F14%u793A%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22ji-chu-yong-fa%22%3E%u57FA%u7840%u7528%u6CD5%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-address-edit%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aarea-list%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BareaList%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow-postal%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow-delete%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow-set-default%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow-search-result%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Asearch-result%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BsearchResult%26quot%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aarea-columns-placeholder%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%5B%26%23x27%3B%u8BF7%u9009%u62E9%26%23x27%3B%2C%20%26%23x27%3B%u8BF7%u9009%u62E9%26%23x27%3B%2C%20%26%23x27%3B%u8BF7%u9009%u62E9%26%23x27%3B%5D%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Esave%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonSave%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Edelete%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonDelete%26quot%3B%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Echange-detail%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3BonChangeDetail%26quot%3B%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Toast%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvant%26%23x27%3B%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-title%22%3Esetup%3C/span%3E%28%3Cspan%20class%3D%22hljs-params%22%3E%3C/span%3E%29%3C/span%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20searchResult%20%3D%20ref%28%5B%5D%29%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onSave%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%29%20%3D%26gt%3B%3C/span%3E%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bsave%26%23x27%3B%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onDelete%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%29%20%3D%26gt%3B%3C/span%3E%20Toast%28%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bdelete%26%23x27%3B%3C/span%3E%29%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20onChangeDetail%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%28%3Cspan%20class%3D%22hljs-params%22%3Eval%3C/span%3E%29%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C/span%3E%20%28val%29%20%7B%0A%20%20%20%20%20%20%20%20searchResult.value%20%3D%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u9EC4%u9F99%u4E07%u79D1%u4E2D%u5FC3%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eaddress%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3B%u676D%u5DDE%u5E02%u897F%u6E56%u533A%26%23x27%3B%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%3B%0A%20%20%20%20%20%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Eelse%3C/span%3E%20%7B%0A%20%20%20%20%20%20%20%20searchResult.value%20%3D%20%5B%5D%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20onSave%2C%0A%20%20%20%20%20%20onDelete%2C%0A%20%20%20%20%20%20areaList%2C%0A%20%20%20%20%20%20searchResult%2C%0A%20%20%20%20%20%20onChangeDetail%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Earea-list%3C/td%3E%0A%3Ctd%3E%u5730%u533A%u5217%u8868%3C/td%3E%0A%3Ctd%3E%3Cem%3Eobject%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Earea-columns-placeholder%3C/td%3E%0A%3Ctd%3E%u5730%u533A%u9009%u62E9%u5217%u5360%u4F4D%u63D0%u793A%u6587%u5B57%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%5B%5D%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Earea-placeholder%3C/td%3E%0A%3Ctd%3E%u5730%u533A%u8F93%u5165%u6846%u5360%u4F4D%u63D0%u793A%u6587%u5B57%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%u9009%u62E9%u7701%20/%20%u5E02%20/%20%u533A%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eaddress-info%3C/td%3E%0A%3Ctd%3E%u6536%u8D27%u4EBA%u4FE1%u606F%u521D%u59CB%u503C%3C/td%3E%0A%3Ctd%3E%3Cem%3EAddressInfo%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%7B%7D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esearch-result%3C/td%3E%0A%3Ctd%3E%u8BE6%u7EC6%u5730%u5740%u641C%u7D22%u7ED3%u679C%3C/td%3E%0A%3Ctd%3E%3Cem%3ESearchResult%5B%5D%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-postal%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u90AE%u653F%u7F16%u7801%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-delete%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u5220%u9664%u6309%u94AE%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-set-default%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u9ED8%u8BA4%u5730%u5740%u680F%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-search-result%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u641C%u7D22%u7ED3%u679C%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-area%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u5730%u533A%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-detail%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u8BE6%u7EC6%u5730%u5740%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisable-area%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u7981%u7528%u5730%u533A%u9009%u62E9%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esave-button-text%3C/td%3E%0A%3Ctd%3E%u4FDD%u5B58%u6309%u94AE%u6587%u5B57%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%u4FDD%u5B58%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edelete-button-text%3C/td%3E%0A%3Ctd%3E%u5220%u9664%u6309%u94AE%u6587%u5B57%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%u5220%u9664%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edetail-rows%3C/td%3E%0A%3Ctd%3E%u8BE6%u7EC6%u5730%u5740%u8F93%u5165%u6846%u884C%u6570%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E1%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edetail-maxlength%3C/td%3E%0A%3Ctd%3E%u8BE6%u7EC6%u5730%u5740%u6700%u5927%u957F%u5EA6%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E200%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eis-saving%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u4FDD%u5B58%u6309%u94AE%u52A0%u8F7D%u52A8%u753B%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eis-deleting%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u5220%u9664%u6309%u94AE%u52A0%u8F7D%u52A8%u753B%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etel-validator%3C/td%3E%0A%3Ctd%3E%u624B%u673A%u53F7%u683C%u5F0F%u6821%u9A8C%u51FD%u6570%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%20%3D%26gt%3B%20boolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etel-maxlength%3C/td%3E%0A%3Ctd%3E%u624B%u673A%u53F7%u6700%u5927%u957F%u5EA6%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Epostal-validator%3C/td%3E%0A%3Ctd%3E%u90AE%u653F%u7F16%u7801%u683C%u5F0F%u6821%u9A8C%u51FD%u6570%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%20%3D%26gt%3B%20boolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Evalidator%3C/td%3E%0A%3Ctd%3E%u81EA%u5B9A%u4E49%u6821%u9A8C%u51FD%u6570%3C/td%3E%0A%3Ctd%3E%3Cem%3E%28key%2C%20val%29%20%3D%26gt%3B%20string%3C/em%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22events%22%3EEvents%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u56DE%u8C03%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Esave%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u4FDD%u5B58%u6309%u94AE%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Econtent%uFF1A%u8868%u5355%u5185%u5BB9%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Efocus%3C/td%3E%0A%3Ctd%3E%u8F93%u5165%u6846%u805A%u7126%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Ekey%3A%20%u805A%u7126%u7684%u8F93%u5165%u6846%u5BF9%u5E94%u7684%20key%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edelete%3C/td%3E%0A%3Ctd%3E%u786E%u8BA4%u5220%u9664%u5730%u5740%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Econtent%uFF1A%u8868%u5355%u5185%u5BB9%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecancel-delete%3C/td%3E%0A%3Ctd%3E%u53D6%u6D88%u5220%u9664%u5730%u5740%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Econtent%uFF1A%u8868%u5355%u5185%u5BB9%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eselect-search%3C/td%3E%0A%3Ctd%3E%u9009%u4E2D%u641C%u7D22%u7ED3%u679C%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Evalue%3A%20%u641C%u7D22%u7ED3%u679C%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclick-area%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u6536%u4EF6%u5730%u533A%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Echange-area%3C/td%3E%0A%3Ctd%3E%u4FEE%u6539%u6536%u4EF6%u5730%u533A%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Evalues%3A%20%u5730%u533A%u4FE1%u606F%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Echange-detail%3C/td%3E%0A%3Ctd%3E%u4FEE%u6539%u8BE6%u7EC6%u5730%u5740%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Evalue%3A%20%u8BE6%u7EC6%u5730%u5740%u5185%u5BB9%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Echange-default%3C/td%3E%0A%3Ctd%3E%u5207%u6362%u662F%u5426%u4F7F%u7528%u9ED8%u8BA4%u5730%u5740%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3Evalue%3A%20%u662F%u5426%u9009%u4E2D%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22slots%22%3ESlots%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Edefault%3C/td%3E%0A%3Ctd%3E%u5728%u90AE%u653F%u7F16%u7801%u4E0B%u65B9%u63D2%u5165%u5185%u5BB9%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22fang-fa%22%3E%u65B9%u6CD5%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%20ref%20%u53EF%u4EE5%u83B7%u53D6%u5230%20AddressEdit%20%u5B9E%u4F8B%u5E76%u8C03%u7528%u5B9E%u4F8B%u65B9%u6CD5%uFF0C%u8BE6%u89C1%3Ca%20href%3D%22%23/zh-CN/advanced-usage%23zu-jian-shi-li-fang-fa%22%20target%3D%22_blank%22%3E%u7EC4%u4EF6%u5B9E%u4F8B%u65B9%u6CD5%3C/a%3E%u3002%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u65B9%u6CD5%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8FD4%u56DE%u503C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3EsetAddressDetail%3C/td%3E%0A%3Ctd%3E%u8BBE%u7F6E%u8BE6%u7EC6%u5730%u5740%3C/td%3E%0A%3Ctd%3EaddressDetail%3A%20string%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22addressinfo-shu-ju-ge-shi%22%3EAddressInfo%20%u6570%u636E%u683C%u5F0F%3C/h3%3E%0A%3Cp%3E%u6CE8%u610F%uFF1AAddressInfo%20%u4EC5%u4F5C%u4E3A%u521D%u59CB%u503C%u4F20%u5165%uFF0C%u8868%u5355%u6700%u7EC8%u5185%u5BB9%u53EF%u4EE5%u5728%20save%20%u4E8B%u4EF6%u4E2D%u83B7%u53D6%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3Ekey%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eid%3C/td%3E%0A%3Ctd%3E%u6BCF%u6761%u5730%u5740%u7684%u552F%u4E00%u6807%u8BC6%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20string%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ename%3C/td%3E%0A%3Ctd%3E%u6536%u8D27%u4EBA%u59D3%u540D%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etel%3C/td%3E%0A%3Ctd%3E%u6536%u8D27%u4EBA%u624B%u673A%u53F7%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eprovince%3C/td%3E%0A%3Ctd%3E%u7701%u4EFD%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecity%3C/td%3E%0A%3Ctd%3E%u57CE%u5E02%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecounty%3C/td%3E%0A%3Ctd%3E%u533A%u53BF%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EaddressDetail%3C/td%3E%0A%3Ctd%3E%u8BE6%u7EC6%u5730%u5740%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EareaCode%3C/td%3E%0A%3Ctd%3E%u5730%u533A%u7F16%u7801%uFF0C%u901A%u8FC7%3Ccode%3E%u7701%u5E02%u533A%u9009%u62E9%3C/code%3E%u83B7%u53D6%uFF08%u5FC5%u586B%uFF09%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EpostalCode%3C/td%3E%0A%3Ctd%3E%u90AE%u653F%u7F16%u7801%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EisDefault%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u4E3A%u9ED8%u8BA4%u5730%u5740%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22searchresult-shu-ju-ge-shi%22%3ESearchResult%20%u6570%u636E%u683C%u5F0F%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3Ekey%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ename%3C/td%3E%0A%3Ctd%3E%u5730%u540D%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eaddress%3C/td%3E%0A%3Ctd%3E%u8BE6%u7EC6%u5730%u5740%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22sheng-shi-xian-lie-biao-shu-ju-ge-shi%22%3E%u7701%u5E02%u53BF%u5217%u8868%u6570%u636E%u683C%u5F0F%3C/h3%3E%0A%3Cp%3E%u8BF7%u53C2%u8003%20%3Ca%20href%3D%22%23/zh-CN/area%22%20target%3D%22_blank%22%3EArea%3C/a%3E%20%u7EC4%u4EF6%u3002%3C/p%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yang-shi-bian-liang%22%3E%u6837%u5F0F%u53D8%u91CF%3C/h3%3E%0A%3Cp%3E%u7EC4%u4EF6%u63D0%u4F9B%u4E86%u4E0B%u5217%20Less%20%u53D8%u91CF%uFF0C%u53EF%u7528%u4E8E%u81EA%u5B9A%u4E49%u6837%u5F0F%uFF0C%u4F7F%u7528%u65B9%u6CD5%u8BF7%u53C2%u8003%3Ca%20href%3D%22%23/zh-CN/theme%22%20target%3D%22_blank%22%3E%u4E3B%u9898%u5B9A%u5236%3C/a%3E%u3002%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u540D%u79F0%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u63CF%u8FF0%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-edit-padding%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@padding-sm%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-edit-buttons-padding%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@padding-xl%20@padding-base%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-edit-button-margin-bottom%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@padding-sm%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-edit-detail-finish-color%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@blue%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@address-edit-detail-finish-font-size%3C/td%3E%0A%3Ctd%3E%3Ccode%3E@font-size-sm%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")),s={components:{},data:function(){return{content:A}},mounted:function(){var E=this,C=[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5"));C.forEach((function(C){C.addEventListener("click",E.scrollToAnchor)}))},methods:{scrollToAnchor:function(E){E.target.id&&this.$router.push({name:this.$route.name,hash:"#"+E.target.id})}}},e=s,a=t("2be6"),r=Object(a["a"])(e,u,d,!1,null,null,null);C["default"]=r.exports}}]);