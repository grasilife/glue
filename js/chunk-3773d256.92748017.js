(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3773d256"],{"50e1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("2aa5"),n("32f5");function i(t){return t=t.replace(/[^-|\d]/g,""),/^((\+86)|(86))?(1)\d{10}$/.test(t)||/^0[0-9-]{10,13}$/.test(t)}},"98ea":function(t,e,n){"use strict";n.r(e),n.d(e,"glue_contact_edit",(function(){return u}));n("868d");var i=n("f5f2"),c=n("30c6"),l=n("341b"),o=n("50e1"),a=".glue-contact-edit{padding:16px}.glue-contact-edit__fields{overflow:hidden;border-radius:4px}.glue-contact-edit__fields .glue-field__label{width:4.1em}.glue-contact-edit__switch-cell{margin-top:10px;padding-top:9px;padding-bottom:9px;border-radius:4px}.glue-contact-edit__buttons{padding:32px 0}.glue-contact-edit .glue-button{margin-bottom:12px;font-size:16px}",s={tel:"",name:""},u=function(){function t(e){var n=this;Object(i["a"])(this,t),Object(l["g"])(this,e),this.contactInfo=Object.assign({},s),this.telValidator=o["a"],this.contact=Object.assign(Object.assign({},s),this.contactInfo),this.onSave=function(){},this.onDelete=function(){},this.renderButtons=function(){return Object(l["e"])("div",{class:"glue-contact-edit__buttons"},Object(l["e"])("glue-button",{block:!0,round:!0,type:"danger",text:"保存",loading:n.isSaving,nativeType:"submit"}),n.isEdit&&Object(l["e"])("glue-button",{block:!0,round:!0,text:"删除",loading:n.isDeleting,onClick:n.onDelete}))},this.renderSwitch=function(){return Object(l["e"])("glue-switch",{"model-value":n.contact,size:24,onChange:function(t){console.log(t)}})},this.renderSetDefault=function(){if(n.showSetDefault)return Object(l["e"])("glue-cell",{"v-slots":{"right-icon":n.renderSwitch},title:n.setDefaultLabel,class:"glue-contact-edit__switch-cell",border:!1})}}return Object(c["a"])(t,[{key:"render",value:function(){return Object(l["e"])(l["a"],null,Object(l["e"])("glue-form",{class:"glue-contact-edit",onSubmit:this.onSave},Object(l["e"])("div",{class:"glue-contact-edit__fields"},Object(l["e"])("glue-field",{"v-model":this.contact.name,clearable:!0,label:"名字",rules:[{required:!0,message:"名称无效"}],maxlength:"30",placeholder:"空"}),Object(l["e"])("glue-field",{"v-model":this.contact.tel,clearable:!0,type:"tel",label:"电话",rules:[{validator:this.telValidator,message:"电话验证"}],placeholder:"无电话"})),this.renderSetDefault(),this.renderButtons()))}}]),t}();u.style=a}}]);