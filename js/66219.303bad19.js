"use strict";(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[66219],{66219:function(e,t,i){i.r(t),i.d(t,{default:function(){return u}});var l=function(){var e=this,t=e._self._c;return t("DemoSection",[t("DemoBlock",{attrs:{title:e.basicUsage}},[t("glue-swipe",{attrs:{autoplay:3e3,"indicator-color":"white"}},[t("glue-swipe-item",[e._v("1")]),t("glue-swipe-item",[e._v("2")]),t("glue-swipe-item",[e._v("3")]),t("glue-swipe-item",[e._v("4")])],1)],1),t("DemoBlock",{attrs:{title:e.title2}},[t("glue-swipe",{attrs:{autoplay:3e3}},e._l(e.images,(function(e,i){return t("glue-swipe-item",{key:i},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"image"}]})])})),1)],1),t("DemoBlock",{attrs:{title:e.title3}},[t("glue-swipe",{attrs:{"indicator-color":"white"},on:{change:e.onChange1}},[t("glue-swipe-item",[e._v("1")]),t("glue-swipe-item",[e._v("2")]),t("glue-swipe-item",[e._v("3")]),t("glue-swipe-item",[e._v("4")])],1)],1),t("DemoBlock",{attrs:{title:e.title4}},[t("glue-swipe",{staticClass:"demo-swipe--vertical",staticStyle:{height:"200px"},attrs:{vertical:"",autoplay:3e3,"indicator-color":"white"}},[t("glue-swipe-item",[e._v("1")]),t("glue-swipe-item",[e._v("2")]),t("glue-swipe-item",[e._v("3")]),t("glue-swipe-item",[e._v("4")])],1)],1),t("DemoBlock",{attrs:{title:e.title5}},[t("glue-swipe",{attrs:{width:300,loop:!1,"indicator-color":"white"}},[t("glue-swipe-item",[e._v("1")]),t("glue-swipe-item",[e._v("2")]),t("glue-swipe-item",[e._v("3")]),t("glue-swipe-item",[e._v("4")])],1)],1),t("DemoBlock",{attrs:{title:e.title6}},[t("glue-swipe",{on:{change:e.onChange2},scopedSlots:e._u([{key:"indicator",fn:function(){return[t("div",{staticClass:"custom-indicator"},[e._v(e._s(e.current+1)+"/4")])]},proxy:!0}])},[t("glue-swipe-item",[e._v("1")]),t("glue-swipe-item",[e._v("2")]),t("glue-swipe-item",[e._v("3")]),t("glue-swipe-item",[e._v("4")])],1)],1)],1)},s=[],a={data(){return{basicUsage:"基础用法",title2:"图片懒加载",title3:"监听 change 事件",title4:"纵向滚动",title5:"自定义滑块大小",title6:"自定义指示器",message:"当前 Swipe 索引：",current:0,images:["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg","https://img.yzcdn.cn/vant/apple-4.jpg"]}},methods:{onChange1(e){this.$toast(this.message+e)},onChange2(e){this.current=e}}},n=a,p=i(41902),o=(0,p.Z)(n,l,s,!1,null,null,null),u=o.exports}}]);