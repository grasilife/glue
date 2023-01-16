"use strict";(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[13064],{76256:function(t,e){e["Z"]={name:"Glue",build:{srcDir:"src",skipInstall:["lazyload"],site:{publicPath:"undefined"===typeof window&&{NODE_ENV:"production",BASE_URL:"/glue/"}.PUBLIC_PATH||"https://b.yzcdn.cn/vant/"},vetur:{tagPrefix:"van-"}},site:{defaultLang:"zh-CN",defaultType:"vue2",versions:[{label:"1.0.0",link:"/glue/"}],types:[{label:"vue2",link:"/glue/"},{label:"react",link:"/glue/react"},{label:"vue3",link:"/glue/vue3"},{label:"angular",link:"/glue/angular"},{label:"stencil",link:"/glue/stencil"}],baiduAnalytics:{seed:"ad6b5732c36321f2dafed737ac2da92f"},htmlPluginOptions:{meta:{"docsearch:version":"v3"}},locales:{"zh-CN":{title:"Glue",description:"Glue是一个基于web components的组件库",logo:"https://grasilife.github.io/material/logo.svg",langLabel:"中",links:[{logo:"https://b.yzcdn.cn/vant/logo/github.svg",text:"https://github.com/youzan/vant",url:"https://github.com/grasilife/glue"}],searchConfig:{apiKey:"90067aecdaa2c85220e2783cd305caac",indexName:"glue",searchParameters:{facetFilters:["lang:zh-CN","version:v3"]},transformItems(t){return"youzan.github.io"!==location.hostname&&t.forEach((t=>{t.url&&(t.url=t.url&&t.url.replace("youzan.github.io",location.hostname))})),t}},nav:[{title:"开发指南",items:[{path:"home",title:"介绍"},{path:"quickstart",title:"快速上手"},{path:"advanced-usage",title:"进阶用法"},{path:"changelog",title:"更新日志"},{path:"rfc",title:"RFC"},{path:"theme",title:"定制主题"},{path:"contribution",title:"开发指南"},{path:"design",title:"设计资源"},{path:"style-guide",title:"风格指南"},{path:"locale",title:"国际化"}]},{title:"基础组件",items:[{path:"button",title:"Button 按钮"},{path:"cell",title:"Cell 单元格"},{path:"icon",title:"Icon 图标"},{path:"image",title:"Image 图片"},{path:"col",title:"Layout 布局"},{path:"popup",title:"Popup 弹出层"},{path:"style",title:"Style 内置样式"},{path:"toast",title:"Toast 轻提示"}]},{title:"表单组件",items:[{path:"calendar",title:"Calendar 日历"},{path:"cascader",title:"Cascader 级联选择"},{path:"checkbox",title:"Checkbox 复选框"},{path:"datetime-picker",title:"DatetimePicker 时间选择"},{path:"field",title:"Field 输入框"},{path:"form",title:"Form 表单"},{path:"number-keyboard",title:"NumberKeyboard 数字键盘"},{path:"password-input",title:"PasswordInput 密码输入框"},{path:"picker",title:"Picker 选择器"},{path:"radio",title:"Radio 单选框"},{path:"rate",title:"Rate 评分"},{path:"search",title:"Search 搜索"},{path:"slider",title:"Slider 滑块"},{path:"stepper",title:"Stepper 步进器"},{path:"switch",title:"Switch 开关"},{path:"uploader",title:"Uploader 文件上传"}]},{title:"反馈组件",items:[{path:"action-sheet",title:"ActionSheet 动作面板"},{path:"dialog",title:"Dialog 弹出框"},{path:"dropdown-menu",title:"DropdownMenu 下拉菜单"},{path:"loading",title:"Loading 加载"},{path:"notify",title:"Notify 消息通知"},{path:"overlay",title:"Overlay 遮罩层"},{path:"pull-refresh",title:"PullRefresh 下拉刷新"},{path:"share-sheet",title:"ShareSheet 分享面板"},{path:"swipe-cell",title:"SwipeCell 滑动单元格"}]},{title:"展示组件",items:[{path:"badge",title:"Badge 徽标"},{path:"circle",title:"Circle 环形进度条"},{path:"collapse",title:"Collapse 折叠面板"},{path:"count-down",title:"CountDown 倒计时"},{path:"divider",title:"Divider 分割线"},{path:"empty",title:"Empty 空状态"},{path:"image-preview",title:"ImagePreview 图片预览"},{path:"list",title:"List 列表"},{path:"notice-bar",title:"NoticeBar 通知栏"},{path:"popover",title:"Popover 气泡弹出框"},{path:"progress",title:"Progress 进度条"},{path:"skeleton",title:"Skeleton 骨架屏"},{path:"steps",title:"Steps 步骤条"},{path:"sticky",title:"Sticky 粘性布局"},{path:"swipe",title:"Swipe 轮播"},{path:"tag",title:"Tag 标签"}]},{title:"导航组件",items:[{path:"action-bar",title:"ActionBar 动作栏"},{path:"grid",title:"Grid 宫格"},{path:"index-bar",title:"IndexBar 索引栏"},{path:"nav-bar",title:"NavBar 导航栏"},{path:"pagination",title:"Pagination 分页"},{path:"sidebar",title:"Sidebar 侧边导航"},{path:"tab",title:"Tab 标签页"},{path:"tabbar",title:"Tabbar 标签栏"},{path:"tree-select",title:"TreeSelect 分类选择"}]},{title:"业务组件",items:[{path:"address-edit",title:"AddressEdit 地址编辑"},{path:"address-list",title:"AddressList 地址列表"},{path:"area",title:"Area 省市区选择"},{path:"card",title:"Card 商品卡片"},{path:"contact-card",title:"ContactCard 联系人卡片"},{path:"contact-edit",title:"ContactEdit 联系人编辑"},{path:"contact-list",title:"ContactList 联系人列表"},{path:"coupon-list",title:"Coupon 优惠券"},{path:"submit-bar",title:"SubmitBar 提交订单栏"}]}]}}}}},31243:function(t,e,a){var i=a(40644);window.syncPath=function(){const t=window.vueRouter;console.log(t,window.top,"router");const e=window!==window.top,a=t.currentRoute.path;if(console.log(a,e,!i.tq,"currentDir"),e)window.top.replacePath(a);else if(!i.tq){const t=document.querySelector("iframe");console.log(t,a,"iframe"),t&&(0,i.BJ)(t,(()=>{t.contentWindow.replacePath(a)}))}},window.replacePath=function(t=""){console.log(window.vueRouter,"window.vueRouter"),window.vueRouter.currentRoute.path!==t&&window.vueRouter.replace(t).catch((()=>{}))}}}]);