"use strict";(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[90813],{90813:function(e,t,c){c.r(t),c.d(t,{default:function(){return h}});var l=function(){var e=this,t=e._self._c;return t("DemoSection",[t("DemoBlock",{attrs:{title:e.basicUsage}},[t("glue-switch",{attrs:{value:e.checked},on:{glueChange:function(t){e.checked=!e.checked}}})],1),t("DemoBlock",{attrs:{title:e.disabled}},[t("glue-switch",{attrs:{value:e.checked,disabled:""},on:{glueChange:function(t){e.checked=!e.checked}}})],1),t("DemoBlock",{attrs:{title:e.loadingStatus}},[t("glue-switch",{attrs:{value:e.checked,loading:""},on:{glueChange:function(t){e.checked=!e.checked}}})],1),t("DemoBlock",{attrs:{title:e.customSize}},[t("glue-switch",{attrs:{value:e.checked2,size:"24px"},on:{glueChange:function(t){e.checked2=!e.checked2}}})],1),t("DemoBlock",{attrs:{title:e.customColor}},[t("glue-switch",{attrs:{value:e.checked3,"active-color":"#ee0a24","inactive-color":"#dcdee0"},on:{glueChange:function(t){e.checked3=!e.checked3}}})],1),t("DemoBlock",{attrs:{title:e.withCell}},[t("glue-cell",{attrs:{center:"",title:e.title,"right-icon":"#slot"}},[t("div",{attrs:{slot:"rightIcon"},slot:"rightIcon"},[t("glue-switch",{attrs:{value:e.checked5,size:"24"},on:{glueChange:function(t){e.checked5=!e.checked5}}})],1)])],1)],1)},o=[],i={data(){return{disabled:"禁用",loadingStatus:"加载状态",basicUsage:"基础用法",title:"标题",confirm:"提醒",message:"是否切换开关？",withCell:"搭配单元格使用",customSize:"自定义大小",customColor:"自定义颜色",asyncControl:"异步控制",checked:!0,checked2:!0,checked3:!0,checked4:!0,checked5:!0,checked6:!1}},methods:{onInput(e){this.$dialog.confirm({title:this.title,message:this.message}).then((()=>{this.checked4=e}))}}},s=i,n=c(41902),a=(0,n.Z)(s,l,o,!1,null,null,null),h=a.exports}}]);