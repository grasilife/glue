(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8530cebc"],{"176b":function(t,i,n){"use strict";n("1b5f")},"1b5f":function(t,i,n){},aec6:function(t,i,n){"use strict";n.r(i);var c=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("demo-section",[n("demo-block",{attrs:{title:t.basicUsage}},[n("van-submit-bar",{attrs:{price:3050,"button-text":t.submit},on:{submit:t.onClickButton}})],1),n("demo-block",{attrs:{title:t.disabled}},[n("van-submit-bar",{attrs:{disabled:"",price:3050,"button-text":t.submit,tip:t.tip1,"tip-icon":"info-o"},on:{submit:t.onClickButton}})],1),n("demo-block",{attrs:{title:t.loadingStatus}},[n("van-submit-bar",{attrs:{loading:"",price:3050,"button-text":t.submit},on:{submit:t.onClickButton}})],1),n("demo-block",{attrs:{title:t.advancedUsage}},[n("van-submit-bar",{attrs:{price:3050,"button-text":t.submit},on:{submit:t.onClickButton},scopedSlots:t._u([{key:"tip",fn:function(){return[t._v(" "+t._s(t.tip2)+" "),n("span",{staticClass:"edit-address",on:{click:t.onClickLink}},[t._v(" "+t._s(t.tip3)+" ")])]},proxy:!0}])},[n("van-checkbox",{model:{value:t.checked,callback:function(i){t.checked=i},expression:"checked"}},[t._v(t._s(t.check))])],1)],1)],1)},e=[],s={data:function(){return{advancedUsage:"高级用法",disabled:"禁用",loadingStatus:"加载状态",basicUsage:"基础用法",submit:"提交订单",tip1:"你的收货地址不支持同城送, 我们已为你推荐快递",tip2:"你的收货地址不支持同城送, ",tip3:"修改地址",check:"全选",clickButton:"点击按钮",clickLink:"修改地址",checked:!0}},methods:{onClickButton:function(){this.$toast(this.clickButton)},onClickLink:function(){this.$toast(this.clickLink)}}},o=s,a=(n("176b"),n("2be6")),u=Object(a["a"])(o,c,e,!1,null,null,null);i["default"]=u.exports}}]);