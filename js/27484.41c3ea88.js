"use strict";(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[27484],{19782:function(e,t,o){o.d(t,{I:function(){return i}});function s(e){return void 0!==e&&null!==e}function a(e){return null!==e&&"object"===typeof e}const{hasOwnProperty:l}=Object.prototype;function n(e,t,o){const n=t[o];s(n)&&(l.call(e,o)&&a(n)?e[o]=c(Object(e[o]),t[o]):e[o]=n)}function c(e,t){return Object.keys(t).forEach((o=>{n(e,t,o)})),e}function i(e){return Array.isArray(e)?e.map((e=>i(e))):"object"===typeof e?c({},e):e}},27484:function(e,t,o){o.r(t),o.d(t,{default:function(){return d}});var s=function(){var e=this,t=e._self._c;return t("DemoSection",[t("DemoBlock",{attrs:{card:"",title:e.basicUsage}},[t("van-field",{attrs:{"is-link":"",readonly:"",label:e.area,placeholder:e.selectArea},on:{click:function(t){e.base.show=!0}},model:{value:e.base.result,callback:function(t){e.$set(e.base,"result",t)},expression:"base.result"}}),t("van-popup",{attrs:{round:"",position:"bottom","get-container":"body","safe-area-inset-bottom":""},model:{value:e.base.show,callback:function(t){e.$set(e.base,"show",t)},expression:"base.show"}},[t("van-cascader",{attrs:{title:e.selectArea,options:e.options},on:{close:function(t){e.base.show=!1},finish:function(t){return e.onFinish("base",t)}},model:{value:e.base.value,callback:function(t){e.$set(e.base,"value",t)},expression:"base.value"}})],1)],1),t("DemoBlock",{attrs:{card:"",title:e.customColorTitle}},[t("van-field",{attrs:{"is-link":"",readonly:"",label:e.area,placeholder:e.selectArea},on:{click:function(t){e.customColor.show=!0}},model:{value:e.customColor.result,callback:function(t){e.$set(e.customColor,"result",t)},expression:"customColor.result"}}),t("van-popup",{attrs:{round:"",position:"bottom","get-container":"body","safe-area-inset-bottom":""},model:{value:e.customColor.show,callback:function(t){e.$set(e.customColor,"show",t)},expression:"customColor.show"}},[t("van-cascader",{attrs:{title:e.selectArea,options:e.options,"active-color":"#1989fa"},on:{close:function(t){e.customColor.show=!1},finish:function(t){return e.onFinish("customColor",t)}},model:{value:e.customColor.value,callback:function(t){e.$set(e.customColor,"value",t)},expression:"customColor.value"}})],1)],1),t("DemoBlock",{attrs:{card:"",title:e.asyncOptions}},[t("van-field",{attrs:{"is-link":"",readonly:"",label:e.area,placeholder:e.selectArea},on:{click:function(t){e.async.show=!0}},model:{value:e.async.result,callback:function(t){e.$set(e.async,"result",t)},expression:"async.result"}}),t("van-popup",{attrs:{round:"",position:"bottom","get-container":"body","safe-area-inset-bottom":""},model:{value:e.async.show,callback:function(t){e.$set(e.async,"show",t)},expression:"async.show"}},[t("van-cascader",{attrs:{title:e.selectArea,options:e.async.options},on:{close:function(t){e.async.show=!1},change:e.loadDynamicOptions,finish:function(t){return e.onFinish("async",t)}},model:{value:e.async.value,callback:function(t){e.$set(e.async,"value",t)},expression:"async.value"}})],1)],1),t("DemoBlock",{attrs:{card:"",title:e.customFieldNamesTitle}},[t("van-field",{attrs:{"is-link":"",readonly:"",label:e.area,placeholder:e.selectArea},on:{click:function(t){e.customFieldNames.show=!0}},model:{value:e.customFieldNames.result,callback:function(t){e.$set(e.customFieldNames,"result",t)},expression:"customFieldNames.result"}}),t("van-popup",{attrs:{round:"",position:"bottom","get-container":"body","safe-area-inset-bottom":""},model:{value:e.customFieldNames.show,callback:function(t){e.$set(e.customFieldNames,"show",t)},expression:"customFieldNames.show"}},[t("van-cascader",{attrs:{title:e.selectArea,options:e.customFieldOptions,"field-names":e.fieldNames},on:{close:function(t){e.customFieldNames.show=!1},finish:function(t){return e.onFinish("customFieldNames",t)}},model:{value:e.customFieldNames.value,callback:function(t){e.$set(e.customFieldNames,"value",t)},expression:"customFieldNames.value"}})],1)],1)],1)},a=[],l=[{text:"浙江省",value:"330000",children:[{text:"杭州市",value:"330100",children:[{text:"上城区",value:"330102"},{text:"下城区",value:"330103"},{text:"江干区",value:"330104"}]},{text:"宁波市",value:"330200",children:[{text:"海曙区",value:"330203"},{text:"江北区",value:"330205"},{text:"北仑区",value:"330206"}]},{text:"温州市",value:"330300",children:[{text:"鹿城区",value:"330302"},{text:"龙湾区",value:"330303"},{text:"瓯海区",value:"330304"}]}]},{text:"江苏省",value:"320000",children:[{text:"南京市",value:"320100",children:[{text:"玄武区",value:"320102"},{text:"秦淮区",value:"320104"},{text:"建邺区",value:"320105"}]},{text:"无锡市",value:"320200",children:[{text:"锡山区",value:"320205"},{text:"惠山区",value:"320206"},{text:"滨湖区",value:"320211"}]},{text:"徐州市",value:"320300",children:[{text:"鼓楼区",value:"320302"},{text:"云龙区",value:"320303"},{text:"贾汪区",value:"320305"}]}]}],n=o(19782),c={data(){return{basicUsage:"基础用法",customColorTitle:"自定义颜色",area:"地区",options:l,selectArea:"请选择所在地区",asyncOptions:"异步加载选项",asyncOptions1:[{text:"浙江省",value:"330000",children:[]}],asyncOptions2:[{text:"杭州市",value:"330100"},{text:"宁波市",value:"330200"}],customFieldNamesTitle:"自定义字段名",base:{show:!1,value:"",result:""},customColor:{show:!1,value:null,result:""},async:{show:!1,value:null,result:"",options:[]},customFieldNames:{show:!1,value:null,result:""},fieldNames:{text:"name",value:"code",children:"items"}}},computed:{customFieldOptions(){const e=(0,n.I)(this.options),t=e=>{"text"in e&&(e.name=e.text,delete e.text),"value"in e&&(e.code=e.value,delete e.value),"children"in e&&(e.items=e.children,delete e.children,e.items.forEach(t))};return e.forEach(t),e}},created(){this.async.options=this.asyncOptions1},methods:{loadDynamicOptions({value:e}){"330000"===e&&setTimeout((()=>{this.async.options[0].children=this.asyncOptions2}),500)},onFinish(e,{value:t,selectedOptions:o}){const s=o.map((e=>e.text||e.name)).join("/");this[e]={...this[e],show:!1,value:t,result:s}}}},i=c,u=o(41902),r=(0,u.Z)(i,s,a,!1,null,null,null),d=r.exports}}]);