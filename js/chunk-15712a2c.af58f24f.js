(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15712a2c"],{"5a67":function(t,e,a){},"6ba2":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("DemoSection",[a("van-grid",{attrs:{"column-num":2,border:!1}},[a("van-grid-item",[a("h3",{staticClass:"demo-sidebar-title"},[t._v(t._s(t.basicUsage))]),a("van-sidebar",{model:{value:t.activeKey1,callback:function(e){t.activeKey1=e},expression:"activeKey1"}},[a("van-sidebar-item",{attrs:{title:t.title}}),a("van-sidebar-item",{attrs:{title:t.title}}),a("van-sidebar-item",{attrs:{title:t.title}})],1)],1),a("van-grid-item",[a("h3",{staticClass:"demo-sidebar-title"},[t._v(t._s(t.showBadge))]),a("van-sidebar",{model:{value:t.activeKey2,callback:function(e){t.activeKey2=e},expression:"activeKey2"}},[a("van-sidebar-item",{attrs:{title:t.title,dot:""}}),a("van-sidebar-item",{attrs:{title:t.title,badge:"5"}}),a("van-sidebar-item",{attrs:{title:t.title,badge:"99+"}})],1)],1),a("van-grid-item",[a("h3",{staticClass:"demo-sidebar-title"},[t._v(t._s(t.disabled))]),a("van-sidebar",{model:{value:t.activeKey3,callback:function(e){t.activeKey3=e},expression:"activeKey3"}},[a("van-sidebar-item",{attrs:{title:t.title}}),a("van-sidebar-item",{attrs:{title:t.title,disabled:""}}),a("van-sidebar-item",{attrs:{title:t.title}})],1)],1),a("van-grid-item",[a("h3",{staticClass:"demo-sidebar-title"},[t._v(t._s(t.changeEvent))]),a("van-sidebar",{on:{change:t.onChange},model:{value:t.activeKey4,callback:function(e){t.activeKey4=e},expression:"activeKey4"}},[a("van-sidebar-item",{attrs:{title:t.title+1}}),a("van-sidebar-item",{attrs:{title:t.title+2}}),a("van-sidebar-item",{attrs:{title:t.title+3}})],1)],1)],1)],1)},s=[],n=(a("d86f"),{data:function(){return{basicUsage:"基础用法",title:"标签名",showBadge:"徽标提示",disabled:"禁用选项",changeEvent:"监听切换事件",selectTip:"你切换到了",activeKey1:0,activeKey2:0,activeKey3:0,activeKey4:0}},methods:{onChange:function(t){this.$notify({type:"primary",message:"".concat(this.selectTip," ").concat(this.title).concat(t+1)})}}}),l=n,c=(a("a473"),a("2be6")),r=Object(c["a"])(l,i,s,!1,null,null,null);e["default"]=r.exports},a473:function(t,e,a){"use strict";a("5a67")}}]);