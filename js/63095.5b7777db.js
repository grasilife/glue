"use strict";(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[63095],{63095:function(e,t,i){i.r(t),i.d(t,{default:function(){return f}});var n=function(){var e=this,t=e._self._c;return t("DemoSection",[t("van-tabs",[t("van-tab",{attrs:{title:e.basicUsage}},[t("glue-list",{attrs:{loading:e.list[0].loading,finished:e.list[0].finished,"finished-text":e.finishedText},on:{glueLoad:function(t){return e.onLoad(0)}}},e._l(e.list[0].items,(function(e){return t("glue-cell",{key:e,attrs:{gtitle:e}})})),1)],1),t("van-tab",{attrs:{title:e.errorInfo}},[t("glue-list",{attrs:{loading:e.list[1].loading,finished:e.list[1].finished,error:e.list[1].error,"error-text":e.errorText},on:{glueLoad:function(t){return e.onLoad(1)}}},e._l(e.list[1].items,(function(e){return t("glue-cell",{key:e,attrs:{gtitle:e}})})),1)],1),t("van-tab",{attrs:{title:e.pullRefresh}},[t("van-pull-refresh",{attrs:{loading:e.list[2].refreshing},on:{refresh:function(t){return e.onRefresh(2)}}},[t("glue-list",{attrs:{loading:e.list[2].loading,finished:e.list[2].finished,"finished-text":e.finishedText},on:{glueLoad:function(t){return e.onLoad(2)}}},e._l(e.list[2].items,(function(e){return t("glue-cell",{key:e,attrs:{gtitle:e}})})),1)],1)],1)],1)],1)},r=[],s=(i(29045),{data(){return{basicUsage:"基础用法",errorInfo:"错误提示",errorText:"请求失败，点击重新加载",pullRefresh:"下拉刷新",finishedText:"没有更多了",list:[{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1}]}},methods:{onLoad(e){const t=this.list[e];t.loading=!0,setTimeout((()=>{t.refreshing&&(t.items=[],t.refreshing=!1);for(let e=0;e<10;e++){const e=t.items.length+1;t.items.push(e<10?"0"+e:e)}t.loading=!1,console.log(t.loading,"list.loading"),t.refreshing=!1,1!==e||10!==t.items.length||t.error?t.error=!1:t.error=!0,t.items.length>=40&&(t.finished=!0)}),1e3)},onRefresh(e){this.list[e].finished=!1,this.onLoad(e)}}}),l=s,o=i(41902),a=(0,o.Z)(l,n,r,!1,null,null,null),f=a.exports}}]);