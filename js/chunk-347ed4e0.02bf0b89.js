(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-347ed4e0"],{"0b38":function(n,t,o){"use strict";o.d(t,"a",(function(){return s}));o("d6de"),o("2d6d"),o("8f0b"),o("75a4"),o("16d1"),o("f8a5"),o("fa8c");var e=o("ce37");function c(n,t){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.push.apply(o,e)}return o}function s(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){Object(e["a"])(n,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))}))}return n}},"16d1":function(n,t,o){var e=o("6b1d"),c=o("d4cb"),s=o("a03e"),i=o("378c"),r=o("185a"),u=o("dac6");e({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(n){var t,o,e=i(n),c=r.f,a=s(e),p={},d=0;while(a.length>d)o=c(e,t=a[d++]),void 0!==o&&u(p,t,o);return p}})},"75a4":function(n,t,o){var e=o("6b1d"),c=o("72df"),s=o("378c"),i=o("185a").f,r=o("d4cb"),u=c((function(){i(1)})),a=!r||u;e({target:"Object",stat:!0,forced:a,sham:!r},{getOwnPropertyDescriptor:function(n,t){return i(s(n),t)}})},c094:function(n,t,o){"use strict";o.r(t);var e=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("DemoSection",[o("DemoBlock",{attrs:{title:n.basicUsage}},[o("van-coupon-cell",{attrs:{coupons:n.coupons,"chosen-coupon":n.chosenCoupon},on:{click:function(t){n.showList=!0}}}),o("van-popup",{staticStyle:{height:"90%","padding-top":"4px"},attrs:{round:"",position:"bottom"},model:{value:n.showList,callback:function(t){n.showList=t},expression:"showList"}},[o("van-coupon-list",{attrs:{coupons:n.coupons,"chosen-coupon":n.chosenCoupon,"disabled-coupons":n.disabledCoupons,"show-count":!1},on:{change:n.onChange,exchange:n.onExchange}})],1)],1)],1)},c=[],s=(o("d86f"),o("0b38")),i=o("7c6c"),r={data:function(){return{basicUsage:"基础用法",coupon:{basicUsage:"基础用法",id:1,condition:"无使用门槛\n最多优惠12元",reason:"优惠券不可用原因",value:150,name:"优惠券名称",description:"描述信息",startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"元"},exchange:"兑换成功",showList:!1,chosenCoupon:-1,exchangedCoupons:[]}},computed:{coupons:function(){return[this.coupon,this.discountCoupon].concat(Object(i["a"])(this.exchangedCoupons))},disabledCoupons:function(){return[this.disabledCoupon,this.disabledDiscountCoupon]},discountCoupon:function(){return Object(s["a"])(Object(s["a"])({},this.coupon),{},{id:2,value:12,valueDesc:"8.8",unitDesc:"折"})},disabledCoupon:function(){return Object(s["a"])(Object(s["a"])({},this.coupon),{},{id:3,reason:this.coupon.reason})},disabledDiscountCoupon:function(){return Object(s["a"])(Object(s["a"])({},this.discountCoupon),{},{valueDesc:"1",unitDesc:"折",id:4,reason:this.coupon.reason})}},methods:{onChange:function(n){this.showList=!1,this.chosenCoupon=n},onExchange:function(){this.$toast(this.exchange),this.exchangedCoupons.push(Object(s["a"])(Object(s["a"])({},this.coupon),{},{id:this.randomId()}))},randomId:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:999999;return Math.floor(Math.random()*n)+1}}},u=r,a=o("2be6"),p=Object(a["a"])(u,e,c,!1,null,null,null);t["default"]=p.exports},ce37:function(n,t,o){"use strict";function e(n,t,o){return t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n}o.d(t,"a",(function(){return e}))}}]);