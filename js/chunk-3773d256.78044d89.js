(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3773d256"],{"50e1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("2aa5"),n("32f5");function i(e){return e=e.replace(/[^-|\d]/g,""),/^((\+86)|(86))?(1)\d{10}$/.test(e)||/^0[0-9-]{10,13}$/.test(e)}},"98ea":function(e,t,n){"use strict";n.r(t),n.d(t,"glue_contact_edit",(function(){return u}));n("868d");var i=n("f5f2"),c=n("30c6"),l=n("b8e1"),o=n("50e1"),a=".glue-contact-edit{padding:16px}.glue-contact-edit__fields{overflow:hidden;border-radius:4px}.glue-contact-edit__fields .glue-field__label{width:4.1em}.glue-contact-edit__switch-cell{margin-top:10px;padding-top:9px;padding-bottom:9px;border-radius:4px}.glue-contact-edit__buttons{padding:32px 0}.glue-contact-edit .glue-button{margin-bottom:12px;font-size:16px}",s={tel:"",name:""},u=function(){function e(t){var n=this;Object(i["a"])(this,e),Object(l["g"])(this,t),this.contactInfo=Object.assign({},s),this.telValidator=o["a"],this.contact=Object.assign(Object.assign({},s),this.contactInfo),this.onSave=function(){},this.onDelete=function(){},this.renderButtons=function(){return Object(l["e"])("div",{class:"glue-contact-edit__buttons"},Object(l["e"])("glue-button",{block:!0,round:!0,type:"danger",text:"保存",loading:n.isSaving,nativeType:"submit"}),n.isEdit&&Object(l["e"])("glue-button",{block:!0,round:!0,text:"删除",loading:n.isDeleting,onClick:n.onDelete}))},this.renderSwitch=function(){return Object(l["e"])("glue-switch",{"model-value":n.contact,size:24,onChange:function(e){console.log(e)}})},this.renderSetDefault=function(){if(n.showSetDefault)return Object(l["e"])("glue-cell",{"v-slots":{"right-icon":n.renderSwitch},title:n.setDefaultLabel,class:"glue-contact-edit__switch-cell",border:!1})}}return Object(c["a"])(e,[{key:"render",value:function(){return Object(l["e"])(l["a"],null,Object(l["e"])("glue-form",{class:"glue-contact-edit",onSubmit:this.onSave},Object(l["e"])("div",{class:"glue-contact-edit__fields"},Object(l["e"])("glue-field",{"v-model":this.contact.name,clearable:!0,label:"名字",rules:[{required:!0,message:"名称无效"}],maxlength:"30",placeholder:"空"}),Object(l["e"])("glue-field",{"v-model":this.contact.tel,clearable:!0,type:"tel",label:"电话",rules:[{validator:this.telValidator,message:"电话验证"}],placeholder:"无电话"})),this.renderSetDefault(),this.renderButtons()))}}]),e}();u.style=a}}]);