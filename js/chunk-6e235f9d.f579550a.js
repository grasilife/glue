(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e235f9d"],{"0b38":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d6de"),n("2d6d"),n("8f0b"),n("75a4"),n("16d1"),n("f8a5"),n("fa8c");var o=n("ce37");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"16d1":function(t,e,n){var o=n("6b1d"),r=n("d4cb"),i=n("a03e"),a=n("378c"),c=n("185a"),s=n("dac6");o({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,n,o=a(t),r=c.f,l=i(o),u={},f=0;while(l.length>f)n=r(o,e=l[f++]),void 0!==n&&s(u,e,n);return u}})},"2d6d":function(t,e,n){"use strict";var o=n("6b1d"),r=n("d054").filter,i=n("189b"),a=n("ce71"),c=i("filter"),s=a("filter");o({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"4e41":function(t,e,n){var o=n("7d53");e.f=o},"62c8":function(t,e,n){"use strict";var o=n("95b2"),r=n("8e5d"),i=n("157c"),a=n("730c"),c=n("433a"),s=n("e3f6"),l=n("b495"),u=n("df8c"),f=n("42c5"),d=n("72df"),v=[].push,p=Math.min,b=4294967295,h=!d((function(){return!RegExp(b,"y")}));o("split",2,(function(t,e,n){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var o=String(a(this)),i=void 0===n?b:n>>>0;if(0===i)return[];if(void 0===t)return[o];if(!r(t))return e.call(o,t,i);var c,s,l,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,h=new RegExp(t.source,d+"g");while(c=f.call(h,o)){if(s=h.lastIndex,s>p&&(u.push(o.slice(p,c.index)),c.length>1&&c.index<o.length&&v.apply(u,c.slice(1)),l=c[0].length,p=s,u.length>=i))break;h.lastIndex===c.index&&h.lastIndex++}return p===o.length?!l&&h.test("")||u.push(""):u.push(o.slice(p)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,r,n):o.call(String(r),e,n)},function(t,r){var a=n(o,t,this,r,o!==e);if(a.done)return a.value;var f=i(t),d=String(this),v=c(f,RegExp),m=f.unicode,y=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(h?"y":"g"),g=new v(h?f:"^(?:"+f.source+")",y),w=void 0===r?b:r>>>0;if(0===w)return[];if(0===d.length)return null===u(g,d)?[d]:[];var x=0,O=0,j=[];while(O<d.length){g.lastIndex=h?O:0;var S,k=u(g,h?d:d.slice(O));if(null===k||(S=p(l(g.lastIndex+(h?0:O)),d.length))===x)O=s(d,O,m);else{if(j.push(d.slice(x,O)),j.length===w)return j;for(var F=1;F<=k.length-1;F++)if(j.push(k[F]),j.length===w)return j;O=x=S}}return j.push(d.slice(x)),j}]}),!h)},"68b8":function(t,e,n){var o=n("6a89");o("iterator")},"6a89":function(t,e,n){var o=n("3e36"),r=n("f1a7"),i=n("4e41"),a=n("abdf").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});r(e,t)||a(e,t,{value:i.f(t)})}},"75a4":function(t,e,n){var o=n("6b1d"),r=n("72df"),i=n("378c"),a=n("185a").f,c=n("d4cb"),s=r((function(){a(1)})),l=!c||s;o({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},"8d0f":function(t,e,n){"use strict";var o=n("6b1d"),r=n("d4cb"),i=n("f498"),a=n("f1a7"),c=n("7526"),s=n("abdf").f,l=n("b634"),u=i.Symbol;if(r&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(d,u);var v=d.prototype=u.prototype;v.constructor=d;var p=v.toString,b="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;s(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=p.call(t);if(a(f,t))return"";var n=b?e.slice(7,-1):e.replace(h,"$1");return""===n?void 0:n}}),o({global:!0,forced:!0},{Symbol:d})}},"8e5d":function(t,e,n){var o=n("7526"),r=n("6a61"),i=n("7d53"),a=i("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}},"918c":function(t,e,n){var o=n("f498"),r=n("130d"),i=n("9531"),a=n("5b12"),c=n("7d53"),s=c("iterator"),l=c("toStringTag"),u=i.values;for(var f in r){var d=o[f],v=d&&d.prototype;if(v){if(v[s]!==u)try{a(v,s,u)}catch(b){v[s]=u}if(v[l]||a(v,l,f),r[f])for(var p in i)if(v[p]!==i[p])try{a(v,p,i[p])}catch(b){v[p]=i[p]}}}},ce37:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return o}))},cfce:function(t,e,n){"use strict";var o=n("6b1d"),r=n("d054").map,i=n("189b"),a=n("ce71"),c=i("map"),s=a("map");o({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},d6de:function(t,e,n){"use strict";var o=n("6b1d"),r=n("f498"),i=n("5428"),a=n("0e93"),c=n("d4cb"),s=n("e7a0"),l=n("4db4"),u=n("72df"),f=n("f1a7"),d=n("c6de"),v=n("7526"),p=n("157c"),b=n("37d1"),h=n("378c"),m=n("083f"),y=n("9618"),g=n("82e8"),w=n("0c47"),x=n("65d0"),O=n("ee58"),j=n("2402"),S=n("185a"),k=n("abdf"),F=n("e129"),N=n("5b12"),P=n("b8ba"),C=n("4cdd"),A=n("332c"),$=n("d687"),E=n("1d8a"),D=n("7d53"),T=n("4e41"),I=n("6a89"),J=n("fa46"),R=n("cdcd"),U=n("d054").forEach,_=A("hidden"),M="Symbol",Q="prototype",W=D("toPrimitive"),q=R.set,z=R.getterFor(M),B=Object[Q],G=r.Symbol,H=i("JSON","stringify"),K=S.f,L=k.f,V=O.f,X=F.f,Y=C("symbols"),Z=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),nt=C("wks"),ot=r.QObject,rt=!ot||!ot[Q]||!ot[Q].findChild,it=c&&u((function(){return 7!=g(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=K(B,e);o&&delete B[e],L(t,e,n),o&&t!==B&&L(B,e,o)}:L,at=function(t,e){var n=Y[t]=g(G[Q]);return q(n,{type:M,tag:t,description:e}),c||(n.description=e),n},ct=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},st=function(t,e,n){t===B&&st(Z,e,n),p(t);var o=m(e,!0);return p(n),f(Y,o)?(n.enumerable?(f(t,_)&&t[_][o]&&(t[_][o]=!1),n=g(n,{enumerable:y(0,!1)})):(f(t,_)||L(t,_,y(1,{})),t[_][o]=!0),it(t,o,n)):L(t,o,n)},lt=function(t,e){p(t);var n=h(e),o=w(n).concat(pt(n));return U(o,(function(e){c&&!ft.call(n,e)||st(t,e,n[e])})),t},ut=function(t,e){return void 0===e?g(t):lt(g(t),e)},ft=function(t){var e=m(t,!0),n=X.call(this,e);return!(this===B&&f(Y,e)&&!f(Z,e))&&(!(n||!f(this,e)||!f(Y,e)||f(this,_)&&this[_][e])||n)},dt=function(t,e){var n=h(t),o=m(e,!0);if(n!==B||!f(Y,o)||f(Z,o)){var r=K(n,o);return!r||!f(Y,o)||f(n,_)&&n[_][o]||(r.enumerable=!0),r}},vt=function(t){var e=V(h(t)),n=[];return U(e,(function(t){f(Y,t)||f($,t)||n.push(t)})),n},pt=function(t){var e=t===B,n=V(e?Z:h(t)),o=[];return U(n,(function(t){!f(Y,t)||e&&!f(B,t)||o.push(Y[t])})),o};if(s||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),n=function(t){this===B&&n.call(Z,t),f(this,_)&&f(this[_],e)&&(this[_][e]=!1),it(this,e,y(1,t))};return c&&rt&&it(B,e,{configurable:!0,set:n}),at(e,t)},P(G[Q],"toString",(function(){return z(this).tag})),P(G,"withoutSetter",(function(t){return at(E(t),t)})),F.f=ft,k.f=st,S.f=dt,x.f=O.f=vt,j.f=pt,T.f=function(t){return at(D(t),t)},c&&(L(G[Q],"description",{configurable:!0,get:function(){return z(this).description}}),a||P(B,"propertyIsEnumerable",ft,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:G}),U(w(nt),(function(t){I(t)})),o({target:M,stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=G(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),o({target:"Object",stat:!0,forced:!s,sham:!c},{create:ut,defineProperty:st,defineProperties:lt,getOwnPropertyDescriptor:dt}),o({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:vt,getOwnPropertySymbols:pt}),o({target:"Object",stat:!0,forced:u((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(b(t))}}),H){var bt=!s||u((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));o({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,n){var o,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(o=e,(v(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!ct(e))return e}),r[1]=e,H.apply(null,r)}})}G[Q][W]||N(G[Q],W,G[Q].valueOf),J(G,M),$[_]=!0},ee58:function(t,e,n){var o=n("378c"),r=n("65d0").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return r(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):r(o(t))}},ef14:function(t,e,n){"use strict";var o=n("6b1d"),r=n("83a6"),i=n("378c"),a=n("7f8a"),c=[].join,s=r!=Object,l=a("join",",");o({target:"Array",proto:!0,forced:s||!l},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},ef3b:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo-section",[n("demo-block",{attrs:{card:"",title:t.basicUsage}},[n("van-field",{attrs:{"is-link":"",readonly:"",label:t.area,placeholder:t.selectArea},on:{click:function(e){t.base.show=!0}},model:{value:t.base.result,callback:function(e){t.$set(t.base,"result",e)},expression:"base.result"}}),n("van-popup",{attrs:{round:"",position:"bottom","get-container":"body","safe-area-inset-bottom":""},model:{value:t.base.show,callback:function(e){t.$set(t.base,"show",e)},expression:"base.show"}},[n("van-cascader",{attrs:{title:t.selectArea,options:t.options},on:{close:function(e){t.base.show=!1},finish:function(e){return t.onFinish("base",e)}},model:{value:t.base.value,callback:function(e){t.$set(t.base,"value",e)},expression:"base.value"}})],1)],1),n("demo-block",{attrs:{card:"",title:t.customColorTitle}},[n("van-field",{attrs:{"is-link":"",readonly:"",label:t.area,placeholder:t.selectArea},on:{click:function(e){t.customColor.show=!0}},model:{value:t.customColor.result,callback:function(e){t.$set(t.customColor,"result",e)},expression:"customColor.result"}}),n("van-popup",{attrs:{round:"",position:"bottom","get-container":"body","safe-area-inset-bottom":""},model:{value:t.customColor.show,callback:function(e){t.$set(t.customColor,"show",e)},expression:"customColor.show"}},[n("van-cascader",{attrs:{title:t.selectArea,options:t.options,"active-color":"#1989fa"},on:{close:function(e){t.customColor.show=!1},finish:function(e){return t.onFinish("customColor",e)}},model:{value:t.customColor.value,callback:function(e){t.$set(t.customColor,"value",e)},expression:"customColor.value"}})],1)],1),n("demo-block",{attrs:{card:"",title:t.asyncOptions}},[n("van-field",{attrs:{"is-link":"",readonly:"",label:t.area,placeholder:t.selectArea},on:{click:function(e){t.async.show=!0}},model:{value:t.async.result,callback:function(e){t.$set(t.async,"result",e)},expression:"async.result"}}),n("van-popup",{attrs:{round:"",position:"bottom","get-container":"body","safe-area-inset-bottom":""},model:{value:t.async.show,callback:function(e){t.$set(t.async,"show",e)},expression:"async.show"}},[n("van-cascader",{attrs:{title:t.selectArea,options:t.async.options},on:{close:function(e){t.async.show=!1},change:t.loadDynamicOptions,finish:function(e){return t.onFinish("async",e)}},model:{value:t.async.value,callback:function(e){t.$set(t.async,"value",e)},expression:"async.value"}})],1)],1),n("demo-block",{attrs:{card:"",title:t.customFieldNamesTitle}},[n("van-field",{attrs:{"is-link":"",readonly:"",label:t.area,placeholder:t.selectArea},on:{click:function(e){t.customFieldNames.show=!0}},model:{value:t.customFieldNames.result,callback:function(e){t.$set(t.customFieldNames,"result",e)},expression:"customFieldNames.result"}}),n("van-popup",{attrs:{round:"",position:"bottom","get-container":"body","safe-area-inset-bottom":""},model:{value:t.customFieldNames.show,callback:function(e){t.$set(t.customFieldNames,"show",e)},expression:"customFieldNames.show"}},[n("van-cascader",{attrs:{title:t.selectArea,options:t.customFieldOptions,"field-names":t.fieldNames},on:{close:function(e){t.customFieldNames.show=!1},finish:function(e){return t.onFinish("customFieldNames",e)}},model:{value:t.customFieldNames.value,callback:function(e){t.$set(t.customFieldNames,"value",e)},expression:"customFieldNames.value"}})],1)],1)],1)},r=[],i=(n("8f0b"),n("ef14"),n("cfce"),n("868d"),n("fa8c"),n("0b38")),a=[{text:"浙江省",value:"330000",children:[{text:"杭州市",value:"330100",children:[{text:"上城区",value:"330102"},{text:"下城区",value:"330103"},{text:"江干区",value:"330104"}]},{text:"宁波市",value:"330200",children:[{text:"海曙区",value:"330203"},{text:"江北区",value:"330205"},{text:"北仑区",value:"330206"}]},{text:"温州市",value:"330300",children:[{text:"鹿城区",value:"330302"},{text:"龙湾区",value:"330303"},{text:"瓯海区",value:"330304"}]}]},{text:"江苏省",value:"320000",children:[{text:"南京市",value:"320100",children:[{text:"玄武区",value:"320102"},{text:"秦淮区",value:"320104"},{text:"建邺区",value:"320105"}]},{text:"无锡市",value:"320200",children:[{text:"锡山区",value:"320205"},{text:"惠山区",value:"320206"},{text:"滨湖区",value:"320211"}]},{text:"徐州市",value:"320300",children:[{text:"鼓楼区",value:"320302"},{text:"云龙区",value:"320303"},{text:"贾汪区",value:"320305"}]}]}];n("d6de"),n("8d0f"),n("68b8"),n("ef1f"),n("f3b8"),n("918c");function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}n("f8a5"),n("2aa5"),n("62c8");function s(t){return void 0!==t&&null!==t}function l(t){return null!==t&&"object"===c(t)}var u=Object.prototype.hasOwnProperty;function f(t,e,n){var o=e[n];s(o)&&(u.call(t,n)&&l(o)?t[n]=d(Object(t[n]),e[n]):t[n]=o)}function d(t,e){return Object.keys(e).forEach((function(n){f(t,e,n)})),t}function v(t){return Array.isArray(t)?t.map((function(t){return v(t)})):"object"===c(t)?d({},t):t}var p={data:function(){return{basicUsage:"基础用法",customColorTitle:"自定义颜色",area:"地区",options:a,selectArea:"请选择所在地区",asyncOptions:"异步加载选项",asyncOptions1:[{text:"浙江省",value:"330000",children:[]}],asyncOptions2:[{text:"杭州市",value:"330100"},{text:"宁波市",value:"330200"}],customFieldNamesTitle:"自定义字段名",base:{show:!1,value:"",result:""},customColor:{show:!1,value:null,result:""},async:{show:!1,value:null,result:"",options:[]},customFieldNames:{show:!1,value:null,result:""},fieldNames:{text:"name",value:"code",children:"items"}}},computed:{customFieldOptions:function(){var t=v(this.options),e=function t(e){"text"in e&&(e.name=e.text,delete e.text),"value"in e&&(e.code=e.value,delete e.value),"children"in e&&(e.items=e.children,delete e.children,e.items.forEach(t))};return t.forEach(e),t}},created:function(){this.async.options=this.asyncOptions1},methods:{loadDynamicOptions:function(t){var e=this,n=t.value;"330000"===n&&setTimeout((function(){e.async.options[0].children=e.asyncOptions2}),500)},onFinish:function(t,e){var n=e.value,o=e.selectedOptions,r=o.map((function(t){return t.text||t.name})).join("/");this[t]=Object(i["a"])(Object(i["a"])({},this[t]),{},{show:!1,value:n,result:r})}}},b=p,h=n("2be6"),m=Object(h["a"])(b,o,r,!1,null,null,null);e["default"]=m.exports},f3b8:function(t,e,n){"use strict";var o=n("b7fb").charAt,r=n("cdcd"),i=n("2df4"),a="String Iterator",c=r.set,s=r.getterFor(a);i(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,e=s(this),n=e.string,r=e.index;return r>=n.length?{value:void 0,done:!0}:(t=o(n,r),e.index+=t.length,{value:t,done:!1})}))}}]);