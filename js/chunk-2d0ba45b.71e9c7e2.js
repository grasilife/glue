(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba45b"],{3701:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("DemoSection",[n("DemoBlock",{attrs:{title:t.basicUsage}},[n("glue-nav-bar",{attrs:{title:t.title,"left-text":t.back,"right-text":t.button,"left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}})],1),n("DemoBlock",{attrs:{title:t.useSlot}},[n("van-nav-bar",{attrs:{title:t.title,"left-text":t.back,"left-arrow":""},scopedSlots:t._u([{key:"right",fn:function(){return[n("van-icon",{attrs:{name:"search",size:"18"}})]},proxy:!0}])})],1)],1)},o=[],a={data:function(){return{button:"按钮",title:"标题",basicUsage:"基础用法",useSlot:"使用插槽",back:"返回"}},methods:{onClickLeft:function(){this.$toast(this.back)},onClickRight:function(){this.$toast(this.button)}}},c=a,l=n("2be6"),s=Object(l["a"])(c,i,o,!1,null,null,null);e["default"]=s.exports}}]);