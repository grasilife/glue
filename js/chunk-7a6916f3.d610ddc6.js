(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a6916f3"],{"0b24":function(t,e,n){},"2e1b":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("DemoSection",[n("van-cell",{attrs:{"is-link":""},nativeOn:{touchstart:function(e){e.stopPropagation(),t.keyboard="default"}}},[t._v(" "+t._s(t.button1)+" ")]),n("van-cell",{attrs:{"is-link":""},nativeOn:{touchstart:function(e){e.stopPropagation(),t.keyboard="custom"}}},[t._v(" "+t._s(t.button2)+" ")]),n("van-cell",{attrs:{"is-link":""},nativeOn:{touchstart:function(e){e.stopPropagation(),t.keyboard="extraKey"}}},[t._v(" "+t._s(t.button3)+" ")]),n("van-cell",{attrs:{"is-link":""},nativeOn:{touchstart:function(e){e.stopPropagation(),t.keyboard="title"}}},[t._v(" "+t._s(t.button4)+" ")]),n("van-cell",{attrs:{"is-link":""},nativeOn:{touchstart:function(e){e.stopPropagation(),t.keyboard="multiExtraKey"}}},[t._v(" "+t._s(t.button5)+" ")]),n("van-cell",{attrs:{"is-link":""},nativeOn:{touchstart:function(e){e.stopPropagation(),t.keyboard="randomKeyOrder"}}},[t._v(" "+t._s(t.button6)+" ")]),n("van-field",{attrs:{readonly:"",clickable:"",value:t.value,label:t.bindValue,placeholder:t.clickToInput},nativeOn:{touchstart:function(e){e.stopPropagation(),t.keyboard="bindValue"}}}),n("van-number-keyboard",{attrs:{show:"default"===t.keyboard},on:{blur:function(e){t.keyboard=""},input:t.onInput,delete:t.onDelete}}),n("van-number-keyboard",{attrs:{show:"custom"===t.keyboard,"close-button-text":t.close,theme:"custom","extra-key":"."},on:{blur:function(e){t.keyboard=""},input:t.onInput,delete:t.onDelete}}),n("van-number-keyboard",{attrs:{show:"extraKey"===t.keyboard,"close-button-text":t.close,"extra-key":"X"},on:{blur:function(e){t.keyboard=""},input:t.onInput,delete:t.onDelete}}),n("van-number-keyboard",{attrs:{show:"title"===t.keyboard,"close-button-text":t.close,title:t.title,"extra-key":"."},on:{blur:function(e){t.keyboard=""},input:t.onInput,delete:t.onDelete}}),n("van-number-keyboard",{attrs:{show:"multiExtraKey"===t.keyboard,"close-button-text":t.close,theme:"custom","extra-key":["00","."]},on:{blur:function(e){t.keyboard=""},input:t.onInput,delete:t.onDelete}}),n("van-number-keyboard",{attrs:{show:"randomKeyOrder"===t.keyboard,"random-key-order":""},on:{blur:function(e){t.keyboard=""},input:t.onInput,delete:t.onDelete}}),n("van-number-keyboard",{attrs:{show:"bindValue"===t.keyboard,maxlength:"6"},on:{blur:function(e){t.keyboard=""}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},a=[],r=(n("d86f"),{data:function(){return{basicUsage:"基础用法",close:"完成",input:"输入",title:"键盘标题",button1:"弹出默认键盘",button2:"弹出带右侧栏的键盘",button3:"弹出身份证号键盘",button4:"弹出带标题的键盘",button5:"弹出配置多个按键的键盘",button6:"弹出配置随机数字的键盘",extraKey:"左下角按键内容",bindValue:"双向绑定",clickToInput:"点此输入",multiExtraKey:"配置多个按键",randomKeyOrder:"随机数字键盘",value:"",keyboard:"default"}},methods:{onInput:function(t){this.$toast("".concat(this.input,": ").concat(t))},onDelete:function(){this.$toast(this.delete)}}}),u=r,l=(n("4a92"),n("2be6")),i=Object(l["a"])(u,o,a,!1,null,null,null);e["default"]=i.exports},"4a92":function(t,e,n){"use strict";n("0b24")}}]);