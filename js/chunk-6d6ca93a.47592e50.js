(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d6ca93a","chunk-2d0b2ca0"],{2639:function(t,e,n){"use strict";n.r(e),n.d(e,"B",(function(){return l})),n.d(e,"D",(function(){return s})),n.d(e,"E",(function(){return d})),n.d(e,"R",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return r}));var o="#ee0a24",i="glue-hairline",c="".concat(i,"--left"),l="".concat(i,"--bottom"),a="".concat(i,"--surround"),u="".concat(i,"--top-bottom"),r="".concat(i,"-unset--top-bottom"),s=300,d="linear"},"81bd":function(t,e,n){"use strict";n.r(e),n.d(e,"glue_contact_list",(function(){return l}));n("d86f"),n("868d"),n("cfce");var o=n("2964"),i=n("2639"),c=".glue-contact-list{-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;padding-bottom:80px}.glue-contact-list__item{padding:16px}.glue-contact-list__item-value{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-right:32px;padding-left:8px}.glue-contact-list__item-tag{-ms-flex:none;flex:none;margin-left:8px;padding-top:0;padding-bottom:0;line-height:1.4em}.glue-contact-list__group{-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch}.glue-contact-list__edit{font-size:16px}.glue-contact-list__bottom{position:fixed;right:0;bottom:0;left:0;z-index:999;padding:0 16px;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);background-color:#fff}.glue-contact-list__add{height:40px;margin:5px 0}",l=function(){function t(t){var e=this;Object(o["r"])(this,t),this.modelValue=null,this.renderItem=function(t,n){console.log(n);var c=function(){},l=function(){return Object(o["h"])("glue-radio",{name:t.id,iconSize:16,checkedColor:i["R"]})},a=function(){return Object(o["h"])("glue-icon",{name:"edit",class:"glue-contact-list__edit",onClick:function(t){t.stopPropagation()}})},u=function(){var n=["".concat(t.name,"，").concat(t.tel)];return t.isDefault&&e.defaultTagText&&n.push(Object(o["h"])("glue-tag",{type:"danger",round:!0,class:"glue-contact-list__item-tag"},e.defaultTagText)),n};return Object(o["h"])("glue-cell",{"v-slots":{icon:a,default:u,"right-icon":l},key:t.id,isLink:!0,center:!0,class:"glue-contact-list__item glue-contact-list__item-value",onClick:c})}}return t.prototype.render=function(){return Object(o["h"])(o["H"],{class:"glue-contact-list"},Object(o["h"])("glue-radio-group",{"model-value":this.modelValue,class:"glue-contact-list__group"},this.list&&this.list.map(this.renderItem)),Object(o["h"])("div",{class:"glue-contact-list__bottom"},Object(o["h"])("glue-button",{round:!0,block:!0,type:"danger",class:"glue-contact-list__add",text:this.addText||"添加文本",onClick:function(){}})))},t}();l.style=c}}]);