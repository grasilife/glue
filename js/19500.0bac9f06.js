(self["webpackChunkdoc"]=self["webpackChunkdoc"]||[]).push([[19500],{19500:function(e,t,n){var u;n(29045);var c="ontouchstart"in window;document.createTouch||(document.createTouch=function(e,t,n,u,c,i,r){return new o(t,n,{pageX:u,pageY:c,screenX:i,screenY:r,clientX:u-window.pageXOffset,clientY:c-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var e=i(),t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length=arguments.length,e});var o=function(e,t,n,u,c){u=u||0,c=c||0,this.identifier=t,this.target=e,this.clientX=n.clientX+u,this.clientY=n.clientY+c,this.screenX=n.screenX+u,this.screenY=n.screenY+c,this.pageX=n.pageX+u,this.pageY=n.pageY+c};function i(){var e=[];return e["item"]=function(e){return this[e]||null},e["identifiedTouch"]=function(e){return this[e+1]||null},e}var r=!1;function s(e){return function(t){"mousedown"===t.type&&(r=!0),"mouseup"===t.type&&(r=!1),("mousemove"!==t.type||r)&&(("mousedown"===t.type||!u||u&&!u.dispatchEvent)&&(u=t.target),a(e,t),"mouseup"===t.type&&(u=null))}}function a(e,t){var n=document.createEvent("Event");n.initEvent(e,!0,!0),n.altKey=t.altKey,n.ctrlKey=t.ctrlKey,n.metaKey=t.metaKey,n.shiftKey=t.shiftKey,n.touches=d(t),n.targetTouches=d(t),n.changedTouches=h(t),u.dispatchEvent(n)}function h(e){var t=i();return t.push(new o(u,1,e,0,0)),t}function d(e){return"mouseup"===e.type?i():h(e)}function f(){window.addEventListener("mousedown",s("touchStart"),!0),window.addEventListener("mousemove",s("touchMove"),!0),window.addEventListener("mouseup",s("touchEnd"),!0)}f["multiTouchOffset"]=75,c||new f}}]);