"use strict";(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[41524,74088],{74088:function(t,n,e){e.r(n),e.d(n,{B:function(){return l},D:function(){return s},E:function(){return d},R:function(){return o},a:function(){return i},b:function(){return u},c:function(){return c},d:function(){return a},e:function(){return r}});var o="#ee0a24",i="glue-hairline",c="".concat(i,"--left"),l="".concat(i,"--bottom"),a="".concat(i,"--surround"),u="".concat(i,"--top-bottom"),r="".concat(i,"-unset--top-bottom"),s=300,d="linear"},41524:function(t,n,e){e.r(n),e.d(n,{glue_contact_list:function(){return l}});e(29045);var o=e(83458),i=e(74088),c=".glue-contact-list{-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;padding-bottom:80px}.glue-contact-list__item{padding:16px}.glue-contact-list__item-value{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-right:32px;padding-left:8px}.glue-contact-list__item-tag{-ms-flex:none;flex:none;margin-left:8px;padding-top:0;padding-bottom:0;line-height:1.4em}.glue-contact-list__group{-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch}.glue-contact-list__edit{font-size:16px}.glue-contact-list__bottom{position:fixed;right:0;bottom:0;left:0;z-index:999;padding:0 16px;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);background-color:#fff}.glue-contact-list__add{height:40px;margin:5px 0}",l=function(){function t(t){var n=this;(0,o.r)(this,t),this.renderItem=function(t,e){console.log(e);var c=function(){},l=function(){return(0,o.h)("glue-radio",{name:t.id,iconSize:16,checkedColor:i.R})},a=function(){return(0,o.h)("glue-icon",{name:"edit",class:"glue-contact-list__edit",onClick:function(t){t.stopPropagation()}})},u=function(){var e=["".concat(t.name,"，").concat(t.tel)];return t.isDefault&&n.defaultTagText&&e.push((0,o.h)("glue-tag",{type:"danger",round:!0,class:"glue-contact-list__item-tag"},n.defaultTagText)),e};return(0,o.h)("glue-cell",{"v-slots":{icon:a,default:u,"right-icon":l},key:t.id,isLink:!0,center:!0,class:"glue-contact-list__item glue-contact-list__item-value",onClick:c})},this.list=void 0,this.addText=void 0,this.modelValue=null,this.defaultTagText=void 0}return t.prototype.render=function(){return(0,o.h)(o.H,{class:"glue-contact-list"},(0,o.h)("glue-radio-group",{"model-value":this.modelValue,class:"glue-contact-list__group"},this.list&&this.list.map(this.renderItem)),(0,o.h)("div",{class:"glue-contact-list__bottom"},(0,o.h)("glue-button",{round:!0,block:!0,type:"danger",class:"glue-contact-list__add",text:this.addText||"添加文本",onClick:function(){}})))},t}();l.style=c}}]);