(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e59d79a"],{"1b58":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("DemoSection",[e("DemoBlock",{attrs:{title:t.basicUsage}},[e("van-tabbar",{model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[e("van-tabbar-item",{attrs:{icon:"home-o"}},[t._v(t._s(t.tab))]),e("van-tabbar-item",{attrs:{icon:"search"}},[t._v(t._s(t.tab))]),e("van-tabbar-item",{attrs:{icon:"friends-o"}},[t._v(t._s(t.tab))]),e("van-tabbar-item",{attrs:{icon:"setting-o"}},[t._v(t._s(t.tab))])],1)],1),e("DemoBlock",{attrs:{title:t.matchByName}},[e("van-tabbar",{model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("van-tabbar-item",{attrs:{name:"home",icon:"home-o"}},[t._v(" "+t._s(t.tab)+" ")]),e("van-tabbar-item",{attrs:{name:"search",icon:"search"}},[t._v(" "+t._s(t.tab)+" ")]),e("van-tabbar-item",{attrs:{name:"friends",icon:"friends-o"}},[t._v(" "+t._s(t.tab)+" ")]),e("van-tabbar-item",{attrs:{name:"setting",icon:"setting-o"}},[t._v(" "+t._s(t.tab)+" ")])],1)],1),e("DemoBlock",{attrs:{title:t.badge}},[e("van-tabbar",{model:{value:t.active2,callback:function(a){t.active2=a},expression:"active2"}},[e("van-tabbar-item",{attrs:{icon:"home-o"}},[t._v(t._s(t.tab))]),e("van-tabbar-item",{attrs:{icon:"search",dot:""}},[t._v(t._s(t.tab))]),e("van-tabbar-item",{attrs:{icon:"friends-o",badge:"5"}},[t._v(" "+t._s(t.tab)+" ")]),e("van-tabbar-item",{attrs:{icon:"setting-o",badge:"20"}},[t._v(" "+t._s(t.tab)+" ")])],1)],1),e("DemoBlock",{attrs:{title:t.customIcon}},[e("van-tabbar",{model:{value:t.active3,callback:function(a){t.active3=a},expression:"active3"}},[e("van-tabbar-item",{attrs:{badge:"3"},scopedSlots:t._u([{key:"icon",fn:function(a){return[e("img",{attrs:{src:a.active?t.icon.active:t.icon.inactive}})]}}])},[e("span",[t._v(t._s(t.custom))])]),e("van-tabbar-item",{attrs:{icon:"search"}},[t._v(t._s(t.tab))]),e("van-tabbar-item",{attrs:{icon:"setting-o"}},[t._v(t._s(t.tab))])],1)],1),e("DemoBlock",{attrs:{title:t.customColor}},[e("van-tabbar",{attrs:{"active-color":"#ee0a24","inactive-color":"#000"},model:{value:t.active4,callback:function(a){t.active4=a},expression:"active4"}},[e("van-tabbar-item",{attrs:{icon:"home-o"}},[t._v(t._s(t.tab))]),e("van-tabbar-item",{attrs:{icon:"search"}},[t._v(t._s(t.tab))]),e("van-tabbar-item",{attrs:{icon:"friends-o"}},[t._v(t._s(t.tab))]),e("van-tabbar-item",{attrs:{icon:"setting-o"}},[t._v(t._s(t.tab))])],1)],1),e("DemoBlock",{attrs:{title:t.switchEvent}},[e("van-tabbar",{on:{change:t.onChange},model:{value:t.active5,callback:function(a){t.active5=a},expression:"active5"}},[e("van-tabbar-item",{attrs:{icon:"home-o"}},[t._v(t._s(t.tab+1))]),e("van-tabbar-item",{attrs:{icon:"search"}},[t._v(t._s(t.tab+2))]),e("van-tabbar-item",{attrs:{icon:"friends-o"}},[t._v(t._s(t.tab+3))]),e("van-tabbar-item",{attrs:{icon:"setting-o"}},[t._v(t._s(t.tab+4))])],1)],1)],1)},i=[],c=(e("d86f"),{data:function(){return{custom:"自定义",tab:"标签",basicUsage:"基础用法",badge:"徽标提示",customIcon:"自定义图标",customColor:"自定义颜色",matchByName:"通过名称匹配",switchEvent:"监听切换事件",selectTip:"你切换到了",active:0,active2:0,active3:0,active4:0,active5:0,activeName:"home",icon:{active:"https://img.yzcdn.cn/vant/user-active.png",inactive:"https://img.yzcdn.cn/vant/user-inactive.png"}}},methods:{onChange:function(t){this.$notify({type:"primary",message:"".concat(this.selectTip," ").concat(this.tab).concat(t+1)})}}}),s=c,o=(e("44f5"),e("2be6")),r=Object(o["a"])(s,n,i,!1,null,null,null);a["default"]=r.exports},"44f5":function(t,a,e){"use strict";e("5d86")},"5d86":function(t,a,e){}}]);