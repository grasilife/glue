(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24daa236"],{"8bc8":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("DemoSection",[i("van-tabs",[i("van-tab",{attrs:{title:e.basicUsage}},[i("glue-list",{attrs:{loading:e.list[0].loading,finished:e.list[0].finished,"finished-text":e.finishedText},on:{glueLoad:function(t){return e.onLoad(0)}}},e._l(e.list[0].items,(function(e){return i("glue-cell",{key:e,attrs:{title:e}})})),1)],1),i("van-tab",{attrs:{title:e.errorInfo}},[i("glue-list",{attrs:{loading:e.list[1].loading,finished:e.list[1].finished,error:e.list[1].error,"error-text":e.errorText},on:{glueLoad:function(t){return e.onLoad(1)}}},e._l(e.list[1].items,(function(e){return i("glue-cell",{key:e,attrs:{title:e}})})),1)],1),i("van-tab",{attrs:{title:e.pullRefresh}},[i("van-pull-refresh",{attrs:{loading:e.list[2].refreshing},on:{refresh:function(t){return e.onRefresh(2)}}},[i("glue-list",{attrs:{loading:e.list[2].loading,finished:e.list[2].finished,"finished-text":e.finishedText},on:{glueLoad:function(t){return e.onLoad(2)}}},e._l(e.list[2].items,(function(e){return i("glue-cell",{key:e,attrs:{title:e}})})),1)],1)],1)],1)],1)},r=[],s={data:function(){return{basicUsage:"基础用法",errorInfo:"错误提示",errorText:"请求失败，点击重新加载",pullRefresh:"下拉刷新",finishedText:"没有更多了",list:[{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1}]}},methods:{onLoad:function(e){var t=this.list[e];t.loading=!0,setTimeout((function(){t.refreshing&&(t.items=[],t.refreshing=!1);for(var i=0;i<10;i++){var n=t.items.length+1;t.items.push(n<10?"0"+n:n)}t.loading=!1,console.log(t.loading,"list.loading"),t.refreshing=!1,1!==e||10!==t.items.length||t.error?t.error=!1:t.error=!0,t.items.length>=40&&(t.finished=!0)}),1e3)},onRefresh:function(e){this.list[e].finished=!1,this.onLoad(e)}}},l=s,o=(i("c689"),i("2be6")),a=Object(o["a"])(l,n,r,!1,null,null,null);t["default"]=a.exports},c689:function(e,t,i){"use strict";i("f0b8")},f0b8:function(e,t,i){}}]);