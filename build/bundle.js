!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("react-dom/server")},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),u=t(0),i=t.n(u),c=t(2),l=function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"APP.JS"))},a=o()();a.use(o.a.static("public")),a.get("/",function(e,n){var t;n.send((t=Object(c.renderToString)(i.a.createElement(l,null)),'\n        <html>\n            <head></head>\n            <body>\n                <div id="root">'.concat(t,'</div>\n                <script src="bundle.js"><\/script>\n            </body>\n        </html>\n    ')))}),a.listen(3e3,function(){console.log("listening on port 3000")})}]);